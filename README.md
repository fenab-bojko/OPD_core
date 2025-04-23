Проект написан для курса по ОПД 
Запуск сервера nest start

За данными ходить к http://localhost:3000/...
пример: http://localhost:3000/api/projects

Ручки:
  GET: /api/projects - получение списка всех проектов
  GET: /api/projects/${id} - получение одного проекта по id
  POST: /api/projects ${body} - создание проекта
  DELETE: /api/projects/${id} - удаление проекта по id
  PUT: /api/projects/${id} ${body} - полная замена данных в проекте по id
  PATCH: /api/projects/${id} ${body} - замена измененно поля по id

Ответ: 
будем обговаривать пока выглядит так
interface IResponse {
    data: IDataItem[] | null;
    status: number;
    message: string;
}

interface IDataItem {
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

