<template>
  <div
    class="flex justify-between items-center px-72 py-10 font-bgp bg-white md:px-28 ls:px-10"
  >
    <div class="flex items-center">
      <div class="pr-6 border-r-2 border-gray-light mr-6 tb:border-none">
        <IconCompany />
      </div>
      <div
        class="flex justify-between space-x-8 relative tb:hidden"
        ref="categoriesDiv"
      >
        <div
          v-for="(category, index) in visibleCategories"
          :key="index"
          class="font-medium text-black-600 hover:text-purple-primary cursor-pointer text-base"
          ref="categoryDiv"
        >
          {{ category }}
        </div>
        <div
          v-if="hiddenCategories.length > 0"
          ref="otherDiv"
          @mouseover="showHiddenCategories"
          class="font-medium relative text-black-600 cursor-pointer text-base mr-4 flex space-x-2 items-center"
        >
          <span class="hover:text-purple-primary">სხვა</span>
          <span><IconArrowDown /></span>
          <div
            v-if="showDropdown"
            @mouseleave="hideHiddenCategories"
            class="absolute -left-2 top-10 bg-white shadow-md py-2 z-[100]"
          >
            <div
              v-for="(category, index) in hiddenCategories"
              :key="index"
              class="px-4 py-2 cursor-pointer hover:bg-primary-light rounded-xl hover:text-purple-primary"
            >
              {{ category }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex space-x-2 mr-4 mb:hidden">
        <div class="bg-primary-light py-2 px-2 my-2 rounded-full">
          <IconInstagram />
        </div>
        <div class="py-2 px-3 my-2 bg-primary-light rounded-full">
          <IconFacebook />
        </div>
      </div>
      <div
        class="flex bg-primary-light py-3 px-4 rounded-2xl mb:rounded-full mb:py-4"
      >
        <input
          type="text"
          placeholder="ძიება"
          class="bg-primary-light placeholder:text-black mb:hidden"
        />
        <IconSearch />
      </div>
      <div
        @click="showListDropdown = !showListDropdown"
        class="hidden py-2 px-4 tb:flex justify-center items-center ml-2 bg-primary-light rounded-full cursor-pointer"
      >
        <IconList />
      </div>
      <div
        v-if="showListDropdown"
        class="absolute left-0 top-32 mb:top-28 w-full h-full z-[100] bg-white"
      >
        <div
          v-for="category in categories"
          :key="category"
          class="py-4 px-10 hover:bg-light-gray"
        >
          {{ category }}
        </div>
        <div class="hidden mb:flex justify-center space-x-2 mr-4">
          <div class="bg-primary-light py-2 px-2 my-2 rounded-full">
            <IconInstagram />
          </div>
          <div class="py-2 px-3 my-2 bg-primary-light rounded-full">
            <IconFacebook />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import IconCompany from "@/components/icons/IconCompany.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconList from "@/components/icons/IconList.vue";

const categories = [
  "პოლიტიკა",
  "საზოგადოება",
  "სამართალი",
  "ბიზნესი & ეკონომიკა",
  "მსოფლიო",
  "ხელოვნება",
  "სპორტი",
  "რელიგია",
  "კრიმინალი",
];

const showDropdown = ref(false);
const showListDropdown = ref(false);
const otherDiv = ref(null);
const categoriesDiv = ref(null);
const categoryDiv = ref(null);
const visibleCategoriesCount = ref(8);

const windowResizeHandler = () => {
  if (window.innerWidth < 1700 && window.innerWidth > 1450) {
    visibleCategoriesCount.value = 3; // Adjust this value as needed
  } else if (window.innerWidth < 1450) {
    visibleCategoriesCount.value = 2;
  } else {
    visibleCategoriesCount.value = 4;
  }
};

const visibleCategories = computed(() => {
  return categories.slice(0, visibleCategoriesCount.value);
});

const hiddenCategories = computed(() => {
  return categories.slice(visibleCategoriesCount.value);
});

const showHiddenCategories = () => {
  showDropdown.value = true;
};

const hideHiddenCategories = () => {
  showDropdown.value = false;
};

onMounted(() => {
  window.addEventListener("resize", windowResizeHandler);
  windowResizeHandler();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", windowResizeHandler);
});
</script>
