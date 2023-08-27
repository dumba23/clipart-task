<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import MainSlider from "@/components/home/MainSlider.vue";
import NewsInfo from "@/components/home/NewsInfo.vue";
import KnownFacts from "@/components/home/KnownFacts.vue";
import ArticlesInfo from "@/components/home/ArticlesInfo.vue";
import PopularInfo from "@/components/home/PopularInfo.vue";
</script>

<template>
  <TheHeader />
  <div
    class="flex px-72 ls:px-10 md:px-28 justify-between mt-10 mb:mt-4 mb:px-0"
  >
    <MainSlider class="w-[72%] tb:w-[100%]" />
    <NewsInfo class="w-[25%] tb:hidden" />
  </div>
  <div
    class="hidden tb:flex flex-row px-10 justify-between mt-10 mb:mt-4 mb:px-0 mb:flex-col"
  >
    <NewsInfo class="w-[48%] mb:w-[100%]" />
    <PopularInfo class="w-[48%] mb:w-[100%] mt-4" />
  </div>
  <div class="flex px-72 ls:px-10 md:px-28 justify-between mt-10 mb:px-0">
    <div class="flex flex-col w-[72%] tb:w-[100%]">
      <KnownFacts />
      <ArticlesInfo />
    </div>
    <PopularInfo class="w-[25%] tb:hidden" />
  </div>
</template>
