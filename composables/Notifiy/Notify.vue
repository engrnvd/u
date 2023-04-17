<template>
    <div :class="{'notification-container': true, 'notification-container-empty' : items.length===0}">
        <transition-group name="ntf" tag="div" mode="out">
            <div v-for="item in items" :key="item.id" class="notification shadow-0 d-flex align-items-center gap-2"
                 :class="item.options.type"
                 @click="removeItem(item)">
                <div style="font-size: 1.5rem" class="all-center">
                    <CheckCircleIcon v-if="item.options.type === 'success'"/>
                    <AlertCircleIcon v-else-if="item.options.type === 'danger'"/>
                    <InformationIcon v-else/>
                </div>
                <div>
                    <h4 v-if="item.title" class="title">{{ item.title }}</h4>
                    <div class="message" v-if="item.message" v-html="item.message"/>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import AlertCircleIcon from "@/material-design-icons/AlertCircle.vue"
import CheckCircleIcon from '@/material-design-icons/CheckCircle.vue'
import InformationIcon from "@/material-design-icons/Information.vue"

export default {
    components: { InformationIcon, AlertCircleIcon, CheckCircleIcon },
    data: () => ({
        items: [],
    }),
    methods: {
        addItem(type, title, message, options = {}) {
            const item = {
                id: Date.now() + Math.random(),
                message,
                title,
                options: {
                    type,
                    duration: 5000,
                    permanent: false,
                    ...options
                }
            }

            this.items.push(item)

            if (!item.options.permanent) {
                setTimeout(() => {
                    this.removeItem(item)
                }, item.options.duration)
            }
        },
        removeItem(item) {
            this.items = this.items.filter(i => i.id !== item.id)
        },
    }
}
</script>
<style lang="scss">
.alert *[data-notify="title"] {
    display: block;
    font-size: 0.9rem;
}

div[data-notify="container"] {
    padding: 1em;
}

.notification-container {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999999;
    width: 270px;
    padding: 0 15px;
    max-height: calc(100% - 30px);
}

.notification {
    box-sizing: border-box;
    padding: 1em;
    border-radius: var(--border-radius);
    cursor: pointer;
    position: relative;
    opacity: 0.95;
    margin-top: 1em;
    font-size: 0.8rem;
    display: flex;
    align-items: center;

    --color: var(--primary);

    $theme-colors: ("primary", "secondary", "success", "info", "danger");
    @each $color in $theme-colors {
        &.#{$color} {
            --color: var(--#{$color});
        }
    }

    color: var(--light);
    background-color: var(--color);

    .title {
        font-weight: bold;
        margin: 0 0 0.25em 0;
        line-height: 1;
    }

    &:hover, &:focus {
        opacity: 1;
    }

}

.notification-enter {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
}

.notification-enter.notification-enter-active {
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
}

.notification-leave {
    visibility: visible;
    transform: translate3d(0, 0, 0);
}

.notification-leave.notification-leave-active {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
    transition: all 0.4s;
}

.notification:before {
    content: "";
    display: none;
}

.ntf-enter {
    opacity: 0;
}

.ntf-leave {
    opacity: 1;
}

.ntf-enter-active {
    animation: slideInRight 0.4s;
}

.ntf-leave-active {
    animation: slideOutRight 0.4s;
}

@-webkit-keyframes slideInRight {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slideInRight {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

.slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
}

@-webkit-keyframes slideOutRight {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}

@keyframes slideOutRight {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}

.slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight;
}
</style>
