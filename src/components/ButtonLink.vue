<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
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
    <button
        :href="href"
        :type="type"
        class="inline-flex items-center justify-center rounded py-2 text-sm text-white"
        :class="{
            'bg-gradient-to-r from-brand-secondary-pink to-brand-secondary-yellow uppercase py-2 px-6 text-sm rounded-sm':
                variant === 'primary-gradient',
            ' bg-transparent ': variant === 'transparent',
        }"
    >
        <slot />
    </button>
</template>
