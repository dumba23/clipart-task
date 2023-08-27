<template>
  <div
    class="flex justify-between font-bgp text-sm bg-white mx-5 py-2 border-b-2 border-dashed"
  >
    <div class="">
      <img :src="PopularImage" alt="image" class="min-w-[96px] h-24" />
    </div>
    <div class="pb-2 px-4">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import PopularImage from "@/assets/images/popular.png";

defineProps({
  description: { required: true, type: String },
});
</script>
