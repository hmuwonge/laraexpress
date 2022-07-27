<template>
<div class="h-[270px] xl:h-[270px] 2xl:h-[270px]  sm:h-10 sm:w-full md:w-full sm:basis-full sm:max-w-[100%] rounded-md  sm:min-w-[100%] box-border">

    <div class="h-full w-full box-border">
        <!-- Carousel wrapper -->
        <div class="relative">
            <!-- Item 1 -->
            <carousel :items-to-show="1.5" :settings="settings" :breakpoints="breakpoints" :nav="true" class="">

                <slide v-for="slide in sliders" :key="slide">
                    <div class="carousel__item rounded-md">

                        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20">
                            <!-- <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-black-translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span> -->
                            <img :src="slide" class="block absolute rounded-md top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
                            alt="...">
                        </div>
                    </div>
                </slide>

                <template #addons="{slidesCount}">
                    <navigation v-if="slidesCount"/>
                    <pagination class="relative p-0 m-0 z-50 -mt-6 items-center justify-center "/>
                </template>
            </carousel>
        </div>
    </div>

</div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {
    Carousel,
    Slide,
    Pagination,
    Navigation
} from "vue3-carousel";

export default {
    name: "App",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00',
            distance: 0,
            countdown: null,

            // carousel settings
            settings: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 1.5,
                    snapAlign: "center",
                },
                // 1024 and up
                1024: {
                    itemsToShow: 1,
                    snapAlign: "start",
                },
            },

            sliders: [
                'https://ae01.alicdn.com/kf/Sdaac9c71ac56435eb1f10764cf4421efK.png_.webp',
                'https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp',
                "https://ae01.alicdn.com/kf/H963baeb18cf34790824e4b02e05f39abe.jpg_Q90.jpg_webp"
            ]
        }
    },
    // data: () => ({
    //     // carousel settings

    // }),
};
</script>

<style scoped>
.carousel__item {
    @apply h-[270px] xl:h-[270px] 2xl:h-[270px] w-full text-sm flex justify-center items-center bg-transparent;
}

.carousel__slide {
    /* padding: 10px; */
}

.carousel__prev{
    left: 11px !important;
}

.carousel__next {
    top: 50%;
    right: 11px !important;
    transform: translate(50%, -50%);
    background: url(//ae01.alicdn.com/kf/H3a2170950d3848dd85531682a4dc5ef21.png) no-repeat;
}
.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 3px solid white;
    color: aliceblue;
    top: 50%;
    transform: translate(50%, -50%);
}

.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}
.carousel__pagination {
    @apply text-white;
    z-index: unset;
}
</style>

<style scoped>
.home-banner {}
</style>
