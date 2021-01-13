export interface InfoSectionProps {
  primary?: boolean,
  logo?: any;
  header?: string;
  subheader?: string;
  content?: string[];
  footerLogo?: any;
  cta?: boolean,
  ctaText?: string
}

export interface Review {
  id: number;
  comment: string;
  user: string;
}

export interface CustomerReview {
  id: number;
  comment: string;
  user: string;
}

export interface Services {
  img: any,
  header: string;
  description: string;
  cta: boolean;
  ctaText: string;
}

