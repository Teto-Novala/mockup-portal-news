import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-health", () => {
  const data = ref([
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
