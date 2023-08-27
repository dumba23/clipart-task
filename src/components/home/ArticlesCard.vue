<template>
  <div
    class="bg-white max-w-[300px] tb:min-w-[100%] tb:max-w-full flex flex-col p-3 rounded-2xl"
  >
    <img
      :src="image"
      alt="image"
      :class="
        expanded ? 'min-w-[100%] max-h-[200px] object-cover rounded-2xl' : ''
      "
    />
    <div class="flex mt-2 space-x-2">
      <div class="font-semibold bg-primary-light px-2 py-2 rounded-xl text-xs">
        12.08.2023
      </div>
      <div class="font-semibold bg-primary-light px-2 py-2 rounded-xl text-xs">
        პოლიტიკა
      </div>
    </div>
    <div class="font-medium mt-2">{{ description }}</div>
  </div>
</template>
<script setup>
defineProps({
  image: { required: true, type: String },
  description: {
    required: false,
    type: String,
    default: "ქვემო ქართლის რეგიონში 20მლნ",
  },
  expanded: {
    required: false,
    type: Boolean,
    default: false,
  },
});
</script>
