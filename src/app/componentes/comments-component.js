(function (Vue) {

    var _comments = [{
        text: '\u201CMuito deliciosa sua comida!<br/>Estou recomendando pra geral...\u201D',
        author: 'Andr\u00E9 Freitas'
    },{
        text: '\u201CEi, estou gostando muito da sua comida.<br/>Parab\u00E9ns!\u201D',
        author: 'Warlley Rodrigues'
    }];

    Vue.component('comments', {
        props: [],
        data: function() {
            return {
                commentHeader   : 'Hist\u00F3rias de Sucesso',
                commentTitle    : 'Opini\u00E3o de clientes',
                comments        : _comments,
                current         : 0,
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
                    <h5>{{commentHeader}}</h5><label>{{commentTitle}}</label>
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


