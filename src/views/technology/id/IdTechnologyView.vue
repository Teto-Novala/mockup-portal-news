<template>
  <main class="font-poppins">
    <section v-if="Object.keys(data).length">
      <div class="bg-[#0E1E32] w-full h-64"></div>
      <div class="relative -top-44 flex flex-col w-2/3 mx-auto gap-y-8">
        <h1 class="text-white font-ibm text-2xl text-center">
          {{ data.title }}
        </h1>
        <img
          :src="data.urlToImage"
          :alt="data.title"
          class="w-full"
        />
        <div class="flex items-center gap-x-3 text-sm">
          <p>{{ data.publishedAt }}</p>
          <p>By {{ data.author }}</p>
        </div>
        <div class="flex flex-col gap-y-8 text-justify">
          <p
            v-for="(item, index) in data.content"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </section>
    <section
      v-else
      class="min-h-screen text-white"
    >
      <div class="bg-[#0E1E32] w-full h-64 relative">
        <p
          class="absolute top-0 left-0 bottom-0 right-0 justify-center flex items-center"
        >
          Terjadi Kesalahan
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useAllNewsStore } from "@/stores/technology/allNewsStore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useAllNewsStore();

const data = ref({});

onMounted(() => {
  data.value = store.getNewsItem(route.params.id);
});
</script>
