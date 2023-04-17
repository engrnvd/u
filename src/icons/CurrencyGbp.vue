<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon currency-gbp-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M6,21V19C10,17 9.5,13 9.5,13H7V11H9.5C8.5,6.5 10,3 14,3C16,3 17,3.5 17,3.5V5.5C11,3.5 11,8 11.5,11H16V13H11.5C11.5,13 12,17 9.5,19H18V21H6Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyGbpIcon",
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
