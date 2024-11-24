import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news", () => {
  const data = ref([
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
