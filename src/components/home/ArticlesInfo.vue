<template>
  <div class="w-[100%] tb:mt-10 mb:mt-4 bg-white rounded-2xl hidden tb:block">
    <ArticlesCard
      :image="ArticleImg2"
      expanded
      description="ქვემო ქართლის რეგიონში 20მლნ ლარამდე ღირებულების"
    />
  </div>
  <div
    class="flex justify-between mt-10 mb:mt-4 mb:flex-col mb:space-y-4 mb:mb-4"
  >
    <div class="flex flex-col space-y-4">
      <ArticlesCard :image="ArticleImg" />
      <ArticlesCard :image="ArticleImg1" />
    </div>
    <div class="h-full bg-white rounded-2xl tb:hidden">
      <ArticlesCard
        :image="ArticleImg2"
        description="ქვემო ქართლის რეგიონში 20მლნ ლარამდე ღირებულების"
      />
    </div>
    <div class="flex flex-col space-y-4">
      <ArticlesCard :image="ArticleImg3" />
      <ArticlesCard :image="ArticleImg4" />
    </div>
  </div>
</template>

<script setup>
import ArticlesCard from "@/components/home/ArticlesCard.vue";
import ArticleImg from "@/assets/images/article.png";
import ArticleImg1 from "@/assets/images/article1.png";
import ArticleImg2 from "@/assets/images/article2.png";
import ArticleImg3 from "@/assets/images/article3.png";
import ArticleImg4 from "@/assets/images/article4.png";
</script>
