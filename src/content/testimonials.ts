import { HeroSection, Review, TestimonialSection } from "@/types/types";
export const reviewsData: Review[] = [
  {
    id: 1,
    title: "Titolo Recensione",
    content:
      "Lorem ipsum dolor sit amet consectetur. Eget risus viverra diam in pulvinar vel nunc. Viverra aenean arcu purus dolor proin porttitor. Donec elit et at sit a arcu gravida ultrices adipiscing. Semper libero nisl ipsum fringilla egestas ultrices praesent scelerisque viverra. Mauris enim enim eu dictum facilisis non. Laoreet tellus enim commodo sed odio risus tristique in.",
    clientName: "Mario Rossi",
    clientRole: "Sopralluogo Smart",
  },
  {
    id: 2,
    title: "Titolo Recensione",
    content:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    clientName: "Anna Verdi",
    clientRole: "Consulenza Energetica",
  },
  {
    id: 3,
    title: "Titolo Recensione",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    clientName: "Giulia Bianchi",
    clientRole: "Progettazione Impianti",
  },
  {
    id: 4,
    title: "Titolo Recensione",
    content:
      "Lorem ipsum dolor sit amet consectetur. Eget risus viverra diam in pulvinar vel nunc. Viverra aenean arcu purus dolor proin porttitor. Donec elit et at sit a arcu gravida ultrices adipiscing. Semper libero nisl ipsum fringilla egestas ultrices praesent scelerisque viverra. Mauris enim enim eu dictum facilisis non. Laoreet tellus enim commodo sed odio risus tristique in.",
    clientName: "Mario Rossi",
    clientRole: "Sopralluogo Smart",
  },
  {
    id: 5,
    title: "Titolo Recensione",
    content:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    clientName: "Anna Verdi",
    clientRole: "Consulenza Energetica",
  },
  {
    id: 6,
    title: "Titolo Recensione",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    clientName: "Giulia Bianchi",
    clientRole: "Progettazione Impianti",
  },
];

export const heroContent: HeroSection = {
  title: "Lorem ipsum dolor sit amet consectetur.",
  subtitle: "Lorem ipsum dolor sit amet consectetur. Vitae odio vitae aliquam a. Nunc nunc scelerisque vitae libero proin viverra iaculis neque."
};

export const testimonialContent: TestimonialSection = {
  sectionTitle: "Dicono di noi",
  sectionDescription: "Lorem ipsum dolor sit amet consectetur. Eget risus viverra diam in pulvinar vel nunc.",
  reviews: reviewsData
};