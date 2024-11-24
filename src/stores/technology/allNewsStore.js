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
      content: [
        `Intel's first Arc B580 GPUs based on the Xe2 "Battlemage" architecture have been leaked & they look quite compelling.`,
        'It looks like Intel will be the first with the next-generation GPU launches, as evidenced by the leak of the first two Arc B580 "Battlemage" graphics cards. Based on the Xe2 graphics architecture, the Arc B-series graphics cards aim to be a great option for mainstream gamers, where AMD will also be competing with NVIDIA in their next-gen launches. Intel being the first to enter this segment with a next-gen GPU means they can stir up the gaming market.',
        "Starting with the two leaked models, we have the ASRock Intel Arc B580 Steel Legend OC and the ASRock Intel Arc B580 Challenger OC. Both of these graphics cards are based on Intel's B580 solution, which is expected to be one of the many Battlemage B-series products that Intel will introduce in the coming month as hinted recently. Both of these are fully custom models with an OC configuration which means they aren't using reference PCBs or reference clocks outside the box.",
        "The ASRock Intel Arc B580 Steel Lgend OC features a triple-fan cooler with a 2.5-slot shroud that measures 15.71x8.43x3.82 inches. It's quite a big graphics card and comes with a factory overclock of 2800 MHz. Power to the graphics card is provided by dual 8-pin connectors and the backside can be seen using a cut-out design since it extends beyond the PCB and allows the third fan to blow hot air out of the back.",
        "The second variant is the Intel Arc B580 Challenger OC which makes use of a dual-slot and dual-fan cooling solution that also features a cut-out on the back for the air to pass through & only comes with a single 8-pin connector. Interestingly, both cards are rated for use with a 650W power supply. The Challenger OC measures 14.17x8.54x2.52 inches.",
        "n addition to the designs, both graphics cards come equipped with 12 GB of VRAM capacity and a 19 Gbps / 192-bit design which should offer 456 GB/s of bandwidth. This has slightly lower memory bandwidth than the Arc A580, which had slower 16 Gbps memory dies but adopted a 256-bit bus interface, although with an 8 GB VRAM. The card should also be using the Battlemage BMG-G21 GPU core with 20 Xe2 cores and the Xe2 architecture should provide a substantial uplift over the Arc A-series graphics cards owing to various IPC and architectural upgrades along with faster RT units.",
        "Both cards are listed on Amazon but so far there are no price listings, so it's hard to say how much they will cost. The Intel Arc A580 did launch at $179 US and that was quite a disruptive price point, but due to lacking driver and game support for Arc GPUs at the start, the reputation of Intel's first-generation GPUs got hurt a lot.",
        "This time, Intel does have proper driver and GPU work, and they've also promised not to repeat the same mistakes they made with Alchemist, so if Battlemage has the same pricing strategy and better driver support from the beginning, then it has the potential to kickstart Intel's GPU journey, so look forward to updates very soon on the next-gen Arc graphics lineup.",
      ],
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
      content: [
        "OpenAI is funding academic research into algorithms that can predict humans’ moral judgements.",
        "In a filing with the IRS, OpenAI Inc., OpenAI’s nonprofit org, disclosed that it awarded a grant to Duke University researchers for a project titled “Research AI Morality.” Contacted for comment, an OpenAI spokesperson pointed to a press release indicating the award is part of a larger, three-year, $1 million grant to Duke professors studying “making moral AI.”",
        "Little is public about this “morality” research OpenAI is funding, other than the fact that the grant ends in 2025. The study’s principal investigator, Walter Sinnott-Armstrong, a practical ethics professor at Duke, told TechCrunch via email that he “will not be able to talk” about the work.",
        "Sinnott-Armstrong and the project’s co-investigator, Jana Borg, have produced several studies — and a book — about AI’s potential to serve as a “moral GPS” to help humans make better judgements. As part of larger teams, they’ve created a “morally-aligned” algorithm to help decide who receives kidney donations, and studied in which scenarios people would prefer that AI make moral decisions.",
        "According to the press release, the goal of the OpenAI-funded work is to train algorithms to “predict human moral judgements” in scenarios involving conflicts “among morally relevant features in medicine, law, and business.”",
        "But it’s far from clear that a concept as nuanced as morality is within reach of today’s tech.",
        "In 2021, the nonprofit Allen Institute for AI built a tool called Ask Delphi that was meant to give ethically sound recommendations. It judged basic moral dilemmas well enough — the bot “knew” that cheating on an exam was wrong, for example. But slightly rephrasing and rewording questions was enough to get Delphi to approve of pretty much anything, including smothering infants.",
        "The reason has to do with how modern AI systems work.",
        "Machine learning models are statistical machines. Trained on a lot of examples from all over the web, they learn the patterns in those examples to make predictions, like that the phrase “to whom” often precedes “it may concern.”",
        "AI doesn’t have an appreciation for ethical concepts, nor a grasp on the reasoning and emotion that play into moral decision-making. That’s why AI tends to parrot the values of Western, educated, and industrialized nations — the web, and thus AI’s training data, is dominated by articles endorsing those viewpoints.",
        "Unsurprisingly, many people’s values aren’t expressed in the answers AI gives, particularly if those people aren’t contributing to the AI’s training sets by posting online. And AI internalizes a range of biases beyond a Western bent. Delphi said that being straight is more “morally acceptable” than being gay.",
        "The challenge before OpenAI — and the researchers it’s backing — is made all the more intractable by the inherent subjectivity of morality. Philosophers have been debating the merits of various ethical theories for thousands of years, and there’s no universally applicable framework in sight.",
        "Claude favors Kantianism (i.e. focusing on absolute moral rules), while ChatGPT leans every-so-slightly utilitarian (prioritizing the greatest good for the greatest number of people). Is one superior to the other? It depends on who you ask.",
        "An algorithm to predict humans’ moral judgements will have to take all this into account. That’s a very high bar to clear — assuming such an algorithm is possible in the first place.",
      ],
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
      content: [
        "I didn’t expect to say either of these things to you when 2024 began: the new Call of Duty single-player campaign is a blast. And you can play it for $1.",
        "A week before the release of Call of Duty: Black Ops 6, Microsoft removed the ability to try 1-month of Game Pass for $1. However, the option has returned with a tweak: $1 now buys you 14 days and appears to be exclusive to PC. On console, you can get a month for $9.99, which remains comparably reasonable for a new Call of Duty campaign. Which means, you can now play the entirety of the Black Ops 6 campaign this weekend for pocket change. And trust me: you should.",
        "I’m not a Call of Duty zealot. Despite an early obsession, beginning with Call of Duty 2 on the Xbox 360, my fandom disintegrated around Black Ops 2 in 2012. And though I’ve played nearly every campaign, I haven’t enjoyed that time since Infinite Warfare. That was eight years ago.",
        "So when I say Black Ops 6 campaign is a treat, I am doing so with the context of the full franchise. Good and bad. I wouldn’t say this campaign’s a return to form. Instead, its creators cleverly reimagine other great gaming franchises through the lens of COD. Each mission riffs on a sub-genre of first-person shooters, from an open-world map à la Far Cry to a science laboratory that echoes the works of Arkane Studios and the late Irrational Games.",
        "Holding together the disparate stages? An abandoned mansion hub, where characters chat about their bizarro alternate Cold War history while the player is free to solve little puzzles and unlock perks and buffs to carry into the next mission. Taken holistically, the Black Ops 6 campaign is like a Mission: Impossible movie, but instead of setpieces set in iconic international locales, they’re dropped into a syllabus for FPS 101.And if you don’t like it? I have 25 other games for you.",
      ],
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
      content: [
        "Blue Origin's powerful new orbital rocket has risen on the launch pad to prep for a debut flight that could happen soon.",
        "New Glenn was stacked at Launch Complex 36 at Cape Canaveral Space Force Station in Florida, which is next door to NASA's Kennedy Space Center. Blue Origin has not announced an official launch date for the big new rocket, but media reports have suggested it could occur in late 2024.",
        `"Gone vertical," Blue Origin officials wrote Thursday (Nov. 21) on X, formerly Twitter, with a photo of the rocket. The company's suborbital system, New Shepard, coincidentally made its latest flight just hours later on Friday (Nov. 22) morning with six people on board, including the 100th woman to fly to space.`,
        "The New Glenn launch is slated to carry one of the company's new Blue Ring spacecraft on a National Security Space Launch certification flight called DarkSky-1 . The U.S. Defense Innovation Unit is sponsoring the effort.",
        "New Glenn comes in two- or three-stage variants with a fully reusable first-stage booster. The two-stage version is 270 feet (82 meters) tall, while the three-stage variant is 313 feet (95 m) tall. For comparison: SpaceX's Falcon 9 rocket is between 209 feet (63.7 m) and 230 feet (70 m) tall, depending on its payload.",
        `Blue Ring, the spacecraft platform, is designed to be a service module for other spacecraft or instruments to attach to. The platform is designed to either remain on the rocket or to deploy, depending on the mission's needs. Blue Origin officials recently wrote in a company statement that Blue Ring can "easily maneuver through multiple orbits."`,
        "New Glenn was expected to fly for the first time in October 2024 with NASA's twin ESCAPADE Mars probes on board, but the space agency stood down from the launch out of a concern about cost overruns associated with the new and therefore somewhat developmental rocket line.",
      ],
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
      content: [
        "The Black Friday on Amazon feature two exciting Xbox consoles at a record low price: the Xbox Series X – 1TB Digital Edition and the Xbox Series X 1TB SSD Console, both offering huge savings and advanced gaming experiences. The Xbox Series X digital edition is priced at $399 which is an 11% discount from its original price of $449. Meanwhile, the Xbox Series X disc drive console is available for $448, which is a 10% savings off its list price of $499.",
        "Both consoles come with Amazon’s early Black Friday price guarantee: if the price drops further during the sale period, you will receive a refund for the difference. Furthermore, Amazon has extended its return policy until January 31, 2025 so that you’ll have ample time for holiday gift returns or exchanges.",
        "As you probably know, both Microsoft consoles are powered by a custom AMD Zen 2 processor with eight cores clocked at 3.8 GHz and an AMD RDNA 2 GPU that delivers up to 12 teraflops of graphics power. This hardware enables true 4K gaming at frame rates of up to 120 FPS and provide a visually stunning and smooth gaming experience. Both of them also feature a 1TB custom NVME SSD.",
        "The key difference lies in their design and features: The Xbox Series X Digital Edition is an all-digital console meaning it lacks a physical disc drive and makes it ideal for players who prefer to download their games directly from the Xbox store. This model retains all the performance capabilities of the standard Series X including support for HDR content and quick resume functionality.",
        "On the other hand, the Xbox Series X SSD console includes a physical disc drive which allows gamers to play both digital and physical copies of games. This can be advantageous for those who have an existing library of physical games or prefer to buy used titles. On the long term, it will be cheaper if you’re willing to sell your games.",
        "In terms of connectivity, both consoles come equipped with three USB 3.1 ports, an HDMI 2.1 port and support for Ethernet connections for robust online gaming capabilities. They also feature Dolby Atmos support for immersive sound experiences and can connect wirelessly via Wi-Fi 6. When considering which console to purchase, you should weigh their preferences for physical versus digital media: If you primarily buy games digitally or subscribe to services like Xbox Game Pass, the Xbox Series X Digital Edition might be the better choice due to its lower price point and sleek design.",
      ],
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
