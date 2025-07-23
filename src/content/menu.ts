export type MenuItem = {
  name: string;
  href: string;
};

export const menuItems: MenuItem[] = [
  { name: "Contattaci", href: "/" },
  { name: "Pacchetti", href: "/plan" },
  { name: "Termini di Servizio", href: "/terms-of-service" },
];

export const footerMenuItems: MenuItem[] = [
  { name: "Termini di Servizio", href: "/terms-of-service" },
  { name: "Privacy Policy", href: "/" },
  { name: "Cookie Policy", href: "/" },
];
