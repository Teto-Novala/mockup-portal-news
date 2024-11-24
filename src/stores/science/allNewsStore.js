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
      content: [
        "A woman was recently out walking her dog in Louisiana when she stumbled upon an animal who needed her help. Lying down next to the path, there was a sick-looking coyote covered in mosquitoes.",
        "The Good Samaritan drove the coyote an hour and a half to Geaux Wild Rehab so she could get the help she desperately needed.",
        "“She couldn’t pick her head up,” Tisha Raiford, director of Geaux Wild Rehab, told The Dodo. “She was very weak, very lifeless.”",
        "Raiford worked with a vet to get the coyote parasite treatments, vital nutrients and medical exams. Even after extensive bloodwork, X-rays and other tests, they couldn’t tell exactly what was bothering her.",
        "Even though the coyote's condition was still a mystery, Raiford couldn’t bear seeing her so weak. She named her Zelda and resolved to do everything she could to help her recover.",
        "Every single day, Raiford worked with Zelda to get her back on her feet. She fed her a nutrient-rich diet and did physical therapy exercises as well as cold laser therapy to stimulate her weakened muscles.",
        `“She had a will to live and she didn’t give up,” Raiford said. “That was what I kept [saying], ‘As long as she doesn’t give up, I will keep fighting with her and for her.'`,
        "For weeks, Zelda barely moved. Raiford tried to stay hopeful, but wasn’t sure whether Zelda would ever recover.",
        "Then, about three weeks after Zelda arrived at the rehabilitation center, Raiford started noticing her pushing herself up with her legs. She was trying to stand.",
        "A few days later, a miracle happened: Zelda stood up and started walking.",
        "Every day, Zelda was able to walk a little farther, stand up a little longer. Before long, she was getting antsy, pacing around her enclosure. That’s how Raiford knew she was ready to go. Eight weeks after her intake, Raiford decided it was time to set her free.",
        "Before releasing her, Raiford allowed researchers from The Canid Project to put a comfortable, non-invasive collar on Zelda for a coyote tracking research project. As an added bonus, Raiford will get to keep track of Zelda as she roams her natural environment.",
        "Raiford invited the woman who first saved Zelda as well as Zelda’s vet to be there for her release as they’d been instrumental to her survival and recovery. It was an incredibly emotional day for all of them, especially Raiford. As she opened Zelda’s kennel, she remembered the journey she’d taken with this strong-willed coyote.",
        "“I felt tears swelling up in my eyes because I was looking straight at her,” Raiford said. “And you could just see that determination in her eyes.”",
        "As soon as Zelda stepped back out into nature, she knew just what to do.",
        "“You could just tell she knew where she was,” Raiford said. “She was back home. And then when she flew out of that kennel, she jumped into the water and swam and took off running … It was perfect.”",
      ],
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
      content: [
        "Spanish explorers may have brought the first peach pits to North America, but Indigenous communities helped the ubiquitous summer fruit really take root, according to a study led by a researcher at Penn State.",
        "The study, published in Nature Communications, shows that Indigenous political and social networks and land use practices played key roles in the peach's adoption and dispersal across the continent, according to the researchers.",
        '"Peaches need a lot of care by people to be productive. They need to be planted in appropriate places with a lot of sunlight and the right soil drainage, and they need to be pruned," said Jacob Holland-Lulewicz, first author and assistant professor of anthropology at Penn State. "For a long time, the narrative was that the Spanish introduced peaches and then peaches spread very quickly. The reality is way more complicated. How quickly peaches spread is very much a product of Indigenous networks and land management."',
        "The researchers analyzed historical documents that mentioned peaches, such as the travel writings of French missionary explorer Jacques Marquette and English merchant Jonathan Dickinson.",
        "They also employed radiocarbon dating—a method that measures the decay of radioactive carbon-14 atoms in organic material—to determine the approximate ages of peach pits and other organic samples, like carbonized tree wood, from 28 archaeological sites and two regional locales where archaeologists previously recovered preserved peach pits. The sites were located in the Carolinas, Georgia, Florida, Alabama, Tennessee and Arkansas.",
        "The team found that peaches were likely widespread across Indigenous settlements in the interior southeast as early as the year 1620, roughly 100 years after the earliest Spanish expeditions in Florida and in Georgia's Oconee Valley. The timing suggests that early Spanish settlements becoming important trade nodes within existing Indigenous networks created the necessary conditions for the spread of peaches, according to Holland-Lulewicz.",
        `"Many narratives talk about the Spanish, or Europeans generally, arriving and then you see instantaneous changes to Indigenous histories and the spread of materials, but those initial interactions didn't cause major changes," he said. "It's not until Spanish networks and Indigenous networks become entangled 100 years later that we have the necessary conditions for the spread of peaches."`,
        "The team also identified what are possibly the earliest peaches in North America at a Muskogean farmstead in the Oconee Valley. In the 1990s, the late Penn State archaeologist James Hatch recovered peach pits from the bottom of post holes that once housed support structures for the farmstead's house.",
        "The researchers radiocarbon dated charcoal, nuts and corn kernels from these post holes and found that occupation at the site began between 1520 and 1550 and ended between 1530 and 1570. This timing suggests that peaches had spread to the interior southeast possibly decades before the founding of St. Augustine in 1565, according to the researchers.",
        `"Understanding the path that the introduction of species, such as peach trees, took through colonization and the role that Indigenous people and their long-term relationship with the environment played in shaping these histories demonstrates the importance of these events, people and processes to what becomes a broader American history," said co-author Victor Thompson, Distinguished Research Professor of archaeology at the University of Georgia (UGA) and executive director of the Georgia Museum of Natural History. "Further, the fact that all of this work took place on museum specimens underscores the importance of maintaining these collections for future study."`,
        "Indigenous peoples not only adopted the peach but selectively bred new varieties outnumbering the varieties found in Europe even at this early time, Holland-Lulewicz said.",
        '"When Europeans started to move through and into the interior of the continent in the mid- to late 1600s, they noted that there were way more varieties of peaches being grown by Indigenous peoples than there were in Europe," he said, explaining that the fruit had become an important aspect of Indigenous culture.',
        '"At this time, Europeans are noting really dense peach orchards around Indigenous towns, but some of these towns and people had never previously interacted with or even heard of Europeans. In fact, there are records of Indigenous peoples describing peaches as an Indigenous fruit."',
        "The fruit had become so integral to Indigenous history and culture that when the ancestors of the modern-day Muscogee (Creek) Nation were forcibly removed from Georgia and Alabama during the 1800s, they took peaches with them.",
        '"There are Muscogee (Creek) peoples today who grow peaches as heritage crops," Holland-Lulewicz said. "The act of growing and caring for those peaches is an important cultural practice. These were the first peaches introduced in the 1500s and 1600s that were then carried halfway across the continent and continue to be grown today."',
      ],
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
      content: [
        "One species of wolf has a bit of a sweet tooth.",
        "Striking new photos show Ethiopian wolves (Canis simensis) feeding on the nectar of Ethiopian red hot poker flowers (Kniphofia foliosa).",
        "Striking new photos show Ethiopian wolves (Canis simensis) feeding on the nectar of Ethiopian red hot poker flowers (Kniphofia foliosa).",
        `"These findings highlight just how much we still have to learn about one of the world's most-threatened carnivores," study co-author Sandra Lai, an ecologist at the University of Oxford, said in a statement.`,
        `The Ethiopian red hot poker's red and yellow flowers produce a sweet nectar that attracts a host of pollinators, including insects and birds. During past field studies, researchers had occasionally spotted the wolves licking the flowers too, so they set out to study the behavior more closely.`,
        "In the new study, published Nov. 19 in the journal Ecology, the researchers followed six Ethiopian wolves from three different packs over four days. While most of the wolves visited only a handful of flowers, one visited 20 and another visited 30 in a single snacking foray.",
        "When the wolves visited a red hot poker plant, they usually licked the mature lowermost flowers, which contained the most nectar. In doing so, their muzzles became coated with pollen. This could mean the wolves can spread that pollen to other flowers, the researchers wrote in the study.",
        `However, it's not yet clear whether the wolves are effective pollinators. Nectar isn't a significant part of their diet, so more research is needed to determine how often the wolves visit the flowers. And there isn't evidence yet that a wolf could transfer enough pollen to another flower to pollinate it effectively.`,
        "Because the flowers attract many species, it's also not clear how important any potential pollination from the wolves is to the flowers' survival. Whether or not they act as pollinators, many other animals have been observed consuming red hot poker nectar as a sweet treat — including humans.",
        `"I first became aware of the nectar of the Ethiopian red hot poker when I saw children of shepherds in the Bale Mountains licking the flowers," study co-author Claudio Sillero, a conservation biologist at the University of Oxford, said in the statement. "In no time, I had a taste of it myself — the nectar was pleasantly sweet. When I later saw the wolves doing the same, I knew they were enjoying themselves, tapping into this unusual source of energy."`,
        `Future research will involve determining the role of nectar in the wolves' diet and working out whether the wolves really do act as pollinators, the researchers wrote in the study.`,
      ],
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
      content: [
        "BEXAR COUNTY, Texas – A student from Harlan High School was struck by a car late Friday morning while crossing Culebra Road, according to Northside ISD.",
        "The incident happened at 11:57 a.m. in the 14100 block of Culebra Road. The student attempted to cross the road outside a designated crosswalk and was hit by a driver, the Bexar County Sheriff’s Office said.",
        "BCSO confirmed the driver immediately stopped and assisted the student. No charges are expected for the driver.",
        "Northside ISD stated that EMS transported the student to the hospital for evaluation. No additional details regarding the student’s injuries were available.",
      ],
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
      content: [
        "The International Space Station (ISS) is leaking — and major space agencies are divided over what to do about it.",
        `The leak is located in a Russian segment of the station known as a PrK module, which connects Russia's Zvezda service module to the space station's main body. NASA and Russian space agency Roscosmos have known about the leak since at least 2019, but its underlying cause remains a mystery. Since its discovery, cosmonauts have taken various steps to minimize its impact, including sealing off the segment when it is not in use. But Roscosmos and NASA now disagree about the leak's severity.`,
        `According to a recent NASA report, the leak has intensified to the point where it poses a risk to the ISS's goal of operating until 2030. What's more, some NASA officials believe it could lead to "a catastrophic failure" of the station, Bob Cabana, the chair of the agency's ISS Advisory Committee, said during a public meeting.`,
        "However, Russian space officials have downplayed the severity of the leak, insisting that it will not jeopardize future ISS operations, according to CNN.",
        "The ISS has been continuously occupied since November 2000. Most of its infrastructure is a quarter-century old, and it is possible that years of mechanical stress have caused tiny fissures to form in the walls of certain sections. Additional stress from colliding with small pieces of debris and micrometeors could also have contributed to the perforation.",
        `NASA and Roscosmos have agreed to seal off the leaky segment if the rate of air loss becomes "untenable." But they have not yet reached a consensus on what, exactly, qualifies as an untenable rate. Currently, air is escaping at a rate of around 2 to 2.5 pounds (0.9 to 1.1 kilograms) per day above the space station's equilibrium, according to NASA. In April, it briefly spiked to 3.7 pounds per day (1.7 kg); if left unchecked, it could spike again.`,
        'The agencies are reportedly working closely with one another to monitor the situation as it unfolds. And NASA plans to add an extra seat — called a "pallet seat" — aboard future SpaceX Crew Dragon spacecraft in case any astronauts need to evacuate.',
        '"The station is not young," NASA astronaut Michael Barratt said during a news briefing. "We will expect to see more wear and tear in various other places."',
        `The space station is expected to operate through to 2030, after which it will be deorbited into Earth's atmosphere for a fiery farewell. NASA currently has no plans to build a replacement for the ISS and instead will focus on crewed missions to the moon and Mars, according to the agency.`,
      ],
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

  const getNewsItem = (index) => {
    if (index >= 0 && index < data.value.length) {
      // Apply formatting and return a copy to avoid mutation
      return {
        ...data.value[index],
        publishedAt: formatDate(data.value[index].publishedAt),
      };
    } else {
      console.error("Invalid index. News item not found.");
      return null; // Or you can throw an error here
    }
  };

  return {
    dataFormated: computed(() =>
      data.value.map((item) => ({
        ...item,
        publishedAt: formatDate(item.publishedAt),
      }))
    ),
    getNewsItem,
  };
});
