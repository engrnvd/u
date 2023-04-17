<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon music-accidental-natural-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M10 8.75V3.5H8V17.5L14 15.25V20.5H16V6.5L10 8.75M14 13.25L10 14.75V10.75L14 9.25V13.25Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicAccidentalNaturalIcon",
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
