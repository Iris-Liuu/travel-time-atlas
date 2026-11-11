window.Atlas = window.Atlas || {};
(function (A) {
  const W = "https://en.wikipedia.org/wiki/Copernicus_Science_Centre";
  A.places = [
    {
      id: "copernicus-science-centre",
      type: "place",
      name: { en: "Copernicus Science Centre", local: "Centrum Nauki Kopernik" },
      country: "波蘭",
      city: "華沙",
      summary: "位於維斯瓦河畔的動手做科學博物館，擁有 450 件以上互動展品、一座天象館與一座屋頂花園。",
      image: "",
      imageAlt: "華沙維斯瓦河畔的哥白尼科學中心",

      story: [
        {
          id: "origin",
          heading: "一個新型博物館的構想",
          content: "2004 年初，華沙市長萊赫・卡臣斯基指派一個小組，為這座城市籌備一座科學中心。2005 年 6 月，一份協議正式設立哥白尼科學中心，背後有華沙市與兩個中央部會，也就是科學部與教育部的支持。它和展示既成發現的傳統博物館不同，要讓訪客自己動手做實驗。早在建築出現之前，中心的第一個展覽「Experiment!」就在 2006 年的華沙科學野餐上，一天吸引了超過 1 萬人。",
          timelineEventIds: ["cnk-team-2004", "cnk-founding-2005", "cnk-experiment-2006"]
        },
        {
          id: "design-construction",
          heading: "為河岸設計一棟建築",
          content: "2005 年 12 月，來自魯達希隆斯卡的 RAr-2 建築事務所贏得國際競圖，並與 Buro Happold 的工程師合作。他們設計的 L 形、兩層樓建築，擁有約 1 萬 5 千平方公尺的可用空間，位在 Wybrzeże Kościuszkowskie 與 Zajęcza 兩條街的轉角，坐落於 Wisłostrada 隧道上方。屋頂花園與周邊的探索公園，讓建築與河岸之間的過渡更柔和。2008 年 7 月與 Warbud S.A. 簽約後，工程隨即展開。有一份建築資料給出的造價為 3.65 億波蘭茲羅提。",
          timelineEventIds: ["cnk-competition-2005", "cnk-construction-2008"]
        },
        {
          id: "opening",
          heading: "分階段開放（2010–2011）",
          content: "中心於 2010 年 11 月 5 日以五個展廳開幕。接下來一年，園區陸續擴充：機器人劇場、青少年展廳、「哥白尼的天空」天象館、探索公園與四間實驗室相繼出現。這種分階段的開放，也是許多資料同時提到 2010 與 2011 年的原因。2011 年，中心還主辦了 ECSITE 年會，這是歐洲科學中心與博物館的重要聚會。",
          timelineEventIds: ["cnk-opening-2010", "cnk-robotic-theatre-2010", "cnk-regeneration-2011", "cnk-planetarium-2011", "cnk-discovery-park-2011", "cnk-laboratories-2011"]
        },
        {
          id: "today",
          heading: "華沙日常生活中的科學中心",
          content: "如今，中心是華沙參觀人數最多的景點之一，根據其公布的數字，每年約有 100 萬名訪客。它也是普維希（Powiśle）區河岸文化生活的一部分，與周邊的地標相鄰。中心以尼古拉・哥白尼命名，它的天象館也沿用這個名字，把一個現代機構與波蘭最知名的天文學家之一連結在一起。",
          timelineEventIds: []
        }
      ],

      highlights: {
        introduction: "位於華沙普維希區河畔的科學博物館，在這裡實驗由你自己動手做。",
        famousFor: {
          title: "動手做科學",
          description: "超過 450 件互動展品，邀請訪客自己做實驗、自己發現科學定律。"
        },
        mustSee: [
          {
            id: "galleries",
            title: "常設展廳",
            description: "最初的展廳有 On the Move、Humans and the Environment、Roots of Civilization、Lightzone，以及專為學齡前兒童設計的 Bzzz!。RE: generation 則是給青少年與年輕成人。",
            image: ""
          },
          {
            id: "planetarium",
            title: "「哥白尼的天空」天象館",
            description: "隔壁一棟形似巨石的建築，內有球形投影螢幕。需要另外購票，或購買與中心的聯票。",
            image: ""
          },
          {
            id: "theatres",
            title: "機器人劇場與高壓電劇場",
            description: "現場演出：機器人劇場由機器人在舞台上表演，高壓電劇場則呈現戲劇性的放電場面。",
            image: ""
          },
          {
            id: "pendulum",
            title: "傅科擺",
            description: "一座擺動的單擺，用來展示地球自轉，很適合以哥白尼命名的中心。",
            image: ""
          },
          {
            id: "roof-garden",
            title: "屋頂花園與探索公園",
            description: "屋頂上的花園可以眺望維斯瓦河與城市；戶外公園則有實驗站、藝術作品與圓形劇場。兩處都是季節性開放，請先確認最新開放時間。",
            image: ""
          }
        ],
        didYouKnow: "中心的第一個展覽「Experiment!」在 2006 年登場，比建築開幕早了四年，一天就吸引超過 1 萬名參觀者。",
        takeaway: "在哥白尼科學中心，參觀者就是科學家。"
      },

      timelineEventIds: [
        "cnk-team-2004", "cnk-founding-2005", "cnk-competition-2005", "cnk-experiment-2006",
        "cnk-construction-2008", "cnk-opening-2010", "cnk-robotic-theatre-2010",
        "cnk-regeneration-2011", "cnk-planetarium-2011", "cnk-discovery-park-2011", "cnk-laboratories-2011"
      ],

      relatedFigureIds: ["nicolaus-copernicus"],

      sources: [
        W,
        "https://world-architects.com/en/architecture-news/reviews/science-center-as-cultural-center",
        "https://muzea.waw.pl/en/museums/copernicus-science-centre",
        "https://ecsite.eu/node/5608",
        "https://kopernik.org.pl/en/"
      ]
    }
  ];
})(window.Atlas);
