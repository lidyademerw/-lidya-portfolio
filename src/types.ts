export interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: 'Layout' | 'Code' | 'Cpu';
  description: string;
  highlighted?: boolean;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}
