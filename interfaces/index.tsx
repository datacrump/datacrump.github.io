export interface Category {
  slug: string,
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
  top: boolean;
}

export interface Tag {
  slug: string,
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

export interface Post {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  coverImage: string;
  cardImage: string;
  date: string;
  contentPath: string;
  content: string;
  top: boolean;
  visible: boolean;
  tags: Tag[];
}


