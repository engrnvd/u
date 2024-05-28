<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cellphone-android-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path
          d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "CellphoneAndroidIcon",
    props: {
        title: {
            type: String,
            default: "Cellphone Android icon"
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
