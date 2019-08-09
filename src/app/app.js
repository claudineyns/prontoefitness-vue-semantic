(function(Vue, window, document, console){

    var
    vueHeaderApp = new Vue({
        el: 'header',
        data: {
            title: 'Pronto e Fitness',
            subtitle: 'Comida Fitness Congelada',
            menus: [{
                id: 'inicio',
                icon: 'home',
                label: 'In\u00EDcio',
                link: 'javascript:',
                target: '_self'
            },{
                id: 'sobre',
                icon: 'info circle',
                label: 'Sobre',
                link: 'https://www.facebook.com/prontoefitness/',
                target: '_blank'
            },{
                id: 'pedidos',
                icon: 'shopping bag',
                label: 'Pedidos',
                link: 'https://api.whatsapp.com/send?phone=5592981053211',
                target: '_blank'
            },{
                id: 'galeria',
                icon: 'images',
                label: 'Galeria',
                link: 'https://www.instagram.com/prontoe_fitness/',
                target: '_blank'
            }],
            current: null,
            // verticalMenu: false,
        },
        methods: {
            select: function(menu){
                this.current = menu;
            },
        }
    }),
    vueMainApp = new Vue({
        el: 'section',
        data: {
        }
    });

    vueHeaderApp.current = vueHeaderApp.menus[0];

    window.addEventListener('load', function() {
        document.querySelector('.i-vue-startup').classList.remove('i-vue-startup');
    });

})(Vue, window, document, console);