import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Heart, MessageCircle, Instagram, MapPin, Leaf, Search, X } from "lucide-react";
import { WelcomeSplash } from "@/components/WelcomeSplash";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-cakes.jpg";
import chocolateImg from "@/assets/cake-chocolate.jpg";
import chocolateCoberturaImg from "@/assets/cake-cenoura.jpg";
import iogurteImg from "@/assets/cake-iogurte.jpg";
import iogurteGoiabadaImg from "@/assets/cake-iogurte-goiabada.jpg";
import fubaImg from "@/assets/cake-fuba.jpg";
import fubaGoiabadaImg from "@/assets/cake-fuba-goiabada.jpg";
import milhoImg from "@/assets/cake-milho.jpg";
import formigueiroImg from "@/assets/cake-formigueiro.jpg";
import macaImg from "@/assets/cake-maca.jpg";
import bananaImg from "@/assets/cake-banana.jpg";
import laranjaImg from "@/assets/cake-laranja.jpg";
import cenouraImg from "@/assets/cake-cenoura-simples.jpg";
import cocoImg from "@/assets/cake-coco.jpg";
import mesclaImg from "@/assets/cake-mescla.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "5514982329005";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

type Cake = {
  name: string;
  price: string;
  desc: string;
  img: string;
};

const cakes: Cake[] = [
  { name: "Chocolate", price: "R$ 25,00", desc: "Bolo fofinho e intenso, perfeito para quem ama chocolate de verdade.", img: chocolateImg },
  { name: "Chocolate com cobertura", price: "R$ 35,00", desc: "Massa macia com cobertura cremosa de chocolate que derrete na boca.", img: chocolateCoberturaImg },
  { name: "Iogurte", price: "R$ 25,00", desc: "Levinho, fofinho e com aquele toque suave do iogurte caseiro.", img: iogurteImg },
  { name: "Iogurte com goiabada", price: "R$ 28,00", desc: "Macio por dentro com pedacinhos doces de goiabada em cada fatia.", img: iogurteGoiabadaImg },
  { name: "Fubá", price: "R$ 25,00", desc: "O clássico bolo de fubá, dourado e perfeito com café.", img: fubaImg },
  { name: "Fubá com goiabada", price: "R$ 28,00", desc: "O sabor tradicional da roça com pedacinhos de goiabada irresistíveis.", img: fubaGoiabadaImg },
  { name: "Milho", price: "R$ 30,00", desc: "Cremoso, macio e perfeito para acompanhar um café fresquinho.", img: milhoImg },
  { name: "Formigueiro", price: "R$ 25,00", desc: "Bolo branquinho e fofo com chocolate granulado em cada mordida.", img: formigueiroImg },
  { name: "Maçã com canela", price: "R$ 30,00", desc: "Aroma reconfortante de maçã assada com toque quentinho de canela.", img: macaImg },
  { name: "Banana com canela", price: "R$ 30,00", desc: "Combinação quentinha e deliciosa que lembra café da tarde.", img: bananaImg },
  { name: "Laranja", price: "R$ 25,00", desc: "Refrescante, cítrico e leve — pura alegria em forma de bolo.", img: laranjaImg },
  { name: "Cenoura", price: "R$ 25,00", desc: "Aquele bolo de cenoura tradicional, douradinho e macio.", img: cenouraImg },
  { name: "Côco", price: "R$ 25,00", desc: "Leve, úmido e com gostinho especial de bolo feito em família.", img: cocoImg },
  { name: "Mescla cenoura e chocolate", price: "R$ 25,00", desc: "Dois sabores queridinhos em um bolo só, mesclado com carinho.", img: mesclaImg },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <Leaf className="h-5 w-5 text-primary" aria-hidden />
      <span className="font-display text-3xl font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
        Massa
      </span>
      <Leaf className="h-5 w-5 -scale-x-100 text-primary" aria-hidden />
    </div>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WelcomeSplash />
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <a
            href={waLink("Olá! Gostaria de fazer um pedido na Massa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-sm transition hover:scale-105 hover:shadow-md sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Pedir no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span
              className="mb-4 inline-block text-2xl text-primary"
              style={{ fontFamily: "var(--font-script)" }}
            >
              feito em casa, com amor
            </span>
            <h1 className="text-4xl leading-tight md:text-6xl">
              Bolos caseiros feitos com <span className="text-primary">carinho</span> para adoçar seus melhores momentos.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              Receitas tradicionais, ingredientes selecionados e aquele sabor de afeto que só um bolo feito à mão tem.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sabores"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Ver sabores
              </a>
              <a
                href={waLink("Olá! Gostaria de fazer um pedido na Massa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition duration-300 hover:scale-105 hover:bg-secondary active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-whatsapp" /> WhatsApp
              </a>
            </div>
            <Heart className="absolute -left-4 top-2 h-5 w-5 text-accent opacity-60 animate-heart" />
          </div>
          <div className="relative animate-zoom-in-soft" style={{ animationDelay: "0.25s" }}>
            <div
              className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] ring-1 ring-border/60"
              style={{ background: "var(--gradient-warm)" }}
            >
              <img
                src={heroImg}
                alt="Mesa com diversos bolos caseiros artesanais"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 rounded-2xl bg-card px-4 py-3 text-sm shadow-[var(--shadow-card)] ring-1 ring-border/60 animate-float"
            >
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 fill-primary text-primary animate-heart" />
                <span className="font-semibold">Feito à mão, todos os dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sabores */}
      <SaboresSection />

      {/* Sobre / contato */}
      <section
        id="contato"
        className="mx-auto max-w-6xl px-5 py-16"
      >
        <div
          className="reveal overflow-hidden rounded-3xl px-6 py-12 text-center ring-1 ring-border/60 md:px-12"
          style={{ background: "var(--gradient-warm)" }}
        >
          <span
            className="text-2xl text-primary"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Feito com carinho
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl">
            Vamos adoçar o seu dia?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Faça seu pedido pelo WhatsApp. Encomendas para festas, café da tarde
            ou para presentear quem você ama.
          </p>

          <a
            href={waLink("Olá Massa! Gostaria de fazer um pedido.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" /> Fazer pedido
          </a>

          <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
            <a
              href={waLink("Olá Massa!")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl bg-card/70 p-4 ring-1 ring-border/50 transition hover:bg-card"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 text-whatsapp" />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">(14) 98232-9005</div>
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl bg-card/70 p-4 ring-1 ring-border/50 transition hover:bg-card"
            >
              <Instagram className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Instagram</div>
                <div className="font-semibold">@massa.bolos</div>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-2xl bg-card/70 p-4 ring-1 ring-border/50">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Entrega</div>
                <div className="font-semibold">Retirada e entrega na região</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center">
          <Logo />
          <p
            className="text-lg text-primary"
            style={{ fontFamily: "var(--font-script)" }}
          >
            para adoçar seus melhores momentos
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Massa · Bolos artesanais
          </p>
        </div>
      </footer>
    </div>
  );
}

const PRICE_FILTERS = [
  { id: "all", label: "Todos" },
  { id: "lt28", label: "Até R$ 27" },
  { id: "28to30", label: "R$ 28 – 30" },
  { id: "gt30", label: "Acima de R$ 30" },
] as const;

type PriceFilter = (typeof PRICE_FILTERS)[number]["id"];

function priceValue(p: string) {
  return Number(p.replace(/[^\d,]/g, "").replace(",", "."));
}

function SaboresSection() {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState<PriceFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cakes.filter((c) => {
      if (q && !c.name.toLowerCase().includes(q) && !c.desc.toLowerCase().includes(q)) {
        return false;
      }
      const v = priceValue(c.price);
      if (price === "lt28" && v >= 28) return false;
      if (price === "28to30" && (v < 28 || v > 30)) return false;
      if (price === "gt30" && v <= 30) return false;
      return true;
    });
  }, [query, price]);

  return (
    <section id="sabores" className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-8 text-center">
        <span
          className="text-2xl text-primary"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Sabores disponíveis
        </span>
        <h2 className="mt-1 text-3xl md:text-4xl">Nossos bolinhos</h2>
        <div className="mx-auto mt-3 flex items-center justify-center gap-2 text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          <Heart className="h-4 w-4 text-primary" />
          <span className="h-px w-10 bg-border" />
        </div>
      </div>

      {/* Search + filters */}
      <div className="sticky top-[68px] z-20 mb-8 -mx-5 bg-background/85 px-5 py-3 backdrop-blur-md md:static md:mx-0 md:bg-transparent md:p-0 md:backdrop-blur-0">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            inputMode="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar sabor (ex: chocolate, banana...)"
            aria-label="Buscar bolo por sabor"
            className="w-full rounded-full border border-border bg-card py-3 pl-12 pr-12 text-base shadow-[var(--shadow-card)] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpar busca"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PRICE_FILTERS.map((f) => {
            const active = price === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setPrice(f.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border bg-card/50 p-10 text-center">
          <p className="text-lg font-semibold">Nenhum sabor encontrado</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tente outro nome ou limpe os filtros.
          </p>
          <button
            type="button"
            onClick={() => { setQuery(""); setPrice("all"); }}
            className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cake, i) => (
            <article
              key={cake.name}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border/60 shadow-[var(--shadow-card)] transition duration-300 animate-fade-up hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]"
              style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cake.img}
                  alt={`Bolo de ${cake.name}`}
                  width={768}
                  height={576}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl">{cake.name}</h3>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-primary">
                    {cake.price}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{cake.desc}</p>
                <a
                  href={waLink(`Olá! Gostaria de pedir o bolo de ${cake.name} (${cake.price}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-sm transition hover:scale-[1.02] hover:shadow-md"
                >
                  <MessageCircle className="h-4 w-4" /> Pedir agora
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
