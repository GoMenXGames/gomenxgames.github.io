var app = new Vue({
    el: '#app',
    //Местная база данных
    data: {
        Sections : [
            { //about
                id: 'about',
                name: 'Обо мне',
                selected: true,
                title: 'Ну информация обо мне',
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
                        activity: "Студент, Программист, Анимешник, Компьютерный-игрок.",
                        title: "ДР: 10 Июля 2002",
                        birthday: Date.UTC(2002, 7, 10),
                        get Birthday() {
                            return new Date(this.birthday);
                        },
                        get age() {
                            result = Math.round((Date.now() - this.birthday) / 1000 / 60 / 60 / 24 / 365);
                            return result;
                        },
                        iLove: [
                            {
                                name: "Цвет",
                                img: "",
                                description: "Фиолетовый",
                            },
                            {
                                name: "Сок",
                                img: "",
                                description: "Виноградный",
                            },
                            {
                                name: "Чай",
                                img: "",
                                description: "Принцесса Нури, Высокогорный",
                                spoiler: true,
                            },
                            {
                                name: "Фрукт",
                                img: "",
                                description: "",
                            },
                        ],
                        
                        iHate: [

                        ]
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
            { //social
                id: 'social',
                name: 'Соц. сети',
                title: 'Ссылки на социальные сети\n(Но это не точно)',
                sub: false,
                subs: [
                    {
                        id: 'talk',
                        name: 'Мессенджеры',
                        title: '',
                        content: [
                            {},
                        ]
                    },
                ],
                content:[
                    {
                        id: 'vk',
                        title: 'VK',
                        description: 'Моя страница в ВК',
                        link: 'https://vk.com/gomenxgames',
                        get img() {
                            return 'media/icons/social/' + this.id + '.svg';
                        }
                    },
                    {
                        id: 'fb',
                        title: 'Facebook',
                        description: 'Моя страница в Facebook (Запрещен в РФ)',
                        link: 'https://facebook.com/gomenxgames',
                        get img() {
                            return 'media/icons/social/' + this.id + '.svg';
                        }
                    },
                    {
                        id: 'inst',
                        title: 'Instagram',
                        description: 'Моя страница в Instagram (Запрещен в РФ)',
                        link: 'https://instagram.com/gomenxgames',
                        get img() {
                            return 'media/icons/social/' + this.id + '.svg';
                        }
                    },
                    {
                        id: 'yt',
                        title: 'YouTube',
                        description: 'Моя страница в YouTube',
                        link: 'https://youtube.com/c/gomenxgames',
                        get img() {
                            return 'media/icons/social/' + this.id + '.svg';
                        }
                    },
                    {
                        id: 'Tt',
                        title: 'TikTok',
                        description: 'Моя страница в TikTok',
                        link: 'https://tiktok.com/@gomenxgames',
                        get img() {
                            return 'media/icons/social/' + this.id + '.svg';
                        }
                    },
                    
                ]
            },
            { //hobby
                id: 'hobby',
                name: 'Хобби',
                title: 'Различные списки всякой моей деятельности',
                sub: true,
                subs: [
                    {
                        id: 'video',
                        name: 'Видео',
                        title: '',
                        content: [
                            {},
                        ]
                    },
                    {
                        id: 'streaming',
                        name: 'Стриминг',
                        title: '',
                        content: [
                            {},
                        ]
                    },
                    {
                        id: 'gaming',
                        name: 'Игры',
                        title: '',
                        content: [
                            {},
                        ]
                    },
                    {
                        id: 'art',
                        name: 'Арты',
                        title: '',
                        content: [
                            {},
                        ]
                    },
                    {
                        id: 'watching',
                        name: 'Досуг',
                        title: '',
                        content: [
                            {},
                        ]
                    },
                    {
                        id: 'programming',
                        name: 'Прогр.',
                        title: 'Программирование',
                        content: [
                            {},
                        ]
                    },
                ]
            }
        ]
    },
    //Разные функции
    methods: {
        goToLink: function (url) {
            window.open(url,'_blank');
        }
    }
  })