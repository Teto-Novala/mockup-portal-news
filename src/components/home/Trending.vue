<template>
  <section class="flex items-center h-96 gap-x-16">
    <img
      :src="`/src/assets/images/home/trending/${store.data.image}`"
      :alt="store.data.title"
      class="w-1/2 object-cover object-center"
    />
    <div class="w-1/2">
      <h1>Trending</h1>
      <h2>{{ store.data.title }}</h2>
      <p>{{ store.data.description }}</p>
      <div>
        <p>{{ store.formattedPublishedAt }}</p>
        <p>{{ store.data.author }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTrendingStore } from "@/stores/trendingStore";

const store = useTrendingStore();
</script>
