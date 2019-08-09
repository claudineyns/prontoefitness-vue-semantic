(function (Vue) {

    var _comments = [{
        text: '“Muito deliciosa sua comida!<br/>Estou recomendando pra geral...”',
        author: 'Andr\u00E9 Freitas'
    },{
        text: '“Ei, estou gostando muito da sua comida.<br/>Parabéns!”',
        author: 'Warlley Rodrigues'
    }];

    Vue.component('comments', {
        props: [],
        data: function() {
            return {
                comments    : _comments,
                current     : 0,
            }
        },
        methods: {
            updateLeft: function() { this.current = Math.abs(this.current - 1); },
            updateRight: function() { this.current = (this.current + 1) % 2; }
        },
        template: `
        <div class="ui stackable grid">
            <div class="eight wide column s-ballon"><i class="comment icon"></i></div>
            <div class="eight wide column">
                <div class="s-title">
                    <h5>Histórias de Sucesso</h5><label>Opinião de clientes</label>
                </div>
                <p class="s-description">
                    <span v-html="comments[current].text"></span>
                    <br/><br/>
                    <strong class="testimonial-person">{{comments[current].author}}</strong>
                </p>
                <div class="arrows">
                    <a href="javascript:" class="i-default" v-on:click="updateLeft">
                        <i class="angle left icon"></i>
                    </a>
                    <a href="javascript:" class="i-default" v-on:click="updateRight">
                        <i class="angle right icon"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    });

})(Vue);


