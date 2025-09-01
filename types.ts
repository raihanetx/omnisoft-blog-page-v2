
export enum BlogCategory {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend'
}

export interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  tags: string[];
  category: BlogCategory;
  imageUrl?: string;
}