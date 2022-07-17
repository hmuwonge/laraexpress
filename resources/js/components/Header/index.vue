<template>
<div class="hidden lg:block">
    <Top />
    <div class="flex items-center justify-between container mx-auto md:px-64 bg-white py-3 sticky">
        <Logo />
        <Search />
    </div>
</div>

<div class="sm:block lg:hidden">
    <header class="flex-shrink-0 z-50 top-0 bg-white block shadow-sm box-border">
        <div class="flex items-center min-h-[56px] max-w-full w-full flex-wrap flex-initial box-border">

            <div class="flex items-center basis-1/2 min-w-[50%] max-w-[50%] w-1/2 px-2 box-border text-sm">
                <button class="p-2 flex-shrink-0 inline-block normal-case rounded-[99px] m-0 overflow-visible bg-transparent border-0">
                    <span class="box-border normal-case">
                        <MenuIcon class="h-6 w-6 mr-4 text-slate-500 box-border text-xs items-center overflow-hidden block" aria-hidden="false" />
                    </span>
                </button>
                <a href="/" class="-fs0 mx-1 p-1 text-red-500 normal-case text-sm font-semibold inline-block bg-transparent box-border">
                    <h3>LaraExpress</h3>
                </a>
            </div>

            <div class="flex justify-end basis-1/2 min-w-[50%] max-w-[50%] w-1/2 px-2 box-border">
                <a href="/customer/account/index/" class="mx-2 p-2 flex-shrink-0 rounded-[99px] normal-case bg-transparent box-border">
                    <UserIcon class="h-6 w-6 mr-4 text-slate-500 box-border text-sm items-center overflow-hidden block" aria-hidden="false" aria-label="My account" />
                </a>

                <!-- <a href="/cart/" class="mx-2 p-2 flex-shrink-0 rounded-[99px] normal-case bg-transparent box-border">
                <span>
                        <ShoppingCartIcon class="h-6 w-6 mr-4 text-slate-500 box-border text-sm items-center overflow-hidden block" aria-hidden="false" aria-label="Cart" />
                        <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
    </span>
                         </span>
                         </a> -->
                <a href="#" role="button" class="relative flex mx-2 p-2 flex-shrink-0 rounded-[99px] normal-case bg-transparent box-border">
                   <ShoppingCartIcon class="h-6 w-6  text-slate-500 box-border text-sm items-center overflow-hidden block" aria-hidden="false" aria-label="Cart" />
                    <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
                    </span>
                </a>
            </div>
        </div>
        <!-- <div class="p-8 box-border block text-sm">
                <button class="-rnd -ba-gy3 -fw -df -i-ctr -pvxs -phs">
                    <svg class="ic -fsh0 -mrs" width="24" height="24">
                        <use
                            xlink:href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#search"
                        ></use></svg
                    ><span class="-fs14 -gy5 -elli"
                        >Search products, brands and categories</span
                    >
                </button>
            </div> -->

        <div class=" items-center justify-center  box-border block text-sm  overflow-visible ">
            <form method="GET">
                <div class="relative text-gray-600 focus-within:text-gray-400 p-2">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" class="p-2 focus:outline-none focus:shadow-outline">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="q" class="py-2 text-sm text-white bg-transparent rounded-[99px] pl-10 focus:outline-none w-full focus:bg-white focus:text-gray-900" placeholder="Search products, brands and categories" autocomplete="off" />
                </div>
            </form>
        </div>
    </header>
</div>
</template>

<script>
import {
    UserIcon,
    ShoppingCartIcon
} from "@heroicons/vue/outline";
import {
    MenuIcon
} from "@heroicons/vue/solid";
import Top from "../Navbar.vue";
import Logo from "./LogoHeader.vue";
import Search from "./SearchComponent.vue";

export default {
    components: {
        Top,
        MenuIcon,
        ShoppingCartIcon,
        UserIcon,
        Logo,
        Search,
    },
};
</script>
