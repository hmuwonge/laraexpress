<template>
    <div class="flex flex-col">
<div class="flex w-full">
    <input type="text" placeholder="shoes fashion" class="w-120 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent rounded-l-md border-2 border-red-500 border-r-0">
    <select class="w-1/4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent border-2 border-red-500 border-r-0 border-l-0">
        <option>All Categories</option>
        <option>All Categories</option>
        <option>All Categories</option>
        <option>All Categories</option>
        <option>All Categories</option>
        <option>All Categories</option>
        <option>All Categories</option>
    </select>
    <button class="bg-red-500 text-white px-2 rounded-r-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
    </button>
   <Cart/>
</div>
<div class="max-w-10/12 grid grid-cols-6 text-xs text-gray-400 divide-x-2  divide-gray-300 space-x-2 py-2">
    <a href="" class="hover:text-red-500 text-center ">running pants men</a>
    <a href="" class="hover:text-red-500 text-center ">sport legging</a>
    <a href="" class="hover:text-red-500 text-center ">survival kit</a>
    <a href="" class="hover:text-red-500 text-center ">r5 3500x</a>
    <a href="" class="hover:text-red-500 text-center ">ps2 a usb</a>
</div>
    </div>
</template>

<script>
import Cart from './CartComponent.vue'
export default{
    components: {
        Cart,
    }
}
</script>
