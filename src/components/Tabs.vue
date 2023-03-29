<script lang="ts" setup>
import { ref } from 'vue';
import Tab from './Tab.vue';

let activeTab = ref(0);
let tabs = [
    {
        name: 'Business Inquries',
        content: 'Form Business Inquries goes here',
    },
    {
        name: 'Careers',
        content:
            'We do more than provide jobs, we nurture careers. Each member of Circinius receives training, mentoring, and industry exposure — all the right things needed to build a thriving career. ',
    },
    {
        name: 'Other Inquries',
        content: 'Form Other Inquries goes here',
    },
];
</script>

<template>
    <div class="w-full border-t">
        <div class="flex w-full border-b">
            <div
                v-for="(tab, index) in tabs"
                :key="index"
                @click="activeTab = index"
                :class="{
                    'border-b-2 border-brand-secondary-pink text-brand-primary-blue':
                        activeTab === index,
                    'text-brand-primary-blue opacity-50': activeTab !== index,
                }"
                class="py-4 font-medium text-center w-full border-l border-r"
            >
                {{ tab.name }}
            </div>
        </div>
        <div
            v-for="(tab, index) in tabs"
            :key="index"
            v-show="activeTab === index"
            class="mx-auto max-w-lg py-8 font-light text-brand-secondary-gray-dark"
        >
            {{ tab.content }}
        </div>
    </div>
</template>
