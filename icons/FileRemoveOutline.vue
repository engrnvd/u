<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon file-remove-outline-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M11.95 15.46L14.08 17.58L12.66 19L10.54 16.87L8.42 19L7 17.58L9.13 15.46L7 13.34L8.42 11.92L10.54 14.05L12.66 11.92L14.08 13.34L11.95 15.46Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileRemoveOutlineIcon",
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
