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
