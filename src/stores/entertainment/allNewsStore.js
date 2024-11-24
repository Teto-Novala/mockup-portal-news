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
      content: [
        "Jason Kelce, the longtime and recently retired Philadelphia Eagle offensive lineman and his wife, Kylie, are expecting daughter number four, the mother announced on Friday.",
        "Kelce posted a photo on Instagram of their daughters all displaying a wide range of emotions while wearing “Big Sister” sweaters and wrote, “I feel like we captured a very accurate representation of how each of the girls feel about getting another sister. At least Ellie, mom and dad are on the same page.”",
        "Brittany Mahomes, the wife of Kansas City Chiefs star quarterback Patrick Mahomes, commented, “Ahhhhhh Congrats you guys.”",
        "Jason and Kylie got married in 2018 and have three daughters - Wyatt born in 2019, Elliotte in 2021 and Bennett last year.",
        "Earlier this year, Kelce retired after 13 years in the NFL. His brother, Travis Kelce, whose relationship with Taylor Swift has caused a media circus around the family, is the Chiefs’ tight end and coming off winning his third Super Bowl ring last season.",
        "During his retirement speech, an emotional Kelce shared what it meant to him to be a father.",
        "“I think one of the best things a person can be in this world is a father,” Kelce said. “A father who is present, loving, devoted - just might be the greatest gift a child could ask for in our society.”",
        "The couple did not announce when the baby is expected to be due.",
      ],
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
      content: [
        "Khalid is opening up about his sexuality — and making it clear that he’s happy with who he is. In a series of X posts on Friday, the American Teen singer confirmed that he’s gay after being outed on the platform.",
        "“🏳️‍🌈!!! there yall go. next topic please lol,” the singer first wrote, using the LGBTQ flag, before responding to a fan to confirm, “I am [gay]! And that’s okay.”",
        "“I got outted and the world still continues to turn,” Khalid continued. “Let’s get this straight (lmao) I am not ashamed of my sexuality! In reality it ain’t nobodies business! But I am okay with me 🖤.”",
        "The posts came shortly after an X user, Hugo Almonte, went on a posting rampage about the artists he’s had sex with, and wrote that “one of your favorite gay R&B singers” once offered him drugs and “tried to set me up and lie that I broke into his house.”",
        "Almonte, whose own music has less than 750 monthly listeners, claimed that the “gay artists that are out right now” are “shitty as fuck.” He followed up the posts by sharing a photo with Khalid.",
        "Khalid has yet to respond to Almonte’s claims, but replied to one user who wrote that the “closet was glass.” Khalid’s response was graceful: “I wasn’t hiding anything! It’s just not any of your business.”",
        "Following his posts on social media, Almonte said in a statement to Rolling Stone that it was his intention to “share how he tried to use his power to silence me because I simply ended our relationship,” though did not name Khalid directly. Almonte claimed he has received death threats, and said “it’s crazy that these people said I was chasing clout, when I was holding onto this for five years, and I finally had enough.”",
        "Khalid’s team did not immediately respond to Rolling Stone‘s request for comment.",
        "The R&B star was quickly defended by fans and fellow gay artists, including producers MNEK and Amorphous, who condemned Almonte’s posts.",
        "“Your music can barely allow you to afford a small fry at jack in the box and you’re pressed about outing someone who has three diamond records. y’all are not the same, babes,” wrote Amorphous on X. “If you’re intentionally going out of your way to be shady or cause mess, do not be shocked if your failing music career is brought up.”",
        "“loser Loser LOSER LOSER behaviour,” wrote pop-R&B producer MNEK.",
      ],
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
      content: [
        "Aries: Today, the stars urge you to be confident and responsible towards your partnership. When you are comfortable in your skin, you will attract people because. Where there is a partnership, going the extra mile during this time will move your partner to the core. The way you take charge and offer emotional support will symbolise the level of trust and admiration between you. Singles, appreciate yourself and let your inner light glow.",
        "Taurus: If there is someone you really like, now is the best time to tell them how you feel. For the committed, it is a day to express yourselves and tell your partner how you feel about them and how much you cherish them. For the single workplace, moving to reach out with a kind gesture may create new opportunities. Cherish this moment for what it is: an opportunity to grow affection and make someone’s day a little brighter.",
        "Gemini: You need to find a middle ground with your partner today. Love is a two-way street, and this is a day to explore the other’s needs. If there is a conflict or a simple misunderstanding, it is time to come to the middle and restore the balance. If you are single, consider how flexibility in love can expand your opportunities. Sometimes, it only requires a little change of perspective to meet that someone special.",
        "Cancer: Be careful with external influences, which may negatively affect your relationships. Do not communicate with people that might cause drama or anything that might distract you. For couples, having quality time together and being in a quiet and supportive setting will assist. Look to develop a situation where both of you can express ideas and emotions freely without any influence from outside.",
        "Leo: Moderation is always good in love life. If you have been giving your job, interests, or other responsibilities preference over your partner, then it is high time that you started thinking. Not paying attention to your partner’s feelings may result in poor communication and a lack of intimacy. A kind word, a hug, a shared conversation, or even just sitting down and being present with each other can do so much.",
        "Virgo: A readiness to change could draw the attention of friends or those you may consider as potential dates. Learn to interact with individuals who will challenge you and increase your curiosity. Go with your instinct, and romance could be right around the corner. For couples, changing the pattern of their relationship will be refreshing. Your partner will also be encouraged by your effort to do things differently.",
        "Libra: The stars advise you to be grateful to improve your love life. Changing the focus from gloom to gratitude will help to raise the vibration and free up time for true connection. Think of all the positive emotions shared with you and others, and let that positivity spread. For couples, saying thank you to your partner for even those minor things done can change the entire day. Concentrating on the positive aspects will make you a hot commodity if you are single.",
        "Scorpio: Today, the stars stress the need to be calm and create positive energy in romantic relationships. Choose things that make you feel good and motivated. These moments will help build a strong emotional core. If committed, the main focus should be on preserving the inner balance. Do not let external negativity interfere with your bond. Create a warm and affectionate environment.",
        "Sagittarius: Today’s planetary alignment will push you to explore more in your social life. If you are out there looking for a partner or just need new acquaintances, this is the best time to socialise. The energy is about letting go of control and being open to change, so use it to go up to people you don’t usually interact with. For singles, starting a conversation with someone out of your league may result in interesting prospects.",
        "Capricorn: You must not dwell on the negatives and learn to look at the bright side. If you have been carrying emotional baggage of past heartbreaks or unresolved issues, remember that the power to change is within you. A positive mindset is not only a way to cheer you up, but it also helps to change the interaction with people. It may be time for singles to let go of fear and embrace self-confidence to attract the right person into your life.",
        "Aquarius: Today’s energy wants you to be receptive and give your partner your full attention. This is a perfect day to express what you feel, what you want to happen, and what you want to do without hesitation. There is nothing like a positive response from your partner that may make things get even better between you. Authenticity will not only strengthen the bond, but it will also introduce a flood of positive energy into your relationship.",
        "Pisces: The stars bring a new wave of creativeness to your romantic life. Even if you are satisfied with the status of your relationship, it will be even more beneficial to spend some time apart. This is not about proximity but about encouraging personality in the partnership. Giving your partner space to follow their dreams or hobbies can make you realise why you love them. Singles can engage in activities that make them happy.",
      ],
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
      content: [
        "Justin Sun, a San Francisco cryptocurrency mogul, paid $6.2 million for a banana.",
        "Technically, he bought one of three identical art pieces titled “Comedian,” done in 2019 by Italian artist Maurizio Cattelan. But really, it’s just a banana affixed to a wall with a strip of duct tape.",
        "Sun, the founder of the Tron blockchain, announced his purchase earlier this week on X.",
        "“I believe this piece will inspire more thought and discussion in the future and will become a part of history. I am honored to be the proud owner of the banana,” he wrote, followed by a banana emoji, “and look forward to it sparking further inspiration and impact for art enthusiasts around the world.”",
        "Oh, and Sun said he plans to eat his banana.",
        "“Comedian” is understandably controversial. On one side, some observers fail to understand how something like this could even be considered art. On the other side, people are willing to spend tens of millions on artwork that looks like something anyone could make. Sun seems to belong to the latter camp.",
        "“This is not just an artwork; it represents a cultural phenomenon that bridges the worlds of art, memes, and the cryptocurrency community,” Sun wrote in his post on X.",
        "According to the New York Times, the purchase of the work comes with a certificate of authenticity and instructions that explain how to replace the banana when it rots. The idea is that owners get to re-create Cattelan’s work themselves whenever they want.",
        "The New York Times also reported that Sun beat out six other bidders for the piece at a New York City branch of the auction house Sotheby’s, which set the initial bidding price at $800,000.",
        "On Friday, Sun asked Tesla CEO Elon Musk — who also owns SpaceX — on X (which Musk also owns) if he could tape the banana to a SpaceX rocket and launch it to Mars. Musk has not yet responded. ",
      ],
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
      content: [
        "NEW YORK (AP) — Sean “Diddy” Combs ' lawyers tried for a third time Friday to persuade a judge to let the hip-hop mogul out of jail while he awaits his sex trafficking trial, but a decision won’t come until next week as prosecutors warned of his “concerted effort” from behind bars to disrupt the case.",
        "U.S. District Judge Arun Subramanian said he’ll rule promptly on Combs’ bail request after the defense and prosecution file letters by noon Monday fleshing out some of the arguments they made during at a two-hour hearing in Manhattan federal court.",
        "Combs’ lawyers pitched having him await trial under around-the-clock surveillance either at his mansion on an island near Miami Beach or — after the judge scoffed at that location — at an apartment on Manhattan’s Upper East Side.",
        "Their $50 million bail proposal, secured by his Florida home, essentially amounts to keeping Combs on house arrest instead of in custody at the troubled Brooklyn federal jail where he’s been held for 67 days since his September arrest.",
        "Under their plan, Combs’ lawyers said he’ll be under near-total restrictions on his ability to see or contact anyone but them. But prosecutors argued that no bail conditions can mitigate Combs’ “risk of obstruction and dangerousness to others.”",
        "Combs has routinely flouted jail rules while locked up at the Metropolitan Detention Center in Brooklyn, prosecutors said, accusing him of attempting to interfere with witnesses and taint the jury pool.",
        "“Really, this amounts to the defendant paying his way out of custody,” Assistant U.S. Attorney Christy Slavik told Subramanian.",
        "Defense lawyer Anthony Ricco countered that the prosecution’s portrayal of Combs as “a lawless person who doesn’t follow instructions” or “an out-of-control individual who has to be detained” is inaccurate.",
        "Another Combs lawyer, Teny Geragos, added that given the strict release conditions they’ve proposed, “it would be impossible for him not to follow rules.”",
        "Combs, 55, has pleaded not guilty to charges that he coerced and abused women for years with help from a network of associates and employees while silencing victims through blackmail and violence, including kidnapping, arson and physical beatings.",
        "His trial is slated to begin May 5.",
        "Two other judges previously concluded that the Bad Boy Records founder would be a danger to the community if he is freed, and an appeals court judge last month denied Combs’ immediate release while a three-judge panel of the 2nd U.S. Circuit Court of Appeals weighs his bail request.",
        "Friday’s hearing was the second time Combs was in court this week. On Tuesday, a judge blocked prosecutors from using as evidence papers that were seized from his cell during a jail-wide sweep for contraband and weapons.",
        "As he entered through a side door, Combs waved to relatives including his mother and several of his children in the courtroom gallery, tapping his hand to his heart and blowing kisses at them. He then hugged his lead attorney, Marc Agnifilo, before sitting at the defense table.",
        "Combs was not handcuffed or shackled and wore a beige jail uniform, occasionally pulling a pair of reading glasses from his pocket as he peered at papers in front of him.",
        "Prosecutors contend that while incarcerated the “I’ll Be Missing You” singer has orchestrated social media campaigns aimed at influencing potential jurors. They allege that he has also attempted to leak materials he believes would help his case and is contacting potential witnesses via third parties.",
        "“Simply put, the defendant cannot be trusted,” Slavik argued.",
        "In renewing their push for Combs’ release, his lawyers sought to undercut the strength of a potential key piece of evidence: a March 2016 video showing him hitting and kicking his then-girlfriend, R&B singer Cassie, in a Los Angeles hotel hallway.",
        "Prosecutors contend the assault happened during a “Freak Off,” an event in which they allege Combs used his “power and prestige” to induce female victims into drugged-up, elaborately produced sexual performances with male sex workers.",
        "Combs’ lawyers said in court papers that newly unearthed evidence refutes that, and that the video, which first aired on CNN in May, was “a minutes-long glimpse into a complex but decade-long consensual relationship” between Combs and Cassie.",
        "Slavik, responding to defense claims that the recording was manipulated or taken out of context, said prosecutors don’t have the full version because Combs paid hotel staff $100,000 “to make the original video go away.”",
        "“This is a case about violence,” Slavik told Subramanian in a final plea to keep Combs locked up. “The defendant has engaged in physical, sexual and emotional abuse of his romantic partners for years. ... He’s hit. He’s kicked. He’s dragged.”",
      ],
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
