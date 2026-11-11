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
        document.title = item.name.en + " – " + (mode === "highlights" ? "Highlights" : "Story") + " | Travel Time Atlas";
        window.scrollTo(0, 0);
        var h = root.querySelector("h1"); if (h) h.focus({ preventScroll: true });
        return;
      }
      root.innerHTML = '<div class="notfound"><h1>We couldn\'t find that page</h1><p>The link may be outdated.</p><a class="btn" href="#/">Back to home</a></div>';
      return;
    }
    root.innerHTML = A.renderHome();
    document.title = "Travel Time Atlas – Explore History Through Travel";
    if (type === "places" || type === "figures") {
      var t = document.getElementById(type); if (t) t.scrollIntoView();
    } else window.scrollTo(0, 0);
  }

  validate();
  window.addEventListener("hashchange", route);
  route();
})(window.Atlas);
