<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon christianity-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path d="M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "ChristianityIcon",
    props: {
        title: {
            type: String,
            default: "Christianity icon"
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
