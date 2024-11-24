import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-science", () => {
  const data = ref([
    {
      source: {
        id: null,
        name: "Thedodo.com",
      },
      author: "Alana Francis-Crow",
      title:
        "She Was 'Lifeless' And Couldn't Move — Then A Kind Woman Decided To Help - The Dodo",
      description:
        "A woman who found a lifeless coyote while walking her dog couldn't believe the recovery she made.",
      url: "https://www.thedodo.com/daily-dodo/she-was-lifeless-and-couldnt-move-then-a-kind-woman-decided-to-help",
      urlToImage:
        "https://assets3.thrillist.com/v1/image/3190295/1200x600/crop;;webp=auto;jpeg_quality=85.jpg",
      publishedAt: "2024-11-22T22:22:17Z",
      content:
        "A woman was recently out walking her dog in Louisiana when she stumbled upon an animal who needed her help. Lying down next to the path, there was a sick-looking coyote covered in mosquitoes.\r\nGeaux … [+2809 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Francisco Tutella",
      title:
        "Peaches spread across North America through Indigenous networks, radiocarbon dating and document analysis show - Phys.org",
      description:
        "Spanish explorers may have brought the first peach pits to North America, but Indigenous communities helped the ubiquitous summer fruit really take root, according to a study led by a researcher at Penn State.",
      url: "https://phys.org/news/2024-11-peaches-north-america-indigenous-networks.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/peaches-spread-across.jpg",
      publishedAt: "2024-11-22T19:24:05Z",
      content:
        "Spanish explorers may have brought the first peach pits to North America, but Indigenous communities helped the ubiquitous summer fruit really take root, according to a study led by a researcher at P… [+5921 chars]",
    },
    {
      source: {
        id: null,
        name: "Live Science",
      },
      author: "Skyler Ware",
      title:
        "Wolves in Ethiopia spotted licking 'red hot poker' flowers like lollipops - Livescience.com",
      description:
        'Wolves in Ethiopia that lick the flowers of the "red hot poker" flowers are the first known large carnivores to eat nectar.',
      url: "https://www.livescience.com/animals/wolves-in-ethiopia-spotted-licking-red-hot-poker-flowers-like-lollipops",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/ocNsmZpK8NZtbMG6xAsnkM-1200-80.jpg",
      publishedAt: "2024-11-22T19:12:59Z",
      content:
        "One species of wolf has a bit of a sweet tooth.\r\nStriking new photos show Ethiopian wolves (Canis simensis) feeding on the nectar of Ethiopian red hot poker flowers (Kniphofia foliosa).\r\nThe otherwis… [+2887 chars]",
    },
    {
      source: {
        id: null,
        name: "Neurosciencenews.com",
      },
      author: "Neuroscience News",
      title:
        "AI Summaries Simplify Science, Boosting Public Understanding and Trust - Neuroscience News",
      description:
        "AI-generated summaries make scientific studies more accessible and improve public trust in scientists.",
      url: "https://neurosciencenews.com/ai-science-communication-trust-28114/",
      urlToImage:
        "https://neurosciencenews.com/files/2024/11/ai-aummaries-science-trust-neuroscience.jpg",
      publishedAt: "2024-11-22T18:52:53Z",
      content:
        "Summary: AI-generated summaries make scientific studies more accessible and improve public trust in scientists. Using GPT-4, researchers created simplified summaries that were easier to read and unde… [+6807 chars]",
    },
    {
      source: {
        id: null,
        name: "KSAT San Antonio",
      },
      author: "KSAT Digital Team",
      title:
        "Student hit by vehicle while crossing road near Harlan High School, Northside ISD says - KSAT San Antonio",
      description:
        "A student from Harlan High School was struck by a car late Friday morning while crossing Culebra Road, according to Northside ISD.",
      url: "https://www.ksat.com/news/local/2024/11/22/student-hit-by-vehicle-while-crossing-road-near-harlan-high-school-northside-isd-says/",
      urlToImage:
        "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/ZI5VZ7TMYVFCROJLCL3KZQVMRQ.JPG?_a=DATAdtfiZAA0",
      publishedAt: "2024-11-22T18:47:02Z",
      content:
        "BEXAR COUNTY, Texas A student from Harlan High School was struck by a car late Friday morning while crossing Culebra Road, according to Northside ISD.\r\nThe incident happened at 11:57 a.m. in the 1410… [+478 chars]",
    },
    {
      source: {
        id: null,
        name: "Live Science",
      },
      author: "Joanna Thompson",
      title:
        "NASA warns of potential 'catastrophic failure' on leaking ISS — but Russia doesn't want to fix it - Livescience.com",
      description:
        "A five-year leak on a Russian module of the International Space Station has gotten worse over time. Now, NASA and Russia's Roscosmos space agency disagree just how bad it is.",
      url: "https://www.livescience.com/space/space-exploration/nasa-warns-of-potential-catastrophic-failure-on-leaking-iss-but-russia-doesnt-want-to-fix-it",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/eY7E2AfqACFRymrBrPypQA-1200-80.jpg",
      publishedAt: "2024-11-22T18:41:46Z",
      content:
        "The International Space Station (ISS) is leaking — and major space agencies are divided over what to do about it.\r\nThe leak is located in a Russian segment of the station known as a PrK module, which… [+2695 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Jacek Krywko",
      title: "A new version of the drake equation - Ars Technica",
      description:
        "Star formation is key for life, and a different version of our universe could make more stars.",
      url: "https://arstechnica.com/science/2024/11/our-universe-is-not-fine-tuned-for-life-but-its-still-kind-of-ok/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2024/11/GettyImages-157639696-1152x648.jpg",
      publishedAt: "2024-11-22T18:30:38Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "University of Bonn",
      title:
        "Gene regulation study reports surprising results: Extensive regions of DNA belong to multiple gene switches - Phys.org",
      description:
        "Some sequences in the genome cause genes to be switched on or off. Until now, each of these gene switches, or so-called enhancers, was thought to have its own place on the DNA. Different enhancers are therefore separated from each other, even if they control …",
      url: "https://phys.org/news/2024-11-gene-results-extensive-regions-dna.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/study-on-gene-regulati.jpg",
      publishedAt: "2024-11-22T18:18:04Z",
      content:
        "Some sequences in the genome cause genes to be switched on or off. Until now, each of these gene switches, or so-called enhancers, was thought to have its own place on the DNA. Different enhancers ar… [+5663 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Robert Lea",
      title:
        "2-million-mile-per-hour galactic crash reawakens a dangerous 'cosmic crossroads' - Space.com",
      description: "The speed outpaces a jet fighter by around 800 times.",
      url: "https://www.space.com/million-mph-galaxy-collision-stephans",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/MsF7Qmectwr4VSAynAjMz7-1200-80.png",
      publishedAt: "2024-11-22T17:34:18Z",
      content:
        'Using one of the most powerful telescopes on Earth, astronomers have witnessed an intimidating 2-million-mile-per-hour (3.2-million-kilometer-per-hour) smash-up between galaxies at a dangerous "cosmi… [+4384 chars]',
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Justin Jackson",
      title:
        "Ryugu asteroid sample rapidly colonized by terrestrial life despite strict contamination control - Phys.org",
      description:
        "Panspermia is the hypothesis that life can survive the transfer between planetary bodies as a secondary path for life to get started on planets throughout a solar system. The discovery of extraterrestrial life on asteroids or within meteorites would have prof…",
      url: "https://phys.org/news/2024-11-ryugu-asteroid-sample-rapidly-colonized.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/terrestrial-life-found.jpg",
      publishedAt: "2024-11-22T16:40:01Z",
      content:
        "Panspermia is the hypothesis that life can survive the transfer between planetary bodies as a secondary path for life to get started on planets throughout a solar system. The discovery of extraterres… [+4892 chars]",
    },
    {
      source: {
        id: null,
        name: "Good News Network",
      },
      author: "Andy Corbley",
      title:
        "Saber-Tooth Cat Cub Is First to Be Found Mummified in Ice – and it Still Has Hair - Good News Network",
      description:
        "The authors introduce the world to the first real image of a saber-tooth cat, and they've picked out a variety of interesting details.",
      url: "https://www.goodnewsnetwork.org/saber-tooth-cat-cub-is-first-to-be-found-mummified-in-ice-and-it-still-has-hair/",
      urlToImage:
        "https://www.goodnewsnetwork.org/wp-content/uploads/2024/11/saber-toothed-tiger-cub-mummy-released-Alexey-V-Lopatin-et-al.jpg",
      publishedAt: "2024-11-22T16:30:38Z",
      content:
        "Credit – Alexey V. Lopatin, et al.\r\nDespite hundreds of scientific illustrations, no one knew for sure what a saber-toothed cat actually looked like, until now.\r\nAs is sometimes the case, Siberian pr… [+2914 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author: "Cecilia Rodriguez",
      title:
        "Best Of Nature: 20 Shortlisted Photos For Close-Up Photographer Of The Year - Forbes",
      description:
        "Amazing images of nature shortlisted for the Close-Up Photographer Of The Year competition, showcase close-up, macro and micro photos of wildlife’ s hidden wonders.",
      url: "https://www.forbes.com/sites/ceciliarodriguez/2024/11/22/best-of-nature-20-shortlisted-photos-of-close-up-photographer-of-the-year/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/673d11ce07f7d490a57cd246/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2024-11-22T16:07:22Z",
      content:
        "Can I Help You? Category: Young; A harvest mouse peers out from behind stalks of wheat.\r\n Jamie Smart, UK - Close Up Photographer Of The Year 2024\r\nThe Close Up Photographer Of The Year competition h… [+15286 chars]",
    },
    {
      source: {
        id: null,
        name: "Live Science",
      },
      author: "Hannah Osborne",
      title:
        "'She turns her siphon into a gun': Watch coconut octopus firing stones at fish in world-1st footage - Livescience.com",
      description:
        "Octopus filmed firing stones from her siphon from inside a clam shell like a sniper in never-before-seen behavior captured for the Netflix series Our Oceans.",
      url: "https://www.livescience.com/animals/octopuses/she-turns-her-siphon-into-a-gun-watch-coconut-octopus-firing-stones-at-fish-in-world-1st-footage",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/BgFieuxSx3Jw4RBqDzjN5X-1200-80.jpg",
      publishedAt: "2024-11-22T15:35:42Z",
      content:
        "First-of-its-kind footage captures the moment an octopus fires projectiles at predatory fish while hiding in a clam shell, like a mini sharpshooter.\r\nThe clip, filmed for Netflix's new series \"Our Oc… [+2970 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Raman Research Institute",
      title:
        "Veil of fiery gas revealed around the disk of Milky Way - Phys.org",
      description:
        "Scientists may have finally hit upon the possible mysterious sources that have pumped heat and kept alive the fiery hot gas that has recently been detected surrounding the Milky Way but has so far remained unexplained.",
      url: "https://phys.org/news/2024-11-veil-fiery-gas-revealed-disk.html",
      urlToImage: "https://scx2.b-cdn.net/gfx/news/hires/2018/4-milkyway.jpg",
      publishedAt: "2024-11-22T14:00:04Z",
      content:
        "Scientists may have finally hit upon the possible mysterious sources that have pumped heat and kept alive the fiery hot gas that has recently been detected surrounding the Milky Way but has so far re… [+5250 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Sharmila Kuthunur",
      title:
        "Unusual black hole light bursts puzzle astronomers: 'We are finding a lot of weird stuff' - Space.com",
      description: '"This is very different from anything I have seen before."',
      url: "https://www.space.com/the-universe/black-holes/unusual-black-hole-light-bursts-puzzle-astronomers-we-are-finding-a-lot-of-weird-stuff",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/F7g4nZEMttbDQ82sjGkaad-1200-80.jpg",
      publishedAt: "2024-11-22T14:00:00Z",
      content:
        "Or this could be positive matter/energy colliding with the negative EM field of a black hole. Negative EM fields absorb photons, so the only light seen is the changes in current between the two field… [+7027 chars]",
    },
  ]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // You can customize the format string here (e.g., 'yyyy-MM-dd', 'dd/MM/yyyy')
    const formattedDate = date.toLocaleDateString("en-US", {
      dateStyle: "medium",
    });
    return formattedDate;
  };

  return {
    dataFormated: computed(() =>
      data.value.map((item) => ({
        ...item,
        publishedAt: formatDate(item.publishedAt),
      }))
    ),
  };
});
