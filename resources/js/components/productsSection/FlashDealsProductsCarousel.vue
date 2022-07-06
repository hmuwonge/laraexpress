<template>
<div class="max-w-screen-xl mx-auto rounded-md bg-white space-x-4 px-0">
    <div class="row">
        <div class="grid col-lg-12 col-md-12 col-sm-12 col-xs-12 my-2 bg-red-600 rounded-t-md items-center" style="display: block;display: flex;justify-content: space-between;padding: 10px;">
            <h4 class="hidden-xs" style="color:rgb(0, 0, 0);margin-bottom: 0;">What's on your wrist | Watches from 200/=</h4>
            <div class="timemiddle flex" ref="offerDate" data-offerdate="1/1/2023">
                <p>Time Left:</p>
                <div class="counts flex">
                    <div class="count_dd ">
                        <span id="days" class="rounded-full p-1 bg-black text-white">00</span>
                        <b>d :</b>
                    </div>
                    <div class="count_dd">
                        <span id="hour" class="rounded-full p-1 bg-black text-white">00</span>
                        <b>h :</b>
                    </div>
                    <div class="count_dd">
                        <span id="minutes" class="rounded-full p-1 bg-black text-white">00</span>
                        <b>m :</b>
                    </div>
                    <div class="count_dd">
                        <span id="seconds" class="rounded-full p-1 bg-black text-white">00</span>
                    </div>
                </div>
            </div>
            <div class="col -df -j-end -fsh0">
                <a href="#" class="-df -i-ctr -upp -m -mls -pvxs" style="color:rgb(0, 0, 0);">See All
                    <ChevronRightIcon class="h-1 w-1 text-blue-500" aria-hidden="false" />
                    <!-- <i class="fa fa-chevron-right" aria-hidden="true"></i> -->
                </a>
            </div>
        </div>

        <carousel :items-to-show="2" :settings="settings" :breakpoints="breakpoints" :auto-play="true">
            <slide v-for="slide in 20" :key="slide">
                <div class="carousel__item flex justify-center items-center w-full text-sm text-gray-300 my-1 ">
                    <div class="hover:shadow-sm rounded-sm cloned mr-1">
                        <div class="item-inner product-thumb trg transition product-layout">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="image product-image-container">
                                        <div class="box-label ">
                                            <!-- <p class="officialstore">Fashion &amp; Style</p> -->
                                            <span class="label-sale off top-0 right-0 rounded-tl-md rounded-br-md left-auto h-6 absolute text-white bg-gradient-to-r from-red-500 to-yellow-500">-50%</span>
                                        </div>
                                        <a class="lt-image" href="http://jumia.laraup.com/product/fashion-style-bodycon-vest-dress-maroon">
                                            <img height="200" src="http://jumia.laraup.com/upload/images/product/61da8225302c7.jpg" class="img-1 img-responsive rounded-md">
                                        </a>
                                        <img src="http://jumia.laraup.com/upload/images/img_type/5.png" class="officialstores">
                                    </div>
                                </div>
                                <div class="right-block">
                                    <div class="caption">
                                        <h4 style="height: 40px;font-size: 1em;line-height: 20px;text-overflow: ellipsis;border-bottom: 0;
                                        overflow: hidden;margin-bottom: 3px;">
                                            <a style="color: black;float: left;text-align: left;" href="http://jumia.laraup.com/product/fashion-style-bodycon-vest-dress-maroon">Fashion &amp; Style Bodycon Vest Dress - Mar...</a></h4>
                                        <div class="row total-price clearfix" style="visibility: visible; display: block;">
                                            <div class="col-md-12 price" style="min-height: 40px;text-align: left;display: block;line-height: 20px;padding: 0;top: 0px;">
                                                <span class="price-new" style="font-size: 1em;color: #75757a;">$ 750</span><br>
                                                <span class="price-old" style="margin: 0;">$ 1499.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </slide>

            <template #addons>
                <navigation />
                <!-- <pagination /> -->
            </template>
        </carousel>
    </div>
</div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {
    refs
} from 'vue';
import {
    ChevronRightIcon
} from '@heroicons/vue/solid'
import {
    Carousel,
    Slide,
    Pagination,
    Navigation
} from "vue3-carousel";

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        ChevronRightIcon
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 2,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            768: {
                itemsToShow: 4,
                snapAlign: "center",
            },
            // 1024 and up
            1024: {
                itemsToShow: 6,
                snapAlign: "start",
            },
        },
    }),
    // data() {
    //     return {
    //         seconds: '00',
    //         minutes: '00',
    //         hours: '00',
    //         days: '00',
    //         distance: 0,
    //         countdown: null,
    //     }
    // },
    mounted() {
        this.countDownTimer();
    },
    methods: {
        countDownTimer() {
            var offerDate = this.$refs.offerDate;
            var newDate = offerDate.dataset.offerdate;
            if (newDate) {
                var count = new Date(newDate).getTime();
                var x = setInterval(function () {

                    var now = new Date().getTime();
                    var time = count - now;

                    var days = Math.floor(time / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((time % (1000 * 60)) / 1000);

                    document.getElementById("days").innerHTML = days;
                    document.getElementById("hour").innerHTML = hours;
                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;

                    if (days < 0) {
                        clearInterval(x);
                        document.getElementById("days").innerHTML = "EXPIRED";
                    }
                }, 1000);
                console.log(x)
            }
        }
    }
}
</script>

<style scoped>
.carousel__item {
    min-height: 200px;
    border-radius: 4px;
}

.carousel__slide {
    padding: 10px;
    /* background-color: #fff; */
}

li.carousel__slide:hover,
.seller-list:hover {
    transition: all .3s ease 0s;
    -moz-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
    transform: scale(1.0);
    transition: ease-in-out;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}

.off {
    width: 61px;
    z-index: 1;
}

.officialstore {
    position: absolute;
    display: block;
    padding: 3px 19px 3px 5px;
    text-align: left;
    text-transform: capitalize;
    color: #fff;
    font-weight: 400;
    line-height: 20px;
    top: 0px !important;
    z-index: 5;
    right: auto;
    left: 0;
    background: #e52e20;
    border-radius: 3px;
    width: max-content;
}
</style>
