<template>
  <section class="pt-10 flex flex-col gap-y-14 items-center">
    <NewsCard
      v-for="(list, index) in store.dataFormated"
      :key="index"
      :img-src="list.urlToImage"
      :title="list.title"
      :desc="list.description"
      :publish="list.publishedAt"
      :author="list.author"
    />
  </section>
</template>

<script setup>
import { useAllNewsStore } from "@/stores/technology/allNewsStore";
import NewsCard from "./NewsCard.vue";

const store = useAllNewsStore();
</script>
