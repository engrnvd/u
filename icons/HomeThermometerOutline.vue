<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon home-thermometer-outline-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M12 8C11.45 8 11 8.45 11 9V13.27C10.38 13.63 10 14.29 10 15C10 16.11 10.9 17 12 17S14 16.11 14 15C14 14.29 13.62 13.63 13 13.27V9C13 8.45 12.55 8 12 8Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeThermometerOutlineIcon",
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
