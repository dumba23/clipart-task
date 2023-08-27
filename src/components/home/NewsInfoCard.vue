<template>
  <div class="flex flex-col font-bgp text-sm bg-white px-4 py-2">
    <div class="flex items-center space-x-1">
      <IconClock />
      <span class="text-purple-primary">{{ time }}</span>
      <IconDot />
      <span class="text-purple-primary">{{ date }}</span>
    </div>
    <div class="border-b-2 border-dashed pb-2">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import IconClock from "@/components/icons/IconClock.vue";
import IconDot from "@/components/icons/IconDot.vue";

defineProps({
  date: { required: true, type: String },
  description: { required: true, type: String },
  time: { required: true, type: String },
});
</script>
