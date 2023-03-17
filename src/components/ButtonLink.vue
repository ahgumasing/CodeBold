<script setup lang="ts">
defineProps({
    variant: {
        type: String,
        default: 'primary-gradient',
    },
    href: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <a
        :href="href"
        class="inline-flex items-center justify-center rounded py-2 text-sm text-white"
        :class="{
            'bg-gradient-to-r from-brand-secondary-pink to-brand-secondary-yellow uppercase py-2 px-6 text-sm rounded-sm':
                variant === 'primary-gradient',
            ' bg-transparent ': variant === 'transparent',
        }"
    >
        <slot />
    </a>
</template>
