window.Atlas = window.Atlas || {};
(function (A) {
  var e = A.esc;
  A.find = function (type, id) {
    return (type === "place" ? A.places : A.figures).find(function (x) { return x.id === id; });
  };

  A.renderHome = function () {
    return '<section class="hero"><div class="hero-inner"><h1>走進門之前，先認識它的歷史。</h1>' +
      '<p>時光旅圖介紹歷史地點背後的人物與事件。出發前讀完整的故事，到了現場就看重點速覽。</p>' +
      '<a class="btn" href="#places">瀏覽地點</a></div>' +
      '<svg class="orbits" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="22"/><circle cx="100" cy="100" r="46"/><circle cx="100" cy="100" r="72"/><circle cx="100" cy="100" r="96"/><circle class="sun" cx="100" cy="100" r="9"/><circle class="planet" cx="146" cy="100" r="4"/><circle class="planet" cx="48" cy="52" r="5"/></svg></section>' +
      '<section id="places" class="band"><h2>歷史地點</h2><div class="grid">' + A.places.map(A.renderCard).join("") + "</div></section>" +
      '<section id="figures" class="band"><h2>歷史人物</h2><div class="grid">' + A.figures.map(A.renderCard).join("") + "</div></section>";
  };

  function modeTabs(item, mode) {
    return '<nav class="modes" aria-label="閱讀模式">' + [["story", "故事篇", "完整歷史"], ["highlights", "重點篇", "現場速覽"]].map(function (m) {
      var on = m[0] === mode;
      return '<a href="' + A.itemUrl(item, m[0]) + '"' + (on ? ' class="on" aria-current="page"' : "") + "><strong>" + m[1] + "</strong><span>" + m[2] + "</span></a>";
    }).join("") + "</nav>";
  }

  function header(item, mode) {
    var meta = item.type === "place" ? [item.city, item.country].filter(Boolean).join(", ")
      : [item.role, item.birthYear ? item.birthYear + "–" + (item.deathYear || "") : "", item.nationality].filter(Boolean).join(" · ");
    var local = item.name.local && item.name.local !== item.name.en ? '<p class="local" lang="und">' + e(item.name.local) + "</p>" : "";
    return '<header class="detail-head"><a class="back" href="#/">首頁</a><h1 tabindex="-1">' + e(item.name.en) + "</h1>" + local + '<p class="meta">' + e(meta) + "</p>" + modeTabs(item, mode) + "</header>";
  }

  function related(item) {
    var ids = item.type === "place" ? item.relatedFigureIds : item.relatedPlaceIds;
    var list = (ids || []).map(function (id) { return A.find(item.type === "place" ? "figure" : "place", id); }).filter(Boolean);
    if (!list.length) return "";
    return '<section class="related"><h2>' + (item.type === "place" ? "相關人物" : "相關地點") + '</h2><div class="grid">' + list.map(A.renderCard).join("") + "</div></section>";
  }

  A.renderReading = function (item) {
    var used = {};
    var chapters = (item.story || []).map(function (c) {
      (c.timelineEventIds || []).forEach(function (id) { used[id] = 1; });
      return '<section class="chapter"><h2>' + e(c.heading) + "</h2><p>" + e(c.content) + "</p>" + A.renderTimeline(c.timelineEventIds) + "</section>";
    }).join("");
    var rest = (item.timelineEventIds || []).filter(function (id) { return !used[id]; });
    if (rest.length) chapters += '<section class="chapter"><h2>其他事件</h2>' + A.renderTimeline(rest) + "</section>";
    return '<div class="reading"><p class="lede">' + e(item.summary) + "</p>" + chapters + "</div>";
  };

  // Quick view never renders a timeline.
  A.renderQuick = function (item) {
    var h = item.highlights || {}, out = "";
    out += '<section class="q"><h2>簡介</h2><p>' + e(h.introduction) + "</p></section>";
    if (h.famousFor) out += '<section class="q famous"><h2>最知名之處</h2><h3>' + e(h.famousFor.title) + "</h3><p>" + e(h.famousFor.description) + "</p></section>";
    if (item.type === "place" && h.mustSee) {
      out += '<section class="q"><h2>必看亮點</h2><div class="grid">' + h.mustSee.map(function (m) {
        return '<article class="tile"><div class="card-media">' + A.renderMedia(m.image, m.title, m.title) + "</div><h3>" + e(m.title) + "</h3><p>" + e(m.description) + "</p></article>";
      }).join("") + "</div></section>";
    }
    if (item.type === "figure" && h.achievements) {
      out += '<section class="q"><h2>主要成就</h2><div class="grid">' + h.achievements.map(function (a) {
        return '<article class="tile"><h3>' + e(a.title) + "</h3><p>" + e(a.description) + "</p></article>";
      }).join("") + "</div></section>";
    }
    if (h.didYouKnow) out += '<section class="q fact"><h2>你知道嗎？</h2><p>' + e(h.didYouKnow) + "</p></section>";
    if (h.takeaway) out += '<section class="q take"><h2>' + (item.type === "figure" ? "歷史影響" : "一句話總結") + "</h2><p>" + e(h.takeaway) + "</p></section>";
    return '<div class="quick">' + out + "</div>";
  };

  A.renderDetail = function (item, mode) {
    var sources = (item.sources || []).length ? '<details class="sources"><summary>資料來源</summary><ul>' + item.sources.map(function (s) {
      return '<li><a href="' + e(s) + '" target="_blank" rel="noopener">' + e(s) + "</a></li>";
    }).join("") + "</ul></details>" : "";
    return header(item, mode) + (mode === "highlights" ? A.renderQuick(item) : A.renderReading(item)) + related(item) + sources;
  };
})(window.Atlas);
