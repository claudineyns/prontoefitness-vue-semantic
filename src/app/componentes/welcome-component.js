(function (Vue) {

    Vue.component('welcome', {
        props: [],
        template: `
        <div class="ui stackable grid">
        <div class="eight wide column i-welcome">
            <div class="s-title">
                <h5>Bem vindo</h5>
                <label>Que tal ter uma vida mais saudável?</label>
            </div>
            <p class="s-description i-paragraph">
                Uma dieta saudável ajuda a manter ou melhorar a saúde, fornecendo ao corpo
                o essencial da nutrição humana, isto é, fluidos, macronutrientes, micronutrientes e
                quantidade
                adequada de calorias.</p>
        </div>
        <div class="eight wide column">
            <div class="s-person"></div>
        </div>
        </div>
        `
    });

})(Vue);




