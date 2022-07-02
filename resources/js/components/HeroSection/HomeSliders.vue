<template>
<div class="bg-red-400 h-full sm:h-64 xl:h-80 2xl:h-50 rounded-lg border-2 border-blue-500">
    <div id="default-carousel" class="relative h-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="overflow-hidden relative h-64 rounded-lg sm:h-64 xl:h-80 2xl:h-50">
            <!-- Item 1 -->
            <div class="duration-700 h-full ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-black-translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                <img src="https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp" class="block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10 h-full" data-carousel-item="">
                <img src="https://ae01.alicdn.com/kf/Sdaac9c71ac56435eb1f10764cf4421efK.png_.webp" class="block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10 h-full" data-carousel-item="">
                <img src="https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp" class="block absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" class="w-3 h-3 rounded-full bg-red-500 dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
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
    
</div>
</template>
