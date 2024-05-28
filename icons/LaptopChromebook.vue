<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon laptop-chromebook-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path d="M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "LaptopChromebookIcon",
    props: {
        title: {
            type: String,
            default: "Laptop Chromebook icon"
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
