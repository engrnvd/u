<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon floor-lamp-variant-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path d="M7 2L10 9H14L17 2H7M15.92 22L13 15V22H11V15L8.08 22H5.92L10.92 10H13.08L18.08 22H15.92Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "FloorLampVariantIcon",
    props: {
        title: {
            type: String,
            default: "Floor Lamp Variant icon"
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
