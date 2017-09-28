<template>
    <nav class="navbar navbar-default" :class="{'navbar-fixed-top': top}">
    </nav>
</template>

<script>
export default {
    props: ['top']
}
</script>