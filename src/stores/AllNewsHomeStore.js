import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-home", () => {
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
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Matt Erickson",
      title:
        "UFC Fight Night 248 live updates: Results, round-by-round coverage of every fight - MMA Junkie",
      description:
        "Check out live round-by-round updates and official results from UFC Fight Night 248 in Macau.",
      url: "https://mmajunkie.usatoday.com/2024/11/ufc-macau-yan-vs-figueiredo-live-updates-results",
      urlToImage:
        "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2024/11/Petr-Yan-vs.-Deiveson-Figueiredo-UFC-Fight-Night-248.png?w=1024&h=576&crop=1",
      publishedAt: "2024-11-23T04:00:00Z",
      content:
        "UFC Fight Night 248 (ESPN+) takes place Saturday, and you can join us for live round-by-round coverage and official results beginning at 3 a.m. ET (midnight PT). UFC Fight Night 248 (ESPN+) takes pla… [+1258 chars]",
    },
    {
      source: {
        id: null,
        name: "Formula 1",
      },
      author: "F1",
      title:
        "FP3: Russell leads Piastri and Sainz in final Las Vegas GP practice - Formula 1",
      description:
        "Mercedes driver George Russell led the way during Friday’s third and final practice session for the Las Vegas Grand Prix, slotting ahead of McLaren rival Oscar Piastri and Ferrari’s Carlos Sainz before a late red flag.",
      url: "https://www.formula1.com/en/latest/article/fp3-russell-leads-piastri-and-sainz-in-final-las-vegas-gp-practice.3QijlmsyeHZygC7eHRyFe5",
      urlToImage:
        "https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1732331673/trackside-images/2024/F1_Grand_Prix_of_Las_Vegas___Qualifying/2186380069.jpg",
      publishedAt: "2024-11-23T03:46:25Z",
      content:
        "Mercedes then wound themselves up for another run on softs, bringing a 1m 34.475s from Russell and a 1m 34.341s from Lewis Hamilton restoring their early-weekend one-two formation as times edged clos… [+1178 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Mark Maske",
      title:
        "Giants release quarterback Daniel Jones, at his request - The Washington Post",
      description:
        "The quarterback, benched this week by the Giants, will become a free agent if he clears waivers, as expected.",
      url: "https://www.washingtonpost.com/sports/2024/11/22/daniel-jones-released-giants/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GXV6MJGDF42ZPCNH5YUIMNNUHY.jpg&w=1440",
      publishedAt: "2024-11-23T02:55:28Z",
      content:
        "The New York Giants and quarterback Daniel Jones opted to move on, sooner rather than later. The Giants, after benching Jones as their starter this week, granted his request to be released Friday.\r\nJ… [+4806 chars]",
    },
    {
      source: {
        id: null,
        name: "Libertyballers.com",
      },
      author: "Josh Grieb",
      title:
        "Maxey-McCain backcourt electric as Sixers finally get a win vs. Nets - Liberty Ballers",
      description:
        "Everything with the Sixers’ season has been a disaster, but Tyrese Maxey and Jared McCain provided hope Friday, taking over in the fourth quarter of a win over the Nets.",
      url: "https://www.libertyballers.com/2024/11/22/24303576/sixers-nets-final-score-game-recap-jared-mccain-tyrese-maxey-guerschon-yabusele",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/RXP_BBfmjrEj6B2-042xg14oqQc=/0x0:5281x2765/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25750564/2185452474.jpg",
      publishedAt: "2024-11-23T02:19:12Z",
      content:
        "Nearly a month into the regular season, the Sixers have notched their first win in regulation. \r\nPhiladelphia knocked off the Brooklyn Nets 113-98 to improve to 3-12 on the season and 1-2 in NBA Cup … [+5329 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Zach Braziller",
      title:
        "St. John’s trounces Virginia in emphatic bounce-back from heartbreak - New York Post ",
      description:
        "The early theme of this St. John’s season has been its resilience.",
      url: "https://nypost.com/2024/11/22/sports/st-johns-trounces-virginia-in-emphatic-bounce-back/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/11/newspress-collage-c40oucnon-1732335679162.jpg?quality=75&strip=all&1732317954&w=1024",
      publishedAt: "2024-11-23T02:19:00Z",
      content:
        "NASSAU, Bahamas The early theme of this St. Johns team has been its resilience. \r\nIt was apparent in how it handled the exhibition game at Rutgers, the shaky first half against Wagner and the second … [+3598 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Geoff Exstrom",
      title:
        "HuskerMax Predictions: Nebraska Football vs. Wisconsin - Sports Illustrated",
      description:
        "The Huskers and Badgers face one another with bowl eligibility on the line.",
      url: "https://www.si.com/college/nebraska/huskermax-predictions-nebraska-football-vs-wisconsin-badgers-cornhuskers-big-ten",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_4712,h_2650,x_0,y_230/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/all_huskers/01jd8s67md4s7d4yj74j.jpg",
      publishedAt: "2024-11-23T01:30:00Z",
      content:
        "The Nebraska Cornhuskers enter Saturday looking to snap some major losing streaks. \r\nAside from the Huskers' nationally known bowl drought dating back to 2016, NU hopes to also break its 10-game losi… [+5221 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Jesse Rogers",
      title: "Reds land Singer from Royals for India, Wiemer - ESPN",
      description:
        "The Reds acquired starting pitcher Brady Singer from the Royals in exchange for infielder Jonathan India and outfielder Joey Wiemer.",
      url: "https://www.espn.com/mlb/story/_/id/42551361/reds-land-brady-singer-royals-jonathan-india-joey-wiemer",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1123%2Fr1418441_2_1296x729_16%2D9.jpg",
      publishedAt: "2024-11-23T01:01:00Z",
      content:
        "The Kansas City Royals traded right-handed pitcher Brady Singer to the Cincinnati Reds for infielder Jonathan India and outfielder Joey Wiemer, the teams announced on Friday.\r\nSinger, 28, went 9-13 w… [+1324 chars]",
    },
    {
      source: {
        id: null,
        name: "Deseret News",
      },
      author: "Dave McCann",
      title: "BYU big man to lead refocused Cougars at ASU - Deseret News",
      description:
        "Who is Caleb Etienne? Where did Caleb Etienne transfer from when he joined the BYU football team?",
      url: "https://www.deseret.com/sports/2024/11/22/byu-cougars-big-man-caleb-etienne-ready-to-step-up-vs-asu/",
      urlToImage:
        "https://www.deseret.com/resizer/v2/Q5WOUPVLE5A6XJIBG52VU2QB5Y.JPG?focal=1450%2C749&auth=c4155af247be0a35c6a9b5d55587705f03e9b06805dbc245475c8a014486f92a&width=1200&height=630",
      publishedAt: "2024-11-23T01:00:00Z",
      content:
        "If BYUs showdown at Arizona State is decided in the trenches, Caleb Etienne will be a happy man. The 6-foot-8, 320-pound left tackle contends that he and his boys on the offensive line will be ready.… [+2418 chars]",
    },
    {
      source: {
        id: null,
        name: "MLB Trade Rumors",
      },
      author: "Anthony Franco",
      title: "Blue Jays Non-Tender Jordan Romano - MLB Trade Rumors",
      description:
        "The Blue Jays non-tendered closer Jordan Romano, tweets Jeff Passan of ESPN. The two-time All-Star had been projected by MLBTR contributor &hellip;",
      url: "https://www.mlbtraderumors.com/2024/11/blue-jays-non-tender-jordan-romano.html",
      urlToImage:
        "https://cdn.mlbtraderumors.com/files/2024/11/USATSI_23384553-1024x683.jpg",
      publishedAt: "2024-11-23T00:11:15Z",
      content:
        "The Blue Jays non-tendered closer Jordan Romano, tweets Jeff Passan of ESPN. The two-time All-Star had been projected by MLBTR contributor Matt Swartz for a $7.75MM salary in his final season of arbi… [+1731 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Charean Williams",
      title:
        '49ers QB Brandon Allen calls first start since 2021 "an opportunity to go out and play well" - NBC Sports',
      description:
        "Brock Purdy will travel with the 49ers, but soreness in his right shoulder will keep him from playing in Sunday's game against the Packers.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/49ers-qb-brandon-allen-calls-first-start-since-2021-an-opportunity-to-go-out-and-play-well",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/344e6cf/2147483647/strip/true/crop/4204x2365+0+250/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fd1%2F1d%2F08d8646747148403c95a8efe5fea%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2181413232",
      publishedAt: "2024-11-23T00:06:25Z",
      content:
        "Brock Purdy will travel with the 49ers, but soreness in his right shoulder will keep him from playing in Sundays game against the Packers. \r\nInstead, Brandon Allen will make his first start since the… [+1468 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Dustin Long",
      title:
        "Photos: Scene on red carpet at 2024 NASCAR Awards in Charlotte - NBC Sports",
      description:
        "The 2024 season came to an end with the NASCAR Awards at the Charlotte Convention Center.",
      url: "https://www.nbcsports.com/nascar/news/photos-scene-on-red-carpet-at-2024-nascar-awards-in-charlotte",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/50aaa66/2147483647/strip/true/crop/4032x2268+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F65%2F2a%2F463f4ab640809f91f56a1fe40623%2Frc-joey-and-brittany-logano.jpg",
      publishedAt: "2024-11-22T23:52:33Z",
      content:
        "CHARLOTTE, N.C. The 2024 NASCAR season officially came to an end Friday night with the NASCAR Awards at the Charlotte Convention Center.\r\nCup champion Joey Logano, Xfinity champion Justin Allgaier an… [+1652 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Zach Kruse",
      title:
        "Breaking down Packers’ final injury report of Week 12 vs. 49ers - Packers Wire",
      description:
        "Breaking down the final injury report of Week 12 before the Packers take on the San Francisco 49ers.",
      url: "https://packerswire.usatoday.com/2024/11/22/breaking-down-packers-final-injury-report-of-week-12-vs-49ers/",
      urlToImage:
        "https://packerswire.usatoday.com/wp-content/uploads/sites/57/2024/10/IR_GB.png?w=1024&h=576&crop=1",
      publishedAt: "2024-11-22T22:19:00Z",
      content:
        "The Green Bay Packers ruled out cornerback Jaire Alexander and linebacker Edgerrin Cooper and listed defensive lineman Colby Wooden as questionable on the final injury report before facing the San Fr… [+1814 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Michael David Smith",
      title:
        "49ers are underdogs at Packers, ending streak of 36 straight games as favorites - NBC Sports",
      description:
        "For the first time in a long time, the 49ers are not favored to win this week.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/49ers-are-underdogs-at-packers-ending-streak-of-36-straight-games-as-favorites",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/3889ca9/2147483647/strip/true/crop/4851x2729+0+227/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F84%2F7b%2F022a3b2c45349d337e906e765689%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1954229008",
      publishedAt: "2024-11-22T21:48:23Z",
      content:
        "For the first time in a long time, the 49ers are not favored to win this week.\r\nThe Packers are favored by 3.5 points at most sports books in Sundays game in Green Bay. That puts the 49ers in a posit… [+502 chars]",
    },
    {
      source: {
        id: null,
        name: "The Denver Post",
      },
      author: "Troy Renck",
      title:
        "Renck & File: NFL flexing Broncos to Thursday night muscles out fans yet again - The Denver Post",
      description:
        "The NFL deciding to flex the Denver Broncos-Los Angeles Chargers game to Thursday night muscles out fans yet again.",
      url: "https://www.denverpost.com/2024/11/22/nfl-thursday-night-flex-broncos-fans-renck/",
      urlToImage:
        "https://www.denverpost.com/wp-content/uploads/2023/05/202305201214TMS_____MNGTRPUB_SPORTS-ANTWAN-STALEY-LIKE-IT-OR-NOT-1-NY5.jpg?w=1024&h=683",
      publishedAt: "2024-11-22T20:13:00Z",
      content:
        "The NFL flexed, and once again fans were muscled out.\r\nFor the first time in league history, the league moved a Sunday game into Thursday prime time, pitting the Broncos at the Chargers on Dec. 19. T… [+3874 chars]",
    },
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
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Lena H. Sun",
      title:
        "First bird flu case in a child in the U.S. confirmed in California - The Washington Post",
      description:
        "The child had mild symptoms and is recovering. No other people have become infected, health officials said.",
      url: "https://www.washingtonpost.com/health/2024/11/22/bird-flu-first-child-case-california/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5RLQZXCG6HLQUPG732BFWZYWVI.jpg&w=1440",
      publishedAt: "2024-11-22T23:33:26Z",
      content:
        "A child in California has tested positive for bird flu, the first case of a child in the United States becoming infected with the H5N1 virus, federal officials said Friday.\r\nThe Centers for Disease C… [+240 chars]",
    },
    {
      source: {
        id: null,
        name: "Medical Xpress",
      },
      author: "Alexandra Becker",
      title:
        "New insights into sleep uncover mechanisms with broad implications for boosting brainpower - Medical Xpress",
      description:
        "While it's well known that sleep enhances cognitive performance, the underlying neural mechanisms, particularly those related to nonrapid eye movement (NREM) sleep, remain largely unexplored. A new study by a team of researchers at Rice University and Houston…",
      url: "https://medicalxpress.com/news/2024-11-insights-uncover-mechanisms-broad-implications.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/draw-brain-illustratin.jpg",
      publishedAt: "2024-11-22T22:23:20Z",
      content:
        "While it's well known that sleep enhances cognitive performance, the underlying neural mechanisms, particularly those related to nonrapid eye movement (NREM) sleep, remain largely unexplored. A new s… [+5509 chars]",
    },
    {
      source: {
        id: null,
        name: "Decrypt",
      },
      author: "Jose Antonio Lanz",
      title:
        "Chinese Scientists Report 'Promising Results' From Novel Alzheimer's Surgery - Decrypt",
      description:
        "“My mother's memory is stabilizing and improving, and she is able to complete household chores every day,\" said one patient's daughter.",
      url: "https://decrypt.co/293229/chinese-scientists-novel-alzheimers-surgery",
      urlToImage:
        "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2024/11/e76_3-gID_7.png",
      publishedAt: "2024-11-22T22:08:44Z",
      content:
        "Chinese researchers have reported initial results from an experimental surgical procedure they say aims to address Alzheimer's disease through manipulating the brain's waste clearance systems.\r\nThe f… [+4736 chars]",
    },
    {
      source: {
        id: null,
        name: "KSDK.com",
      },
      author: "Hunter Bassler",
      title:
        "Restaurant's lettuce wasn't the source of a St. Louis E. coli outbreak, officials say - KSDK.com",
      description:
        "Although the lettuce tested negative, officials said the caterer's salads are still considered a possible source.",
      url: "https://www.ksdk.com/article/news/health/st-louis-e-coli-outbreak-lettuce-tests-negative-andres-banquet-center/63-3bbeedfc-4dad-4a9a-ae6f-c437729ba517",
      urlToImage:
        "https://media.ksdk.com/assets/KFMB/images/d3046b5e-3f88-4bcf-814e-1a2b6b1f91f4/d3046b5e-3f88-4bcf-814e-1a2b6b1f91f4_1140x641.jpg",
      publishedAt: "2024-11-22T21:02:29Z",
      content:
        "ST. LOUIS COUNTY, Mo. Test results released Friday eliminated a possible source of an E. coli outbreak that sickened more than 100 people in St. Louis County.\r\nTests run by the Missouri Department of… [+1672 chars]",
    },

    {
      source: {
        id: null,
        name: "Neurosciencenews.com",
      },
      author: "Neuroscience News",
      title:
        "Brainstem Neurons Guide Gaze, Maintain Short-Term Memory - Neuroscience News",
      description:
        "Researchers used zebrafish larvae to uncover how brainstem neurons guide gaze and maintain short-term memory.",
      url: "https://neurosciencenews.com/brainstem-neurons-vision-memory-28116/",
      urlToImage:
        "https://neurosciencenews.com/files/2024/11/eye-movement-neural-circuit-neurscience.jpg",
      publishedAt: "2024-11-22T19:25:47Z",
      content:
        "Summary: Researchers used zebrafish larvae to uncover how brainstem neurons guide gaze and maintain short-term memory. By mapping neuronal circuits, they built a computational model that accurately p… [+7068 chars]",
    },
    {
      source: {
        id: null,
        name: "Study Finds",
      },
      author: "The Conversation",
      title:
        "COVID-19 infections may actually shrink cancerous tumors, shock study reveals - Study Finds",
      description:
        "Researchers discovered that severe COVID infection causes the body to produce a special type of monocyte with anti-cancer properties.",
      url: "https://studyfinds.org/covid-19-shrink-tumors/",
      urlToImage:
        "https://studyfinds.org/wp-content/uploads/2020/08/fusion-medical-animation-rnr8D3FNUNY-unsplash-scaled.jpg",
      publishedAt: "2024-11-22T19:25:42Z",
      content:
        "Photo by Fusion Medical Animation on Unsplash\r\nA fascinating new study, published in the Journal of Clinical Investigation, has revealed an unexpected potential benefit of severe COVID infection: it … [+5239 chars]",
    },
    {
      source: {
        id: null,
        name: "KSL.com",
      },
      author: "Carter Williams, KSL.com",
      title:
        "Over 100,000 more chickens, turkeys killed after more avian flu cases found in Utah - KSL.com",
      description:
        "State officials say over 100,000 additional chickens and turkeys have been culled after additional avian influenza was in Salt Lake and Piute counties.",
      url: "https://www.ksl.com/article/51196117/over-100000-more-chickens-turkeys-killed-after-more-avian-flu-cases-found-in-utah",
      urlToImage:
        "https://img.ksl.com/slc/2904/290474/29047494.jpeg?filter=kslv2/responsive_story_lg",
      publishedAt: "2024-11-22T19:02:42Z",
      content:
        "TAYLORSVILLE Over 100,000 additional chickens and turkeys have been culled after additional avian influenza was found in a backyard flock in Salt Lake County and multiple commercial facilities in sou… [+2382 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Parmita Uniyal",
      title:
        "What happens when you walk 20,000 steps a day - The Times of India",
      description:
        "Walking 20,000 steps a day, while challenging, offers a significant boost to physical and mental well-being. Studies show this activity can improve he",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/fitness/what-happens-when-you-walk-20000-steps-a-day/articleshow/115575656.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-115575826,width-1070,height-580,imgsize-58970,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-11-22T18:28:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Ed Cara",
      title:
        "A 16-Year-Old Girl’s Stomach Pain Turned Out to Be a Giant Hairball - Gizmodo",
      description:
        "The hair-raising case is an example of the rare condition known as Rapunzel syndrome.",
      url: "https://gizmodo.com/a-16-year-old-girls-stomach-pain-turned-out-to-be-a-giant-hairball-2000528408",
      urlToImage: "https://gizmodo.com/app/uploads/2024/11/Hairy-brush.jpg",
      publishedAt: "2024-11-22T17:45:22Z",
      content:
        "A 16-year-old girl’s mysterious gastrointestinal illness turned out to have an especially hairy culprit behind it. Doctors discovered that a giant hairball stuck in her stomach was the cause of her p… [+3362 chars]",
    },
    {
      source: {
        id: null,
        name: "STAT",
      },
      author: "Anil Oza",
      title: "Why whooping cough cases are spiking across the U.S. - STAT",
      description:
        "Whooping cough cases haven't been this high at this time of year since 2014, according to the CDC",
      url: "https://www.statnews.com/2024/11/22/whooping-cough-cases-up-500-percent-seasonal-cycle-worsened-by-vaccine-skepticism/",
      urlToImage:
        "https://www.statnews.com/wp-content/uploads/2024/11/PHIL_2121-1024x576.jpg",
      publishedAt: "2024-11-22T17:42:57Z",
      content:
        "Whooping cough cases are up sixfold from the same time last year in the U.S., affecting states ranging from Pennsylvania and New York on the East Coast to Wisconsin and Ohio in the Midwest and Califo… [+4202 chars]",
    },
    {
      source: {
        id: null,
        name: "AL.com",
      },
      author: "Heather Gann | hgann@al.com",
      title:
        "Alabama among 10 worst in the nation for STD rates, according to US News & World Report - AL.com",
      description:
        "The Alabama Department of Public Health (ADPH) is urging people to make safer and more informed decisions about sex.",
      url: "https://www.al.com/news/2024/11/alabama-among-10-worst-in-the-nation-for-std-rates-according-to-us-news-world-report.html",
      urlToImage:
        "https://www.al.com/resizer/v2/2QGO3CNWLNAWFPYP7T7KK7KLWY.jpg?auth=39f98f7736ee9d709bc070fa417b7d6ead6c2d999ecbffbb47ab227f5d7c56ad&width=1280&quality=90",
      publishedAt: "2024-11-22T16:51:00Z",
      content:
        "The Alabama Department of Public Health is urging people to make safer and more informed decisions about sex as the rate of sexually transmitted diseases continues to climb.\r\nAlabama ranks sixth in t… [+3559 chars]",
    },
    {
      source: {
        id: null,
        name: "Deseret News",
      },
      author: "Lois M. Collins",
      title:
        "Wearable patch monitors blood pressure continuously - Deseret News",
      description:
        "How do you measure blood pressure? New postage-stamp-sized wearable patch offers innovative continuous blood pressure monitoring. Read more",
      url: "https://www.deseret.com/lifestyle/2024/11/22/blood-pressure-monitor-wearble-patch-develop-uc-san-diego/",
      urlToImage:
        "https://www.deseret.com/resizer/v2/FM2COYO3BRH2THHFVAP24HAGSU.jpg?focal=0%2C0&auth=ca8252cc4c449280980a3cb0cc3c1b8064e3d0ea6705287f13870d2cf960dac5&width=1200&height=630",
      publishedAt: "2024-11-22T16:41:07Z",
      content:
        "A new wearable ultrasound patch that is a continuous, noninvasive blood pressure monitor could improve the quality of clinical and in-home cardiovascular health monitoring, according to the researche… [+3658 chars]",
    },
    {
      source: {
        id: null,
        name: "MadameNoire",
      },
      author: "Shannon Dawson",
      title:
        "Can't Afford Ozempic? These 6 Foods Can Help You Achieve The Pricey Drug's Weight Loss Results - MadameNoire",
      description:
        "Certain whole foods like oats, avocados, and lentils can mimic the effects of Ozempic, boosting the release of your GLP-1.",
      url: "http://madamenoire.com/1427108/ozempic-whole-foods-weight-loss/",
      urlToImage:
        "https://madamenoire.com/wp-content/uploads/sites/9/2024/11/17321777639788.jpg?strip=all&quality=80",
      publishedAt: "2024-11-22T16:27:13Z",
      content:
        "MadameNoire Featured Video\r\nYou don’t have to use Ozempic to lose weight. If you’re looking for a natural alternative to support your weight loss goals, certain whole foods can mimic the effects of t… [+1556 chars]",
    },
    {
      source: {
        id: null,
        name: "Newsmax",
      },
      author: "Lynn C. Allison",
      title: "Cold Weather Increases Stroke Risk - Newsmax",
      description:
        "While it is always important to be aware of stroke symptoms and prevention guidelines, it is even more crucial in the winter as the risk increases with cold weather and the holidays. The American Stroke Association recently issued new guidelines on preventing…",
      url: "https://www.newsmax.com/health/health-news/stroke-winter-cold/2024/11/22/id/1189085/",
      urlToImage:
        "https://www.newsmax.com/CMSPages/GetFile.aspx?guid=f3e19abd-9746-4966-b3e6-763007647ff6&SiteName=Newsmax",
      publishedAt: "2024-11-22T16:06:41Z",
      content:
        "While it is always important to be aware of stroke symptoms and prevention guidelines, it is even more crucial in the winter as the risk increases with cold weather and the holidays.\r\nThe American St… [+3817 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jacob Lev, CNN",
      title:
        "Jason and Kylie Kelce expecting baby number four - Yahoo Entertainment",
      description:
        "Jason Kelce, the longtime and recently retired Philadelphia Eagle offensive lineman and his wife, Kylie, are expecting baby number four, the mother announced...",
      url: "https://www.cnn.com/2024/11/22/sport/jason-and-kylie-kelce-expecting-baby-spt-intl/index.html",
      urlToImage:
        "https://media.zenfs.com/en/cnn_articles_875/add629c2e894b26dffcbf56913140970",
      publishedAt: "2024-11-23T03:09:00Z",
      content:
        "Jason Kelce, the longtime and recently retired Philadelphia Eagle offensive lineman and his wife, Kylie, are expecting daughter number four, the mother announced on Friday.\r\nKelce posted a photo on I… [+1202 chars]",
    },
    {
      source: {
        id: null,
        name: "Rolling Stone",
      },
      author: "Tomás Mier",
      title:
        "Khalid Comes Out as Gay After Being Outed: ‘I Am Not Ashamed’ - Rolling Stone",
      description:
        "Khalid came out as gay after being outed by an X user. The R&B singer said he is 'not ashamed' about his sexuality, and he's 'okay' with who he is.",
      url: "http://www.rollingstone.com/music/music-news/khalid-outed-comes-out-as-gay-response-1235178402/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2024/11/GettyImages-2178462176-1.jpg?w=1600&h=900&crop=1",
      publishedAt: "2024-11-23T01:08:55Z",
      content:
        "Khalid is opening up about his sexuality — and making it clear that he’s happy with who he is. In a series of X posts on Friday, the American Teen singer confirmed that he’s gay after being outed on … [+1693 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Neeraj Dhankher",
      title:
        "Love and Relationship Horoscope for November 23, 2024 - Hindustan Times",
      description:
        "Daily Love Horoscope November 23, 2024: Stars predict a romantic aura for these sun signs today. Find daily astrological predictions for all sun signs. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/love-and-relationship-horoscope-for-november-23-2024-101732289306226.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/11/22/1600x900/love_horoscope_today_1689775608643_1732289425975.jpg",
      publishedAt: "2024-11-23T00:30:12Z",
      content:
        "Aries: Today, the stars urge you to be confident and responsible towards your partnership. When you are comfortable in your skin, you will attract people because. Where there is a partnership, going … [+5236 chars]",
    },
    {
      source: {
        id: null,
        name: "SFGate",
      },
      author: "Alec Regimbal",
      title:
        "SF crypto billionaire says he'll eat the $6.2M piece of art he just bought - SFGATE",
      description:
        'Justin Sun says he plans to eat the banana he bought as part of the 2019 artwork "Comedian." Sun paid $6.2 million for the piece.',
      url: "https://www.sfgate.com/bayarea/article/sf-crypto-billionaire-plans-to-eat-art-piece-19937294.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/46/14/70/26791474/3/rawImage.jpg",
      publishedAt: "2024-11-23T00:16:58Z",
      content:
        "FILE: Tron CEO Justin Sun attends Consensus 2019 at the Hilton Midtown on May 15, 2019, in New York City. Sun said earlier this week that he plans to eat a part of an art piece he paid $6.2 million f… [+2202 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "MICHAEL R. SISAK",
      title:
        "Sean ‘Diddy’ Combs’ third bid to be released on bail won’t be decided until next week - The Associated Press",
      description:
        "A judge says he’ll rule next week on Sean “Diddy” Combs’ third request to be released from jail on bail while he awaits his sex trafficking trial. Judge Arun Subramanian said at a hearing Friday that he’ll put his decision until after Combs’ lawyers and feder…",
      url: "https://apnews.com/article/diddy-sean-combs-bail-sex-trafficking-391b7a4b51789a7132ee1e190add6913",
      urlToImage:
        "https://dims.apnews.com/dims4/default/5d03d38/2147483647/strip/true/crop/5120x2880+0+480/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fae%2F9b%2Fa20f0ff1344eda72195e8970dee6%2F1c2ead92c3c64eeaae5b123c68cbd55d",
      publishedAt: "2024-11-22T23:45:00Z",
      content:
        "NEW YORK (AP) Sean Diddy Combs ' lawyers tried for a third time Friday to persuade a judge to let the hip-hop mogul out of jail while he awaits his sex trafficking trial, but a decision wont come unt… [+4518 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Sean Mandell",
      title:
        "Jay Leno grabs a burger at In-N-Out after brutal fall left him black-eyed and badly bruised - New York Post ",
      description: "You can’t keep Jay Leno down!",
      url: "https://nypost.com/2024/11/22/entertainment/jay-leno-grabs-in-n-out-after-brutal-fall-left-him-badly-bruised/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/11/jay-leno-steps-completely-bruised-94143638.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-11-22T23:43:00Z",
      content:
        "You can’t keep Jay Leno down. \r\nAfter suffering a nasty fall that left him badly bruised, the former “Tonight Show” host, 74, was spotted grabbing lunch at one of Los Angeles’ favorite burger joints … [+3629 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Beatrice Verhoeven",
      title:
        "‘Wicked’ Director Jon M. Chu on Those Surprise Cameos: “We Had One Day to Do It” - Hollywood Reporter",
      description:
        'The kept-under-wraps cameos appear during the "One Short Day" sequence in the upcoming film.',
      url: "http://www.hollywoodreporter.com/movies/movie-features/wicked-jon-m-chu-surprise-cameos-1236058481/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/10/2551_SB_00048-H-2024.jpg?w=1296&h=730&crop=1",
      publishedAt: "2024-11-22T23:09:38Z",
      content:
        "[The following story includes major spoilers for Wicked.]\r\nOne short day. That’s, coincidentally, how much time the Wicked filmmakers had to shoot those cameos for the “One Short Day” scene in the fi… [+2831 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Zack Sharf",
      title:
        "‘Gladiator II’ Fact or Fiction: Did the Colosseum Actually Get Filled With Water and Sharks in Real Life? - Variety",
      description:
        'Ridley Scott\'s "Gladiator 2" features a standout action set piece where the Colosseum is filled with water and sharks. Did that actually happen?',
      url: "https://variety.com/2024/film/news/gladiator-2-true-story-colosseum-water-sharks-1236217959/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2024/11/gladiator-2_222978.png?w=1000&h=563&crop=1",
      publishedAt: "2024-11-22T22:30:00Z",
      content:
        "Ridley Scott‘s “Gladiator II” is full of memorable action scenes, from a bloody showdown featuring CGI baboons to Paul Mescal outsmarting a charging rhino in the Roman Colosseum. But one sequence tha… [+2419 chars]",
    },
    {
      source: {
        id: "buzzfeed",
        name: "Buzzfeed",
      },
      author: "Joseph Longo",
      title:
        'A Major Debate Is Brewing About Whether It\'s OK To Sing While Watching "Wicked" - BuzzFeed',
      description: "No one mourns the (people singing during) Wicked.",
      url: "https://www.buzzfeed.com/josephlongo/wicked-singing-theaters-debate-tweets",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2024-11/22/19/enhanced/21aacd93e752/original-909-1732303925-2.jpg?crop=3012:1575;0,0%26downsize=1250:*",
      publishedAt: "2024-11-22T20:48:58Z",
      content:
        'In a @nytimes article, a "Wicked" fan who intends to sing her heart out along with the movie says of those who would frown on that: "People who just are judgmental in that way, please wait to stream … [+101 chars]',
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Brian Steinberg",
      title:
        "Bonnie Hammer, Once Called ‘Queen of Cable,’ Plans to Exit NBCU After Celebrated Tenure - Variety",
      description:
        "Bonnie Hammer, who has helped manage everything from 'This Old House' to 'Monk,' plans to leave NBCUniversal after the end of the year",
      url: "https://variety.com/2024/tv/news/bonnie-hammer-nbcuniversal-exit-queen-of-cable-1236218412/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2021/06/Bonnie-Hammer-credit-Lisa-Berg_NBCUniversal.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-11-22T20:46:00Z",
      content:
        "Bonnie Hammer, a legendary TV executive who has had a hand in popular programs ranging from “This Old House” and “Zoom” to “Monk” and “Mr. Robot,” plans to leave her role as vice chairman of NBCUnive… [+2396 chars]",
    },
    {
      source: {
        id: null,
        name: "Parade",
      },
      author: "Yasmine Coleman",
      title:
        "Christina Aguilera Is Nearly Unrecognizable Amid Ozempic and Plastic Surgery Rumors - Yahoo Entertainment",
      description:
        "The pop singer sparked concern after a few of her latest public appearances.",
      url: "https://parade.com/news/christina-aguilera-nearly-unrecognizable-amid-ozempic-plastic-surgery-rumors-video",
      urlToImage:
        "https://media.zenfs.com/en/parade_250/563a93b499550904d6a0482ae0a392bf",
      publishedAt: "2024-11-22T19:43:02Z",
      content:
        "Christina Aguilera debuted her slimmed-down frame several months ago, but her physical appearance continues to spark concern.\r\nFans have speculated about the possibility of the singer's use of prescr… [+1692 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Palmer Haasch",
      title:
        "'Wicked' vs. 'Gladiator II': If you see only one movie this weekend, the choice is clear - Business Insider",
      description:
        '"Wicked" and "Gladiator II" are both pretty good films, but if you only have time for one this weekend, see "Wicked."',
      url: "https://www.businessinsider.com/wicked-vs-gladiator-2-better-movie-see-in-theaters-2024-11",
      urlToImage:
        "https://i.insider.com/6740bca7ede4eeae39290c61?width=1200&format=jpeg",
      publishedAt: "2024-11-22T19:43:00Z",
      content:
        '"Gladiator II" and "Wicked" are facing off at the box office this weekend.\r\n"Glicked," a portmanteau of the dueling releases, may not live up to the "Barbenheimer" phenomenon of 2023 the two films wo… [+4032 chars]',
    },
    {
      source: {
        id: null,
        name: "SheKnows",
      },
      author: "Candace Young",
      title:
        "Brooke Drops an Absolute Bomb on Ridge — and Electra’s Stalker Comes to Los Angeles - Soaps.com",
      description:
        "In today's Bold & Beautiful recap, Brooke tells Ridge Carter pulled a coup, Electra's stalker, Remy, arrives in Los Angeles.",
      url: "https://soaps.sheknows.com/the-bold-and-the-beautiful/recaps/753068/brooke-tells-ridge-carter-pulled-coup/",
      urlToImage:
        "https://soaps.sheknows.com/wp-content/uploads/2024/11/Ridge-Brooke-BB-CBS_997812.jpg",
      publishedAt: "2024-11-22T19:20:57Z",
      content:
        "All products and services featured are independently chosen by editors. However, Soaps.com may receive a commission on orders placed through its retail links, and the retailer may receive certain aud… [+6021 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Christy Piña",
      title:
        "Cara Delevingne Says She and Taylor Swift Went on a “Wild Ride” When They Lived Together - Hollywood Reporter",
      description:
        'The model and actress also noted that the superstar is "one of the funniest, most clever people," who could roast someone easily.',
      url: "http://www.hollywoodreporter.com/lifestyle/lifestyle-news/cara-delevingne-taylor-swift-wild-ride-living-together-1236069480/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/11/Cara-Delevingne-and-Taylor-Swift-Split-Getty-H-2024.jpg?w=1296&h=730&crop=1",
      publishedAt: "2024-11-22T18:16:57Z",
      content:
        "Cara Delevingne is giving further insight into her friendship with Taylor Swift, which includes being roommates for a brief time. \r\nThe model and actress sat down with Nikki Glaser for anInterview Ma… [+1762 chars]",
    },
    {
      source: {
        id: null,
        name: "PEOPLE",
      },
      author: "Catherine Santino",
      title:
        "Ellen DeGeneres Ditches Signature Blonde Hair as She's Spotted at British Pub Post Move: See Her Shocking New Look - Yahoo Entertainment",
      description:
        "The former talk show host has been living a quiet life in the English countryside with wife Portia de Rossi",
      url: "https://people.com/ellen-degeneres-ditches-blonde-hair-post-uk-move-see-her-shocking-new-look-8750089",
      urlToImage:
        "https://media.zenfs.com/en/people_218/f8514473e2cc4b4f83c0b907da399606",
      publishedAt: "2024-11-22T16:56:46Z",
      content:
        "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nT… [+2622 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Glenn Garner",
      title:
        "'Spellbound' Review: Rachel Zegler Leads A Menken Animated Classic - Deadline",
      description:
        "Now streaming on Netflix, 'Spellbound' features the voices of Rachel Zegler, John Lithgow, Nicole Kidman and Javier Bardem.",
      url: "http://deadline.com/2024/11/spellbound-film-review-1236185047/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2024/11/Spellbound.jpg?w=1024",
      publishedAt: "2024-11-22T16:32:00Z",
      content:
        "With all the behind-the-scenes makings of an animated classic, Spellbound features a talented voice cast and a can’t-miss creative team for a family movie with a whole lot of heart.\r\nDirected by Drea… [+3551 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "James Hibberd",
      title:
        "Ridley Scott: Denzel Washington’s ‘Gladiator II’ Character Is “Very Close to Trump” - Hollywood Reporter",
      description:
        "The director explains the backstory behind Washington's scene-stealing character, and how he's not unlike the president-elect.",
      url: "http://www.hollywoodreporter.com/movies/movie-news/ridley-scott-denzel-washington-gladiator-2-trump-1236067964/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/07/GL2_29680RC2-H-2024.jpg?w=1296&h=730&crop=1",
      publishedAt: "2024-11-22T16:15:52Z",
      content:
        "In Gladiator II, Denzel Washington plays a glamorous arms dealer and former gladiator who plots to control Rome. \r\nThe character, Macrinus, is based on an actual historical figure. But director Ridle… [+2133 chars]",
    },
    {
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
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/E031fcTgHXHGlh8yNCAsRMI1rTE=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24083660/STK171_L_Allen_Musk_02.jpg",
      publishedAt: "2024-11-23T00:21:00Z",
      content:
        "Elon Musk is directing harassment toward individual federal workers\r\nElon Musk is directing harassment toward individual federal workers\r\n / The efficiency agency co-lead is pointing out people by na… [+2132 chars]",
    },
    {
      source: {
        id: null,
        name: "Endpoints News",
      },
      author: "Max Gelman",
      title:
        "FDA approves BridgeBio’s heart disease drug, setting up competition with Pfizer, Alnylam - Endpoints News",
      description:
        "The FDA approved BridgeBio’s ​​acoramidis in a rare, genetic heart disease that’s expected to become an intense area of market competition, and a broad label will give it a near-immediate boost against the current leader.",
      url: "https://endpts.com/fda-approves-bridgebios-heart-disease-drug-setting-up-competition-with-pfizer-alnylam/",
      urlToImage:
        "https://endpts.com/wp-content/uploads/2023/02/FDA-headquarters-Getty-social.jpg",
      publishedAt: "2024-11-23T00:15:00Z",
      content: null,
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "JONEL ALECCIA",
      title:
        "Listeria outbreak tied to Yu Shang Food leaves California infant dead and 10 people sick - The Associated Press",
      description:
        "U.S. health officials said a California infant has died and at least 10 other people have been sickened in an outbreak of listeria food poisoning tied to ready-to-eat meat and poultry products that include chicken feet, duck neck and pork hock, feet and tongu…",
      url: "https://apnews.com/article/yu-shang-food-listeria-death-infant-illness-b8b3c72f331db48b26c33949006f0d3a",
      urlToImage:
        "https://dims.apnews.com/dims4/default/e83ab1e/2147483647/strip/true/crop/2000x1125+0+104/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbd%2F8e%2Fc3751566bebd67bba9750aabde36%2F79289c1d180f46768af0e5f0467b7d13",
      publishedAt: "2024-11-22T23:22:00Z",
      content:
        "A California infant has died and at least 10 other people have been sickened in an outbreak of listeria food poisoning tied to ready-to-eat meat and poultry products that include chicken feet, duck n… [+2033 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Hugh Son, CNBC",
      title:
        "'I have no money': Thousands of Americans see their savings vanish in Synapse fintech crisis - Yahoo Finance",
      description:
        "For 15 years, former Texas schoolteacher Kayla Morris put every dollar she could save into a home for her growing family.",
      url: "https://www.nbcnews.com/business/consumer/-no-money-thousands-americans-see-savings-vanish-synapse-fintech-crisi-rcna181419",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-11/241122-zach-jacobs-ew-242p-c5e89e.jpg",
      publishedAt: "2024-11-22T22:35:56Z",
      content:
        "For 15 years, former Texas schoolteacher Kayla Morris put every dollar she could save into a home for her growing family.\r\nWhen she and her husband sold the house last year, they stowed away the proc… [+9378 chars]",
    },
    {
      source: {
        id: null,
        name: "Minneapolis Star Tribune",
      },
      author: "JONEL ALECCIA, JONEL ALECCIA",
      title:
        "At least 19 people are sick in Minnesota from ground beef tied to E. coli recall - Star Tribune",
      description:
        "At least 19 people in Minnesota have been sickened by E. coli poisoning tied to a national recall of more than 167,000 pounds of potentially tainted ground beef, federal health officials said.",
      url: "https://www.startribune.com/at-least-15-people-are-sick-in-minnesota-from-ground-beef-tied-to-e-coli-recall/601185382",
      urlToImage:
        "https://arc.stimg.co/startribunemedia/QIWSBJGJZFBLNIJMW4VRNPQFVI.JPG?&w=1200&ar=1.91:1&fit=crop",
      publishedAt: "2024-11-22T22:18:45Z",
      content:
        "At least 19 people in Minnesota have been sickened by E. coli poisoning tied to a national recall of more than 167,000 pounds of potentially tainted ground beef, federal health officials said.\r\nDetro… [+1517 chars]",
    },
    {
      source: {
        id: null,
        name: "Investopedia",
      },
      author: "Kara Greenberg",
      title:
        "Supermicro Stock Jumps 12% Friday to Cap Off a Wild Week - Investopedia",
      description:
        "Super Micro Computer shares surged 12% Friday to cap off a wild week that saw the stock add nearly 80%. Here's what drove the rally.",
      url: "https://www.investopedia.com/supermicro-stock-jumps-12-percent-friday-to-cap-off-a-wild-week-8750528",
      urlToImage:
        "https://www.investopedia.com/thmb/ulgms4LGleVXF7IK1YUKT4t1DHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2155472456-636022f0e9c440bf99a4886cbd9acf2c.jpg",
      publishedAt: "2024-11-22T22:05:47Z",
      content:
        "<ul><li>Super Micro Computer shares surged 12% Friday to cap off a week that saw the stock rise nearly 80%. </li><li>The gains came in the wake of a shoutout from partner Nvidia in the chipmakers ear… [+1314 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Ed Cara",
      title: "The E. Coli Carrot Outbreak Has Gotten Bigger - Gizmodo",
      description:
        "The list of carrot products recalled for potentially containing dangerous bacteria has expanded.",
      url: "https://gizmodo.com/the-e-coli-carrot-outbreak-has-gotten-bigger-2000528539",
      urlToImage: "https://gizmodo.com/app/uploads/2024/11/carrots.jpg",
      publishedAt: "2024-11-22T21:33:34Z",
      content:
        "Carrot-lovers beware: there’s still a chance your chilled vegetables could contain dangerous E. coli bacteria. The list of potentially tainted organic carrot products has expanded in recent days and … [+2927 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Denitsa Tsekova, Vildana Hajric",
      title:
        "Gamblers Are Sinking Billions Into a Leveraged Market Fringe - Bloomberg",
      description:
        "The buy-everything mania that greeted Donald Trump’s election is cooling in the tried-and-tested world of stocks and corporate credit. Yet on Wall Street’s speculative fringes, the risk-taking frenzy is only getting bigger by the day.",
      url: "https://www.bloomberg.com/news/articles/2024-11-22/gamblers-are-sinking-billions-into-a-leveraged-market-fringe",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/if2qGL7ztsXA/v0/1200x800.jpg",
      publishedAt: "2024-11-22T21:33:30Z",
      content:
        "The buy-everything mania that greeted Donald Trumps election is cooling in the tried-and-tested world of stocks and corporate credit. Yet on Wall Streets speculative fringes, the risk-taking frenzy i… [+226 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Arsheeya Bajwa, Krystal Hu",
      title:
        "Amazon doubles down on AI startup Anthropic with another $4 bln - Reuters",
      description:
        "Amazon.com pumped another $4 billion into OpenAI competitor Anthropic, as the e-commerce giant goes up against Big Tech rivals in a race to capitalize on generative artificial intelligence technology.",
      url: "https://www.reuters.com/technology/artificial-intelligence/anthropic-receives-4-billion-investment-amazon-makes-aws-official-cloud-provider-2024-11-22/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/G7IUYWWX75PXTJCVXMKMECAIQ4.jpg?auth=b3acbcf92f3b3c380402989132207d776d39cab0d1873fb414c0e53dd9b702e1&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-11-22T21:20:20Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Investor's Business Daily",
      },
      author: "BENJAMIN PIMENTEL, Investor's Business Daily",
      title:
        "Nvidia Stock Falls 3% On Rare Downgrade, Missed 'Bullish Whispers' - Investor's Business Daily",
      description:
        "An analyst downgraded the AI giant after guidance missed 'bullish whispers' on Wall Street.",
      url: "https://www.investors.com/news/technology/nvidia-stock-nvda-earnings-downgrade-whisper-numbers/",
      urlToImage:
        "https://www.investors.com/wp-content/uploads/2018/01/stock-Nvidia-rack-01-company.jpg",
      publishedAt: "2024-11-22T21:08:00Z",
      content:
        'Nvidia (NVDA) beat earnings targets and its outlook was solid. But it wasn\'t enough to appease Wall Street as the AI powerhouse apparently missed what one analyst called "bullish whispers."\r\nNvidia s… [+2204 chars]',
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jordan Valinsky",
      title:
        "McDonald’s is giving its menu the biggest shakeup in years - Yahoo Finance",
      description:
        "McDonald’s is hoping a new value menu will win back customers who have been put off by its higher prices.",
      url: "https://www.cnn.com/2024/11/22/food/mcdonalds-new-value-menu?cid=external-feeds_iluminar_yahoo",
      urlToImage:
        "https://media.zenfs.com/en/cnn_business_articles_218/b1198e66d69a1e338d8e86655da2ba73",
      publishedAt: "2024-11-22T19:31:32Z",
      content:
        "McDonalds is hoping a new value menu will win back customers who have been put off by its higher prices.\r\nOn Friday, the fast-food chain unveiled the McValue menu, a new, budget-friendly category tha… [+2278 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters",
      title:
        "Chinese hackers preparing for conflict, US cyber official says - Reuters",
      description:
        "Chinese hackers are positioning themselves in U.S. critical infrastructure IT networks for a potential clash with the United States, a top American cybersecurity official said on Friday.",
      url: "https://www.reuters.com/technology/cybersecurity/chinese-hackers-preparing-conflict-says-us-cyber-official-2024-11-22/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/XFVZXAOFY5O7VDYCQCW7B3UH5Y.jpg?auth=8422bf3da54ae497ec9105fd8459a446b96a6ec82864cab76ddf49d3f1116391&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-11-22T19:21:15Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Investor's Business Daily",
      },
      author: "VIDYA RAMAKRISHNAN, Investor's Business Daily",
      title:
        "Nvidia Falls But Dow Jones Still Rallies; Google Falls As Tax Software Maker Tumbles (Live Coverage) - Investor's Business Daily",
      description:
        "The Dow Jones index rose even higher on the stock market today after Thursday's gains. Nvidia slipped in a buy zone and Google fell again.",
      url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-sp500-nasdaq-nvidia-nvda-google-googl-stock/",
      urlToImage:
        "https://www.investors.com/wp-content/uploads/2017/08/WallStreetFinance2-adobe.jpg",
      publishedAt: "2024-11-22T18:59:00Z",
      content:
        "Bulls remained in charge late Friday as major indexes headed for sizable weekly gains. The Dow Jones Industrial Average led the surge while the major indexes and particularly small caps moved to high… [+6910 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Andrew Romano",
      title:
        "Poll: Republicans reverse views on economy and election fraud after Trump’s win; much smaller shifts among Democrats - Yahoo! Voices",
      description:
        "The latest Yahoo News/YouGov results illustrate the powerful effect that partisanship can have on people’s perception of reality.",
      url: "https://www.yahoo.com/news/poll-republicans-reverse-views-on-economy-and-election-fraud-after-trumps-win-much-smaller-shifts-among-democrats-185428651.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/_eVyECTcicMxRBfzQFMyww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-11/f451b0d0-a763-11ef-9b3a-64e398f670c2",
      publishedAt: "2024-11-22T18:54:28Z",
      content:
        "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nI… [+3014 chars]",
    },
    {
      source: {
        id: null,
        name: "Federalreserve.gov",
      },
      author: null,
      title:
        "Federal Reserve announces additional information about the periodic review of its monetary policy strategy, tools, and communications - Federal Reserve",
      description:
        "The Federal Reserve on Friday announced additional information about the periodic review of its monetary policy strategy, tools, and communications—the f",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20241122a.htm",
      urlToImage:
        "https://www.federalreserve.gov/images/social-media/social-default-image-opengraph.jpg",
      publishedAt: "2024-11-22T18:32:26Z",
      content:
        "The Federal Reserve on Friday announced additional information about the periodic review of its monetary policy strategy, tools, and communicationsthe framework it uses to pursue its congressionally-… [+1443 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Dade Hayes",
      title:
        "SiriusXM Made It Too Difficult For Customers To Cancel Subscriptions, NY Judge Rules - Deadline",
      description:
        'Weeks after the FTC unveiled a "click to cancel" rule for subscription businesses, a New York judge said SiriusXM made it too tough for its subscribers to exit.',
      url: "http://deadline.com/2024/11/siriusxm-subscription-click-to-cancel-new-york-judge-1236185377/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2024/11/SiriusXM.jpg?w=1024",
      publishedAt: "2024-11-22T18:17:00Z",
      content:
        "Weeks after federal regulators announced a “click-to-cancel” rule for subscription businesses, a New York judge has ruled that SiriusXM made it too difficult for customers to end their service.\r\nNew … [+1960 chars]",
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
