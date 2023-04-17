<script lang="ts" setup>

</script>

<template>
    <div class="u-loading">
        <div class="bounce1"/>
        <div class="bounce2"/>
        <div class="bounce3"/>
    </div>
</template>

<style lang="scss">
.u-loading {
    --dot-size: 0.5em;
    --dot-spacing: 0.1em;
    align-items: center;
    color: currentColor;
    display: flex;
    justify-content: center;
    height: 1em;

    > div {
        animation: sk-bouncedelay 1.2s infinite ease-in-out both;
        background: currentColor;
        border-radius: 100%;
        display: inline-block;
        height: var(--dot-size);
        width: var(--dot-size);
        margin: 0 var(--dot-spacing);
    }

    .bounce1 {
        animation-delay: -0.32s;
    }

    .bounce2 {
        animation-delay: -0.16s;
    }
}

@keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        transform: scale(0);
    }

    40% {
        transform: scale(1);
    }
}

</style>
