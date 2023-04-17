<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon view-quilt-outline-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4 5V18H21V5H4M6 16V7H9V16H6M11 16V12.5H14V16H11M19 16H16V12.5H19V16M11 10.5V7H19V10.5H11Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ViewQuiltOutlineIcon",
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
