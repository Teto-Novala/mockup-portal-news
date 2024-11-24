import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-home", () => {
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
      content: [
        "Elon Musk is, in addition to many other things, now the co-lead of the currently nonexistent Department of Government Efficiency (DOGE) advisory group. Now, before it even gets rolling, he has begun singling out individual government employees he says are emblematic of the government’s bloat and posting about them to his hundreds of millions of followers on X.",
        "Earlier this week, as first reported by The Wall Street Journal, the X user “datahazard” shared a screenshot on X highlighting the role of Ashley Thomas, the Director of Climate Diversification at the US International Development Finance Corporation, saying, “I don’t think the US Taxpayer should pay for the employment” of that role. Musk reposted it, adding the comment “so many fake jobs” in a post with more than 33 million views.",
        "As the WSJ notes, Musk’s followers have responded in exactly the way you’d expect: with a flood of memes and harassment targeting Thomas, whose LinkedIn and Facebook pages are now private. Everett Kelley, president of the American Federation of Government Employees, told the WSJ that the posts “are aimed at sowing terror and fear at federal employees.”",
        "Flooding targets with harassment is a tactic Musk has done in the past, including calling caver Vernon Unsworth a “pedo guy,” criticizing a former Twitter exec following his offer to buy the company, and suggesting that head of trust and safety Yoel Roth was sympathetic to pedophilia. All, of course, under the guise of “free speech.”",
        "The ensuing harassment, of course, is precisely the point: Musk has systematically turned X into a megaphone for his views and has wielded that megaphone to whatever end he finds funny or useful. Musk and DOGE co-lead Vivek Ramaswamy have promised to do much of their work in public (and sometimes by X poll), too, which means this kind of pointed attention is likely headed toward many other civil servants in the near future.",
      ],
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
      content: [
        "A California infant has died and at least 10 other people have been sickened in an outbreak of listeria food poisoning tied to ready-to-eat meat and poultry products that include chicken feet, duck neck, beef shank and pork hock, federal health officials reported Friday.",
        "Yu Shang Food, Inc., of Spartanburg, South Carolina, has recalled more than 72,000 pounds of meat and poultry products tied to the outbreak, according to the U.S. Agriculture Department. Some products were initially recalled on Nov. 9.",
        "The foods were shipped to retail locations nationwide and available online, and illnesses have been reported in four states. The problem was discovered in October after routine tests detected listeria in the foods and the production environment.",
        "Of the 11 people sickened, nine were hospitalized, the U.S. Centers for Disease Control said. A California woman who was pregnant with twins was sickened and both infants died, the CDC said, but listeria was only found in a sample from one of the infants, so that child and the mother were included in the count but the other infant wasn’t.",
        "Interviews with people who were sickened and laboratory findings pointed to the Yu Shang Food products.",
        "Although the foods have been recalled, some may still be in consumers’ refrigerators or freezers. The products should be discarded or returned to the place of purchase. Refrigerators, containers and other surfaces that may have touched the foods should be cleaned and sanitized.",
        "People get sick with listeria poisoning when they eat foods contaminated with the bacteria. Symptoms can be mild and include fever, muscle aches, nausea, vomiting and diarrhea. More serious illness can include headache, stiff neck, confusion, loss of balance and convulsions.",
        "Listeria poisoning is tricky, because symptoms can start quickly, within a few hours or days after eating contaminated food. But they also can take weeks or up to three months to show up. Those most vulnerable to getting sick include the very young, people older than 65 and those with weakened immune systems or who are pregnant.",
        "A different listeria outbreak tied to recalled Boar’s Head deli meats has ended, CDC officials said this week. That outbreak killed 10 people this summer and sickened dozens of others.",
      ],
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
      content: [
        "For 15 years, former Texas schoolteacher Kayla Morris put every dollar she could save into a home for her growing family.",
        "When she and her husband sold the house last year, they stowed away the proceeds, $282,153.87, in what they thought of as a safe place — an account at the savings startup Yotta held at a real bank.",
        "Morris, like thousands of other customers, was snared in the collapse of a behind-the-scenes fintech firm called Synapse and has been locked out of her account for six months as of November. She held out hope that her money was still secure. Then she learned how much Evolve Bank & Trust, the lender where her funds were supposed to be held, was prepared to return to her.",
        "“We were informed last Monday that Evolve was only going to pay us $500 out of that $280,000,” Morris said during a court hearing last week, her voice wavering. “It’s just devastating.”",
        "The crisis started in May when a dispute between Synapse and Evolve Bank over customer balances boiled over and the fintech middleman turned off access to a key system used to process transactions. Synapse helped fintech startups like Yotta and Juno, which are not banks, offer checking accounts and debit cards by hooking them up with small lenders like Evolve.",
        "In the immediate aftermath of Synapse’s bankruptcy, which happened after an exodus of its fintech clients, a court-appointed trustee found that up to $96 million of customer funds was missing.",
        "The mystery of where those funds are hasn’t been solved, despite six months of court-mediated efforts between the four banks involved. That’s mostly because the estate of Andreessen Horowitz-backed Synapse doesn’t have the money to hire an outside firm to perform a full reconciliation of its ledgers, according to Jelena McWilliams, the bankruptcy trustee.",
        "But what is now clear is that regular Americans like Morris are bearing the brunt of that shortfall and will receive little or nothing from savings accounts that they believed were backed by the full faith and credit of the U.S. government.",
        "The losses demonstrate the risks of a system where customers didn’t have direct relationships with banks, instead relying on startups to keep track of their funds, who offloaded that responsibility onto middlemen like Synapse.",
        "There are thousands of others like Morris. While there’s not yet a full tally of those left shortchanged, at Yotta alone, 13,725 customers say they are being offered a combined $11.8 million despite putting in $64.9 million in deposits, according to figures shared by Yotta co-founder and CEO Adam Moelis.",
        "CNBC spoke to a dozen customers caught in this predicament, people who are owed sums ranging from $7,000 to well over $200,000.",
        "From FedEx drivers to small business owners, teachers to dentists, they described the loss of years of savings after turning to fintechs like Yotta for the higher interest rates on offer, for innovative features or because they were turned away from traditional banks.",
        "One Yotta customer, Zach Jacobs, logged onto Evolve’s website on Nov. 4 to find he was getting back just $128.68 of the $94,468.92 he had deposited — and he decided to act.",
        "The 37-year-old Tampa, Florida-based business owner began organizing with other victims online, creating a board of volunteers for a group called Fight For Our Funds. It’s his hope that they gain attention from press and politicians.",
        "So far, 3,454 people have signed on, saying they’ve lost a combined $30.4 million.",
        "“When you tell people about this, it’s like, ‘There’s no way this can happen,’” Jacobs said. “A bank just robbed us. This is the first reverse bank robbery in the history of America.”",
        "Andrew Meloan, a chemical engineer from Chicago, said he had hoped to see the return of $200,000 he’d deposited with Yotta. Early this month, he received an unexpected PayPal remittance from Evolve for $5.",
        "“When I signed up, they gave me an Evolve routing and account number,” Meloan said. “Now they’re saying they only have $5 of my money, and the rest is someplace else. I feel like I’ve been conned.”",
        "Unlike meme stocks or crypto bets, in which the user naturally assumes some risk, most customers viewed funds held in Federal Deposit Insurance Corp.-backed accounts as the safest place to keep their money. People relied on accounts powered by Synapse for everyday expenses like buying groceries and paying rent, or for saving for major life events like home purchases or surgeries.",
        "Several people CNBC interviewed said signing up seemed like a good bet since Yotta and other fintechs advertised that deposits were FDIC-insured through Evolve.",
        "“We were assured that this was just a savings account,” Morris said during last week’s hearing. “We are not risk-takers, we’re not gamblers.”",
        "A Synapse contract that customers received after signing up for checking accounts stated that user money was insured by the FDIC for up to $250,000, according to a version seen by CNBC.",
        "“According to the FDIC, no depositor has ever lost a penny of FDIC-insured funds,” the 26 page contract states.",
        "Abandoned by U.S. regulators who have so far declined to act, they are left with few clear options to recoup their money.",
        "In June, the FDIC made it clear that its insurance fund doesn’t cover the failure of nonbanks like Synapse, and that in the event of such a firm’s failure, recovering funds through the courts wasn’t guaranteed.",
        "The next month, the Federal Reserve said that as Evolve’s primary federal regulator it would monitor the bank’s progress “in returning all customer funds” to users.",
        "“We are responsible for working to ensure that the bank operates in a safe and sound manner and complies with applicable laws, including laws protecting consumers,” Fed general counsel Mark E. Van Der Weide said in a letter.",
        "In September, the FDIC proposed a new rule that would force banks to keep detailed records for customers of fintech apps, improving the chances that they qualify for coverage in a future calamity and cutting the risk that funds would go missing.",
        "McWilliams, herself a former FDIC chair during the first Trump presidency, told the California judge handling the Synapse bankruptcy case last week she was “disheartened” that every financial regulator has decided not to help.",
        "The FDIC and Fed declined to comment for this story, and McWilliams didn’t respond to emails.",
      ],
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
      content: [
        "At least 19 people in Minnesota have been sickened by E. coli poisoning tied to a national recall of more than 167,000 pounds of potentially tainted ground beef, federal health officials said.",
        "Detroit-based Wolverine Packing Co. recalled the meat this week after Minnesota state agriculture officials reported multiple illnesses and found that a sample of the product tested positive for E. coli O157:H7, which can cause life-threatening infections. The ground beef was sent to restaurants nationwide.",
        "Four of those who fell ill were hospitalized, including two people who developed a serious complication that can cause kidney failure, an official with the Minnesota health department said.",
        "The infections occurred in people who had eaten hamburgers at Red Cow restaurants in the Minneapolis and Rochester areas, as well as the Hen House Eatery in Minneapolis.",
        "To date, no illnesses have been reported outside of Minnesota, according to the U.S. Agriculture Department. People fell ill between Nov. 2 and Nov. 14. The investigation is ongoing.",
        "E. coli is a type of bacteria found in the environment, including water, food and in the intestines of people and animals. There are many kinds of harmless E. coli, but a few types can make people seriously ill.",
        "Symptoms typically occur quickly, within a few days of eating contaminated food. They can include fever, vomiting, diarrhea — including bloody diarrhea — and signs of dehydration. The infection can cause a type of serious kidney injury, especially in kids younger than 5. People older than 65, who are pregnant or post-partum or who have weakened immune systems are also at risk. E. coli poisoning in young children requires immediate medical attention.",
      ],
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
      content: [
        "Super Micro Computer (SMCI) shares surged 12% Friday to cap off a wild week that saw the stock add nearly 80%.",
        "The gains come in the wake of a shoutout from partner and artificial intelligence (AI) darling Nvidia (NVDA) in the chipmaker’s earnings call Wednesday, and a compliance plan filed Monday to stave off delisting.",
        "Still, at Friday’s closing price of $33.15, shares in the server maker are more than 70% off their highs in March, having taken a hit from regulatory concerns following allegations of accounting manipulation and filing delays.",
        "The stock could face an uphill battle to win back investors’ confidence and return to those levels, with Supermicro now under pressure to complete its delinquent annual report by a fresh deadline, after naming a new auditor and requesting an extension from the Nasdaq.",
        "The plan still requires approval from the Nasdaq, with analysts at Mizuho telling clients in a note Tuesday they expect the approval process could take between two and five weeks, with a new filing deadline in February.",
      ],
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
      content: [
        "While it's well known that sleep enhances cognitive performance, the underlying neural mechanisms, particularly those related to nonrapid eye movement (NREM) sleep, remain largely unexplored. A new study by a team of researchers at Rice University and Houston Methodist's Center for Neural Systems Restoration and Weill Cornell Medical College, coordinated by Rice's Valentin Dragoi, has nonetheless uncovered a key mechanism by which sleep enhances neuronal and behavioral performance, potentially changing our fundamental understanding of how sleep boosts brainpower.",
        "The research, published in Science, reveals how NREM sleep—the lighter sleep one experiences when taking a nap, for example—fosters brain synchronization and enhances information encoding, shedding new light on this sleep stage. The researchers replicated these effects through invasive stimulation, suggesting promising possibilities for future neuromodulation therapies in humans. The implications of this discovery potentially pave the way for innovative treatments for sleep disorders and even methods to enhance cognitive and behavioral performance.",
        "The investigation involved an examination of the neural activity in multiple brain areas in macaques while the animals performed a visual discrimination task before and after a 30-minute period of NREM sleep. Using multielectrode arrays, the researchers recorded the activity of thousands of neurons across three brain areas: the primary and midlevel visual cortices and the dorsolateral prefrontal cortex, which are associated with visual processing and executive functions. To confirm that the macaques were in NREM sleep, researchers used polysomnography to monitor their brain and muscle activity alongside video analysis to ensure their eyes were closed and their bodies relaxed.",
        "The findings demonstrated that sleep improved the animals' performance in the visual task with enhanced accuracy in distinguishing rotated images. Importantly, this improvement was unique to those who actually fell asleep—the macaques that experienced quiet wakefulness without falling asleep did not show the same performance boost.",
        `"During sleep, we observed an increase in low-frequency delta wave activity and synchronized firing among neurons across different cortical regions," said first author Dr. Natasha Kharas, a former researcher in Dragoi's lab and current resident in neurological surgery at Weill Cornell. "After sleep, however, neuronal activity became more desynchronized compared to before sleep, allowing neurons to fire more independently. This shift led to improved accuracy in information processing and performance in the visual tasks.`,
        "The researchers also simulated the neural effects of sleep through low-frequency electrical stimulation of the visual cortex. They applied a 4-Hz stimulation to mimic the delta frequency observed during NREM sleep while the animals were awake. This artificial stimulation reproduced the desynchronization effect seen after sleep and similarly enhanced the animals' task performance, suggesting that specific patterns of electrical stimulation could potentially be used to emulate the cognitive benefits of sleep.",
        '"This finding is significant because it suggests that some of the restorative and performance-enhancing effects of sleep might be achieved without the need for actual sleep," said Dragoi, study co-author, professor of electrical and computer engineering at Rice, the Rosemary and Daniel J. Harrison III Presidential Distinguished Chair in Neuroprosthetics at Houston Methodist and professor of neuroscience at Weill Cornell. "The ability to reproduce sleeplike neural desynchronization in an awake state opens new possibilities for enhancing cognitive and perceptual performance in situations where sleep is not feasible—such as for individuals with sleep disorders or in extenuating circumstances such as space exploration."',
        "The researchers further investigated their findings by building a large neural network model. They found that during sleep, both excitatory and inhibitory connections in the brain become weaker, but they do so asymmetrically, making inhibitory connections weaker than excitatory connections, which causes an increase in excitation.",
        '"We have uncovered a surprising solution that the brain employs after sleep whereby neural populations participating in the task reduce their level of synchrony after sleep despite receiving synchronizing inputs during sleep itself," Dragoi said.',
        'The idea that NREM sleep effectively "boosts" the brain in this way, and that this resetting can be mimicked artificially, offers potential for developing therapeutic brain stimulation techniques to improve cognitive function and memory.',
        `"Our study not only deepens our mechanistic understanding of sleep's role in cognitive function but also breaks new ground by showing that specific patterns of brain stimulation could substitute for some benefits of sleep, pointing toward a future where we might boost brain function independently of sleep itself," Dragoi said.`,
      ],
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
      content: [
        "Chinese researchers have reported initial results from an experimental surgical procedure they say aims to address Alzheimer's disease through manipulating the brain's waste clearance systems.",
        'The findings, published in General Psychiatry, detail outcomes from what the team describes as a "cervical shunting" operation performed on a patient with Alzheimer who was able to achieve what the researchers describe as “promising” results.',
        "Alzheimer's disease progressively damages brain cells, primarily affecting memory and cognitive functions. The condition occurs when proteins called beta-amyloid and tau accumulate abnormally in the brain, forming plaques and tangles that disrupt normal brain function. Like a city's waste management system, the brain has its own cleanup mechanism—the glymphatic system—which removes these harmful proteins during sleep.",
        "“We speculated that decompression of the lymphatic trunk and cervical lymphatic—venous anastomosis (LVA) could facilitate the flow of cerebrospinal fluid in the cranial glymphatic system, potentially accelerating the clearance of harmful beta-amyloid and tau proteins,” the researchers hypothesized.",
        "The study, conducted through a collaboration between Shanghai Mental Health Center, Shanghai Ninth People's Hospital, and Shanghai Jiao Tong University, involved a patient who met the stringent biological diagnostic criteria set by the National Institute on Aging-Alzheimer's Association. These criteria require evidence of both memory decline and biological markers of the disease, confirmed through brain scans showing protein deposits.",
        "The surgical team claims the procedure connects lymphatic vessels in the neck to veins, theoretically creating a new pathway to help flush out toxic proteins from the brain.",
        `“My mother's memory is stabilizing and improving, and she is able to complete household chores every day," said the patient’s daughter four months after surgery.`,
        "Brain scans performed before and after the procedure reportedly showed changes in protein accumulation and metabolism, though the significance and durability of these changes remains to be determined. The patient's daughter reported noticing memory improvements, according to the researchers.",
        "Is this a cure for Alzheimer, as some have claimed? Not yet and maybe never. The researchers certainly haven’t made such a claim and the research is still ongoing. Also, it’s important to replicate such results on a broader population in order to claim a cure has been found—and that is still far from happening.",
        `"Once the cortex is damaged, it does not regenerate, so while the hypothesis of improving lymphatic drainage is interesting, it is not enough to reverse irreversible damage," Alberto Martínez, an occupational doctor at Insalud in Ecuador, told Decrypt. "Although the hypothesis is intriguing, it cannot be stated with certainty that unclogging the lymphatic ducts can improve Alzheimer's until more rigorous data and analyses are presented,” he said."`,
        "Decrypt contacted Dr. Li and Dr. Ren alongside other neurologists to gather more insights to try and get further comment.",
        "While this surgical approach represents a novel direction in Alzheimer's treatment research, it comes during what experts describe as a new era in the field. Currently, 171 ongoing studies and 134 drugs are being tested in clinical trials, with over 77% of new treatments targeting disease-modifying approaches.",
        "Recent developments have shown promise in slowing cognitive decline. The drug donanemab, recently approved and marketed as Kisunla, demonstrated a 35% slowing of cognitive decline in clinical trials. For patients who received the drug early in their disease progression, this figure climbed to 60%.",
        "Other emerging treatments include ALZ-801, potentially the first the first disease-modifying oral medication for Alzheimer's, and Lecanemab , which has shown encouraging early results in clearing amyloid proteins from the brain.",
        "Additionally, researchers are exploring alternative approaches like semaglutide, a diabetes medication that showed potential benefits for brain health, and even lifestyle interventions through the U.S. POINTER Study, which examines the impact of exercise and diet on cognition in at-risk individuals.",
        "But until there is a proven cure, the best thing to do is stay healthy to prevent it and don’t overhype the small victories shared by researchers.",
      ],
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
      content: [
        "ST. LOUIS COUNTY, Mo. — Test results released Friday eliminated a possible source of an E. coli outbreak that sickened more than 100 people in St. Louis County.",
        "Tests run by the Missouri Department of Health and Senior Services detected no traces of E. coli in an unopened package of iceberg lettuce collected at Andre's Banquet Center after an estimated 106 attendees of two school band events, two funerals, and a veterans event catered by the business fell ill.",
        '"A negative test result for the lettuce does not conclusively rule out the salad as the source of the E. coli outbreak," the St. Louis County Health Department said. "This is because bacteria like E. coli often occur in isolated pockets within food products, making it possible for a sampling event to miss the pathogen entirely ... A negative result does not necessarily indicate the absence of the bacteria or eliminate Andre’s as a potential source."',
        "County hospitals said Thursday that two people have since developed hemolytic uremic syndrome, or HUS, a rare but serious disease that can occur as a complication of an E. coli infection. The disease affects the kidneys and blood clotting system and can lead to kidney failure.",
        '"It only happens less than 10% of the time in people that get this E.coli O157:H7. But when it does occur, it can be quite severe, and essentially everybody will wind up in the hospital as a result," said Dr. Farrin Manian, chair of the Department of Medicine and Infectious Disease Physician at Mercy Hospital Saint Louis.',
        "John Armengol Jr., owner of Andre's, released the following statement after the negative test results were released:",
        '"While I am relieved to learn of the Missouri State Public Health Laboratory’s negative test results, I will continue to cooperate with the state and local health departments as they now work to determine the source of E. coli that has caused illnesses in the region and which has resulted in individuals who did not attend any events affiliated with Andre’s contracting E Coli."',
        "Three parents of high school students are suing the catering company. A fourth lawsuit was filed by an adult who ate at one of the events and later tested positive for E. coli.",
        "National food poisoning lawyer Jory Lange with Lange Law Firm and Simon Law Firm represents at least one client hospitalized with E. coli. Lange said they've been contacted by over a dozen people who got sick.",
        `"Andre's has been denying any responsibility for this. Clearly, Andre's is the common denominator. I'm confident this is all going to trace back to Andre's at the end of the day. With respect to how that contamination happened, though, that's something we want to find out," Lange said.`,
        "Lange feels health officials should continue testing Andre's salad and other food items.",
        `"The first thing I'd like to see is what products are still left, because a lot of time in outbreaks like this, by the time the health department can get there, the food is gone, it's been eaten, it's been thrown out, or it's gone bad. Then, they need to see what's left to test. For example, with the lettuce, is it the same lot number as what was sold at these events? Because we know Andre's was catering a bunch of different events," said Lange.`,
        "Neither the state nor county health department have cleared Andre's of E. coli. Health officials said they still believe the outbreak came from Andre's salad.",
        '"While testing the lettuce is a critical element of the investigation, it represents just one piece of a larger puzzle," the health department said. "The most compelling evidence comes from the epidemiological findings: dozens of individuals with consistent, clinically compatible symptoms, all linked by a single common factor—exposure to a salad from Andre’s. This shared exposure is highly significant and remains the strongest link to the outbreak, regardless of whether a specific contaminated ingredient is identified through testing."',
      ],
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
      content: [
        "TAYLORSVILLE — Over 100,000 additional chickens and turkeys have been culled after additional avian influenza was found in a backyard flock in Salt Lake County and multiple commercial facilities in south-central Utah.",
        'Most of the new cases were uncovered at three turkey farms in Piute County, between Nov. 10 and Tuesday, resulting in 107,800 turkeys having to be killed off to "limit further disease spread," Utah Department of Agriculture and Food officials said in an update on Friday.',
        "Avian flu was also detected in a backyard chicken flock of 253 birds in Salt Lake County in the past week, which forced those birds to be slaughtered as well.",
        '"Though the overall risk to public health remains low, (highly pathogenic avian influenza) is a serious disease, requiring rapid response, including depopulation of affected flocks as it is highly contagious and fatal to poultry," the agency wrote, adding that five poultry farms across the state remain in quarantine.',
        "The new cases pile onto the outbreak that has impacted farms across northern Utah, including an outbreak that led to the depopulation of about 1.8 million chickens at a large commercial poultry facility in Cache County last month. The disease was later found in eight commercial dairy herds in the county.",
        "Avian flu has impacted many states since a major outbreak began in 2022, but another wave has impacted the West in recent months. The U.S. Department of Agriculture reported this week that cases were found in a noncommercial chicken in Hawaii, marking its first case since the outbreak.",
        'It often spreads in domestic poultry through "contaminated feed, clothing and equipment," although it can also spread through direct contact with wild birds, U.S. Geological Survey officials note. Its impact on humans is considered low. There have only been 36 documented human cases between April and late October, the Centers for Disease Control and Prevention reported on Oct. 29.',
        `Despite Utah's rise in cases over the past few weeks, state agriculture officials say they believe overall food supply impacts are "limited." Still, they urge poultry businesses to follow safe practices to help limit the spread of the flu.`,
        `"Poultry owners should practice strong biosecurity and monitor flocks for signs of illness and report any sick birds immediately to the state veterinarian's office," the department wrote. "Individuals who work in close contact with infected animals may be at higher risk for contracting (the avian flu) and should take precautions, including using recommended personal protective equipment."`,
      ],
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
      content: [
        "A 16-year-old girl’s mysterious gastrointestinal illness turned out to have an especially hairy culprit behind it. Doctors discovered that a giant hairball stuck in her stomach was the cause of her problems.",
        "The girl’s doctors detailed the real life tale of body horror in a paper published this week in the New England Journal of Medicine, as part of a regular segment highlighting unusual cases that pass through the halls of the Massachusetts General Hospital in Boston. The case is a rare example of a known condition called Rapuznel syndrome, one that can have life-threatening complications if not caught early enough. While the girl did have to endure weeks of worsening symptoms before the discovery was made, the doctors were able to successfully remove her hairball with no issues.",
        "According to the report, the girl and her family visited a local emergency department four weeks after she began experiencing occasional bouts of vomiting and stomach pain that eventually became excruciating (when asked to rate her pain on a scale from 1 to 10, she responded 8). Her initial check-up failed to find any clear cause for her illness, and she was sent home with medications to treat the symptoms. The medications did little to soothe her pain, which at times would wake her up from sleeping. Following more weeks of continued illness, which included a second trip to the same ED that yielded no answers, the girl was finally seen by the doctors at Mass General.",
        "Given the lack of other explanations, and the fact that her symptoms often lessened right after she vomited, her doctors eventually suspected that she had gastric outlet obstruction, a condition caused by a physical blockage between the stomach and small intestine. Often, this blockage is from a bezoar, a medical term for any mass of foreign material that gets trapped in the body, but which is usually made of hair or fiber.",
        "To find out for sure, the doctors sent down a tube and camera to examine her upper gastrointestinal tract, and that’s when their suspicions were confirmed. The girl had a hefty trichobezoar (hairy bezoar) in her stomach that had started to tangle its way into the small intestine. While some trichobezoars are so big that they can only be removed surgically from the body, the doctors were able to safely extract the hair that extended into the small intestine and remove the girl’s hairball through the tube alone. (For those with an NEJM subscription, here’s a link to the picture, but fair warning: It’s quite gnarly.)",
        "Hairballs in humans are usually caused by trichophagia, a form of disordered eating in which people feel compelled to swallow their hair. Trichophagia tends to be accompanied by trichotillomania, or the compulsion to pull out one’s own hair. But when interviewed, the girl denied that she pulled her hair. Though there have been rare cases of trichobezoars not tied to trichotillomania, the doctors note that people often feel shame about having the condition and may not admit to it, so it’s still possible that this was the root cause of her hairball. Thankfully, the girl’s physical recovery went smoothly, with no lingering stomach pain reported a month later. And while she did decline a referral to a psychologist made by the doctors, she told them that she was planning to see a hypnotherapist recommended by her friends.",
        "Cases of Rapunzel syndrome are rare, but amazingly enough, this isn’t the first one to make waves in 2024. Earlier this July, doctors in Ecuador reported extracting a two-pound hairball from a woman’s stomach.",
      ],
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
      content: [
        "Mercedes then wound themselves up for another run on softs, bringing a 1m 34.475s from Russell and a 1m 34.341s from Lewis Hamilton – restoring their early-weekend one-two formation as times edged closer to the 1m 33.825s benchmark in second practice.",
        "Meanwhile, Verstappen’s troubles rumbled on as the Dutchman reported that his car was “only getting worse” and becoming “undriveable”. Running harder tyres, and referencing a problematic left-front, he added: “I can’t drive it. I’m going to crash.”",
        "It would get better via a trip to the Red Bull garage and a switch to soft rubber, though – Verstappen coming back out on track to clock a 1m 34.137s and edge in front of the Mercedes drivers, who had swapped positions thanks to more Russell gains.",
        "Verstappen’s “miles better” lap opened another sequence of soft-shod efforts, only for the action to be halted with around seven minutes left on the clock thanks to Lance Stroll’s Aston Martin losing power and coming to a halt at the side of the track.",
        "Given that there was not enough time for more flying laps after Stroll’s car had been cleared, only a small number of drivers completed their second run on softs, leading to a final order of Russell (1m 33.570s), Piastri, Sainz, Norris and Verstappen, with FP1 and FP2 pace-setter Hamilton missing out in sixth.",
        "Williams pair Alex Albon and Franco Colapinto were next up in P7 and P8 respectively, the former making up for some lost mileage after his fuel system issue during FP2, as Magnussen and the lead Alpine of Pierre Gasly completed the top half of the field.",
        "Nico Hulkenberg was 11th in the other Haas, followed by Leclerc and Perez, who missed the chance to complete a practice start amid the pit lane queue when the session restarted with a minute to go, and the Alpine and Aston Martin cars of Esteban Ocon and Fernando Alonso.",
        "RB drivers Yuki Tsunoda and Liam Lawson ended up in respective P16 and P18 positions via a close call as their cars converged under braking in the final moments of the session, while Kick Sauber duo Valtteri Bottas (17th) and Zhou Guanyu (20th), and the sidelined Stroll (18th), completed the order.",
        "Drivers and teams will now regroup in the paddock and work their way through the data once more before returning to the track with the all-important qualifying session, which is set to get under way at 2200 local time.",
      ],
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
      content: [
        "NASSAU, Bahamas — The early theme of this St. John’s team has been its resilience.",
        "It was apparent in how it handled the exhibition game at Rutgers, the shaky first half against Wagner and the second half with New Mexico when the game at the Garden got tight.",
        "This was different.",
        "There was uncertainty over how the Johnnies would deal with a crushing double-overtime loss to No. 13 Baylor at the buzzer, a game they led by five with fewer than 10 seconds to go in the second extra session. November losses don’t get worse.",
        "Coach Rick Pitino even compared it to the 1992 Elite Eight loss to Duke, also known as the Christian Laettner game.",
        "No. 22 St. John’s answered the bell like it had been through this before together, playing arguably its most complete game of the young season.",
        "Unlike Thursday, it followed up a strong first half with an even better second half, crushing Virginia, 80-55, in the consolation game of the Baha Mar Hoops Championship.",
        "“To respond that way is extremely impressive, both offensively as well as defensively,” Pitino said. “I just thought they were thoroughbreds tonight in their attitude, in the way they approached it. They didn’t play tired mentally or physically, didn’t hang their heads. Just came out and took care of business against a team that can nail 3s and keep [itself] in the game.”",
        "Pitino was able to empty his bench with more than five minutes remaining in this rout. St. John’s put on a show, wowing the crowd with an end-to-end style that included six dunks.",
        "It was highlighted by Deivon Smith’s alley-oop dunk, showcasing the 6-foot guard’s impressive vertical leap.",
        "Ten Red Storm players scored, led by RJ Luis’ 18 points and 12 from Kadary Richmond.",
        "Smith narrowly missed a triple-double, notching 10 points, 10 rebounds and eight assists, and Zuby Ejiofor rebounded after missing two late free throws against Baylor with eight points, nine rebounds and two blocks.",
        "The Johnnies hammered Virginia (3-2) in the paint by a 40-12 margin.",
        "They made 10 3-pointers and shot 52.5 percent from the field. They (5-1) were plus-eight on the glass and committed just seven turnovers — two areas that hurt them in the Baylor loss.",
        "They sure didn’t seem to have tired legs after that double-overtime marathon 24 hours prior.",
        "“It shows toughness. It’s important to bounce back and not think about the past,” Ejiofor said. “That’s exactly what we did. Everybody stepped up huge tonight, every single one of us. … We were all excited for each other. We all lifted each other up throughout the entire game. We didn’t let up for a single moment.”",
        "Pitino was still upset by the way the Baylor loss ended on Jeremy Roach’s 3-pointer at the buzzer following Ejiofor’s two missed free throws with 4.1 seconds left.",
        "Replays showed the clock not starting on time, giving Roach extra time to take the shot.",
        "Pitino said St. John’s told the officials it wanted them to take a look at the entire play on instant replay.",
        "It was reviewable, and the shot could’ve been disallowed if the officials ruled Roach wouldn’t have gotten the shot off in time had the clock started when it should have.",
        "“It was a mistake by the officials,” Pitino said. “It hurts. It would’ve been an awesome win, certainly. But if we get Georgia [on Sunday], we’ll be fine.",
        "“The best remedy for us was to play tonight, even though it’s so difficult to play tonight after a loss like that. That’s also the best remedy, so it doesn’t just sink in and kill you inside.”",
      ],
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
      content: [
        "The Kansas City Royals traded right-handed pitcher Brady Singer to the Cincinnati Reds for infielder Jonathan India and outfielder Joey Wiemer, the teams announced Friday.",
        "Singer, 28, went 9-13 with a 3.71 ERA last season, starting 32 games for the Royals while helping them to an unexpected playoff berth. Overall, he made 127 starts for Kansas City over five years, compiling a 4.28 ERA. His only down season was in 2023, when he had a 5.52 ERA.",
        "India, 27, hit .248 with 15 home runs in 2024 while playing exclusively at second base. A four-year veteran, he has a .764 career OPS after winning Rookie of the Year in 2021, when he hit a career-high 21 home runs.",
        "Wiemer, 25, will be joining his third major league team after breaking in with the Milwaukee Brewers in 2023 before playing for Cincinnati last season. He has a career .201 batting average in 153 games.",
        "The deal fills needs on both teams as the Royals have been looking to add offense alongside star shortstop Bobby Witt Jr. Their starting staff, which had the second-best ERA in the majors, afforded them the ability to move a rotation arm to fill their need at the plate.",
        "Meanwhile, the Reds add a durable starter to a team that has dealt with injuries in its rotation over the past couple of seasons. Cincinnati finished 16th in starters' ERA last season and had an opening on its staff after the team traded right-hander Frankie Montas to the Brewers last summer. Singer pitched for Team USA in the World Baseball Classic in 2023.",
      ],
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
      content: [
        "If BYU’s showdown at Arizona State is decided in the trenches, Caleb Etienne will be a happy man. The 6-foot-8, 320-pound left tackle contends that he and his boys on the offensive line will be ready.",
        "“This is (like) a playoff game,” Etienne told BYUtv’s “GameDay” pregame show. “We didn’t get this far for no reason. We will be ready this week after what happened (against Kansas).”",
        "The Cougars outperformed Kansas in every offensive category except for the one that matters most — points. Behind Etienne and company, BYU won on the ground (162-73) and through the air (192-169). But in four trips inside the Kansas 20, the Cougars managed just two field goals and lost the game 17-13.",
        "“It was a tough one for us,” said Etienne, who transferred to BYU from Oklahoma State after the 2022 season. “You can’t dwell on it. We have to keep our heads up and come with fire at Arizona State.”",
        "Saturday’s game in Tempe (1:30 p.m. MST, ESPN) is a matchup everyone saw on the schedule, but very few figured it would matter. No. 14 BYU (9-1, 6-1) was picked 13th in the Big 12. No. 21 Arizona State (8-2, 5-2) was picked 16th. To the credit of both programs, the winner on Saturday will have the inside track to the Big 12 championship game on Dec. 7.",
        "“We have to take every rep one at a time,” Etienne said. “We can’t rush things. We just need to do our 1/11th on the field. We just have to attack it. We have to attack those plays when it’s time to run them.”",
        "Etienne expects plenty of resistance. Arizona State is No. 3 in the Big 12 in rushing defense and No. 7 in the conference in red-zone defense. For an offense that has settled for seven field goals in its last 10 scoring drives, the physicality BYU brings to the front line of the fight will be critical.",
        "“We have to start fast and finish strong,” Etienne said. “We have to go out there and show them that we are who we have been this whole season.”",
        "Dave McCann is a sportswriter and columnist for the Deseret News and is a play-by-play announcer and show host for BYUtv/ESPN+. He co-hosts “Y’s Guys” at ysguys.com and is the author of the children’s book “C is for Cougar,” available at deseretbook.com.",
      ],
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
      content: [
        "The Blue Jays non-tendered closer Jordan Romano, tweets Jeff Passan of ESPN. The two-time All-Star had been projected by MLBTR contributor Matt Swartz for a $7.75MM salary in his final season of arbitration. He goes directly into free agency without landing on waivers.",
        "That lofty projection made Romano one of the more obvious high-profile candidates to be let go. His 2024 season was wrecked by injury. The 31-year-old righty pitched in 15 games, allowing 10 runs over 13 2/3 innings. In early July, he underwent arthroscopic surgery to address an impingement in his throwing elbow. That ultimately proved to be a season ender. While the Jays initially expressed hope that Romano could return in September, they fell out of the playoff race and had little reason to rush him back to action.",
        "The Jays weren’t comfortable risking a near-$8MM salary on a rebound. Romano nevertheless becomes one of the most intriguing buy-low targets for teams looking for bullpen help. He was an elite back-end weapon between 2021-23. Romano has recorded 103 saves over the past four seasons, including consecutive 36-save performances in 2022 and ’23.",
        "He topped 55 innings in each of the three seasons preceding this year and turned in a sub-3.00 ERA showing in each year. From 2021-23, Romano posted a 2.37 earned run average through 186 innings. He struck out more than 30% of opposing hitters against a tolerable 9.2% walk rate.",
        "Toronto already needed to address the bullpen, which ranked 29th in the majors with a 4.82 ERA. Only the Rockies had a more troublesome relief group. Moving on from Romano, while understandable, simply adds to that urgency. The Jays also non-tendered Dillon Tate, opening a second bullpen spot. Erik Swanson and Chad Green project as the top in-house options for leverage work. GM Ross Atkins and his staff will certainly look for at least one, and quite likely multiple, back-end arms during the coming weeks.",
      ],
    },
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

  return {
    dataFormated: computed(() =>
      data.value.map((item) => ({
        ...item,
        publishedAt: formatDate(item.publishedAt),
      }))
    ),
  };
});
