<script lang="ts" setup>
defineProps({
    href: {
        type: String,
        default: '',
    },
    variant: {
        type: String,
        default: 'primary',
    },
});
</script>

<template>
    <a
        :class="{
            'text-brand-primary-blue': variant === 'primary',
            'text-white': variant === 'white',
        }"
        :href="href"
        :variant="variant"
    >
        <slot />
    </a>
</template>
