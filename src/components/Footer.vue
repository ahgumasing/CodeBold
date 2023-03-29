<script lang="ts" setup>
import Logo from './svg/Logo.vue';
import Link from './Link.vue';
</script>

<template>
    <footer class="bg-brand-secondary-gray md:px-5 md:text-sm lg:text-base">
        <div class="max-w-5xl mx-auto py-8">
            <div class="md:flex items-center border-t-2 pt-8 px-2">
                <Logo
                    class="w-28 h-full md:block hidden"
                    name="vertical-gradient"
                />
                <Logo
                    class="w-32 h-full md:hidden"
                    name="horizontal-gradient"
                />

                <div
                    class="md:flex w-full justify-end md:space-x-10 pr-12 pt-8 md:pt-0"
                >
                    <div>
                        <h3 class="uppercase text-gray-500 font-semibold">
                            Site Map
                        </h3>
                        <ul class="py-3 flex flex-col space-y-1">
                            <Link variant="primary">About Us</Link>
                            <Link variant="primary">Our Work</Link>
                            <Link variant="primary">Careers</Link>
                            <Link variant="primary">Contact Us</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 class="uppercase text-gray-500 font-semibold">
                            Services
                        </h3>
                        <ul class="py-3 flex flex-col space-y-1">
                            <Link variant="primary"
                                >Comic art & Illustration</Link
                            >
                            <Link variant="primary">Board Game art</Link>
                            <Link variant="primary"
                                >Book cover & Illustration</Link
                            >
                            <Link variant="primary">Concept art</Link>
                        </ul>
                    </div>
                </div>

                <div class="border-l-2 py-5 px-8 md:block hidden">
                    <h3 class="uppercase text-gray-500 font-semibold">
                        Careers
                    </h3>
                    <p class="w-56 pt-2 text-gray-400">
                        Do your best working among a caring community of diverse
                        talents.
                    </p>

                    <Link
                        class="underline-offset-8 underline decoration-2 decoration-brand-secondary-pink font-semibold uppercase w-24 pb-1 flex items-center text-brand-primary-light-blue mt-7"
                    >
                        Join Us
                        <span class="mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
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
                    </Link>
                </div>
            </div>
            <p
                class="md:text-center text-gray-400 pt-12 text-sm px-2 w-52 md:w-full text-left"
            >
                Copyright © 2022 CodeBold. All Rights Reserved.
            </p>
        </div>
    </footer>
</template>

<style></style>
