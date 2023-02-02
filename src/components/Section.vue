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
        class="w-full px-3 lg:px-0"
        :class="{
            'bg-gradient-to-r from-brand-primary-blue via-brand-primary-blue to-brand-primary-blue-lighter':
                variant === 'blue',
            'bg-white': variant === 'white',
        }"
    >
        <div class="max-w-5xl mx-auto">
            <slot />
        </div>
    </section>
</template>
