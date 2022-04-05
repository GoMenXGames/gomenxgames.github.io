let sectionImg = "media/icons";

let Sections = [
    {
        id: 'about',
        name: 'Обо мне',
        title: null,
        sub: false,
        subs: [
            null
        ],
        content: [
            {
                id: 'main',
                profileIcon: '',
                firstName: 'Илья',
                nickname: 'GoMenXGames',
                activity: "Студент, Программист, Анимешник, Компьютерный-игрок."
            },
            {
                id: 'addinformation',
                content: '',
            },
            {
                id: 'favorite',
                content: [
                    {},
                ]
            }
        ]
    },
    {
        id: 'social',
        name: 'Соц. сети',
        title: 'Социальные сети',
        sub: false,
        subs: [
            null
        ]
    },
    {
        id: 'hobby',
        name: 'Хобби',
        title: null,
        sub: true,
        subs: [
            {
                id: '',
                name: 'Игры',
                title: '',
                content: [
                    {},
                ]
            },
            {
                id: '',
                name: 'Арты',
                title: '',
                content: [
                    {},
                ]
            },
            {
                id: '',
                name: 'Досуг',
                title: '',
                content: [
                    {},
                ]
            },
            {
                id: '',
                name: 'Прогр.',
                title: 'Программирование',
                content: [
                    {},
                ]
            },
        ]
    }
]

/*
    Таб секция
{
    id: '', //Айди
    name: '', //Имя в табе
    title: '', //Имя в секции
    sub: false, // Наличие подразделов
    subs: [ //Перечисление подразделов
        null 
    ]
},

*/