<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon email-check-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M21,13.34C20.37,13.12 19.7,13 19,13A6,6 0 0,0 13,19C13,19.34 13.03,19.67 13.08,20H3A2,2 0 0,1 1,18V6C1,4.89 1.89,4 3,4H19A2,2 0 0,1 21,6V13.34M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M3,6V8L11,13L19,8V6L11,11L3,6Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EmailCheckIcon",
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
