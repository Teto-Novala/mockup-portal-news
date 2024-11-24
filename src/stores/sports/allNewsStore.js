import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-sports", () => {
  const data = ref([
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
