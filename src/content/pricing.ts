import { PricingPlan } from "@/types/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    title: "Starter",
    price: "€29.99",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper libero quis gravida amet.",
    buttonText: "Seleziona",
    features: [
      {
        icon: "/assets/pricing/scanner.svg",
        text: "Verifica e analisi veicolo in loco",
        textContent: "",
      },
      {
        icon: "/assets/pricing/password-check.svg",
        text: "Verifica storico",
        textContent: "",
      },
      {
        icon: "/assets/pricing/password-check.svg",
        text: "Verifiche avanzate",
        textContent: "Con strumenti specializzati",
      },
    ],
  },
  {
    id: "2",
    title: "Premium",
    price: "€59.99",
    description: "Soluzione avanzata per controlli approfonditi.",
    buttonText: "Seleziona",
    features: [
      {
        icon: "/assets/pricing/scan.svg",
        text: "Verifica e analisi veicolo in loco",
        textContent: "",
      },
      {
        icon: "/assets/pricing/password-check.svg",
        text: "Verifica storico",
        textContent: "",
      },
      {
        icon: "/assets/pricing/scan.svg",
        text: "Verifiche avanzate",
        textContent: "Con strumenti specializzati",
      },
      {
        icon: "/assets/pricing/car.svg",
        text: "Consulenza in loco",
        textContent:
          "Raggiungimento miglior prezzo con venditore (la consulenza tratterà il 20% sullo sconto che verrà fatto al cliente)",
      },
    ],
  },
  {
    id: "3",
    title: "Smart",
    price: "€89.99",
    description: "Pacchetto completo per esigenze professionali.",
    buttonText: "Seleziona",
    features: [
      {
        icon: "/assets/pricing/scan.svg",
        text: "Verifica e analisi veicolo in loco",
        textContent: "",
      },
      {
        icon: "/assets/pricing/scan.svg",
        text: "Verifiche avanzate",
        textContent: "Con strumenti specializzati",
      },
      {
        icon: "/assets/pricing/car.svg",
        text: "Consulenza in loco",
        textContent:
          "Raggiungimento miglior prezzo con venditore (la consulenza tratterà il 20% sullo sconto che verrà fatto al cliente)",
      },
    ],
  },
];
