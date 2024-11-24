import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAllNewsStore = defineStore("all-news-sports", () => {
  const data = ref([
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Matt Erickson",
      title:
        "UFC Fight Night 248 live updates: Results, round-by-round coverage of every fight - MMA Junkie",
      description:
        "Check out live round-by-round updates and official results from UFC Fight Night 248 in Macau.",
      url: "https://mmajunkie.usatoday.com/2024/11/ufc-macau-yan-vs-figueiredo-live-updates-results",
      urlToImage:
        "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2024/11/Petr-Yan-vs.-Deiveson-Figueiredo-UFC-Fight-Night-248.png?w=1024&h=576&crop=1",
      publishedAt: "2024-11-23T04:00:00Z",
      content:
        "UFC Fight Night 248 (ESPN+) takes place Saturday, and you can join us for live round-by-round coverage and official results beginning at 3 a.m. ET (midnight PT). UFC Fight Night 248 (ESPN+) takes pla… [+1258 chars]",
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
      content:
        "Mercedes then wound themselves up for another run on softs, bringing a 1m 34.475s from Russell and a 1m 34.341s from Lewis Hamilton restoring their early-weekend one-two formation as times edged clos… [+1178 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Mark Maske",
      title:
        "Giants release quarterback Daniel Jones, at his request - The Washington Post",
      description:
        "The quarterback, benched this week by the Giants, will become a free agent if he clears waivers, as expected.",
      url: "https://www.washingtonpost.com/sports/2024/11/22/daniel-jones-released-giants/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GXV6MJGDF42ZPCNH5YUIMNNUHY.jpg&w=1440",
      publishedAt: "2024-11-23T02:55:28Z",
      content:
        "The New York Giants and quarterback Daniel Jones opted to move on, sooner rather than later. The Giants, after benching Jones as their starter this week, granted his request to be released Friday.\r\nJ… [+4806 chars]",
    },
    {
      source: {
        id: null,
        name: "Libertyballers.com",
      },
      author: "Josh Grieb",
      title:
        "Maxey-McCain backcourt electric as Sixers finally get a win vs. Nets - Liberty Ballers",
      description:
        "Everything with the Sixers’ season has been a disaster, but Tyrese Maxey and Jared McCain provided hope Friday, taking over in the fourth quarter of a win over the Nets.",
      url: "https://www.libertyballers.com/2024/11/22/24303576/sixers-nets-final-score-game-recap-jared-mccain-tyrese-maxey-guerschon-yabusele",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/RXP_BBfmjrEj6B2-042xg14oqQc=/0x0:5281x2765/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25750564/2185452474.jpg",
      publishedAt: "2024-11-23T02:19:12Z",
      content:
        "Nearly a month into the regular season, the Sixers have notched their first win in regulation. \r\nPhiladelphia knocked off the Brooklyn Nets 113-98 to improve to 3-12 on the season and 1-2 in NBA Cup … [+5329 chars]",
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
      content:
        "NASSAU, Bahamas The early theme of this St. Johns team has been its resilience. \r\nIt was apparent in how it handled the exhibition game at Rutgers, the shaky first half against Wagner and the second … [+3598 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Geoff Exstrom",
      title:
        "HuskerMax Predictions: Nebraska Football vs. Wisconsin - Sports Illustrated",
      description:
        "The Huskers and Badgers face one another with bowl eligibility on the line.",
      url: "https://www.si.com/college/nebraska/huskermax-predictions-nebraska-football-vs-wisconsin-badgers-cornhuskers-big-ten",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_4712,h_2650,x_0,y_230/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/all_huskers/01jd8s67md4s7d4yj74j.jpg",
      publishedAt: "2024-11-23T01:30:00Z",
      content:
        "The Nebraska Cornhuskers enter Saturday looking to snap some major losing streaks. \r\nAside from the Huskers' nationally known bowl drought dating back to 2016, NU hopes to also break its 10-game losi… [+5221 chars]",
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
      content:
        "The Kansas City Royals traded right-handed pitcher Brady Singer to the Cincinnati Reds for infielder Jonathan India and outfielder Joey Wiemer, the teams announced on Friday.\r\nSinger, 28, went 9-13 w… [+1324 chars]",
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
      content:
        "If BYUs showdown at Arizona State is decided in the trenches, Caleb Etienne will be a happy man. The 6-foot-8, 320-pound left tackle contends that he and his boys on the offensive line will be ready.… [+2418 chars]",
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
      content:
        "The Blue Jays non-tendered closer Jordan Romano, tweets Jeff Passan of ESPN. The two-time All-Star had been projected by MLBTR contributor Matt Swartz for a $7.75MM salary in his final season of arbi… [+1731 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Charean Williams",
      title:
        '49ers QB Brandon Allen calls first start since 2021 "an opportunity to go out and play well" - NBC Sports',
      description:
        "Brock Purdy will travel with the 49ers, but soreness in his right shoulder will keep him from playing in Sunday's game against the Packers.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/49ers-qb-brandon-allen-calls-first-start-since-2021-an-opportunity-to-go-out-and-play-well",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/344e6cf/2147483647/strip/true/crop/4204x2365+0+250/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fd1%2F1d%2F08d8646747148403c95a8efe5fea%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2181413232",
      publishedAt: "2024-11-23T00:06:25Z",
      content:
        "Brock Purdy will travel with the 49ers, but soreness in his right shoulder will keep him from playing in Sundays game against the Packers. \r\nInstead, Brandon Allen will make his first start since the… [+1468 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Dustin Long",
      title:
        "Photos: Scene on red carpet at 2024 NASCAR Awards in Charlotte - NBC Sports",
      description:
        "The 2024 season came to an end with the NASCAR Awards at the Charlotte Convention Center.",
      url: "https://www.nbcsports.com/nascar/news/photos-scene-on-red-carpet-at-2024-nascar-awards-in-charlotte",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/50aaa66/2147483647/strip/true/crop/4032x2268+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F65%2F2a%2F463f4ab640809f91f56a1fe40623%2Frc-joey-and-brittany-logano.jpg",
      publishedAt: "2024-11-22T23:52:33Z",
      content:
        "CHARLOTTE, N.C. The 2024 NASCAR season officially came to an end Friday night with the NASCAR Awards at the Charlotte Convention Center.\r\nCup champion Joey Logano, Xfinity champion Justin Allgaier an… [+1652 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Zach Kruse",
      title:
        "Breaking down Packers’ final injury report of Week 12 vs. 49ers - Packers Wire",
      description:
        "Breaking down the final injury report of Week 12 before the Packers take on the San Francisco 49ers.",
      url: "https://packerswire.usatoday.com/2024/11/22/breaking-down-packers-final-injury-report-of-week-12-vs-49ers/",
      urlToImage:
        "https://packerswire.usatoday.com/wp-content/uploads/sites/57/2024/10/IR_GB.png?w=1024&h=576&crop=1",
      publishedAt: "2024-11-22T22:19:00Z",
      content:
        "The Green Bay Packers ruled out cornerback Jaire Alexander and linebacker Edgerrin Cooper and listed defensive lineman Colby Wooden as questionable on the final injury report before facing the San Fr… [+1814 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Michael David Smith",
      title:
        "49ers are underdogs at Packers, ending streak of 36 straight games as favorites - NBC Sports",
      description:
        "For the first time in a long time, the 49ers are not favored to win this week.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/49ers-are-underdogs-at-packers-ending-streak-of-36-straight-games-as-favorites",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/3889ca9/2147483647/strip/true/crop/4851x2729+0+227/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F84%2F7b%2F022a3b2c45349d337e906e765689%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1954229008",
      publishedAt: "2024-11-22T21:48:23Z",
      content:
        "For the first time in a long time, the 49ers are not favored to win this week.\r\nThe Packers are favored by 3.5 points at most sports books in Sundays game in Green Bay. That puts the 49ers in a posit… [+502 chars]",
    },
    {
      source: {
        id: null,
        name: "The Denver Post",
      },
      author: "Troy Renck",
      title:
        "Renck & File: NFL flexing Broncos to Thursday night muscles out fans yet again - The Denver Post",
      description:
        "The NFL deciding to flex the Denver Broncos-Los Angeles Chargers game to Thursday night muscles out fans yet again.",
      url: "https://www.denverpost.com/2024/11/22/nfl-thursday-night-flex-broncos-fans-renck/",
      urlToImage:
        "https://www.denverpost.com/wp-content/uploads/2023/05/202305201214TMS_____MNGTRPUB_SPORTS-ANTWAN-STALEY-LIKE-IT-OR-NOT-1-NY5.jpg?w=1024&h=683",
      publishedAt: "2024-11-22T20:13:00Z",
      content:
        "The NFL flexed, and once again fans were muscled out.\r\nFor the first time in league history, the league moved a Sunday game into Thursday prime time, pitting the Broncos at the Chargers on Dec. 19. T… [+3874 chars]",
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
