<template>
  <nav class="px-8">
    <ul class="flex items-center justify-between py-2 font-nunito">
      <li>
        <RouterLink to="/">
          <img
            src="/src/assets/images/navbar/logo-navbar.svg"
            alt="navbar"
          />
        </RouterLink>
      </li>
      <li
        v-for="(list, index) in navbarList"
        :key="index"
      >
        <RouterLink :to="list.route">{{ list.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import navbarList from "@/utils/navbar";
</script>
