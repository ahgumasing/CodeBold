<script setup lang="ts">
defineProps({
    variant: {
        type: String,
        default: 'blue',
    },
});
</script>

<template>
    <section
        class="w-full px-3 lg:px-0 pb-4"
        :class="{
            'bg-gradient-to-r from-brand-primary-blue via-brand-primary-blue to-brand-primary-blue-lighter':
                variant === 'blue',
            'bg-white': variant === 'white',
            'bg-brand-secondary-gray': variant === 'gray',
        }"
    >
        <div class="max-w-5xl mx-auto">
            <slot />
        </div>
    </section>
</template>
