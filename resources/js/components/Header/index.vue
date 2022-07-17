<template>
<div class="hidden lg:block">
    <Top />
    <div class="flex items-center justify-between container mx-auto md:px-64 bg-white py-3 sticky">
        <Logo />
        <Search />
    </div>
</div>

<!-- <-- Mobile menu display /-->
<div class="sm:block lg:hidden">
    <header class="flex-shrink-0 z-50 top-0 bg-white text-sm block shadow-sm box-border">
        <div class="flex items-center min-h-[56px] max-w-full w-full flex-wrap flex-initial box-border">
            <div class="flex items-center basis-1/2 min-w-[50%] max-w-[50%] w-1/2 px-2 box-border text-sm">
                <button @click="openMenu()" class="p-2 flex-shrink-0 inline-block normal-case rounded-[99px] m-0 overflow-visible bg-transparent border-0">
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

                <a href="#" role="button" class="relative flex mx-2 p-2 flex-shrink-0 rounded-[99px] normal-case bg-transparent box-border">
                    <ShoppingCartIcon class="h-6 w-6 text-slate-500 box-border text-sm items-center overflow-hidden block" aria-hidden="false" aria-label="Cart" />
                    <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">5
                    </span>
                </a>
            </div>
        </div>

        <div class="items-center justify-center box-border block text-sm overflow-visible sticky">
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

<div class="sdw _open left-0 top-0 bottom-0 fixed overflow-y-auto block bg-white box-border z-[90] w-[87vw]" :class="isOpen ? 'block transform -translate-x-4' : 'hidden'">
    <div class="p-4 box-border flex normal-case border-b-2">
        <XIcon @click="closeMenu()" class="h-6 w-6 mr-4 text-gray-700 box-border font-bold text-sm overflow-hidden items-center block cursor-pointer" aria-hidden="false" aria-label="Close side drawer" />

        <a href="/" class="box-border inline-block normal-case cursor-pointer">
            <h1 class="text-red-500">LARAEXPRESS</h1>
        </a>
    </div>

    <button class="w-full relative py-2 px-4 mx-4 min-h-48 items-center flex normal-case overflow-visible bg-transparent box-border font-normal text-sm">
        <ChatAltIcon class="h-6 w-6 mr-4 text-slate-600 box-border text-sm" aria-hidden="true" />
        Live Help
        </button>
        
        <a href="/customer/account/index/" class="text-xs py-2 px-4 items-center relative min-h-[40px] justify-between flex normal-case bg-transparent box-border text-yellow-400">
        <span class="-b -or5 -upp">My LaraExpress account</span>

         <ChevronRightIcon class="h-6 w-6 mr-4 text-slate-600 box-border text-sm" aria-hidden="true" />
        </a>
        
        <a href="/customer/order/index/" class="sdl">
        <svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#orders"></use>
        </svg>Orders</a><a href="/customer/reviewsratings/index/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#reviews"></use>
        </svg>Pending Reviews</a><a href="/customer/coupon/index/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#vouchers"></use>
        </svg>Jumia Credit</a><a href="/customer/wishlist/index/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#saved-items"></use>
        </svg>Saved Items</a><a href="/categories/navigation/" class="sdtl"><span class="-b -or5 -upp">Our Categories</span><span class="-und">See All</span></a><a href="/groceries/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-groceries"></use>
        </svg>Supermarket</a><a href="/phones-tablets/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-mobile"></use>
        </svg>Phones &amp; Tablets</a><a href="/home-office/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-appliance"></use>
        </svg>Home &amp; Office</a><a href="/electronics/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-tv"></use>
        </svg>Electronics</a><a href="/health-beauty/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-health"></use>
        </svg>Health &amp; Beauty</a><a href="/category-fashion-by-jumia/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-fashion"></use>
        </svg>Fashion</a><a href="/computing/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-computing"></use>
        </svg>Computing</a><a href="/sporting-goods/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-fitness"></use>
        </svg>Sporting Goods</a><a href="/patio-lawn-garden/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-garden"></use>
        </svg>Garden &amp; Outdoors</a><a href="/video-games/" class="sdl"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#cat-games"></use>
        </svg>Gaming</a><a href="/our-services/" class="sdtl"><span class="-b -or5 -upp">Our Services</span><span class="-und">See All</span></a><a href="/mlp-jumia-prime/" class="sdl" target="_blank" rel="noopener"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#services"></use>
        </svg>Jumia Prime</a><a href="https://5ey6.adj.st/?adjust_t=8t895ve_7uo0yhw&amp;adjust_deeplink=jumiafood%3A%2F%2F" class="sdl" target="_blank" rel="noopener"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#food"></use>
        </svg>Jumia Food</a><a href="https://5ey6.adj.st/?adjust_t=8t895ve_7uo0yhw&amp;adjust_deeplink=jumiafood%3A%2F%2F" class="sdl" target="_blank" rel="noopener"><svg class="ic" width="24" height="24">
            <use href="https://www.jumia.ug/assets_hy/images/i-icons.f394608b.svg#party"></use>
        </svg>Jumia Party</a><a href="/sell-on-jumia/" class="sdl -hr">Sell on Jumia</a><a href="/faq/" class="sdl">Help Center</a><a href="/contact/" class="sdl">Contact us</a>
</div>
</template>

<script>
import {
    UserIcon,
    ShoppingCartIcon,
    ChatAltIcon,
    XIcon
} from "@heroicons/vue/outline";
import {
    MenuIcon,
    ChevronRightIcon
} from "@heroicons/vue/solid";
import Top from "../Navbar.vue";
import Logo from "./LogoHeader.vue";
import Search from "./SearchComponent.vue";

export default {
    components: {
        Top,
        MenuIcon,
        ChevronRightIcon,
        ShoppingCartIcon,
        ChatAltIcon,
        XIcon,
        UserIcon,
        Logo,
        Search,
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        openMenu() {
            return (this.isOpen = true);
        },

        closeMenu() {
            return (this.isOpen = false);
        },
    },
};
</script>
<style scoped>
.sdl {
    padding-bottom: 12px;
    padding-top: 12px;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 48px;
    align-items: center;
    display: flex;
    background-color: transparent;
    font-size: .875rem
}

.sdtl{
padding-right: 16px;
padding-top: 8px;
min-height: 40px;
position: relative;
align-items: center;
justify-content: space-between;
display: flex;
margin-right: 10px;
}
a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
    background-color: transparent;
    color: inherit;
    outline: 0;
}
</style>