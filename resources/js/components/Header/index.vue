<template>

    <Top/>
    <div class="flex items-center justify-between container mx-auto md:px-64 bg-white py-3 sticky">
        <Logo/>
        <Search/>
    </div>
</template>

<script>
import Top from '../Navbar.vue';
import Logo from './LogoHeader.vue';
import Search from './SearchComponent.vue'

export default{
    components:{
        Top,
        Logo,
        Search,
    },
}
</script>
