<template>
    <Navbar/>
    <Header/>
</template>

<script>

import Navbar from './Navbar.vue';
import Header from './Header'
export default {
    name: "Welcome",
    components: {
        Navbar,
        Header,
    },

    props: {},


};
</script>

<style scoped></style>
