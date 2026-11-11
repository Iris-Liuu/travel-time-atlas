/* 共用歷史事件。地點與人物透過 timelineEventIds 引用。
   選填的 date.month / date.day 只用來排序同一年內的事件。 */
window.Atlas = window.Atlas || {};
(function (A) {
  const W = "https://en.wikipedia.org/wiki/Copernicus_Science_Centre";
  const WA = "https://world-architects.com/en/architecture-news/reviews/science-center-as-cultural-center";
  const AR = "https://archiweb.cz/en/n/press/nejmodernejsi-vzdelavaci-a-kulturni-komplex-v-polsku-vyrostl-letos-nobr-v-sousedstvi-nobr-varsavske-reky-visly";
  const B = "https://www.britannica.com/biography/Nicolaus-Copernicus";

  A.events = [
    {
      id: "cnk-team-2004",
      date: { year: 2004, era: "AD", precision: "year", display: "2004 年初" },
      title: "籌備小組成立",
      context: "華沙想建立一座大型的互動式科學教育中心。有建築資料指出，這是波蘭第一座面向兒童、青少年與成人的互動式科學中心。",
      event: "時任華沙市長的萊赫・卡臣斯基（Lech Kaczyński）指派科學中心籌備小組，展開這項計畫。",
      outcome: "未來的哥白尼科學中心正式進入籌備階段。",
      significance: "這是這個機構歷史的起點，比建築物出現早了好幾年。",
      sources: [W, AR]
    },
    {
      id: "cnk-founding-2005",
      date: { year: 2005, era: "AD", month: 6, precision: "year", display: "2005 年 6 月" },
      title: "中心正式設立",
      context: "這個構想需要制度上的支持與公共資金，才能從規劃走向實現。",
      event: "各方簽署了設立哥白尼科學中心的協議。華沙市、科學與高等教育部、國民教育部被列為創辦與出資單位。",
      outcome: "中心成為由市政府與中央部會共同支持的文化機構。",
      significance: "這種公共出資的基礎，讓它成為公共文化機構，而不是私人營利景點。",
      sources: [W]
    },
    {
      id: "cnk-competition-2005",
      date: { year: 2005, era: "AD", month: 12, precision: "year", display: "2005 年 12 月" },
      title: "RAr-2 贏得建築競圖",
      context: "中心需要一棟坐落在維斯瓦河岸、能容納大型展覽，又能融入河岸景觀的建築。",
      event: "國際建築競圖由來自魯達希隆斯卡（Ruda Śląska）的 RAr-2 事務所獲勝，並與 Buro Happold 的工程師合作。",
      outcome: "這棟 L 形、兩層樓的建築，交由一群年輕的波蘭建築師設計。",
      significance: "競圖結果決定了中心的外觀，以及它與維斯瓦河岸的關係。",
      sources: [W, WA]
    },
    {
      id: "cnk-experiment-2006",
      date: { year: 2006, era: "AD", month: 6, precision: "year", display: "2006 年 6 月" },
      title: "「Experiment!」在建築尚未出現時就吸引人潮",
      context: "當時建築還只是設計圖，中心需要讓大眾先看到它將提供什麼。",
      event: "中心的第一個展覽「Experiment!」在華沙科學野餐（Warsaw Science Picnic）首度亮相，一天內吸引了超過 1 萬名參觀者。",
      outcome: "這顯示華沙有很大的動手做科學的觀眾群。",
      significance: "中心的第一次公開成功，比它的永久館舍開幕早了好幾年。",
      sources: [W]
    },
    {
      id: "cnk-construction-2008",
      date: { year: 2008, era: "AD", month: 7, precision: "year", display: "2008 年 7 月" },
      title: "簽訂施工合約",
      context: "競圖結束後，市政府必須選出施工單位。注意：部分二手資料給出較早的動工時間，本條目採用中心公布的大事記。",
      event: "中心與標案得標的 Warbud S.A. 簽訂興建合約。",
      outcome: "工程在維斯瓦河岸、Wisłostrada 隧道上方展開。",
      significance: "在既有道路隧道上方興建是一項工程挑戰。根據一篇建築評論，結構建立在隧道兩側的預力樑上。",
      sources: [W, WA]
    },
    {
      id: "cnk-opening-2010",
      date: { year: 2010, era: "AD", month: 11, day: 5, precision: "year", display: "2010 年 11 月 5 日" },
      title: "中心對外開放",
      context: "中心採分階段開放，讓展覽可以在整個園區完工前先開始。",
      event: "建築的第一個模組開幕，推出五個展廳：On the Move、Humans and the Environment、Roots of Civilization、Lightzone 與 Bzzz!。",
      outcome: "參觀者在專屬館舍中，可以親手做實驗、操作展品。",
      significance: "開幕標誌著中心成為一個訪客目的地。",
      sources: [W]
    },
    {
      id: "cnk-robotic-theatre-2010",
      date: { year: 2010, era: "AD", month: 12, day: 6, precision: "year", display: "2010 年 12 月 6 日" },
      title: "機器人劇場首演",
      context: "除了讓訪客自己操作的展品，中心也希望有現場演出。",
      event: "由機器人在舞台上表演的機器人劇場舉行首演。",
      outcome: "現場表演成為參觀行程的一部分，與各展廳並列。",
      significance: "它是中心的代表性體驗之一。",
      sources: [W]
    },
    {
      id: "cnk-regeneration-2011",
      date: { year: 2011, era: "AD", month: 3, day: 3, precision: "year", display: "2011 年 3 月 3 日" },
      title: "青少年展廳 RE: generation 開幕",
      context: "最初的展廳主要服務兒童與家庭。",
      event: "針對青少年與年輕成人的展覽 RE: generation 首度推出。",
      outcome: "中心擴大了服務對象。",
      significance: "這顯示中心希望照顧不同年齡層的訪客。",
      sources: [W]
    },
    {
      id: "cnk-planetarium-2011",
      date: { year: 2011, era: "AD", month: 6, day: 19, precision: "year", display: "2011 年 6 月 19 日" },
      title: "「哥白尼的天空」天象館開幕",
      context: "天象館在 2011 年 1 月 31 日取得名稱與標誌，將中心的天文計畫與其名稱由來的尼古拉・哥白尼連結起來。",
      event: "天象館「哥白尼的天空」（The Heavens of Copernicus）在主館旁一棟形似巨石的建築中首演。",
      outcome: "園區多了一座設有穹頂螢幕、播放天文節目的劇場。",
      significance: "天象館的名稱，把這座現代中心與它所冠名的天文學家連結在一起。",
      sources: [W, "https://muzea.waw.pl/en/museums/copernicus-science-centre"]
    },
    {
      id: "cnk-discovery-park-2011",
      date: { year: 2011, era: "AD", month: 7, day: 15, precision: "year", display: "2011 年 7 月 15 日" },
      title: "探索公園開放",
      context: "設計的目標之一是讓建築融入維斯瓦河的景觀。",
      event: "環繞建築的探索公園開放，設有戶外實驗站、戶外藝廊與圓形劇場。",
      outcome: "中心的體驗延伸到戶外。",
      significance: "公園與屋頂花園，把博物館與河岸環境連結起來。",
      sources: [W, WA]
    },
    {
      id: "cnk-laboratories-2011",
      date: { year: 2011, era: "AD", month: 10, precision: "year", display: "2011 年 10 月至 12 月" },
      title: "科學實驗室陸續開放",
      context: "除了展廳，中心也希望訪客能在真正的實驗室空間中動手做。",
      event: "化學實驗室於 2011 年 10 月 18 日開放，生物實驗室於 11 月 15 日開放，物理實驗室於 12 月 20 日開放。機器人工作坊則在 12 月 6 日開放。",
      outcome: "園區新增了可參加導覽式實驗的工作坊型空間。",
      significance: "這些開放讓中心第一階段規劃的設施大致完成。",
      sources: [W, "https://worddisk.com/wiki/Centrum_Nauki_Kopernik"]
    },

    /* 尼古拉・哥白尼 */
    {
      id: "cop-birth-1473",
      date: { year: 1473, era: "AD", month: 2, day: 19, precision: "year", display: "1473 年 2 月 19 日" },
      title: "出生於托倫",
      context: "托倫是皇家普魯士（Royal Prussia）的繁榮貿易城鎮，當時隸屬波蘭王國。",
      event: "尼古拉・哥白尼出生於托倫的一個商人家庭。",
      outcome: "父親去世後，他在舅舅盧卡斯・瓦琴羅德（Lucas Watzenrode，後來成為瓦爾米亞主教）的協助下長大。",
      significance: "舅舅在教會中的地位，影響了他日後的職涯。",
      sources: [B]
    },
    {
      id: "cop-krakow-1491",
      date: { year: 1491, era: "AD", precision: "approximate", display: "約 1491 年" },
      title: "在克拉科夫求學",
      context: "克拉科夫大學是當時的學術重鎮，包括數學與天文學。",
      event: "哥白尼開始在克拉科夫接受大學教育。",
      outcome: "他在數學與天文學上打下基礎。",
      significance: "這些學習為他日後的天文研究做了準備。",
      sources: [B]
    },
    {
      id: "cop-italy-1503",
      date: { year: 1503, era: "AD", precision: "year", display: "1503 年" },
      title: "在費拉拉取得教會法博士學位",
      context: "哥白尼在義大利待了數年，在波隆那、帕多瓦與費拉拉的大學研讀法律與醫學。",
      event: "他在費拉拉取得教會法博士學位。",
      outcome: "他回到瓦爾米亞，為座堂聖職團服務。",
      significance: "他的博士學位是法律，不是天文學。他是在本職之外研究天象。",
      sources: [B]
    },
    {
      id: "cop-commentariolus-1514",
      date: { year: 1514, era: "AD", precision: "approximate", display: "約 1514 年" },
      title: "《小論述》（Commentariolus）開始流傳",
      context: "哥白尼一直在發展一個地球會運動的新宇宙模型。",
      event: "他寫了一份簡短的手稿，也就是《小論述》，概述以太陽為中心的體系，並分享給少數學者。",
      outcome: "這個想法在私下流傳了數十年，之後才完整付梓。",
      significance: "這是已知最早的日心說理論摘要。",
      sources: [B]
    },
    {
      id: "cop-revolutionibus-1543",
      date: { year: 1543, era: "AD", precision: "year", display: "1543 年" },
      title: "《天體運行論》出版",
      context: "經過多年的工作，哥白尼完整的論證終於可以付印。本條目不主張此事與他去世在 1543 年內的先後順序。",
      event: "他的著作《天體運行論》（De revolutionibus orbium coelestium）在紐倫堡出版。",
      outcome: "以太陽為中心的模型傳到歐洲各地的學者手中。",
      significance: "這本書被廣泛視為天文學與科學史的轉捩點。",
      sources: [B]
    },
    {
      id: "cop-death-1543",
      date: { year: 1543, era: "AD", month: 5, day: 24, precision: "year", display: "1543 年 5 月 24 日" },
      title: "逝於弗龍堡",
      context: "哥白尼成年後大半時間在瓦爾米亞，擔任座堂聖職團的聖職人員。",
      event: "他在弗龍堡（Frombork）去世。",
      outcome: "他的想法留給後來的天文學家去辯論、檢驗與修正。",
      significance: "他的研究在他身後持續影響了數百年的科學思想。",
      sources: [B]
    }
  ];
})(window.Atlas);
