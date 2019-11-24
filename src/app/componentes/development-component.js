(function(Vue){

    Vue.component('development', {
        props: [],
        data: function() {
            return {
                developer: 'https://www.facebook.com/pg/servicosdigitaisonline/services/?service_id=2503783659637029'
            };
        },
        template: `
        <div class="development">
        Desenvolvido por: <a :href="developer" target="_blank">Serviços Digitais</a>
        </div>
        `
    });

    console.log('Development started!');

})(Vue);
