export interface IDataItem {
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

export const dataItems: IDataItem[] = [
    {
        id: '1',
        title: 'Разработка веб-сайта',
        description: 'Создание корпоративного сайта для компании',
        picture: 'https://2.downloader.disk.yandex.ru/preview/81cacc029748937d80f641437a2a3ce867cd503ee9b391ef160a2e34967cbb14/inf/QrOvCWWlDf8kgwPqn509pLSNaNMiBrqYCv6gR4nNPmobUl_O3yxsVy8snlMN7uth9_HPYvreP_bRyEUmGyB9qg%3D%3D?uid=1130000066885358&filename=image.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        executor: 'Отдел разработки информационных систем. Команда №1',
        company: 'ВебСтарт',
        logoCompany: 'https://4.downloader.disk.yandex.ru/preview/958563eecdd460e9c1e63014bbd8143bafc80c1aea350fddbdc94331fddb3f24/inf/1MuUNwbGf-DuD1vUcWobNdmla8uMCWcobHP8t4WH6X2wmjtrEm0DkleaOxxhH96AFLr8h0SObkLWNagjT9-y8g%3D%3D?uid=1130000066885358&filename=58286a3ae17ef0e13fac9e934166881b.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        price: 1500000,
        percentageOfReadiness: 75,
        status: 'progress',
        dateStart: '2023-05-10',
        dateEnd: '2023-09-15'
    },
    {
        id: '2',
        title: 'Автоматизация процессов производства турбин',
        description: 'Разработка iOS/Android приложения для управления конвеером',
        picture: 'https://3.downloader.disk.yandex.ru/preview/34459639d854dc3770f060397ba40023ca9d70b24e8f1debe0e72ab0ec20608a/inf/IwNnhuyemU7nDw9eYef4iTiWtj88fSKrSbb6HgCE63WFH7XeI_GTMau44FEbz96IIrriEh6MfzhdCSzHVb5OXg%3D%3D?uid=1130000066885358&filename=8368adacdcc76089d91771476ab53ddc.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        executor: 'Отдел разработки информационных систем. Команда №2',
        company: 'AppCraft',
        logoCompany: 'https://4.downloader.disk.yandex.ru/preview/17e7b16002356fcfaaf23a39e5c770ced96f0ad857bb9170e0f1d497ca0c1f22/inf/_0EnqELDGAkJ-wWD3cp899mla8uMCWcobHP8t4WH6X01gHvFXbgI8_L0qV2Shg_BrC3RxwhvlBlVTR1kFF2-0g%3D%3D?uid=1130000066885358&filename=633388_220x220.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        price: 2500000,
        percentageOfReadiness: 100,
        status: 'done',
        dateStart: '2023-02-01',
        dateEnd: '2023-07-20'
    },
    {
        id: '3',
        title: 'SEO продвижение',
        description: 'Оптимизация и продвижение продукта на западный рынок',
        picture: 'https://1.downloader.disk.yandex.ru/preview/ac04aa407ec92666d97010c6be4e64a00f3b9ccc9916fbe62342564c0db3d4be/inf/_q4S3IUNpn16ZRJNQqv6hR1bZlOU8rxFZQjoQD7nJTS26m64FmhkyqXI8nr9USlxc7Hl59S3ZP9r6DhQ-Pqtvw%3D%3D?uid=1130000066885358&filename=i.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        executor: 'Отдел разработки информационных систем. Команда №3',
        company: 'DigitalBoost',
        logoCompany: 'https://2.downloader.disk.yandex.ru/preview/e97831d456596a6fdfd0577918515044bedc065cc377fe85cb04dffd9942d196/inf/T9wwStDFnzpYnOQevjA1if-L5Ud6jTW0xK9SmFnND255S5rimVxQXBdIQ-hnTXM9-3kS6xNaOEwjEMKLYdGJHA%3D%3D?uid=1130000066885358&filename=Wh0UyAnHB_U.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        price: 800000,
        percentageOfReadiness: 45,
        status: 'progress',
        dateStart: '2023-06-15',
        dateEnd: '2023-12-01'
    },
    {
        id: '4',
        title: 'Рекламная кампания',
        description: 'Запуск таргетированной рекламы в социальных сетях',
        picture: 'https://1.downloader.disk.yandex.ru/preview/cf622ec1b8108f829d5a2a6e412d1d04a4828dfd50c40637c926be5eb197a8a7/inf/bRgTVfmW20_PC5PI-lOWS0mHaOM74S8c-d5Cms_SnAx4xFyL8gJfAEe3aEWmMrgJXItfLC4SB4ne_KL4Sk7R1g%3D%3D?uid=1130000066885358&filename=sots_seti.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        executor: 'Отдел разработки информационных систем. Команда №4',
        company: 'AdvertPro',
        logoCompany: 'https://1.downloader.disk.yandex.ru/preview/3db0fc5b651c7268085605932873a90ebd57d13a53e17713da9c069b2395af45/inf/614nxLQ0RK2X1BcQHgjuFNmla8uMCWcobHP8t4WH6X0emKtgbgXyEc7BhIlIn3H2p7Dz7n8i79gEdFFUon41Fw%3D%3D?uid=1130000066885358&filename=avuf5u7zj.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        price: 120000,
        percentageOfReadiness: 0,
        status: 'failed',
        dateStart: '2023-04-05',
        dateEnd: '2023-05-30'
    },
    {
        id: '5',
        title: 'Приложения для оптимизации внутреннего пространства офисных помещений',
        description: 'Разработка приложения на базе ИИ для оптимизации внутреннего пространства офисных помещений',
        picture: 'https://1.downloader.disk.yandex.ru/preview/818a376d0cd2371ee6f4817afce68c56e92cfc0a1b9fad89dcd88ab01a3bb23d/inf/RjBVZB1oft11hxZ-JREl7rrrdpROAhZMMFb1PBjU9B3CoYqzLTCcTlepU5fIUMVd2JyjM_I4Kb9iKNKLCglydw%3D%3D?uid=1130000066885358&filename=1000_F_210620329_0le9P2aUC9LUqCyf6yqiV8MtVWrzGKi7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        executor: 'Отдел разработки информационных систем. Команда №5',
        company: 'SpaceDesign',
        logoCompany: 'https://4.downloader.disk.yandex.ru/preview/e1791a1667d2b0ea2f748158fa48254b3a6103bb833f07938b3ef70629685e11/inf/oC79399NoKkxRtm3eqBzU15WujEXDI0hQadjWQrqJjRoC54tYS2enYg5o-1F-PczvA2YC510hGERXBBZiwR87Q%3D%3D?uid=1130000066885358&filename=hqdefault.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        price: 1800000,
        percentageOfReadiness: 90,
        status: 'progress',
        dateStart: '2023-03-20',
        dateEnd: '2023-08-10'
    },
    {
        id: '6',
        title: 'Аудит безопасности',
        description: 'Проверка IT-инфраструктуры на уязвимости',
        picture: 'https://3.downloader.disk.yandex.ru/preview/8ad86f6705f26cc9b17033d8d46504fc13664b7969bbfffe52a7d711faaa78db/inf/jGqokqc_4IYJ8KYtkeN9pK_0GtBuZx-mxvAB1rlcIoVNO9PU5PtGkiFCd9_s8YweXa9X0uVmcmQd3FbgFJn5mw%3D%3D?uid=1130000066885358&filename=i%20%281%29.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        executor: 'Отдел разработки информационных систем. Команда №6',
        company: 'CyberShield',
        logoCompany: 'https://3.downloader.disk.yandex.ru/preview/885303679a54d6c5cfb9131678e633a469943cd92add3b6d441c6ceb573c734b/inf/SiGRShDzUdF7JecdLePxLdmla8uMCWcobHP8t4WH6X3Y5ZjT8Kw-Yt6CrMCuxQWGjf5mpBpEZOKMz-diE6frHw%3D%3D?uid=1130000066885358&filename=noroot.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000066885358&tknv=v2&size=3840x1737',
        price: 2000000,
        percentageOfReadiness: 100,
        status: 'done',
        dateStart: '2023-01-10',
        dateEnd: '2023-04-25'
    }
];