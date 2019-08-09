(function (Vue) {

    Vue.component('attendance', {
        props: [],
        template: `
        <div class="ui stackable grid">
        <div class="eight wide column">
            <div class="s-title">
                <h5>Atendimento</h5><label>Como funciona?</label>
            </div>
            <p class="s-description"><span class="attendance-item">⛿ Aceitamos: Alelo, Cartões de
                    Débito/Crédito</span><span class="attendance-item">⛟ Delivery nos finais de
                    semana</span><span class="attendance-item">☞ Segunda a Quinta, de 08:00 às 18:00</span>
            </p>
        </div>
        <div class="eight wide column"><img src="./static/images/atendimento.png"></div>
        </div>
        `
    });

})(Vue);


