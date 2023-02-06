<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

let props = defineProps({
    href: {
        type: String,
        default: '',
    },

    variant: {
        type: String,
        default: 'primary',
    },
});

let currentPath = ref();

let activeCss = computed(() => {
    if (currentPath.value === props.href) {
        return true;
    } else {
        return false;
    }
});

onMounted(() => {
    currentPath.value = window.location.pathname;
});
</script>

<template>
    <a
        :class="{
            'text-brand-primary-blue': variant === 'primary',
            'text-white': variant === 'white',
            'underline-offset-8 underline decoration-2 decoration-brand-secondary-pink':
                activeCss,
        }"
        :href="href"
        :variant="variant"
    >
        <slot />
    </a>
</template>
