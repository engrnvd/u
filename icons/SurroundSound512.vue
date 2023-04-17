<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon surround-sound512-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M2 8V13H5V14H2V16H5C6.11 16 7 15.11 7 14V13C7 11.9 6.11 11 5 11H4V10H7V8H2M10 8V10H11V16H13V8H10M17 8V10H20V11H19C17.9 11 17 11.9 17 13V16H22V14H19V13H20C21.11 13 22 12.11 22 11V10C22 8.9 21.11 8 20 8H17M8 14V16H10V14H8M14 14V16H16V14H14Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SurroundSound512Icon",
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
