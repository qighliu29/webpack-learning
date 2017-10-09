<template>
    <main :class="{ 'shrink': shrink }">
        <wl-top-nav-bar @toggleShrink="slide()"></wl-top-nav-bar>
    </main>
</template>

<script>
import WlTopNavBar from './TopNavBar.vue';

export default {
    data: () => ({
        shrink: false
    }),
    methods: {
        slide() {
            this.shrink = !this.shrink;
        }
    },
    components: {
        WlTopNavBar
    }
}
</script>

<style lang="scss" scoped>
main {
    position: relative;
    z-index: 1;
    transition: transform 300ms;

    // width: 500px;
    // height: 500px;
    // background-color: cyan;

    input {
        position: absolute;
        left: auto;
        right: 10px;
    }

    &.shrink {
        transform: translateX(-400px);
    }
}
</style>

