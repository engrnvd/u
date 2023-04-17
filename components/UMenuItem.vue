<script lang="ts" setup>

</script>

<template>
    <div class="px-4 py-3 d-flex align-items-center gap-4 u-menu-item">
        <slot></slot>
        <div class="hover-overlay"></div>
    </div>
</template>

<style scoped lang="scss">
.u-menu-item {
    position: relative;
    cursor: pointer;
}
</style>
