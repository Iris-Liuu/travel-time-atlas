window.Atlas = window.Atlas || {};
(function (A) {
  const B = "https://www.britannica.com/biography/Nicolaus-Copernicus";
  A.figures = [
    {
      id: "nicolaus-copernicus",
      type: "figure",
      name: { en: "Nicolaus Copernicus", local: "Mikołaj Kopernik" },
      birthYear: 1473,
      deathYear: 1543,
      nationality: "波蘭人（出生於皇家普魯士）",
      role: "天文學家、教會聖職人員",
      image: "",
      imageAlt: "尼古拉・哥白尼肖像",
      summary: "提出以太陽為中心的宇宙模型的天文學家，哥白尼科學中心的名稱即源自於他。",

      story: [
        {
          id: "early-life",
          heading: "從托倫到義大利",
          content: "哥白尼 1473 年出生於皇家普魯士的貿易城鎮托倫。父親去世後，他在舅舅盧卡斯・瓦琴羅德（後來成為瓦爾米亞主教）的協助下長大。他先就讀克拉科夫大學，接著前往義大利，在波隆那、帕多瓦與費拉拉研讀法律與醫學。1503 年，他在費拉拉取得教會法博士學位。",
          timelineEventIds: ["cop-birth-1473", "cop-krakow-1491", "cop-italy-1503"]
        },
        {
          id: "career",
          heading: "懷抱新想法的聖職人員",
          content: "回到瓦爾米亞後，哥白尼為座堂聖職團服務，大多住在弗龍堡。在這些職務之外，他持續研究天文學。約在 1514 年，他寫了一份簡短的手稿《小論述》，提出太陽而非地球位於中心附近，且地球會運動的想法。他只和少數學者分享，沒有公開出版。",
          timelineEventIds: ["cop-commentariolus-1514"]
        },
        {
          id: "legacy",
          heading: "那本書與它的影響",
          content: "他完整的論證出現在《天體運行論》中，這本書於 1543 年在紐倫堡印行，也是他在弗龍堡去世的那一年。這本書成為天文學史上的里程碑。如今，波蘭與其他地方都有以他命名的機構，包括華沙的哥白尼科學中心。",
          timelineEventIds: ["cop-revolutionibus-1543", "cop-death-1543"]
        }
      ],

      highlights: {
        introduction: "來自皇家普魯士的文藝復興時期天文學家與教會聖職人員。",
        famousFor: {
          title: "以太陽為中心的宇宙",
          description: "他提出一個模型：地球與其他行星繞著太陽運行。"
        },
        achievements: [
          { title: "《小論述》", description: "一份概述日心說想法的短篇手稿，私下分享給學者。" },
          { title: "《天體運行論》", description: "他的主要著作，1543 年在紐倫堡出版，完整呈現這套理論。" }
        ],
        didYouKnow: "他的博士學位是教會法，不是天文學。他是在本職之外研究天象。",
        takeaway: "哥白尼把地球移出了宇宙中心，也改變了人們理解宇宙的方式。"
      },

      timelineEventIds: ["cop-birth-1473", "cop-krakow-1491", "cop-italy-1503", "cop-commentariolus-1514", "cop-revolutionibus-1543", "cop-death-1543"],
      relatedPlaceIds: ["copernicus-science-centre"],
      sources: [B]
    }
  ];
})(window.Atlas);
