<script lang="ts" setup>
import { ref } from 'vue';

let isActive = ref(false);
</script>

<template>
    <h2>
        <slot />
    </h2>
</template>
