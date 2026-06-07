export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  proficiency: number; // 0 to 100
}
