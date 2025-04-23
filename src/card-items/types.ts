export interface ICardItem {
    id: string;
    title: string;
    description: string;
    picture: string;
    executor: string;
    company: string;
    logoCompany: string;
    price: number;
    percentageOfReadiness: number;
    status: 'progress' | 'done' | 'failed';
    dateStart: string;
    dateEnd: string;
}

export interface IResponse {
    data: ICardItem[] | null;
    status: number;
    message: string;
}
