<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon lightbulb-spot-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M9 19H11V22H9L9 19M13 22H15V19H13V22M2 2V4H22V2H2M9 14L9 17H15V14C17.5 12.57 20 11 20 6H4C4 11 6.5 12.57 9 14Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LightbulbSpotIcon",
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
