<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon middleware-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M23 12L19 8V11H14.82C14.4 9.84 13.3 9 12 9S9.6 9.84 9.18 11H5L2 8V16L5 13H9.18C9.6 14.16 10.7 15 12 15S14.4 14.16 14.82 13H19V16L23 12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MiddlewareIcon",
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {

      default: '1em'
    }
  }
}
</script>
