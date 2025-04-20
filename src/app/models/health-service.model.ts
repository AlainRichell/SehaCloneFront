export interface HealthServiceSubitem {
  id: number;
  name: string;
  description: string;
  icon: string;
  buttonText: string;
  navigationLink: string;
}

export interface HealthService {
  id: number;
  name: string;
  subitems: HealthServiceSubitem[];
} 