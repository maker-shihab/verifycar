export type TermsOfServiceProps = {
  title: string;
  sections: { heading: string; content: string }[];
};

export type MarkdownContentProps = {
  title: string;
  content: string;
};

export type MenuItem = {
  name: string;
  href: string;
};

export type SectionItem = {
  title: string;
  paragraph?: string;
};

export type SectionsMap = Record<string, SectionItem>;

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// types.ts
export interface Review {
  id: number;
  title: string;
  content: string;
  clientName: string;
  clientRole: string;
  rating?: number;
}

export interface TestimonialSection {
  sectionTitle: string;
  sectionDescription: string;
  reviews: Review[];
}

export interface HeroSection {
  title: string;
  subtitle: string;
}

export type PricingPlan = {
  id: string;
  title: string;
  price: string;
  description: string;
  buttonText: string;
  features: {
    icon: string;
    text: string;
    textContent?: string;
  }[];
};

export interface PlanFeature {
  icon: string;
  title: string;
  description?: string;
}

export interface PlanCard {
  title: string;
  description: string;
  variant?: 'white' | 'border';
}

export interface PlanBannerData {
  packageName: string;
  title: string;
  description: string;
  features: PlanFeature[];
  cards: PlanCard[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  requirements: {
    title: string;
    items: string[];
  };
  contactInfo: {
    title: string;
    address: {
      street: string;
      city: string;
      postalCode: string;
      region: string;
    };
    phone: string;
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      message: string;
    };
    buttonText: string;
    termsText: string;
    termsLinks: {
      terms: string;
      privacy: string;
    };
  };
}

export interface CtaSection {
  title: string;
  description: string;
  buttonText: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
  focusedBgColor: string;
  width: number;
  height: number;
}

export interface CheckoutStep {
  title: string;
  fields: {
    type: 'text' | 'email' | 'tel' | 'select';
    name: string;
    placeholder: string;
    icon?: string;
    required?: boolean;
  }[];
}

export interface CheckoutData {
  title: string;
  backButtonText: string;
  steps: CheckoutStep[];
  paymentMethods: PaymentMethod[];
  submitButtonText: string;
  manualAddressText: string;
}

export interface AchievementStat {
  value: string;
  valueExtra: string;
  label: string;
}

export interface AchievementStep {
  number: string;
  title: string;
  description: string;
}

export interface AchievementData {
  title: string;
  description: string;
  stats: AchievementStat[];
  steps: AchievementStep[];
}