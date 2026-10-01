import Link from "next/link";
import { appConfig } from "@/app.config";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <p className="max-w-xl text-black/60">
        Acelere, puxe o freio de mão e encadeie curvas de lado. Quanto maior o
        ângulo e mais longa a derrapagem, mais pontos você faz.
      </p>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Garanta acesso antecipado →
      </Link>
      <p className="text-sm text-black/50">
        Crie sua conta grátis e acompanhe o que vem por aí.
      </p>
    </section>
  );
}
