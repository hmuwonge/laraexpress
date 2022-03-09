<template>
    <div>
        <header class="bg-gray-100">
        <nav class="container mx-auto px-8">
            <ul class="flex justify-end space-x-8 py-3 text-sm">
                <li>
                    <a href="">Sell on Laraexpress</a>
                </li>
                <li>
                    <a href="">Help</a>
                </li>
                <li>
                    <a href="/" class="flex items-centered">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        Wishlists
                    </a>
                </li>
                <li
                    @mouseover="isAccountLinkHovered = true"
                    class="relative cursor-pointer"
                >
                    <span :class="isAccountLinkHovered ? 'text-red-400' : ''" class="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        Account
                    </span>
                    <div
                        v-if="isAccountLinkHovered"
                        @mouseleave="isAccountLinkHovered = false"
                        class="absolute right-0 p-4 w-max h-max bg-gray-100 mt-3"
                    >
                        <div
                            class="flex space-x-2 py-2 border-b-2 border-gray-300"
                        >
                            <button
                                class="bg-red-500  text-white py-2 px-8 text-center font-bold"
                            >
                                Join
                            </button>
                            <button
                                class="bg-red-100 text-red-500 py-2 px-8 text-center font-bold"
                            >
                                Sign In
                            </button>
                        </div>
                        <ul class="my-3 text-sm">
                            <li>
                                <a href="">My Orders </a>
                            </li>
                            <li>
                                <a href="">My Coupons </a>
                            </li>
                            <li>
                                <a href="">My Wishlist </a>
                            </li>
                            <li>
                                <a href="">Message </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </header>

    </div>
</template>

<script>

export default {
    name: "Welcome",
    components: {
    },

    props: {},
     data() {
        return {
            isAccountLinkHovered: false,
        };
    },


};
</script>

<style scoped></style>
