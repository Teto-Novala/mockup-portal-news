import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-entertainment", () => {
  const data = ref([
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
