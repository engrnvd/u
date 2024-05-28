<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon douban-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path
          d="M20,6H4V4H20V6M20,18V20H4V18H7.33L6.26,14H5V8H19V14H17.74L16.67,18H20M7,12H17V10H7V12M9.4,18H14.6L15.67,14H8.33L9.4,18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "DoubanIcon",
    props: {
        title: {
            type: String,
            default: "Douban icon"
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
