<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon file-key-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M11 16A1 1 0 1 1 10 15A1 1 0 0 1 11 16M20 8V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V4A2 2 0 0 1 6 2H14M17 15H12.83A3 3 0 1 0 12.83 17H14V19H16V17H17M18.5 9L13 3.5V9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileKeyIcon",
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
