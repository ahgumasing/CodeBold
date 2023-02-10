<script lang="ts" setup>
import Logo from './svg/Logo.vue';
import Link from './Link.vue';
import ButtonLink from './ButtonLink.vue';
import { ref, onMounted } from 'vue';
import { computed } from '@vue/reactivity';

let showingNavigationDropdown = ref(false);
let sideNavDropdown = ref(false);
let currentPath = ref();

let hide = computed(() => {
    if (currentPath.value === '/work') {
        return true;
    }
});

onMounted(() => {
    currentPath.value = window.location.pathname;
});
</script>

<template>
    <nav
        class="py-3 lg:px-3 xl:px-0 flex justify-between items-center border-b border-gray-200 border-opacity-30"
    >
        <template v-if="hide">
            <Logo
                name="dark-horizontal-gradient-large"
                class="md:block hidden z-50"
            />
            <Logo
                name="dark-horizontal-gradient-small"
                class="md:hidden block"
            />

            <div class="space-x-8 hidden md:block">
                <Link variant="primary" href="/">Home</Link>
                <Link variant="primary" href="/about">About Us</Link>
                <Link variant="primary" href="/work">Our Work</Link>
                <Link variant="primary" href="/careers">Careers</Link>
                <ButtonLink class="w-48 font-medium text-sm">
                    <span class="flex items-center">
                        Get in Touch
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2.0"
                                stroke="currentColor"
                                class="w-3.5 h-3.5 ml-1"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                ></path>
                            </svg>
                        </span>
                    </span>
                </ButtonLink>
            </div>
        </template>
        <template v-if="!hide">
            <Logo name="white-large" class="md:block hidden" />
            <Logo name="white-small" class="md:hidden block" />

            <div class="space-x-8 hidden md:block z-50">
                <Link variant="white" href="/">Home</Link>
                <Link variant="white" href="/about">About Us</Link>
                <Link variant="white" href="/work">Our Work</Link>
                <Link variant="white" href="/careers">Careers</Link>
                <ButtonLink class="w-48 font-medium text-sm">
                    <span class="flex items-center">
                        Get in Touch
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2.0"
                                stroke="currentColor"
                                class="w-3.5 h-3.5 ml-1"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                ></path>
                            </svg>
                        </span>
                    </span>
                </ButtonLink>
            </div>
        </template>

        <div class="md:hidden block mt-2">
            <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
            >
                <!-- Hamburger Menu -->
                <svg
                    :class="{
                        hidden: showingNavigationDropdown == true,
                        'text-brand-primary-blue': hide,
                    }"
                    class="w-10 h-15 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                </svg>

                <!-- X Icon  -->
                <svg
                    :class="{ hidden: showingNavigationDropdown == false }"
                    class="w-10 h-10 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <div
                v-if="showingNavigationDropdown"
                class="bg-brand-primary-blue fixed h-screen w-full right-0 top-0 z-50"
            >
                <div
                    class="py-5 px-3 flex justify-between items-center border-b border-gray-200 border-opacity-30"
                >
                    <Logo name="white-small" class="md:hidden block" />

                    <button
                        @click="
                            showingNavigationDropdown =
                                !showingNavigationDropdown
                        "
                    >
                        <svg
                            :class="{ hidden: !showingNavigationDropdown }"
                            class="w-10 h-10 fill-current text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div class="text-white">
                    <div
                        class="border-b-2 pt-12 border-gray-200 border-opacity-10 pb-5 px-3"
                    >
                        <a
                            variant="white"
                            href="/"
                            class="w-full text-left text-2xl"
                        >
                            Home
                        </a>
                    </div>
                    <div
                        class="border-b-2 py-5 border-gray-200 border-opacity-10 pb-5 px-3"
                    >
                        <a
                            variant="white"
                            href="/about"
                            class="w-full text-left text-2xl"
                        >
                            About Us
                        </a>
                    </div>

                    <button
                        @click="sideNavDropdown = !sideNavDropdown"
                        :class="{
                            'bg-brand-primary-light-blue': sideNavDropdown,
                        }"
                        class="border-b-2 py-5 border-gray-200 border-opacity-10 pb-5 w-full"
                    >
                        <div class="flex justify-between items-center">
                            <span class="text-2xl text-white px-3">
                                Our Work
                            </span>

                            <span
                                class="px-5"
                                :class="{
                                    'transform rotate-180': sideNavDropdown,
                                }"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2.5"
                                    stroke="currentColor"
                                    class="w-7 h-7 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div
                            v-if="sideNavDropdown"
                            class="bg-brand-primary-light-blue"
                        >
                            <ul
                                class="text-left px-3 pt-5 flex flex-col space-y-3"
                            >
                                <Link variant="white">Comic Art</Link>
                                <Link variant="white">Board Game Art</Link>
                                <Link variant="white">Book Illustration</Link>
                                <Link variant="white">Concept Art</Link>
                                <Link variant="white">Character Design</Link>
                                <Link variant="white">Enviroment Art</Link>
                                <Link variant="white">Game Assets</Link>
                            </ul>
                        </div>
                    </button>

                    <div class="py-5 pb-5 px-3">
                        <a
                            variant="white"
                            href="/careers"
                            class="w-full text-left text-2xl"
                        >
                            Careers
                        </a>
                    </div>

                    <div class="justify-center flex px-3">
                        <ButtonLink class="w-full py-3 font-medium text-sm">
                            <span class="flex items-center">
                                Get in Touch
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2.0"
                                        stroke="currentColor"
                                        class="w-3.5 h-3.5 ml-1"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </span>
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
