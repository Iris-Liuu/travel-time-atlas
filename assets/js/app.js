(function (A) {
  var root = document.getElementById("app");

  // Data integrity check (AGENTS.md section 8.3). Problems are logged, not fatal.
  function validate() {
    var evIds = A.events.map(function (x) { return x.id; });
    var all = A.places.concat(A.figures), seen = {};
    all.concat(A.events).forEach(function (r) { if (seen[r.id]) console.warn("Duplicate id:", r.id); seen[r.id] = 1; });
    all.forEach(function (r) {
      (r.timelineEventIds || []).concat((r.story || []).reduce(function (a, c) { return a.concat(c.timelineEventIds || []); }, []))
        .forEach(function (id) { if (evIds.indexOf(id) < 0) console.warn(r.id, "missing event", id); });
      (r.relatedFigureIds || []).forEach(function (id) { if (!A.find("figure", id)) console.warn(r.id, "missing figure", id); });
      (r.relatedPlaceIds || []).forEach(function (id) { if (!A.find("place", id)) console.warn(r.id, "missing place", id); });
    });
  }

  function route() {
    var p = location.hash.replace(/^#\/?/, "").split("/");
    var type = p[0], id = p[1], mode = p[2] === "highlights" ? "highlights" : "story";
    if (type === "place" || type === "figure") {
      var item = A.find(type, id);
      if (item) {
        root.innerHTML = A.renderDetail(item, mode);
        document.title = item.name.en + " – " + (mode === "highlights" ? "重點篇" : "故事篇") + "｜時光旅圖";
        window.scrollTo(0, 0);
        var h = root.querySelector("h1"); if (h) h.focus({ preventScroll: true });
        return;
      }
      root.innerHTML = '<div class="notfound"><h1>找不到這個頁面</h1><p>這個連結可能已經失效。</p><a class="btn" href="#/">回到首頁</a></div>';
      return;
    }
    root.innerHTML = A.renderHome();
    document.title = "時光旅圖｜用旅行探索歷史";
    if (type === "places" || type === "figures") {
      var t = document.getElementById(type); if (t) t.scrollIntoView();
    } else window.scrollTo(0, 0);
  }

  validate();
  window.addEventListener("hashchange", route);
  route();
})(window.Atlas);
