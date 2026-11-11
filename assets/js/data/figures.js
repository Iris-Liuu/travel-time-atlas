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
      nationality: "Polish (born in Royal Prussia)",
      role: "Astronomer and canon",
      image: "",
      imageAlt: "Portrait of Nicolaus Copernicus",
      summary: "The astronomer whose Sun-centred model of the universe gave the Copernicus Science Centre its name.",

      story: [
        {
          id: "early-life",
          heading: "From Toruń to Italy",
          content: "Copernicus was born in 1473 in Toruń, a trading town in Royal Prussia. After his father's death he was raised with the help of his uncle, Lucas Watzenrode, later Bishop of Warmia. He studied at the University of Kraków, then went to Italy, where he studied law and medicine at Bologna, Padua and Ferrara. In 1503 he took a doctorate in canon law at Ferrara.",
          timelineEventIds: ["cop-birth-1473", "cop-krakow-1491", "cop-italy-1503"]
        },
        {
          id: "career",
          heading: "A Canon with a New Idea",
          content: "Back in Warmia, Copernicus served the cathedral chapter and lived mostly in Frombork. Alongside these duties he worked on astronomy. Around 1514 he wrote a short manuscript, the Commentariolus, which set out the idea that the Sun, not the Earth, stands near the centre and that the Earth moves. He shared it with a few scholars rather than publishing it.",
          timelineEventIds: ["cop-commentariolus-1514"]
        },
        {
          id: "legacy",
          heading: "The Book and Its Legacy",
          content: "His full argument appeared in De revolutionibus orbium coelestium, printed in Nuremberg in 1543, the year he died in Frombork. The book became a landmark in the history of astronomy. Today his name is borne by institutions in Poland and beyond, including the Copernicus Science Centre in Warsaw.",
          timelineEventIds: ["cop-revolutionibus-1543", "cop-death-1543"]
        }
      ],

      highlights: {
        introduction: "A Renaissance astronomer and church official from Royal Prussia.",
        famousFor: {
          title: "The Sun-Centred Universe",
          description: "He proposed a model in which the Earth and the other planets move around the Sun."
        },
        achievements: [
          { title: "Commentariolus", description: "A short manuscript outlining his heliocentric idea, shared privately with scholars." },
          { title: "De revolutionibus orbium coelestium", description: "His major work, printed in Nuremberg in 1543, presenting the full theory." }
        ],
        didYouKnow: "His doctorate was in canon law, not astronomy. He pursued the study of the heavens alongside his official duties.",
        takeaway: "Copernicus moved the Earth out of the centre and helped change how people understand the universe."
      },

      timelineEventIds: ["cop-birth-1473", "cop-krakow-1491", "cop-italy-1503", "cop-commentariolus-1514", "cop-revolutionibus-1543", "cop-death-1543"],
      relatedPlaceIds: ["copernicus-science-centre"],
      sources: [B]
    }
  ];
})(window.Atlas);
