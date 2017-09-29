<template>
    <!-- <nav class="navbar navbar-default" :class="{'navbar-fixed-top': top}">
    </nav> -->
    <wl-slide-out-menu v-bind="menu" :loc="'left'"></wl-slide-out-menu>
</template>

<script>
import WlSlideOutMenu from './components/SlideOutMenu.vue';

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
        WlSlideOutMenu
    }
}
</script>