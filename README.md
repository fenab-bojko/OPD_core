Проект написан для курса по ОПД 

Ручки:
  GET: /projects - получение списка всех проектов
  GET: /projects/${id} - получение одного проекта по id
  POST: /projects ${body} - создание проекта
  DELETE: /projects/${id} - удаление проекта по id
  PUT: /projects/${id} ${body} - полная замена данных в проекте по id
  PATCH: /projects/${id} ${body} - замена измененно поля по id

Ответ: 
будем обговаривать пока выглядит так
interface IResponse {
    data: Body[] | null;
    status: number;
    message: string;
}

Body:
interface Body {
  id: string;
  title: string;
  description: string;
  image: string;
}

