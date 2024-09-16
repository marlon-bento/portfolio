<template>
    <div class="banner w-full">
        <img id="BannerBackground" :src="bannerI" class="w-full block container-banner-image" alt="Banner Background"/>

        <div id="BannerText" class="absolute z-20 w-full banner-image ps-10">
            <h2 class=" text-roxo-fraco text-xl md:text-2xl text-start font-bold">Hello!</h2>
            
            <p class=" text-white text-start text-xs md:text-xl font-bold">Bem vindo à minha trajetória </p>
            <h1 class=" text-roxo-fraco  text-2xl md:text-4xl text-start font-bold m-0 p-0">Márlon Bento Azevedo</h1>
        </div>
    </div>
</template>

<script setup>
import bannerI from '@/assets/underbanner.png';


const bannerBackground = bannerI;


</script>

<style scoped>
#BannerText{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.68);
    -webkit-text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.68);
    -moz-text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.68);
}
.banner{
    position: relative;
    display: inline-block;
}
.container-banner-image{
    height: 350px;
}
.banner-image{
    object-fit: cover;
}
</style>
