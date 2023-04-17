<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon format-strikethrough-variant-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
        <path
            d="M20.4805 12.0541V13.6432H16.9923C17.7869 15.3436 17.7472 19.9998 12.0422 19.9998C5.42343 20.0395 5.67769 14.8351 5.67769 14.8351L8.83213 14.8748C8.85596 17.5525 11.343 17.5525 11.8356 17.5207C12.3441 17.481 14.2431 17.4889 14.3941 15.6297C14.4577 14.7636 13.5836 14.1041 12.6302 13.6432H3V12.0541H20.4805ZM17.628 8.78842L14.4656 8.76459C14.4656 8.76459 14.6007 6.56364 11.8594 6.55569C9.11817 6.5398 9.35654 8.30374 9.35654 8.52622C9.38832 8.7487 9.62669 9.8452 11.7402 10.3696H6.74241C6.74241 10.3696 3.96937 5.02217 10.7391 4.10842C17.6598 3.15494 17.6439 8.80432 17.628 8.78842Z"
            :fill="fillColor"></path>
    </svg>
  </span>
</template>

<script>
export default {
    name: "FormatStrikethroughVariantIcon",
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
