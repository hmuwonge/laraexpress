<template>
<div class="relative flex mx-2 ml-8 p-2 flex-shrink-0 rounded-[99px] normal-case bg-transparent box-borde">
    <ShoppingCartIcon class="h-6 w-6  text-slate-500 box-border text-sm items-center overflow-hidden block" aria-hidden="false" aria-label="Cart" />
    <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
    </span>
</div>
</template>

<script>
import {
    ShoppingCartIcon
} from "@heroicons/vue/outline";

export default {
    components: {
        ShoppingCartIcon
    },
};
</script>
