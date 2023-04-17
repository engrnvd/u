<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon folder-key-outline-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M20 18H4V8H20M20 6H12L10 4H4C2.89 4 2 4.89 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.89 21.1 6 20 6M13.83 12C13.42 10.84 12.31 10 11 10C9.34 10 8 11.34 8 13S9.34 16 11 16C12.31 16 13.42 15.17 13.83 14H16V16H18V14H19V12H13.83M11 14C10.45 14 10 13.56 10 13C10 12.45 10.45 12 11 12S12 12.45 12 13 11.55 14 11 14Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderKeyOutlineIcon",
  props: {
    title: {
      type: String,
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
