<template>
  <section class="pt-8 font-poppins">
    <h1 class="text-2xl">All News</h1>
    <div
      class="grid grid-cols-3 gap-8 pt-4"
      v-if="isViewMore"
    >
      <NewsCard
        v-for="(list, index) in store.dataFormated"
        :key="index"
        :img-src="list.urlToImage"
        :title="list.title"
        :desc="list.description"
        :publish="list.publishedAt"
        :author="list.author"
      />
    </div>
    <div
      class="grid grid-cols-3 gap-8 pt-4"
      v-else
    >
      <NewsCard
        v-for="(list, index) in store.dataFormated.slice(0, 3)"
        :key="index"
        :img-src="list.urlToImage"
        :title="list.title"
        :desc="list.description"
        :publish="list.publishedAt"
        :author="list.author"
      />
    </div>
    <div class="pt-10 w-full text-center">
      <button
        @click="viewMorehandler"
        class="bg-white border border-red-500 px-6 py-3 transition-all hover:bg-red-500 hover:text-white box-border"
      >
        View More
      </button>
    </div>
  </section>
</template>

<script setup>
import { useAllNewsStore } from "@/stores/businnes/allNewsStore";
import NewsCard from "./NewsCard.vue";
import { computed, ref } from "vue";
const store = useAllNewsStore();

const isViewMore = ref(false);

const viewMorehandler = computed(() => {
  isViewMore.value = !isViewMore.value;
});
</script>
