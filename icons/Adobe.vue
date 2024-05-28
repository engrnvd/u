<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon adobe-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path d="M14.58,3H22V19.67L14.58,3M9.42,3H2V19.67L9.42,3M12,9.17L16.67,19.67H13.5L12.17,16.33H8.75L12,9.17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "AdobeIcon",
    props: {
        title: {
            type: String,
            default: "Adobe icon"
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
