import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "bobs-resume-unlocked";
const PASSWORD = "hireme123";

type PasswordGateContextValue = {
  unlocked: boolean;
  ready: boolean;
};

const PasswordGateContext = createContext<PasswordGateContextValue>({
  unlocked: false,
  ready: false,
});

export function usePasswordGate() {
  return useContext(PasswordGateContext);
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "true");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || unlocked) return;

    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyWidth = body.style.width;
    const prevBodyTop = body.style.top;
    const scrollY = window.scrollY;

    documentElement.classList.add("gate-locked");
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = `-${scrollY}px`;

    return () => {
      documentElement.classList.remove("gate-locked");
      body.style.overflow = prevBodyOverflow;
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.position = prevBodyPosition;
      body.style.width = prevBodyWidth;
      body.style.top = prevBodyTop;
      window.scrollTo(0, scrollY);
    };
  }, [ready, unlocked]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
      return;
    }
    setError(true);
  };

  return (
    <PasswordGateContext value={{ unlocked, ready }}>
      <div className="relative">
        {!ready ? (
          <div className="min-h-screen bg-background" aria-hidden />
        ) : (
          <>
            <div
              className={cn(
                "transition-[filter,opacity] duration-500",
                !unlocked &&
                  "pointer-events-none select-none blur-[40px] brightness-[0.45] saturate-[0.25] contrast-[0.85]",
              )}
              aria-hidden={!unlocked}
              inert={!unlocked ? true : undefined}
            >
              {children}
            </div>

            {!unlocked && (
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background/35 px-4 backdrop-blur-[2px]">
                <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-[0_24px_80px_oklch(0.16_0.02_260/0.18)]">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-center text-xl font-semibold tracking-tight text-ink">
                    Private resume
                  </h2>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Enter the password to view this site.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="site-password" className="sr-only">
                        Password
                      </label>
                      <Input
                        id="site-password"
                        type="password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                          if (error) setError(false);
                        }}
                        placeholder="Password"
                        autoComplete="current-password"
                        autoFocus
                        className="h-11 rounded-xl border-border bg-background px-4 text-base"
                      />
                    </div>

                    {error && (
                      <p className="text-center text-sm text-destructive" role="alert">
                        Incorrect password. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-primary bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                    >
                      Unlock
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </PasswordGateContext>
  );
}
