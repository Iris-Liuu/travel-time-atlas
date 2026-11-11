window.Atlas = window.Atlas || {};
(function (A) {
  A.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  // BC years become negative so that 500 BC < 100 BC < AD 1 < AD 100.
  function sortKey(d) {
    var y = d.era === "BC" ? -d.year : d.year;
    return [y, d.month || 0, d.day || 0];
  }
  A.sortEvents = function (events) {
    return events.slice().sort(function (a, b) {
      var x = sortKey(a.date), y = sortKey(b.date);
      return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
    });
  };
  A.getEvents = function (ids) {
    return A.sortEvents((ids || []).map(function (id) {
      return A.events.find(function (e) { return e.id === id; });
    }).filter(Boolean));
  };
  var FIELDS = [["context", "背景"], ["event", "發生了什麼"], ["outcome", "結果"], ["significance", "為什麼重要"]];
  A.renderTimeline = function (ids) {
    var evs = A.getEvents(ids);
    if (!evs.length) return "";
    return '<ol class="timeline">' + evs.map(function (e) {
      var d = e.date || {};
      var approx = d.precision && d.precision !== "year" ? ' <span class="approx">（約略日期）</span>' : "";
      var body = FIELDS.map(function (f) {
        return e[f[0]] ? "<div><dt>" + f[1] + "</dt><dd>" + A.esc(e[f[0]]) + "</dd></div>" : "";
      }).join("");
      return '<li class="tl-item"><span class="tl-date">' + A.esc(d.display || "日期不詳") + approx +
        '</span><article class="tl-card"><h4>' + A.esc(e.title || "未命名事件") + "</h4><dl>" + body + "</dl></article></li>";
    }).join("") + "</ol>";
  };
})(window.Atlas);
