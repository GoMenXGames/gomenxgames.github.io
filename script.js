var app = new Vue({
    el: '#app',
    data: {
        title: 'GoMenXGames',
        sub: 'Mini-Site',
        hobbys:[
            { 
                id: 'yt',
                title: 'Ютубер',
                color: 'red',
                subColor: 'white',
                imghref: "https://youtube.com/favicon.ico",
                href: "https://youtube.com/c/gomenxgames"
            },
            { 
                id: 'tw',
                title: 'Стример',
                color: 'purple',
                subColor: 'white',
                imghref: "https://twitch.tv/favicon.ico",
                href: "https://twitch.tv/gomenxgames"
            },
            { 
                id: 'draw',
                title: 'Художник',
                color: 'lightGreen',
                subColor: 'white',
                imghref: "https://deviantart.com/favicon.ico",
                href: "https://deviantart.com/gomenxgames"
            },
            { 
                id: 'dev',
                title: 'Разработчик',
                color: 'black',
                subColor: 'white', 
                imghref: "https://github.com/favicon.ico",
                href: "https://github.com/gomenxgames"
            },
            { 
                id: 'gamer',
                title: 'Игрок',
                color: 'darkblue',
                subColor: 'white',
                imghref: "https://steamcommunity.com/favicon.ico",
                href: "https://steamcommunity.com/id/gomenxgames"
            },
            { 
                id: 'animan',
                title: 'Анимешник',
                color: 'darkblue',
                subColor: 'white',
                imghref: "https://shikimori.one/favicon.ico",
                href: "https://shikimori.one/GoMenXGames"
            },
        ],
        tabs: [
                { 
                    id: 'main',
                    title: 'Осн.',
                    color: 'about',
                    status: 'selected'
                },
                { 
                    id: 'social',
                    title: 'Соц.Сети',
                    color: 'social',
                    status: 'none'
                },
                { 
                    id: 'other',
                    title: 'Другое',
                    color: 'hobby',
                    status: 'none'
                },
            ],
        socials: [
            {
                id: 'vk',
                title: 'VK',
                description: 'Моя страница в ВК',
                href: 'https://vk.com/gomenxgames',
            },
            {
                id: 'fb',
                title: 'Facebook',
                description: 'Моя страница в Facebook (Запрещен в РФ)',
                href: 'https://facebook.com/gomenxgames',
            },
            {
                id: 'inst',
                title: 'Instagram',
                description: 'Моя страница в Instagram (Запрещен в РФ)',
                href: 'https://instagram.com/gomenxgames',
            },
            {
                id: 'yt',
                title: 'YouTube',
                description: 'Моя страница в YouTube (Нарушитель законодательства РФ)',
                href: 'https://youtube.com/c/gomenxgames',
            },
            {
                id: 'tt',
                title: 'TikTok',
                description: 'Моя страница в TikTok',
                href: 'https://tiktok.com/@gomenxgames',
            },
        ]
    },
    methods: {
        selectTab: function (tab) {
            this.tabs.forEach(element => {
                element.status = "none";
            });
            this.tabs[tab].status = 'selected';
        }
    }
  })
  
 
//   function soicalsGetImages(){
//       app.socials.forEach(element => {
//         let source = element.href;
//         let link = source.split('/');
//         let image = link[0]+'//'+link[2]+'/favicon.ico';
//         let fileName = element.id + '.ico';
//         downloadCustom(image, fileName);
//         alert(image +" "+ fileName);
//     });
//   }

//   function downloadCustom(source, fileName){
// 	var el = document.createElement("a");
// 	el.setAttribute("href", source);
// 	el.setAttribute("download", fileName);
// 	el.setAttribute("target", '_blank');
// 	document.body.appendChild(el);
//  	el.click();
// 	el.remove();
// }

//   function download(source){
//     const fileName = source.split('/').pop();
// 	var el = document.createElement("a");
// 	el.setAttribute("href", source);
// 	el.setAttribute("download", fileName);
// 	document.body.appendChild(el);
//  	el.click();
// 	el.remove();
// }
