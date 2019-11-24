(function (Vue) {

    Vue.component('brand-menu', {
        props: ['menus','title','subtitle'],
        data: function() {
            return {
                current: this.menus[0]
            };
        },
        template: `
        <div class="i-brand-menu">
            <div class="i-container">
                <div class="i-brand-logo">
                    <img src="./static/images/logo.png"/>
                </div>
                <div class="i-brand-description">
                    <h3 class="i-brand-title">{{title}}</h3>
                    <h5 class="i-brand-subtitle">{{subtitle}}</h5>
                </div>
                <div class="i-menu">
                    <div class="ui secondary menu">
                        <a class="item" v-for="menu in menus" 
                            @click="current=menu"
                            :key="menu.id"
                            :id="menu.id"
                            :class="{'active':menu === current}"
                            :href="menu.link"
                            :target="menu.target"
                        ><i :class="menu.icon" class="icon"></i> {{menu.label}}</a>
                    </div>
                </div>
            </div>
        </div>
        `
    });

})(Vue);

