export interface HealthSystem {
  id: number;
  name: string;
  logo: string;
  description: string;
  platforms: {
    web?: string;
    android?: string;
    ios?: string;
  };
} 