import { PlanBannerData } from "@/types/types";

export const starterPlanData: PlanBannerData = {
  packageName: "Sopralluogo pacchetto",
  title: "Starter",
  description: "Lorem ipsum dolor sit amet consectetur. <br /> Ullamcorper libero quis gravida amet.",
  features: [
    {
      icon: "/assets/icons/scanner.svg",
      title: "Verifica e analisi veicolo in loco"
    },
    {
      icon: "/assets/icons/password-check.svg",
      title: "Verifica storico"
    },
    {
      icon: "/assets/icons/scan.svg",
      title: "Verifiche avanzate",
      description: "Con strumenti specializzati"
    },
    {
      icon: "/assets/icons/car.svg",
      title: "Consulenza in loco",
      description: "Raggiungimento miglior prezzo con venditore (la consulenza tratterà il 20% sullo sconto che verrà fatto al cliente)"
    }
  ],
  cards: [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: "Lorem ipsum dolor sit amet consectetur. Urna non nulla tellus dolor odio non aliquam.",
      variant: "white"
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: "Lorem ipsum dolor sit amet consectetur. Urna non nulla tellus dolor odio non aliquam.",
      variant: "border"
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: "Lorem ipsum dolor sit amet consectetur. Urna non nulla tellus dolor odio non aliquam.",
      variant: "white"
    }
  ]
};