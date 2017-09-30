<template>
    <input type="button" value="child toggle" @click="slide()" />
</template>

<script>
export default {
    methods: {
        slide() {
            this.$emit('toggleShrink');
        }
    }
}
</script>
