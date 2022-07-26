<template>
<div>
    <Header class="main-header"/>

     <div class="w-full mx-auto py-0  h-100vh bg-[#F2F2F2]">

        <slot></slot>

    </div>

</div>
</template>
<script>
import Header from "../components/Header";
export default {
    components: {
        Header
    }
}
</script>
<style scoped>
.main-header {
    @apply sticky z-[70] top-0 shadow-sm;
}
</style>
