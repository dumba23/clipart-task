<template>
  <div class="bg-white p-4 rounded-2xl">
    <div class="flex justify-between">
      <h1 class="text-base font-medium">ცნობილი ფაქტები</h1>
      <div class="flex space-x-4">
        <div
          @click="handleScrollLeft"
          class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-arrow cursor-pointer"
        >
          <IconArrowLeft />
        </div>
        <div
          @click="handleScrollRight"
          class="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-arrow cursor-pointer"
        >
          <IconArrowRight />
        </div>
      </div>
    </div>
    <div
      class="flex overflow-x-scroll scrollbar-none p-4 space-x-10"
      ref="scrollEl"
    >
      <KnownFactsCard v-for="slider in sliders" :key="slider" />
    </div>
  </div>
</template>

<script setup>
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import KnownFactsCard from "@/components/home/KnownFactsCard.vue";
import { ref } from "vue";

const scrollEl = ref(null);
const sliders = [1, 2, 3, 4, 5];

const handleScrollRight = () => {
  scrollEl.value.scrollTo({
    left: scrollEl.value.scrollLeft + 350,
    behavior: "smooth",
  });
};

const handleScrollLeft = () => {
  scrollEl.value.scrollTo({
    left: scrollEl.value.scrollLeft - 350,
    behavior: "smooth",
  });
};
</script>
