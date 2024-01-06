<script lang="ts" setup>
import UDarkModeToggle from '@/components/UDarkModeToggle.vue'
</script>

<template>
    <div>
        <p>U comes with a built-in dark mode toggle component and a store to interact with the theme.
        </p>

        <p>
            The theme store uses <code>useStorage</code> provided by <a href="https://vueuse.org/">VueUse</a> to
            remember the chosen theme.
        </p>

        <p>
            Add <code>:class="`theme-${uTheme.value}`"</code> in your root element (e.g. in <code>App.vue</code>)
            and then use <code>
            &lt;UDarkModeToggle/></code>
        </p>

        <p>
            <UDarkModeToggle/>
        </p>
    </div>
</template>
