<template>
<Header />
<div class="bg-gray-100 h-screen">
    <div class="flex justify-between w-full space-x-4 max-w-screen-xl mx-auto py-6">
        <Categorymenu class="w-1/4" />

        <!-- slider section -->
        <div class="w-3/5 space-y-6">
            <div class="space-x-6 font-bold py">
                <a href="#" class="hover:text-red-5">LIVE</a>
                <a href="#" class="hover:text-red-5">Flash Deals</a>
                <a href="#" class="hover:text-red-5">Stories You'll Love</a>
                <a href="#" class="hover:text-red-5">New user Zone</a>
            </div>
            <div class="bg-red-400 h-64 sm:h-64 xl:h-80 2xl:h-50 rounded-lg">
                <div id="default-carousel" class="relative border-2 border-blue-500 h-full" data-carousel="slide">
                    <!-- Carousel wrapper -->
                    <div class="overflow-hidden relative h-64 rounded-lg sm:h-64 xl:h-80 2xl:h-50">
                        <!-- Item 1 -->
                        <div class="duration-700 h-full ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-black-translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                            <img src="https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                        </div>
                        <!-- Item 2 -->
                        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                            <img src="https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                        </div>
                        <!-- Item 3 -->
                        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                            <img src="https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
                        </div>
                    </div>
                    <!-- Slider indicators -->
                    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                        <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>
                    <!-- Slider controls -->
                    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
                        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            <span class="hidden">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <span class="hidden">Next</span>
                        </span>
                    </button>
                </div>
                <!-- <img src="https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp" alt="" srcset="" class="rounded-lg" /> -->
            </div>
            <!-- welcome section -->
            <div class="w-full flex items-center px-6 h-60 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg">
                <div class="w-1/4 space-y-8">
                    <h5 class="font-bold text-white">Welcome newcommers</h5>
                    <p class="text-white">
                        Exclusive prices for new users: act now!
                    </p>
                    <button class="bg-red-500 text-white py-4 px-2">
                        Get your coupon
                    </button>
                </div>
                <!-- slider lower section -->
                <div class="flex w-3/4 space-x-1">
                    <div class="rounded-lg h-40 py-0 w-28 bg-white">
                        <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                        <div class="mx-auto px-4 py-1">
                            <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                Ush 500
                            </p>
                            <p class="w-full text-gray-600 line-through text-sm font-medium">
                                Ush 500
                            </p>
                        </div>
                    </div>
                    <div class="rounded-lg h-40 py-0 w-28 bg-white">
                        <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                        <div class="mx-auto px-4 py-1">
                            <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                Ush 500
                            </p>
                            <p class="w-full text-gray-600 line-through text-sm font-medium">
                                Ush 500
                            </p>
                        </div>
                    </div>
                    <div class="rounded-lg h-40 py-0 w-28 bg-white">
                        <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                        <div class="mx-auto px-4 py-1">
                            <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                Ush 500
                            </p>
                            <p class="w-full text-gray-600 line-through text-sm font-medium">
                                Ush 500
                            </p>
                        </div>
                    </div>
                    <div class="rounded-lg h-40 py-0 w-28 bg-white">
                        <img src="https://ae04.alicdn.com/kf/S75592416283e4801a9044766f51a8bb0B.jpg_120x120Q90.jpg_.webp" alt="" srcset="" />

                        <div class="mx-auto px-4 py-1">
                            <p class="font-bold text-white bg-red-500 rounded-lg text-sm px-2">
                                Ush 500
                            </p>
                            <p class="w-full text-gray-600 line-through text-sm font-medium">
                                Ush 500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- welcome profile section -->
        <div class="w-1/5">
            <JoinAccount />

        </div>
    </div>
</div>
</template>

<script>
import Header from "./Header";
import Categorymenu from "../components/HeroSection/CategoryMenu.vue";
import JoinAccount from '../components/HeroSection/JoinAccount.vue'
export default {
    name: "Welcome",
    components: {
        Header,
        Categorymenu,
        JoinAccount
    },

    props: {},
};
</script>

<style scoped></style>
