<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "frontend-master",
    props: [
        "languages",
        "flags",
        "currencies",
        "user",
        "active_language",
        "active_currency",
        "wishlists",
        "carts",
        "categories",
        "sliders",
        "services",
        "settings_data",
        "viewed_products",
        "pages",
        "compare_list",
        "default_currency",
        "home_components",
        "default_assets",
        "add_ons",
        "shop_follower",
        "lang_keywords",
        "banners",
    ],

    mounted() {
       this.$store.dispatch('categories');
       this.$store.dispatch('homeSliders');
    },
};
</script>
