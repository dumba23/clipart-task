<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide>
      <div class="p-4 bg-white rounded-2xl font-bgp text-xs">
        <img :src="SliderImg" class="rounded-2xl w-[100%] max-h-[406px]" />
        <div class="space-y-3">
          <div class="flex mt-4 space-x-2">
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              12.08.2023
            </div>
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              პოლიტიკა
            </div>
          </div>
          <h1 class="text-xl font-bold">
            ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
            პროექტები დაიწყება
          </h1>
          <h5 class="text-xs text-gray-600 mb:hidden">
            განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს
            “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD
          </h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="p-4 bg-white rounded-2xl font-bgp text-xs">
        <img :src="SliderImg" class="rounded-2xl w-[100%] max-h-[406px]" />
        <div class="space-y-3">
          <div class="flex mt-4 space-x-2">
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              12.08.2023
            </div>
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              პოლიტიკა
            </div>
          </div>
          <h1 class="text-xl font-bold">
            ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
            პროექტები დაიწყება
          </h1>
          <h5 class="text-xs text-gray-600 mb:hidden">
            განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს
            “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD
          </h5>
        </div>
      </div> </swiper-slide
    ><swiper-slide>
      <div class="p-4 bg-white rounded-2xl font-bgp text-xs">
        <img :src="SliderImg" class="rounded-2xl w-[100%] max-h-[406px]" />
        <div class="space-y-3">
          <div class="flex mt-4 space-x-2">
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              12.08.2023
            </div>
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              პოლიტიკა
            </div>
          </div>
          <h1 class="text-xl font-bold">
            ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
            პროექტები დაიწყება
          </h1>
          <h5 class="text-xs text-gray-600 mb:hidden">
            განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს
            “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD
          </h5>
        </div>
      </div> </swiper-slide
    ><swiper-slide>
      <div class="p-4 bg-white rounded-2xl font-bgp text-xs">
        <img :src="SliderImg" class="rounded-2xl w-[100%] max-h-[406px]" />
        <div class="space-y-3">
          <div class="flex mt-4 space-x-2">
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              12.08.2023
            </div>
            <div class="font-black bg-primary-light px-2 py-2 rounded-xl">
              პოლიტიკა
            </div>
          </div>
          <h1 class="text-xl font-bold">
            ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული
            პროექტები დაიწყება
          </h1>
          <h5 class="text-xs text-gray-600 mb:hidden">
            განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს
            “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD
          </h5>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import SliderImg from "@/assets/images/slider.jpeg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      SliderImg,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  background-color: white;
  width: 10px;
  height: 10px;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  color: black;
  transform: translateY(-200%);
  margin: 0 20px 0 20px;
}

@media only screen and (max-width: 375px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  .swiper-pagination {
    transform: translateY(-950%) !important;
  }
}

.swiper {
  margin: 0;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 16px;
}

.swiper-pagination-bullet-active {
  background-color: white;
  width: 30px;
  border-radius: 4px;
}

.swiper-pagination {
  transform: translateY(-800%);
}
</style>
