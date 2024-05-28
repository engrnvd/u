<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon poll-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         :height="size"
         :width="size"
         class="material-design-icon__svg"
         viewBox="0 0 24 24">
      <path
          d="M9 17H7V10H9M13 17H11V7H13M17 17H15V13H17M19.5 19.1H4.5V5H19.5M19.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "PollBoxOutlineIcon",
    props: {
        title: {
            type: String,
            default: "Poll Box Outline icon"
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
