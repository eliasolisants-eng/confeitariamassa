import { useEffect, useState } from "react";
import { Heart, Leaf } from "lucide-react";

export function WelcomeSplash() {
  const [stage, setStage] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("out"), 2200);
    const t2 = setTimeout(() => setStage("done"), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      role="dialog"
      aria-label="Boas-vindas"
      className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-700 ${
        stage === "out" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="text-center">
        <div className="mb-5 flex items-center justify-center gap-3 animate-fade-up">
          <Leaf className="h-6 w-6 text-primary animate-float" />
          <Heart className="h-5 w-5 fill-primary text-primary animate-heart" />
          <Leaf className="h-6 w-6 -scale-x-100 text-primary animate-float" style={{ animationDelay: "0.4s" }} />
        </div>
        <p
          className="text-2xl text-primary animate-fade-up"
          style={{ fontFamily: "var(--font-script)", animationDelay: "0.15s" }}
        >
          Seja bem-vindo à confeitaria
        </p>
        <h1
          className="mt-2 text-6xl font-semibold tracking-tight text-foreground sm:text-7xl animate-zoom-in-soft"
          style={{ fontFamily: "var(--font-display)", animationDelay: "0.35s" }}
        >
          Massa
        </h1>
        <p
          className="mx-auto mt-4 max-w-xs text-sm text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Bolos caseiros feitos com carinho.
        </p>
      </div>
    </div>
  );
}
