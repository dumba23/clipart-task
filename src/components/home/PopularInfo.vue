<template>
  <div
    class="max-h-[585px] tb:max-h-[280px] overflow-y-scroll bg-white rounded-xl scrollbar scrollbar-thumb-gray-600"
  >
    <h1 class="font-bold text-xl p-4">პოპულარული</h1>
    <PopularCard v-for="data in staticData" :description="data.description" />
  </div>
</template>

<script setup>
import PopularCard from "@/components/home/PopularCard.vue";

const staticData = [
  {
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
];
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 4px;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
}
</style>
