<script lang="ts" setup>
import { ref } from 'vue';
import Vectors from './svg/Vectors.vue';

let show = ref(false);

defineProps({
    borderVariant: {
        type: String,
        default: '',
    },

    name: {
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
    <div
        class="bg-brand-secondary-blue-darkest w-full px-8 py-8 relative border-t-4 border-brand-secondary-yellow md:py-12"
        :class="{
            'border-brand-secondary-yellow': borderVariant === 'yellow',
            'border-brand-secondary-pink': borderVariant === 'pink',
            'border-brand-secondary-sky-blue': borderVariant === 'sky-blue',
        }"
    >
        <div class="text-center pt-12 grid place-items-center">
            <Vectors class="w-full absolute z-0 opacity-20" :name="name" />
            <span class="text-4xl">{{ title }}</span>
        </div>

        <div class="hidden md:block space-y-3 pt-12">
            <h1 class="font-light text-center text-xl">
                We care about our craft and the quality of our work
            </h1>
            <p class="font-thin">
                We value learning and growth and use our everyday learning
                experiences to improve and provide high quality work and
                services. We follow our curiosity and have fun experimenting
                with our work to get better insights and results.
            </p>
        </div>

        <div class="block space-y-3 pt-12 md:hidden">
            <button
                @click="show = !show"
                class="uppercase opacity-70 w-full text-left border-t-2 border-gray-400 border-opacity-70 text-sm py-2 font-medium mt-5"
                :class="{ hidden: show }"
            >
                <div class="flex justify-between items-center" v-if="!show">
                    <span>Learn More</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
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
            <div v-if="show">
                <slot />
            </div>

            <div>
                <button
                    @click="show = !show"
                    class="uppercase opacity-70 w-full text-left border-t-2 border-gray-400 border-opacity-70 text-sm py-2 font-medium mt-5"
                    :class="{ hidden: !show }"
                >
                    <div class="flex justify-between items-center">
                        <span>Show Less</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            class="w-4 h-4"
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
