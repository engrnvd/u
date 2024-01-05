<script lang="ts" setup>
let headings = Array.from({ length: 6 }, (x, i) => i + 1)
</script>

<template>
    <div>
        <template v-for="h in headings">
            <component :is="`h${h}`">Heading {{ h }}</component>
            <p>
                A paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda aut debitis error
                explicabo fugit,
                illo incidunt iure magni molestiae nisi placeat, praesentium quae qui quibusdam repellendus sapiente
                ullam
                veritatis.
            </p>
        </template>
        <p v-for="cls in ['semi-muted', 'muted']" :class="`text-${cls}`">
            Text {{ cls }}: Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Amet,
            blanditiis deserunt dicta ea eum, facilis fugiat minima nemo nisi quidem repellendus sed sint sunt tempora
            vitae. Perferendis ratione sequi vel?
        </p>
    </div>
</template>

