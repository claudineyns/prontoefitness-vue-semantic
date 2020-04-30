(function(Vue, window, document){

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
                link: '/info.html',
                target: '_blank'
            },{
                id: 'pedidos',
                icon: 'shopping bag',
                label: 'Pedidos',
                //link: 'https://www.ifood.com.br/delivery/manaus-am/pronto-e-fitness-centro/82aa40f2-c66f-48d8-9f8c-b9a16f586fb1?utm_medium=share',
                link: '/pedidos.html',
                target: '_blank'
            },{
                id: 'galeria',
                icon: 'images',
                label: 'Galeria',
                link: '/galeria.html',
                target: '_blank'
            },{
                id: 'contato',
                icon: 'comments',
                label: 'Contato',
                link: '/contato.html',
                target: '_blank'
            }],
            current: null,
        },
        methods: {
            select: function(menu){
                this.current = menu;
            },
        }
    });

    // Inicia o bloco 'section'
    new Vue({ el: 'section', data: {} });

    // Inicial o bloco 'footer'
    new Vue({ el: 'footer', data: {} });

    vueHeaderApp.current = vueHeaderApp.menus[0];

    window.addEventListener('load', function() {
        document.querySelector('.i-vue-startup').classList.remove('i-vue-startup');
    });

})(Vue, window, document);
