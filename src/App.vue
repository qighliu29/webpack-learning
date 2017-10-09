<template>
    <div>
        <wl-main-panel>
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