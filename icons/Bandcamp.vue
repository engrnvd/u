<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bandcamp-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path d="M22,6L15.5,18H2L8.5,6H22Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "BandcampIcon",
    props: {
        title: {
            type: String,
            default: "Bandcamp icon"
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
