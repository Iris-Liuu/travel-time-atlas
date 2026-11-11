window.Atlas = window.Atlas || {};
(function (A) {
  const W = "https://en.wikipedia.org/wiki/Copernicus_Science_Centre";
  A.places = [
    {
      id: "copernicus-science-centre",
      type: "place",
      name: { en: "Copernicus Science Centre", local: "Centrum Nauki Kopernik" },
      country: "Poland",
      city: "Warsaw",
      summary: "A hands-on science museum on the Vistula riverbank, with 450+ interactive exhibits, a planetarium and a rooftop garden.",
      image: "",
      imageAlt: "The Copernicus Science Centre beside the Vistula River in Warsaw",

      story: [
        {
          id: "origin",
          heading: "An Idea for a New Kind of Museum",
          content: "In early 2004 the Mayor of Warsaw, Lech Kaczyński, appointed a team to prepare a science centre for the city. In June 2005 an agreement formally established the Copernicus Science Centre. The City of Warsaw and two national ministries, for science and for education, stood behind it. Unlike a traditional museum of finished discoveries, it was to let visitors run experiments themselves. Even before a building existed, the Centre's first exhibition, \"Experiment!\", drew more than 10,000 people in one day at the 2006 Warsaw Science Picnic.",
          timelineEventIds: ["cnk-team-2004", "cnk-founding-2005", "cnk-experiment-2006"]
        },
        {
          id: "design-construction",
          heading: "Designing a Building for the River",
          content: "In December 2005 the architects RAr-2 of Ruda Śląska won the international design competition, working with engineers from Buro Happold. Their L-shaped, two-level building holds about 15,000 square metres of usable space and sits at the corner of Wybrzeże Kościuszkowskie and Zajęcza streets, above the Wisłostrada tunnel. A roof garden and the surrounding Discovery Park soften the transition to the riverbank. Construction followed the contract with Warbud S.A. in July 2008. One architecture source gives the building cost as 365 million PLN.",
          timelineEventIds: ["cnk-competition-2005", "cnk-construction-2008"]
        },
        {
          id: "opening",
          heading: "Opening in Stages, 2010–2011",
          content: "The Centre opened on 5 November 2010 with five galleries. Over the next year it grew: the Robotic Theatre, a gallery for young adults, the Heavens of Copernicus planetarium, the Discovery Park and four laboratories followed. This staged opening is why many sources give both 2010 and 2011 as key dates. In 2011 the Centre also hosted the ECSITE conference, a major gathering of European science centres and museums.",
          timelineEventIds: ["cnk-opening-2010", "cnk-robotic-theatre-2010", "cnk-regeneration-2011", "cnk-planetarium-2011", "cnk-discovery-park-2011", "cnk-laboratories-2011"]
        },
        {
          id: "today",
          heading: "A Science Centre in Daily Warsaw Life",
          content: "Today the Centre is one of Warsaw's most visited attractions, with about a million visitors a year according to its published figures. It has a place in the city's riverside cultural life alongside neighbouring landmarks in the Powiśle district. The Centre carries the name of Nicolaus Copernicus, and its planetarium shares that name, tying a modern institution to one of Poland's best-known astronomers.",
          timelineEventIds: []
        }
      ],

      highlights: {
        introduction: "A riverside science museum in Warsaw's Powiśle district where you run the experiments yourself.",
        famousFor: {
          title: "Hands-On Science",
          description: "Over 450 interactive exhibits invite visitors to carry out experiments and discover scientific laws on their own."
        },
        mustSee: [
          {
            id: "galleries",
            title: "The Permanent Galleries",
            description: "The first galleries are On the Move, Humans and the Environment, Roots of Civilization, Lightzone and Bzzz!, a gallery for preschool children. RE: generation is aimed at teenagers and young adults.",
            image: ""
          },
          {
            id: "planetarium",
            title: "Heavens of Copernicus Planetarium",
            description: "A boulder-shaped building next door with a spherical projection screen. It needs its own ticket, or a combined ticket with the Centre.",
            image: ""
          },
          {
            id: "theatres",
            title: "Robotic and High Voltage Theatres",
            description: "Live shows: robots perform on stage in the Robotic Theatre, and the High Voltage Theatre stages dramatic electrical discharges.",
            image: ""
          },
          {
            id: "pendulum",
            title: "Foucault Pendulum",
            description: "A swinging pendulum that demonstrates the rotation of the Earth, a good fit for a centre named after Copernicus.",
            image: ""
          },
          {
            id: "roof-garden",
            title: "Roof Garden and Discovery Park",
            description: "A garden on the roof with views over the Vistula and the city, and an outdoor park with experiment stations, art and an amphitheatre. Both are seasonal, so check current opening times.",
            image: ""
          }
        ],
        didYouKnow: "The Centre's first exhibition, \"Experiment!\", appeared in 2006, four years before the building opened, and attracted over 10,000 visitors in a single day.",
        takeaway: "At Kopernik, the visitor is the scientist."
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
