<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon home-remove-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 3L2 12H5V20H19V12H22L12 3M15.54 16.12L14.12 17.54L12 15.41L9.88 17.54L8.47 16.12L10.59 14L8.47 11.88L9.88 10.47L12 12.59L14.12 10.47L15.54 11.88L13.41 14L15.54 16.12Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeRemoveIcon",
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
