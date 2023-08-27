<template>
  <div
    class="max-h-[585px] tb:max-h-[280px] tb:m-0 overflow-y-scroll bg-white rounded-xl scrollbar scrollbar-thumb-gray-600"
  >
    <h1 class="font-bold text-xl p-4">ყველა სიახლე</h1>
    <NewsInfoCard
      v-for="data in staticData"
      :date="data.date"
      :time="data.time"
      :description="data.description"
    />
  </div>
</template>

<script setup>
import NewsInfoCard from "@/components/home/NewsInfoCard.vue";

const staticData = [
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
    description: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა",
  },
  {
    date: "02.01.2023",
    time: "7:30",
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
