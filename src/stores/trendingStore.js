import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useTrendingStore = defineStore("trending", () => {
  const data = reactive({
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Jay Peters",
    title:
      "Elon Musk is directing harassment toward individual federal workers - The Verge",
    description:
      "Elon Musk is naming specific government workers with comments about ‘fake jobs’ in posts ahead of recommending sweeping federal government cuts.",
    image: "elon-musk.jpg",
    publishedAt: "2024-11-23T00:21:00Z",
    content:
      "Elon Musk is directing harassment toward individual federal workers\r\nElon Musk is directing harassment toward individual federal workers\r\n / The efficiency agency co-lead is pointing out people by na… [+2132 chars]",
  });
  const formattedPublishedAt = computed(() => {
    const date = new Date(data.publishedAt);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  });

  return { data, formattedPublishedAt };
});
