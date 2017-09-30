<template>
    <!-- <nav class="navbar navbar-default" :class="{'navbar-fixed-top': top}">
    </nav> -->
    <div>
        <wl-nav-menu v-bind="menu" :loc="'left'"></wl-nav-menu>
        <wl-main-panel>
            <wl-top-nav-bar slot="header"></wl-top-nav-bar>
        </wl-main-panel>
    </div>
</template>

<script>
import WlNavMenu from './components/NavMenu.vue';
import WlMainPanel from './components/MainPanel.vue';
import WlTopNavBar from './components/TopNavBar.vue';

export default {
    props: ['top'],
    data: () => ({
        menu: {
            headline: 'NAVIGATION',
            items: [{
                label: 'baidu',
                url: 'www.baidu.com',
                icon: ''
            },
            {
                label: 'github',
                url: 'github.com',
                icon: ''
            },
            {
                label: 'stackoverflow',
                url: 'stackoverflow.com',
                icon: ''
            }]
        }
    }),
    components: {
        WlNavMenu,
        WlMainPanel,
        WlTopNavBar
    }
}
</script>