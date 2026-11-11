/* Shared historical events. Referenced by places and figures through timelineEventIds.
   Optional date.month / date.day are used only to sort events within the same year. */
window.Atlas = window.Atlas || {};
(function (A) {
  const W = "https://en.wikipedia.org/wiki/Copernicus_Science_Centre";
  const WA = "https://world-architects.com/en/architecture-news/reviews/science-center-as-cultural-center";
  const AR = "https://archiweb.cz/en/n/press/nejmodernejsi-vzdelavaci-a-kulturni-komplex-v-polsku-vyrostl-letos-nobr-v-sousedstvi-nobr-varsavske-reky-visly";
  const B = "https://www.britannica.com/biography/Nicolaus-Copernicus";

  A.events = [
    {
      id: "cnk-team-2004",
      date: { year: 2004, era: "AD", precision: "year", display: "Early 2004" },
      title: "A Project Team Is Appointed",
      context: "Warsaw wanted a large, hands-on science education centre. One architecture source describes the plan as Poland's first interactive science centre for children, young people and adults.",
      event: "Lech Kaczyński, then Mayor of Warsaw, appointed the Science Centre Team and asked it to begin work on the project.",
      outcome: "Planning for the future Copernicus Science Centre officially began.",
      significance: "This is the starting point of the institution's history, years before any building existed.",
      sources: [W, AR]
    },
    {
      id: "cnk-founding-2005",
      date: { year: 2005, era: "AD", month: 6, precision: "year", display: "June 2005" },
      title: "The Centre Is Formally Established",
      context: "The idea needed institutional backing and public funding to move beyond planning.",
      event: "An agreement on establishing the Copernicus Science Centre was signed. The City of Warsaw, the Minister of Science and Higher Education and the Minister of National Education are named as its founders and funders.",
      outcome: "The Centre became a cultural institution with city and national backing.",
      significance: "This shared public foundation shaped the Centre as a publicly funded institution rather than a private attraction.",
      sources: [W]
    },
    {
      id: "cnk-competition-2005",
      date: { year: 2005, era: "AD", month: 12, precision: "year", display: "December 2005" },
      title: "Architectural Competition Won by RAr-2",
      context: "The Centre needed a building on the Vistula bank that could hold large exhibitions and still fit the river landscape.",
      event: "An international architectural competition was won by the RAr-2 studio from Ruda Śląska. Engineers from Buro Happold worked with the architects.",
      outcome: "The design of the L-shaped, two-level building was entrusted to a team of young Polish architects.",
      significance: "The competition result decided the look of the Centre and its relationship with the Vistula embankment.",
      sources: [W, WA]
    },
    {
      id: "cnk-experiment-2006",
      date: { year: 2006, era: "AD", month: 6, precision: "year", display: "June 2006" },
      title: "\"Experiment!\" Draws Crowds Before the Building Exists",
      context: "While the building was still only a design, the Centre needed a way to show the public what it would offer.",
      event: "The Centre's first exhibition, \"Experiment!\", premiered at the Warsaw Science Picnic and drew more than 10,000 visitors in a single day.",
      outcome: "The project showed that there was a large audience for hands-on science in Warsaw.",
      significance: "The Centre's first public success came years before its permanent home opened.",
      sources: [W]
    },
    {
      id: "cnk-construction-2008",
      date: { year: 2008, era: "AD", month: 7, precision: "year", display: "July 2008" },
      title: "Construction Contract Signed",
      context: "After the design competition, the city had to choose a builder. Note: some secondary sources give an earlier start for construction; this entry follows the Centre's published timeline.",
      event: "The agreement to build the Centre was signed with Warbud S.A., the winner of the construction tender.",
      outcome: "Construction began on the Vistula bank, above the Wisłostrada tunnel.",
      significance: "Building above an existing road tunnel was an engineering challenge. According to one architecture review, the structure rests on prestressed beams placed on both sides of the tunnel.",
      sources: [W, WA]
    },
    {
      id: "cnk-opening-2010",
      date: { year: 2010, era: "AD", month: 11, day: 5, precision: "year", display: "5 November 2010" },
      title: "The Centre Opens to the Public",
      context: "The Centre was planned to open in stages, so that exhibitions could begin before the whole complex was finished.",
      event: "The first module of the building opened with five galleries: On the Move, Humans and the Environment, Roots of Civilization, Lightzone and Bzzz!.",
      outcome: "Visitors could carry out experiments and explore exhibits themselves, in a purpose-built home.",
      significance: "The opening marks the start of the Centre as a visitor destination.",
      sources: [W]
    },
    {
      id: "cnk-robotic-theatre-2010",
      date: { year: 2010, era: "AD", month: 12, day: 6, precision: "year", display: "6 December 2010" },
      title: "The Robotic Theatre Premieres",
      context: "The Centre wanted live shows as well as exhibits visitors operate themselves.",
      event: "The Robotic Theatre, where robots perform on stage, held its premiere.",
      outcome: "Live performance became part of the visit alongside the galleries.",
      significance: "It is one of the Centre's signature attractions.",
      sources: [W]
    },
    {
      id: "cnk-regeneration-2011",
      date: { year: 2011, era: "AD", month: 3, day: 3, precision: "year", display: "3 March 2011" },
      title: "RE: generation Opens for Young Adults",
      context: "The first galleries served mainly children and families.",
      event: "RE: generation, an exhibition aimed at teenagers and young adults, premiered.",
      outcome: "The Centre broadened its audience.",
      significance: "It showed the Centre's aim to serve different age groups.",
      sources: [W]
    },
    {
      id: "cnk-planetarium-2011",
      date: { year: 2011, era: "AD", month: 6, day: 19, precision: "year", display: "19 June 2011" },
      title: "The Heavens of Copernicus Planetarium Opens",
      context: "The planetarium had received its name and logo on 31 January 2011, linking the Centre's astronomy programme to its namesake, Nicolaus Copernicus.",
      event: "The planetarium \"The Heavens of Copernicus\" premiered in a boulder-shaped building next to the main Centre.",
      outcome: "The complex gained a dome-screen theatre for astronomy shows.",
      significance: "The planetarium's name ties the modern Centre to the astronomer whose name it carries.",
      sources: [W, "https://muzea.waw.pl/en/museums/copernicus-science-centre"]
    },
    {
      id: "cnk-discovery-park-2011",
      date: { year: 2011, era: "AD", month: 7, day: 15, precision: "year", display: "15 July 2011" },
      title: "Discovery Park Opens",
      context: "The design aimed to blend the building into the Vistula landscape.",
      event: "The Discovery Park around the building opened, with open-air experiment stations, an outdoor art gallery and an amphitheatre.",
      outcome: "The Centre's experiences extended outdoors.",
      significance: "The park, together with the roof garden, links the museum to the riverside setting.",
      sources: [W, WA]
    },
    {
      id: "cnk-laboratories-2011",
      date: { year: 2011, era: "AD", month: 10, precision: "year", display: "October to December 2011" },
      title: "Science Laboratories Open",
      context: "Beyond the galleries, the Centre wanted visitors to work in real laboratory spaces.",
      event: "The chemistry laboratory opened on 18 October, the biology laboratory on 15 November and the physics laboratory on 20 December 2011. A robotics workshop opened on 6 December.",
      outcome: "The complex now included workshop-style spaces where visitors take part in guided experiments.",
      significance: "These openings completed the first phase of the Centre's planned facilities.",
      sources: [W, "https://worddisk.com/wiki/Centrum_Nauki_Kopernik"]
    },

    /* Nicolaus Copernicus */
    {
      id: "cop-birth-1473",
      date: { year: 1473, era: "AD", month: 2, day: 19, precision: "year", display: "19 February 1473" },
      title: "Birth in Toruń",
      context: "Toruń was a prosperous trading town in Royal Prussia, a region under the Crown of Poland.",
      event: "Nicolaus Copernicus was born in Toruń into a merchant family.",
      outcome: "After his father's death he was raised with the help of his maternal uncle, Lucas Watzenrode, who later became Bishop of Warmia.",
      significance: "His uncle's position in the Church shaped his later career.",
      sources: [B]
    },
    {
      id: "cop-krakow-1491",
      date: { year: 1491, era: "AD", precision: "approximate", display: "Around 1491" },
      title: "Studies at Kraków",
      context: "The University of Kraków was a leading centre of learning, including mathematics and astronomy.",
      event: "Copernicus began his university studies in Kraków.",
      outcome: "He gained a grounding in mathematics and astronomy.",
      significance: "These studies prepared him for his later astronomical work.",
      sources: [B]
    },
    {
      id: "cop-italy-1503",
      date: { year: 1503, era: "AD", precision: "year", display: "1503" },
      title: "Doctorate in Canon Law at Ferrara",
      context: "Copernicus spent years in Italy, studying law and medicine at the universities of Bologna, Padua and Ferrara.",
      event: "He received a doctorate in canon law at Ferrara.",
      outcome: "He returned to Warmia to serve the cathedral chapter.",
      significance: "His doctorate was in law, not astronomy. He studied the heavens alongside his official duties.",
      sources: [B]
    },
    {
      id: "cop-commentariolus-1514",
      date: { year: 1514, era: "AD", precision: "approximate", display: "Around 1514" },
      title: "The Commentariolus Circulates",
      context: "Copernicus had been developing a new model of the heavens in which the Earth moves.",
      event: "He wrote a short manuscript, known as the Commentariolus, outlining a Sun-centred system and shared it with a few scholars.",
      outcome: "The idea circulated privately among astronomers for decades before it was printed in full.",
      significance: "It is the earliest known summary of his heliocentric theory.",
      sources: [B]
    },
    {
      id: "cop-revolutionibus-1543",
      date: { year: 1543, era: "AD", precision: "year", display: "1543" },
      title: "De revolutionibus Is Published",
      context: "After many years of work, Copernicus's complete argument was finally ready for print. The exact order of this event and his death within 1543 is not asserted here.",
      event: "His book De revolutionibus orbium coelestium (On the Revolutions of the Heavenly Spheres) was published in Nuremberg.",
      outcome: "The Sun-centred model became available to scholars across Europe.",
      significance: "The book is widely regarded as a turning point in the history of astronomy and science.",
      sources: [B]
    },
    {
      id: "cop-death-1543",
      date: { year: 1543, era: "AD", month: 5, day: 24, precision: "year", display: "24 May 1543" },
      title: "Death at Frombork",
      context: "Copernicus had spent much of his adult life in Warmia as a canon of the cathedral chapter.",
      event: "He died in Frombork.",
      outcome: "His ideas were left to be debated, tested and refined by later astronomers.",
      significance: "His work outlived him and influenced centuries of scientific thought.",
      sources: [B]
    }
  ];
})(window.Atlas);
