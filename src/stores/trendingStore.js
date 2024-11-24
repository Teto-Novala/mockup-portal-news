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
    url: "https://www.theverge.com/2024/11/22/24303594/elon-musk-harassing-federal-workers-x",
    image: "elon-musk.jpg",
    publishedAt: "2024-11-23T00:21:00Z",
    content: [
      "Elon Musk is, in addition to many other things, now the co-lead of the currently nonexistent Department of Government Efficiency (DOGE) advisory group. Now, before it even gets rolling, he has begun singling out individual government employees he says are emblematic of the government’s bloat and posting about them to his hundreds of millions of followers on X.",
      "Earlier this week, as first reported by The Wall Street Journal, the X user “datahazard” shared a screenshot on X highlighting the role of Ashley Thomas, the Director of Climate Diversification at the US International Development Finance Corporation, saying, “I don’t think the US Taxpayer should pay for the employment” of that role. Musk reposted it, adding the comment “so many fake jobs” in a post with more than 33 million views.",
      "As the WSJ notes, Musk’s followers have responded in exactly the way you’d expect: with a flood of memes and harassment targeting Thomas, whose LinkedIn and Facebook pages are now private. Everett Kelley, president of the American Federation of Government Employees, told the WSJ that the posts “are aimed at sowing terror and fear at federal employees.”",
      "Flooding targets with harassment is a tactic Musk has done in the past, including calling caver Vernon Unsworth a “pedo guy,” criticizing a former Twitter exec following his offer to buy the company, and suggesting that head of trust and safety Yoel Roth was sympathetic to pedophilia. All, of course, under the guise of “free speech.”",
      "The ensuing harassment, of course, is precisely the point: Musk has systematically turned X into a megaphone for his views and has wielded that megaphone to whatever end he finds funny or useful. Musk and DOGE co-lead Vivek Ramaswamy have promised to do much of their work in public (and sometimes by X poll), too, which means this kind of pointed attention is likely headed toward many other civil servants in the near future.",
    ],
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
