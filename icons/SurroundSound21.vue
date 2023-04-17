<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon surround-sound21-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M4 7V9H8V11H6A2 2 0 0 0 4 13V17H10V15H6V13H8A2 2 0 0 0 10 11V9A2 2 0 0 0 8 7H4M16 7V9H18V17H20V7H16M12 15V17H14V15H12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SurroundSound21Icon",
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
