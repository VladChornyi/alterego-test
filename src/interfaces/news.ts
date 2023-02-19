export interface ISingleNews {
  id: number;
  title: string;
  content: string;
  image: string;
  views: number;
  user_id: number;
  preview_image: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export interface INews {
  data: ISingleNews[] | null;
  page: number;
  total_items: number;
  total_pages: number;
}
