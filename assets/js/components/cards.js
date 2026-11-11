window.Atlas = window.Atlas || {};
(function (A) {
  A.itemUrl = function (item, mode) { return "#/" + item.type + "/" + item.id + "/" + (mode || "story"); };
  A.renderMedia = function (src, alt, label) {
    if (src) {
      return '<img src="' + A.esc(src) + '" alt="' + A.esc(alt || "") + '" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'ph\',textContent:\'' + A.esc((label || "?").charAt(0)) + '\'}))">';
    }
    return '<div class="ph" aria-hidden="true">' + A.esc((label || "?").charAt(0)) + "</div>";
  };
  A.renderCard = function (item) {
    var sub = item.type === "place" ? [item.city, item.country].filter(Boolean).join(", ") : item.role || "";
    var dates = item.type === "figure" && item.birthYear ? " (" + item.birthYear + "–" + (item.deathYear || "") + ")" : "";
    return '<a class="card" href="' + A.itemUrl(item) + '"><div class="card-media">' + A.renderMedia(item.image, item.imageAlt || item.name.en, item.name.en) +
      '</div><div class="card-body"><span class="kind">' + (item.type === "place" ? "Historical place" : "Historical figure") + "</span><h3>" + A.esc(item.name.en) +
      "</h3><p class=\"sub\">" + A.esc(sub + dates) + "</p><p>" + A.esc(item.summary) + "</p></div></a>";
  };
})(window.Atlas);
