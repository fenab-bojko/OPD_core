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

export interface IPageItem {
    totalReadiness: number; // По-идее выводить это надо с процентом на конце 
    teamLoaded: number;
}

export interface IResponse {        
    data: ICardItem[] | null;       //Сервис Insomnia для проверки
    status: number;
    message: string;
}

export interface IPage {
    data: IPageItem[] | null | number;
    status: number;
    message: string;
}