<script lang="ts" setup>
import { defineProps, ref } from 'vue';

let props = defineProps({
    labels: {
        type: Array,
        default: () => [],
    },
});

let activeLabel = ref(props.labels[0]);
</script>

<template>
    <div class="w-full">
        <div class="flex justify-between">
            <div
                v-for="(label, index) in labels"
                :key="index"
                @click="activeLabel = label"
                :class="{
                    'text-brand-primary-blue border-b-2 border-brand-secondary-pink border-r-0':
                        activeLabel === label,
                    'text-brand-primary-blue opacity-50': activeLabel !== label,
                }"
                class="py-4 w-full border-r border-b px-4 font-medium text-center cursor-pointer"
            >
                {{ label }}
            </div>
        </div>

        <div v-if="activeLabel === 'Business Inquiries'">
            <form class="px-8 space-y-8 py-12" action="">
                <div class="flex flex-col">
                    <label
                        for="name"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                        required
                    />
                </div>

                <div class="flex flex-col">
                    <label
                        for="email"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your-email@site.com"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                        required
                    />
                </div>

                <div class="flex flex-col">
                    <label
                        for="contact-number"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Contact Number
                    </label>
                    <input
                        type="number"
                        id="contact-number"
                        name="contact-number"
                        placeholder="+639 0000 00 00"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                        required
                    />
                </div>

                <div class="flex flex-col">
                    <label
                        for="company-name"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        placeholder="Company name"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                        required
                    />
                </div>

                <div class="flex flex-col">
                    <label
                        for="service"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Type of service
                    </label>

                    <select
                        name="service"
                        id="service"
                        placeholder="Select service"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                    >
                        <option selected>All</option>
                    </select>
                </div>

                <div class="flex flex-col">
                    <label
                        for="message"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Tell us about your project
                    </label>

                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder="Type your message here"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                    ></textarea>
                </div>
            </form>
        </div>
        <div v-if="activeLabel === 'Careers'">
            <p
                class="text-center text-brand-secondary-gray-dark py-8 max-w-lg mx-auto"
            >
                We do more than provide jobs, we nurture careers. Each member of
                Circinius receives training, mentoring, and industry exposure —
                all the right things needed to build a thriving career.
            </p>
        </div>
        <div v-if="activeLabel === 'Other Inquries'">
            <form class="px-8 space-y-8 py-12" action="">
                <div class="flex flex-col">
                    <label
                        for="name"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                        required
                    />
                </div>

                <div class="flex flex-col">
                    <label
                        for="email"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your-email@site.com"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                        required
                    />
                </div>

                <div class="flex flex-col">
                    <label
                        for="inquiry"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Type of inquiry
                    </label>

                    <select
                        name="inquiry"
                        id="inquiry"
                        placeholder="Select inquiry"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                    >
                        <option selected>All</option>
                    </select>
                </div>

                <div class="flex flex-col">
                    <label
                        for="message"
                        class="text-xs font-semibold uppercase text-gray-400"
                    >
                        Message
                    </label>

                    <textarea
                        name="message"
                        id="message"
                        cols="1"
                        rows="1"
                        placeholder="Type your message here"
                        class="border-b-2 font-light py-2 mt-3 focus:outline-none focus:border-brand-primary-light-blue"
                    ></textarea>
                </div>
            </form>
        </div>
    </div>
</template>
