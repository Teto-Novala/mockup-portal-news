<template>
  <div class="shadow-xl flex flex-col gap-y-4 pb-3">
    <img
      :src="imgSrc"
      :alt="altImg"
      class="h-44 object-cover object-center"
    />
    <div class="px-5 flex flex-col h-full gap-y-3 justify-between">
      <h1 class="font-bold text-lg truncate">
        {{ title }}
      </h1>
      <p class="truncate">
        {{ desc }}
      </p>
      <div class="flex items-center gap-x-4 text-xs">
        <p>{{ publish }}</p>
        <p>{{ author }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: {
    type: String,
    default: "/src/assets/images/home/all-news/elon-musk.jpg",
  },
  altImg: {
    type: String,
    default: "alt image",
  },
  title: {
    type: String,
    default: "Title",
  },
  desc: {
    type: String,
    default: "Description",
  },
  publish: {
    type: Date,
    default: new Date(),
  },
  author: {
    type: String,
    default: "Author",
  },
});
</script>
