<template>
<div>
    <Header />
    <router-view></router-view>
    <!-- <h3>master comp</h3> -->
     <!-- <slot></slot> -->

</div>
</template>
<script>
import Header from "../Header";
export default {
    components:{
Header
    },
 mounted() {
        // console.log('master called');
    },
}

</script>
