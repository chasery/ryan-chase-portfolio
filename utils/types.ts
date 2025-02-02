import { IconProps } from "components/IconGrid/Icon";

export interface PageSectionImage {
  path: string;
  alt: string;
}

export interface PageSectionDetail {
  label?: string;
  value: string;
}

export interface PageSection {
  title: string;
  description: string;
  image?: PageSectionImage;
  skills?: IconProps[];
  details?: PageSectionDetail[];
}

export interface Page {
  path: string;
  title: string;
  subtitle: string;
  sections?: PageSection[];
}

export type Pages = Record<string, Page>

export interface SocialDetail {
  path: string
  icon: IconProps;
}
export type SocialMedia = SocialDetail[];