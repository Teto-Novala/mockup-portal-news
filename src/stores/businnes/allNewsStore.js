import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-businnes", () => {
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
