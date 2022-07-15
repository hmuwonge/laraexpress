<template>
<div>
    <Header />

     <div class="w-full mx-auto py-4  h-screen bg-[#F2F2F2]">

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
