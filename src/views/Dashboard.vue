<template>
<div class="w-full h-[100vh]">

<div class="text-white bg-blue-500 h-[10%]">
<Header/>
</div>
<div class="h-[85%]">
<Landing/>
</div>
<div class="h-[5%]">
<Footer/>
</div>
</div>
</template>


<script setup lang='ts'>
import Header from '/src/components/Header.vue';
import Landing from '/src/components/Landing.vue';
import Footer from '/src/components/Footer.vue'
</script>