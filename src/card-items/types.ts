export interface ICardItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface IResponse {
    data: ICardItem[] | null;
    status: number;
    message: string;
}
