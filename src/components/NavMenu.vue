<template>
    <nav :class="loc">
        <section>
            <h3>{{ headline }}</h3>
            <ul>
                <wl-menu-item v-for="item in items" :key="item.label" v-bind="item"></wl-menu-item>
            </ul>
        </section>
    </nav>
</template>

<script>
import WlMenuItem from './MenuItem.vue';

export default {
    props: [
        'headline', 'items',
        'loc'
    ],
    components: {
        WlMenuItem
    }
}
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    z-index: 0;

    ul {
        list-style: none;
    }

    &.left {
        left: 0;
        top: 0;
        bottom: 0;
        right: auto;
    }

    &.right {
        left: auto;
        top: 0;
        bottom: 0;
        right: 0;
    }
}
</style>
