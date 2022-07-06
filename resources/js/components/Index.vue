<template>
<Header />
<div class="bg-sky-500 h-screen mb-6">
    <div class="flex justify-between w-full space-x-4 max-w-screen-xl mx-auto py-4">
        <!-- <section class=""> -->
        <Categorymenu class="w-1/5" />

        <!-- slider section -->
        <div class="w-3/5 space-y-5 ">
            <div class="hidden lg:block sm:px-0 px-6 font-bold py-3 sm:py-0">
                <a href="#" class="hover:text-red-500 hover:font-bold">LIVE</a>
                <a href="#" class="hover:text-red-500 hover:font-bold">Flash Deals</a>
                <a href="#" class="hover:text-red-500 hover:font-bold">Stories You'll Love</a>
                <a href="#" class="hover:text-red-500 hover:font-bold">New user Zone</a>
            </div>
            <!-- Image sliders section -->
            <Sliders />

            <!-- welcome section -->
            <div class=" w-full flex items-center px-6 h-60 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg">
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
                    <div class="rounded-lg h-40 py-0 w-28 bg-white ">
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
        <div class="w-1/5 hidden lg:block">
            <JoinAccount />
        </div>
        <!-- </section> -->
    </div>

    <!-- begin product section -->
    <div class="product-section">
        <div class="grid grid-cols-4 gap-3 max-w-screen-xl mx-auto p-1">
            <div class="bg-white rounded-md">
                <a href="https://jumia.nexup.xyz/flash-sale">
                    <div class="servicesdzs flex flex-row content-center items-center p-1 justify-start">
                        <img src="https://jumia.laraup.com/upload/images/services/jumiaone_2.png" alt="Airtime &amp; Bills">
                         <span class="servicesdz">Airtime &amp; Bills</span></div>
                </a>
            </div>
            <div class="bg-white rounded-md p-2">2</div>
            <div class="bg-white rounded-md p-2">3</div>
            <div class="bg-white rounded-md p-2">4</div>
        </div>

        <FlashDeals/>

        <div class="grid  md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto rounded-md  mt-1 px-1 gap-2 bg-white">

            <div class="shadow rounded-md py-1">
                <a title="j01" href="#">
                    <img width="" src="http://jumia.laraup.com/upload/images/banner/7299_DB1.jpg" class="w-full rounded-md">
                    <p class="text-sm" style="text-align: center;color: #333;"></p>
                </a>
            </div>

            <div class="shadow rounded-md py-1 ">
                <a title="j01" href="#">
                    <img width="" src="http://jumia.laraup.com/upload/images/banner/7299_DB1.jpg" class="w-full rounded-md">
                    <p style="text-align: center;color: #333;font-size: 14px;"></p>
                </a>
            </div>

        </div>

        <div class="showall space-y-4">
            <CategoryProducts />
        </div>
    </div>

</div>
</template>

<script>
import Header from "./Header";
import Categorymenu from "../components/HeroSection/CategoryMenu.vue";
import Sliders from "../components/HeroSection/HomeSliders";
import JoinAccount from '../components/HeroSection/JoinAccount.vue'
import CategoryProducts from '../components/productsSection/CategoryProductsCarousel.vue'
import FlashDeals from '../components/productsSection/FlashDealsProductsCarousel.vue'
export default {
    name: "Welcome",
    components: {
        Header,
        Sliders,
        Categorymenu,
        JoinAccount,
        CategoryProducts,
        FlashDeals
    },

    props: {},
};
</script>

<style scoped></style>
