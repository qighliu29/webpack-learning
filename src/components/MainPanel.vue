<template>
    <main :class="{ 'shrink': shrink }">
        <slot name="header" v-on:toggleShrink="slide()"></slot>
        <slot name="content" @toggleShrink="slide()"></slot>
        <slot name="footer" @toggleShrink="slide()"></slot>
    </main>
</template>

<script>
export default {
    data: () => ({
        shrink: false
    }),
    methods: {
        slide() {
            this.shrink = !this.shrink;
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    position: relative;
    z-index: 1;
    transition: transform 300ms;

    width: 500px;
    height: 500px;
    background-color:cyan;

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

