<template>
    <li>
        <a :href="url">
            <i :class="icon"></i>
            <span>{{ label }}</span>
        </a>
    </li>
</template>

<script>
export default {
    props: ['label', 'url', 'icon']
}
</script>

