<script setup>
import { ref, computed } from 'vue';

const items = [
    { id: 1, title: 'Comic Art', description: 'Comic Art' },
    { id: 2, title: 'Board Game Art', description: 'Board Game Art' },
    { id: 3, title: 'Book Illustration', description: 'Book Illustration' },
    {
        id: 4,
        title: 'Kabuki',
        description:
            '“A cat had nine lives. For three he played, for three he strayed and for the last three, he was hunted...”',
    },
    { id: 5, title: 'Character Design', description: 'Character Design' },
    { id: 6, title: 'Environment Art', description: 'Environment Art' },
    { id: 7, title: 'Game Assets', description: 'Game Assets' },
];

const itemsPerPage = 1;
const activeTab = ref(0);
const pages = ref([]);

const tabs = [
    'Comic Art',
    'Board Game Art',
    'Book Illustration',
    'Concept Art',
    'Character Design',
    'Environment Art',
    'Game Assets',
];

for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.value.push(items.slice(i, i + itemsPerPage));
}
</script>

<template>
    <div class="border-b border-gray-500 flex justify-between text-white">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            class="whitespace-nowrap py-4 px-1"
            :class="{ 'font-bold border-b-2': activeTab === index }"
        >
            {{ tab }}
        </button>
    </div>
    <div
        v-for="(page, index) in pages"
        :key="index"
        v-show="activeTab === index"
    >
        <div
            class="py-4 text-white text-sm"
            v-for="item in page"
            :key="item.id"
        >
            <p class="font-semibold text-base">{{ item.title }}</p>
            <p class="mt-4">{{ item.description }}</p>
        </div>
    </div>
</template>
