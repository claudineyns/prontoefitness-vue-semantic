(function (Vue) {

    Vue.component('attendance', {
        props: [],
        data: function() {
            return {
                payments    : '\u26FF Aceitamos: Alelo, Cart\u00F5es de D\u00E9bito/Cr\u00E9dito',
                delivery    : '\u26DF Delivery nos finais de semana',
                workDays    : '\u261E Segunda a Quinta, de 08:00 \u00E0s 18:00'
            };
        },
        template: `
        <div class="ui stackable grid">
        <div class="eight wide column">
            <div class="s-title">
                <h5>Atendimento</h5><label>Como funciona?</label>
            </div>
            <p class="s-description">
                <span class="attendance-item">{{payments}}</span>
                <span class="attendance-item">{{delivery}}</span>
                <span class="attendance-item">{{workDays}}</span>
            </p>
        </div>
        <div class="eight wide column"><img src="./static/images/atendimento.png"></div>
        </div>
        `
    });

})(Vue);


