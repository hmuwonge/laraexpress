<template>
    <Header/>
    <div class="bg-gray-100 h-screen">
        <div class="w-full container px-64 py-6">
            <div class="bg-white p-4 rounded-xl w-1/4 ">

                <p class="flex items-center">
                    <CatIcon class="h-6 w-6 mr-2"/>
                    Categories
                </p>

                <ul class="space-y-3 mt-4 text-sm cursor-pointer">
                    <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1 ">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Women's Fashion</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Men's Fashion</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Phones & Telecommunication</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Computer, Office & Security</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Consumer Electronics</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Home, Pet & Appliances</a>
                    </li>

                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Bags & Shoes</a>
                    </li>

                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">toys, Kids & Babies</a>
                    </li>

                     <li class="flex items-center hover:text-red-500 hover:shadow-lg py-2 px-1">
                        <Icon class="h-6 w-6 mr-2"/>
                        <a href="" class="">Outdoor Fun & Sports</a>
                    </li>

                </ul>

            </div>

            <!-- slider section -->
            <div class="bg-white w-2/4"></div>

             <!-- welcome profile section -->
            <div class="bg-white w-1/4"></div>
        </div>

    </div>
</template>

<script>
import Header from './Header';
import Icon from '../components/Icons/icon'
import CatIcon from '../components/Icons/category'
export default {
    name: "Welcome",
    components: {
        Header,
        Icon
    },

    props: {},

};
</script>

<style scoped>
</style>
