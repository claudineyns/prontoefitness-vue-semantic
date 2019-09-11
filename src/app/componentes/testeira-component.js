(function (Vue) {

    Vue.component('testeira', {
        props: [],
        template: `
        <div class="testeira">
            <div class="i-container">
                <div class="i-header-group">
                    <a class="ui label i-header-link" href="https://api.whatsapp.com/send?phone=5592981091815"
                        target="_blank">
                        <i class="whatsapp icon"></i><span class="i-icon-label">(92) 98109-1815</span>
                    </a>
                    <a class="ui label i-header-link" href="https://www.facebook.com/prontoefitness/"
                        target="_blank">
                        <i class="facebook f icon"></i> <span class="i-icon-label">Pronto e Fitness</span>
                    </a>
                    <a class="ui label i-header-link" href="https://www.instagram.com/prontoe_fitness/"
                        target="_blank">
                        <i class="instagram icon"></i> <span class="i-icon-label">Pronto e Fitness</span>
                    </a>
                </div>
            </div>
        </div>
        `
    });

})(Vue);

