<template>
  <div
    class="flex justify-between items-center px-72 py-10 font-bgp bg-white md:px-28 ls:px-10"
    ref="categoriesDiv"
  >
    <div class="flex items-center">
      <div class="pr-6 border-r-2 border-gray-light mr-6 tb:border-none">
        <IconCompany />
      </div>
      <div class="flex justify-between space-x-8 relative tb:hidden">
        <div
          v-for="(category, index) in visibleCategories"
          :key="index"
          class="font-medium text-black-600 hover:text-purple-primary cursor-pointer text-base whitespace-nowrap"
          ref="categoryDivs"
        >
          {{ category }}
        </div>
        <div
          v-if="hiddenCategories.length > 0"
          ref="otherDiv"
          @mouseover="showHiddenCategories"
          class="font-medium relative text-black-600 cursor-pointer text-base flex space-x-2 items-center"
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
    <div class="flex ml-8">
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
const categoryDivs = ref(null);
const visibleCategoriesCount = ref(8);

const calculateVisibleCategories = (visibleCategoriesLength) => {
  const computedStyles = getComputedStyle(categoriesDiv.value);
  const paddingX = parseFloat(computedStyles.paddingLeft);

  const remainingWidth =
    categoriesDiv.value.offsetWidth -
    otherDiv.value.offsetWidth -
    paddingX * 2 -
    460;
  let sumChildrenWidth = 4 * otherDiv.value.offsetWidth;

  for (let i = 0; i <= visibleCategoriesLength - 1; i++) {
    sumChildrenWidth += categoryDivs.value[i].offsetWidth + 10;
  }

  if (remainingWidth > sumChildrenWidth || visibleCategoriesLength === 0) {
    if (remainingWidth - sumChildrenWidth > 150) {
      visibleCategoriesCount.value = visibleCategoriesLength + 1;
    } else {
      visibleCategoriesCount.value = visibleCategoriesLength;
    }
    return;
  }

  visibleCategoriesCount.value -= 1;
  calculateVisibleCategories(visibleCategoriesLength - 1);
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
  window.addEventListener("resize", () =>
    calculateVisibleCategories(visibleCategoriesCount.value),
  );
  calculateVisibleCategories(visibleCategoriesCount.value);
});

onBeforeUnmount(() => {
  window.removeEventListener(
    "resize",
    calculateVisibleCategories(visibleCategoriesCount.value),
  );
});
</script>
