<template>
  <RouterLink :to="`/health/${index}`">
    <div class="flex items-center justify-between gap-x-10">
      <img
        :src="imgSrc"
        alt="logo"
        class="w-1/2 h-72 object-cover object-center"
      />
      <div class="w-1/2 font-poppins flex flex-col gap-y-8">
        <h2 class="font-ibm font-bold text-xl">
          {{ title }}
        </h2>
        <p>
          {{ desc }}
        </p>
        <div class="text-sm flex items-center gap-x-3">
          <p>{{ publish }}</p>
          <p>by {{ author }}</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  imgSrc: {
    type: String,
    default: "/src/assets/images/home/trending/elon-musk.jpg",
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
  index: {
    type: Number,
    default: 0,
  },
});
</script>
