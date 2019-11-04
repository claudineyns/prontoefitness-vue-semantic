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
                //link: 'https://app.ifood.com.br/delivery/manaus-am/pronto-e-fitness-centro',
                link: 'https://www.ifood.com.br/delivery/manaus-am/pronto-e-fitness-centro/82aa40f2-c66f-48d8-9f8c-b9a16f586fb1?utm_medium=share',
                target: '_blank'
            },{
                id: 'galeria',
                icon: 'images',
                label: 'Galeria',
                link: 'https://www.instagram.com/prontoe_fitness/',
                target: '_blank'
            },{
                id: 'contato',
                icon: 'comments',
                label: 'Contato',
                link: 'https://api.whatsapp.com/send?phone=5592981091815',
                target: '_blank'
            }],
            current: null,
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
