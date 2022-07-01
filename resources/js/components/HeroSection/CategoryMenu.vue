<template>
<div class="bg-white py-4 rounded-xl hidden lg:block">

                <p class="flex items-center px-4">
                    <CatIcon class="h-6 w-6 mr-2"/>
                    Categories
                </p>

                <ul class="space-y-1 mt-4 text-xs cursor-pointer">
                    <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Women's Fashion</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:font-bold  hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Men's Fashion</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Phones & Telecommunication</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Computer, Office & Security</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Consumer Electronics</a>
                    </li>
                     <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Home, Pet & Appliances</a>
                    </li>

                     <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Bags & Shoes</a>
                    </li>

                     <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">toys, Kids & Babies</a>
                    </li>

                     <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Outdoor Fun & Sports</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Outdoor Fun & Sports</a>
                    </li>
                    <li class="flex items-center hover:text-red-500 hover:font-bold hover:shadow-lg py-2 px-4">
                        <Icon class="h-6 w-6 mr-2 text-gray-400"/>
                        <a href="" class="">Outdoor Fun & Sports</a>
                    </li>

                </ul>

            </div>
            </template>
<script>
import Icon from '../Icons/icon.vue'
import CatIcon from '../Icons/category'
export default {
    name: "Welcome",
    components: {
        CatIcon,
        Icon,
       },

    props: {},

};
</script>
