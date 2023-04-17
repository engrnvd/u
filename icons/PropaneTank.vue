<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon propane-tank-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M16 6H16V4C16 2.9 15.11 2 14 2H10C8.9 2 8 2.9 8 4V6H8C5.79 6 4 7.79 4 10V17C4 18.86 5.28 20.41 7 20.86V22H17V20.86C18.72 20.42 20 18.86 20 17V10C20 7.79 18.21 6 16 6M10 4H14V6H10V4Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PropaneTankIcon",
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
