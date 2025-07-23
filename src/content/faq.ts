import { FaqItem } from "@/types/types";

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building production-ready web applications. It provides features like server-side rendering, static site generation, and API routes out of the box.",
  },
  {
    id: 2,
    question: "How do I get started with Next.js?",
    answer:
      "You can get started with Next.js by running `npx create-next-app@latest` in your terminal and following the prompts.",
  },
  {
    id: 3,
    question: "What is TypeScript?",
    answer:
      "TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors early and improves code maintainability.",
  },
  {
    id: 4,
    question: "Can I use CSS frameworks with Next.js?",
    answer:
      "Yes, you can use various CSS frameworks like Tailwind CSS, Bootstrap, or Material-UI with Next.js. Tailwind CSS is particularly popular due to its utility-first approach.",
  },
];
