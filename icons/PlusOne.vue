<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon plus-one-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path d="M10,8V12H14V14H10V18H8V14H4V12H8V8H10M14.5,6.08L19,5V18H17V7.4L14.5,7.9V6.08Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "PlusOneIcon",
    props: {
        title: {
            type: String,
            default: "Plus One icon"
        },
        decorative: {
            type: Boolean,
            default: false
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
