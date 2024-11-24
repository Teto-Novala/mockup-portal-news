import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-technology", () => {
  const data = ref([
    {
      source: {
        id: null,
        name: "Wccftech",
      },
      author: "Hassan Mujtaba",
      title:
        "Intel Arc B580 “Battlemage” GPU Leak Confirms 12 GB Memory, Custom Models With Standard Power Connectors, Up To 2.8 GHz Clocks - Wccftech",
      description:
        "Intel's first Arc B580 GPUs based on the Xe2 Battlemage architecture have been leaked & they look quite compelling.",
      url: "https://wccftech.com/intel-arc-b580-battlemage-gpu-leak-confirms-12-gb-memory-standard-power-connectors-up-to-2-8-ghz/",
      urlToImage:
        "https://cdn.wccftech.com/wp-content/uploads/2024/11/Intel-Arc-B580-GPU.jpg",
      publishedAt: "2024-11-23T02:00:00Z",
      content:
        'Intel\'s first Arc B580 GPUs based on the Xe2 "Battlemage" architecture have been leaked &amp; they look quite compelling.\r\nIt looks like Intel will be the first with the next-generation GPU launches,… [+3181 chars]',
    },
    {
      source: {
        id: "ign",
        name: "IGN",
      },
      author: "IGN Staff",
      title: "20 Great Tech Gifts to Give This Year - IGN",
      description:
        "IGN has your tech gift guide for this holiday season, including the Shokz OpenRun Pro, a cute Pikachu printer, Airpods, and Anker power banks.",
      url: "https://www.ign.com/articles/best-tech-gifts-to-give-this-year",
      urlToImage:
        "https://assets-prd.ignimgs.com/2024/11/23/hgg-2024-tech-gifts-1732321709657.png?width=1280",
      publishedAt: "2024-11-22T23:56:06Z",
      content:
        "Giving gifts to tech enthusiasts can be a real pain. How can you make sure you're giving someone who enthusiastically buys all the gadgets they can afford something they don't already have, or that w… [+6872 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Kyle Wiggers",
      title: "OpenAI is funding research into ‘AI morality’ - TechCrunch",
      description:
        "OpenAI is funding academic research at Duke into algorithms that can predict humans' moral judgements.",
      url: "https://techcrunch.com/2024/11/22/openai-is-funding-research-into-ai-morality/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/01/pixta_94590765_L.jpg?resize=1200,675",
      publishedAt: "2024-11-22T22:25:27Z",
      content:
        "OpenAI is funding academic research into algorithms that can predict humans’ moral judgements.\r\nIn a filing with the IRS, OpenAI Inc., OpenAI’s nonprofit org, disclosed that it awarded a grant to Duk… [+3371 chars]",
    },
    {
      source: {
        id: "polygon",
        name: "Polygon",
      },
      author: "Chris Plante",
      title:
        "Play the awesome new Call of Duty campaign while it’s $1 - Polygon",
      description:
        "The best Call of Duty game campaign in over a decade is on Game Pass. If you have an Xbox or PC, you need to play it.",
      url: "https://www.polygon.com/news/484270/cod-black-ops-6-deal-game-pass-campaign",
      urlToImage:
        "https://platform.polygon.com/wp-content/uploads/sites/2/2024/08/black-ops-6-beta.jpg?quality=90&strip=all&crop=0%2C3.4976730657359%2C100%2C93.004653868528&w=1200",
      publishedAt: "2024-11-22T21:50:00Z",
      content:
        "I didnt expect to say either of these things to you when 2024 began: the new Call of Duty single-player campaign is a blast. And you can play it for $1.\r\nA week before the release of Call of Duty: Bl… [+1640 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ryan Christoffel",
      title:
        "The ‘new era’ for Siri will be even messier than we thought - 9to5Mac",
      description:
        "Apple Intelligence has launched ‘a new era’ for Siri, but it’s one filled with staggered features launches and potential confusion.",
      url: "https://9to5mac.com/2024/11/22/the-new-era-for-siri-will-be-even-messier-than-we-thought/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/09/siri-glow-activation-iphone-16-pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-11-22T21:26:00Z",
      content:
        "Apple says were living in a new era for Siri thanks to Apple Intelligence. Is that true? Sort of. But the answer is a whole lot messier than you might expect, and getting even more so with the latest… [+2964 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Elizabeth Howell",
      title:
        "Blue Origin's powerful New Glenn rocket rises on the pad ahead of 1st launch (photo) - Space.com",
      description: "The new rocket's maiden flight may be in late 2024.",
      url: "https://www.space.com/space-exploration/launches-spacecraft/blue-origins-powerful-new-glenn-rocket-rises-on-the-pad-ahead-of-1st-launch-photo",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/DAWakxKyXPDhZXG56uwXL8-1200-80.jpg",
      publishedAt: "2024-11-22T21:00:00Z",
      content:
        "Blue Origin's powerful new orbital rocket has risen on the launch pad to prep for a debut flight that could happen soon.\r\nNew Glenn was stacked at Launch Complex 36 at Cape Canaveral Space Force Stat… [+2146 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Gizmodo Deals",
      title:
        "Amazon Is Clearing Out Console Stock For Black Friday, The Xbox Series X Is at a Record Low Price - Gizmodo",
      description: "Looking for the most powerful Xbox at a great price?",
      url: "https://gizmodo.com/amazon-is-clearing-out-console-stock-for-black-friday-the-xbox-series-x-is-at-a-record-low-price-2000528681",
      urlToImage: "https://gizmodo.com/app/uploads/2024/11/xbox-series-x.jpg",
      publishedAt: "2024-11-22T20:45:08Z",
      content:
        "The Black Friday on Amazon feature two exciting Xbox consoles at a record low price: the Xbox Series X 1TB Digital Edition and the Xbox Series X 1TB SSD Console, both offering huge savings and advanc… [+2452 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5google.com",
      },
      author: "Ben Schoon",
      title:
        "Samsung launches cloud gaming for Galaxy devices, but it’s not what you think [Gallery] - 9to5Google",
      description:
        "Samsung has launched a new cloud gaming service for Galaxy smartphones and tablets that works through the Gaming Hub app.",
      url: "http://9to5google.com/2024/11/22/samsung-galaxy-cloud-gaming-apps/",
      urlToImage:
        "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/11/samsung-gaming-hub-cloud-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-11-22T20:15:00Z",
      content:
        "First launched in beta in 2023, Samsung has officially launched its own cloud gaming services for Galaxy devices in the US.\r\nAs teased earlier this year, Samsung has officially rolled out cloud gamin… [+1701 chars]",
    },
    {
      source: {
        id: "buzzfeed",
        name: "Buzzfeed",
      },
      author: "Meg Sullivan",
      title:
        '"Someone\'s About To Get Seriously Ill": Millions Have Seen This Video Of An NYC Barista\'s Claim About This Viral Cafe\'s "Sickening" Food Handling Practices - Yahoo! Voices',
      description: '"I might lose my job for saying this..."',
      url: "https://www.buzzfeed.com/megsullivan/fellini-barista-food-safety-violation-tiktok",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/guIuHD7DuYIDeTMKfZOwKw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTc-/https://media.zenfs.com/en/buzzfeed_articles_778/ce8e2820e78fb78e1330ff0b1fa754a4",
      publishedAt: "2024-11-22T20:05:00Z",
      content:
        "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nR… [+6687 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Victoria Song",
      title:
        "Strava’s API debacle highlights the messiness of fitness data - The Verge",
      description:
        "Strava recently made some restrictive changes to its API, angering users. However, the real issue at hand is how fragmented fitness data is.",
      url: "https://www.theverge.com/2024/11/22/24303124/strava-fitness-data-wearables",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/JWQrXg9Gqapg10Le5dkbKW-8aaY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24435784/tokyostrava.jpg",
      publishedAt: "2024-11-22T19:49:41Z",
      content:
        "Stravas API debacle highlights the messiness of fitness data\r\nStravas API debacle highlights the messiness of fitness data\r\n / There are dozens of fitness apps and wearables, and Stravas new rules wi… [+3233 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Gizmodo Deals",
      title:
        'The 49" Odyssey G95C Monitor From Samsung Is at a Record Low Price, 40% Off on The Official Store - Gizmodo',
      description:
        "It's one of the most impressive screens you could have in front of you.",
      url: "https://gizmodo.com/the-49-odyssey-g95c-monitor-from-samsung-is-at-a-record-low-price-40-off-on-the-official-store-2000528598",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/11/samsung-odyssey-49.jpg",
      publishedAt: "2024-11-22T19:23:05Z",
      content:
        "Samsung has launched an impressive deal for its premium 49-inch G95C Odyssey monitor, now available at a record low price of $799, down from $1299, which is a huge $500 discount or 40% off. This deal… [+2330 chars]",
    },
    {
      source: {
        id: null,
        name: "Kotaku",
      },
      author: "Zack Zwiezen",
      title:
        "PlayStation's Big Black Friday Sale Includes Deals On PS5 Consoles, Games, And PS Plus - Kotaku",
      description:
        "Sony also has marked down PSVR 2 headsets, controllers, and more",
      url: "https://kotaku.com/playstation-psn-ps5-black-friday-deals-ps-plus-games-1851706224",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/974946d599834c423a9408529a3dff29.jpg",
      publishedAt: "2024-11-22T18:30:00Z",
      content:
        "Its late in November, so its time for another big Black Friday sale. Sure, Black Friday used to be a day, but now its spread out over two weeks. And PlayStation is the latest big company to offer a b… [+2350 chars]",
    },
    {
      source: {
        id: null,
        name: "Jalopnik",
      },
      author: "Bradley Brownell",
      title:
        "Pokémon Go Was A Plot To Use Your Data To Fast Track An AI-Slop Google Maps Competitor - Jalopnik",
      description:
        "Niantic is using scans of the real world from the game to create an AI-based navigation system",
      url: "https://jalopnik.com/pokemon-go-was-a-plot-to-use-your-data-to-fast-track-an-1851706279",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e586223e090d6593bc4e8b92ced5c09b.jpg",
      publishedAt: "2024-11-22T18:15:00Z",
      content:
        "Niantic, the privately-held PokémonGo app parent company, brought the augmented-reality app to the masses in July of 2016, and the game made it onto over a billion phones before 2019. Statistically y… [+1875 chars]",
    },
    {
      source: {
        id: null,
        name: "UploadVR",
      },
      author: "Don Hopper",
      title:
        "Microsoft Flight Simulator 2024 Soars To New Heights After Bumpy Launch - UploadVR",
      description:
        "Microsoft Flight Simulator 2024 provides players with a digital twin of Earth offering a sense of unmatched realism in VR, and we went hands-on.",
      url: "https://www.uploadvr.com/microsoft-flight-simulator-2024-vr-impressions/",
      urlToImage:
        "https://www.uploadvr.com/content/images/size/w1200/2024/11/2024-11-21-11-28-25.mp4_snapshot_18.37.500-1.jpg",
      publishedAt: "2024-11-22T18:03:56Z",
      content:
        "Microsoft Flight Simulator 2024 provides players with a virtual reality recreation of Earth that offers a sense of unmatched realism. Despite initial launch setbacks, the game promises thrilling avia… [+5242 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Tom Warren",
      title:
        "You can now try Microsoft’s Recall AI feature on a Copilot Plus PC - The Verge",
      description:
        "Microsoft is previewing its Recall feature for Windows. Copilot Plus PC owners can now try out a Dev Channel Windows Insider build with Recall enabled.",
      url: "https://www.theverge.com/2024/11/22/24302947/microsoft-recall-windows-insider-testing-dev-channel-click-to-do",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/NtCPDkW32g6MCvouBL5TwoOwuMo=/0x0:1842x1036/1200x628/filters:focal(921x518:922x519)/cdn.vox-cdn.com/uploads/chorus_asset/file/25456809/Gen_AI_feature3_VP5_1842x1036.jpg",
      publishedAt: "2024-11-22T18:00:00Z",
      content:
        "You can now try Microsofts Recall AI feature on a Copilot Plus PC\r\nYou can now try Microsofts Recall AI feature on a Copilot Plus PC\r\n / Windows Insiders in the Dev Channel who have a Qualcomm Copilo… [+3619 chars]",
    },
    {
      source: {
        id: null,
        name: "Jalopnik",
      },
      author: "Bradley Brownell",
      title:
        "Porsche's Most Aggressive GT3 RS Even Replaces The Rear Window With Carbon Fiber - Jalopnik",
      description:
        '“Our data promises a significant improvement in lap times compared to the standard 911 GT3 RS," says Manthey Racing',
      url: "https://jalopnik.com/porsches-most-aggressive-gt3-rs-even-replaces-the-rear-1851706175",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9de6d942bf3e79acb3ee28209105bfc1.jpg",
      publishedAt: "2024-11-22T17:15:00Z",
      content:
        "If you were holding out for a new technically-street-legal supercar that would be slightly faster around most race tracks than a Porsche 911 GT3 RS, but significantly more expensive, stiffer, and see… [+3416 chars]",
    },
    {
      source: {
        id: null,
        name: "Futurism",
      },
      author: "Ashley Bardhan",
      title:
        "There's Something Very Sketchy About Elon Musk's Diablo IV Build - Futurism",
      description:
        "Elon Musk recently shared a clip of him clearing Diablo's Pit in about one minute and 50 seconds, potentially setting a world record.",
      url: "https://futurism.com/the-byte/elon-musk-diablo-record",
      urlToImage:
        "https://wordpress-assets.futurism.com/2024/11/elon-musk-diablo-record.jpg",
      publishedAt: "2024-11-22T17:04:03Z",
      content:
        "Something's not right.\r\nPower Player\r\nElon Musk recently shared a clip of him clearing The Pit a severely challenging dungeon in the punishing action role-playing game Diablo IV in about one minute a… [+1894 chars]",
    },
    {
      source: {
        id: null,
        name: "Kotaku",
      },
      author: "Kenneth Shepard",
      title:
        "Overwatch 2’s New Tank Hero Looks Like An Absolute Menace - Kotaku",
      description: "Hazard is the 42nd character to join the hero shooter",
      url: "https://kotaku.com/overwatch-2-hazard-tank-hero-trailer-abilities-tips-1851706161",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4aee6ac55ff0ed9d66bdf464946d4564.jpg",
      publishedAt: "2024-11-22T16:55:00Z",
      content:
        "Overwatch 2s newest tank hero, Hazard, is officially launching next month when the shooters 14th season starts, but you can take him for a spin from now until November 25. Just before the test period… [+2664 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Justin Kahn",
      title:
        "Black Friday Week Deals: M4 Mac mini, iPad 10, more 9to5Mac - 9to5Mac",
      description:
        "Amazon’s Black Friday Week Deals rage on today with ongoing all-time lows on Apple Watch Series 10, the black Apple...",
      url: "https://9to5mac.com/2024/11/22/black-friday-week-deals-m4-mac-mini-ipad-10/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/11/Apple-Black-Friday-Week-deals-Mac-mini-M4-iPad-MacBook-Air.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-11-22T16:46:00Z",
      content:
        "Amazons Black Friday Week Deals rage on today with ongoing all-time lows on Apple Watch Series 10, the black Apple Watch Ultra 2, and AirPods Pro 2. But we have spotted some new deals youll want to c… [+8612 chars]",
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
