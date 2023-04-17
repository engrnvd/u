<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon circle-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V9C3 9.26522 3.10536 9.51957 3.29289 9.70711C3.48043 9.89464 3.73478 10 4 10H20C20.2652 10 20.5196 9.89464 20.7071 9.70711C20.8946 9.51957 21 9.26522 21 9V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4ZM5.00001 5.99999L5 8L19 7.99999V5.99997L5.00001 5.99999Z"
        />
        <path d="M11 16H8V18H11V21H13V18H16V16H13V13H11V16Z"/>
    </svg>
  </span>
</template>

<script>
export default {
    name: "AddBlockIcon",
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
