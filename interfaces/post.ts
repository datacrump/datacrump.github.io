export interface Post {
  categorySlug: string;
  slug: string,
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  path: string;
  content: string;
  top: boolean;
  visible: boolean;
  fullPath: string;
  // fullSlug: {
  //   return this.categorySlug + '/' this.slug
  // }
}


export interface Category {
  slug: string,
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
}