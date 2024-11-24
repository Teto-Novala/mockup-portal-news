<template>
  <RouterLink to="/businnes/0">
    <section class="flex items-center h-96 gap-x-16">
      <img
        :src="`/src/assets/images/home/trending/${store.data.image}`"
        :alt="store.data.title"
        class="w-1/2 object-cover object-center"
      />
      <div class="w-1/2 font-poppins flex flex-col gap-y-4">
        <h1 class="text-red-500 font-semibold">Trending</h1>
        <h2 class="font-ibm font-bold text-xl">{{ store.data.title }}</h2>
        <p>{{ store.data.description }}</p>
        <div class="flex items-center gap-x-5 text-sm">
          <p>{{ store.formattedPublishedAt }}</p>
          <p>by {{ store.data.author }}</p>
        </div>
      </div>
    </section>
  </RouterLink>
</template>

<script setup>
import { useTrendingStore } from "@/stores/trendingStore";
import { RouterLink } from "vue-router";

const store = useTrendingStore();
</script>
