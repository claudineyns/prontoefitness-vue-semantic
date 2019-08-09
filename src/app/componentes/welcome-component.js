(function (Vue) {

    Vue.component('welcome', {
        props: [],
        data: function() {
            return {
                presentation: 'Que tal ter uma vida mais saud\u00E1vel?',
                about: `
                Uma dieta saud\u00E1vel ajuda a manter ou melhorar a sa\u00FAde, fornecendo ao corpo
                o essencial da nutri\u00E7\u00E3o humana, isto \u00E9, fluidos, macronutrientes, micronutrientes e
                quantidade adequada de calorias.
                `
            };
        },
        template: `
        <div class="ui stackable grid">
        <div class="eight wide column i-welcome">
            <div class="s-title">
                <h5>Bem vindo</h5>
                <label>{{presentation}}</label>
            </div>
            <p class="s-description i-paragraph">{{about}}</p>
        </div>
        <div class="eight wide column">
            <div class="s-person"></div>
        </div>
        </div>
        `
    });

})(Vue);




