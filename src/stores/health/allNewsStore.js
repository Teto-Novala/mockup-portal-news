import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-health", () => {
  const data = ref([
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
