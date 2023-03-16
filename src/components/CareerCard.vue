<script lang="ts" setup>
import { onMounted, ref } from 'vue';

let show = ref(false);
defineProps({
    category: {
        type: String,
        default: '',
    },

    title: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="w-full rounded-md shadow-md border px-8 py-5 space-y-4 mt-10">
        <div class="border-b pb-8">
            <span
                class="text-brand-secondary-gray-dark text-opacity-80 tracking-widest uppercase font-sans font-medium"
                >{{ category }}
            </span>
            <h1 class="text-brand-primary-blue text-3xl font-semibold">
                {{ title }}
            </h1>
            <p class="text-gray-600 text-opacity-80 pt-3">
                As a Narrative Writer, you'll work with designers and artists to
                create characters and bring them to life, build location
                histories and backstories and seed that fiction into the world.
            </p>
        </div>

        <div>
            <button
                @click="show = !show"
                class="uppercase opacity-70 w-full border-opacity-70 text-sm font-medium"
                :class="{ hidden: show }"
            >
                <div
                    class="flex justify-between items-center py-2"
                    v-if="!show"
                >
                    <span
                        class="text-brand-primary-light-blue font-semibold text-base"
                        >Learn More</span
                    >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="4"
                        stroke="currentColor"
                        class="w-5 h-5 text-brand-primary-light-blue"
                        :class="{ 'transform rotate-180': show }"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </button>

            <div class="pt-3" v-if="show">
                <slot />
            </div>

            <div>
                <button
                    @click="show = !show"
                    class="uppercase opacity-70 w-full text-left border-t border-opacity-70 text-sm font-medium mt-5"
                    :class="{ hidden: !show }"
                >
                    <div class="flex justify-between items-center py-4">
                        <span
                            class="text-brand-primary-light-blue font-semibold text-base"
                            >Show less</span
                        >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="4"
                            stroke="currentColor"
                            class="w-5 h-5 text-brand-primary-light-blue"
                            :class="{ 'transform rotate-180': show }"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
