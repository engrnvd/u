<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon iframe-array-outline-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path
          d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M6 8V18H10V16H8V10H10V8H6M16 16H14V18H18V8H14V10H16V16">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "IframeArrayOutlineIcon",
    props: {
        title: {
            type: String,
            default: "Iframe Array Outline icon"
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
