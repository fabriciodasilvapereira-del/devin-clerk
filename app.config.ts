export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Flix",
  description: "Um jogo de carro com o intuito de fazer drift.",
  emoji: "🏎️",
  accent: "#f97316",
  upcomingFeatures: [
    {
      title: "Pista de treino de drift",
      description:
        "Uma pista 2D com física de derrapagem controlada pelo teclado.",
    },
    {
      title: "Pontuação de drift",
      description:
        "Pontos calculados pelo ângulo, velocidade e duração de cada derrapagem.",
    },
    {
      title: "Garagem de carros",
      description: "Escolha entre 3 carros com atributos diferentes.",
    },
    {
      title: "Ranking global",
      description: "As melhores pontuações de cada piloto logado.",
    },
    {
      title: "Pintura personalizada",
      description: "Cores e adesivos para deixar o seu carro com a sua cara.",
    },
    {
      title: "Modo fantasma",
      description: "Corra contra a sua melhor volta registrada.",
    },
  ] satisfies Feature[],
};
