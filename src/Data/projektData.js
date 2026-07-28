// Image
import DearFriendsImage from "../Img/DearFriends.png";
import DetectivTrackerImage from "../Img/DetectivTracker.png";
import WhatToDoTodayImage from "../Img/WhatToDoToday.png";
import defaultImage from "../Img/DefaultImg.png";
import GithubStatsImage from "../Img/GithubStats.png";
import QuestGameDetectiveImage from "../Img/QuestGameDetective.png";
import VeterinaryJournalSystemImage from "../Img/VetCare.png";

// Video
import DemoDetectiveQuestVideo from "../Video/Demo-DetectiveQuest.mp4";
import WhatToDoTodayVideo from "../Video/Demo-WhatToDoToday.mp4";
import DearFriendsVideo from "../Video/Demo-DearFriends.mp4";
import GithubStatsVideo from "../Video/Demo-GithubStats.mp4";
import DetectiveGameVideo from "../Video/Demo-DetectiveGame.mp4";
import VetCareVideo from "../Video/Demo-VetCare.mp4";

const projects = [
    {
      title: "Fullstack application - VeterinaryJournalSystem",
      // status: "Under utveckling",
      description:
        "Journalsystem för personal på en veterinärklinik. Byggt i Blazor och C#.",
      type: "Skolprojekt",
      size: "Mellan",
      longText: "I applikationen kan du:",
      list: [
        "Logga in som anställd",
        "Skapa ägarprofiler och djurprofiler",
        "Ändra information om ägare och djur",
        "Boka besök för djur och se tidigare besökshistorik",
        "Skapa journalanteckningar för djur",
      ],
      image: VeterinaryJournalSystemImage,
      video: VetCareVideo,
      tags: ["SQL", "Blazor", "C#", "Entity Framework", "Tests", "Clean Architecture", "Github Actions"],
      links: [
        { label: "Github repo", href: "https://github.com/natta1995/VeterinaryJournalSystem" },
      ],
    },

     {
      title: "Fullstack application - QuestGameDetective ",
      description:
        "Ett textbaserat spel där tar tar rollen som en detektiv som löser mysterier i ett London 1939.",
      type: "Passionprojekt",
      size: "Stort",
      longText:"I applikationen kan du:",
      list: [
      "Registrera och logga in som användare",
      "Justera skärmstorlek och stänga av/på musik",
      "Läsa introduktionsbrev och navigera mellan Hallen och Arbetsrummet",
      "Visa tillgängliga mordfall",
      "Acceptera ett mordfall och lägga till det i Mina utredningar",
      "Öppna en utredningsfil och bläddra mellan bevis, ledtrådar och misstänkta",
      "Granska misstänkta och deras information",
      "Välja en misstänkt eller annan dödsorsak som slutsats",
      "Få resultat på om slutsatsen var rätt eller fel",
      "Visa lösning, ledtrådar och sammanfattning efter avslutad utredning",
      "Samla poäng baserat på lyckade och misslyckade fall"
    ],
      image: QuestGameDetectiveImage,
      video: DetectiveGameVideo,
      tags: ["C#",
      ".NET",
      "React",
      "SQL Server",
      "Entity Framework Core",
      "JWT",
      "Clean Architecture",
      "CQRS",
      "MediatR"],
        links: [
       { label: "Frontend repo", href: "https://github.com/natta1995/QuestGameDetective-Frontend" },
      { label: "Backend repo", href: "https://github.com/natta1995/QuestGameDetective-Backend" },
    ],
    },
   {
      title: "Blazor application - GithubStats ",
      description:
        "Sök och visa information om Githubanvändare med hjälp av Githubs REST API.",
          type: "Skolprojekt",
          size: "Litet",
      longText:"I applikationen kan du:",
      list: [
        "Hämtar data ifrån Githubs REST API",
        "Sök efter Githubanvändare och visa deras profilinformation",
        "Visa användarens repositories och deras beskrivning",
        "Visa användarens followers och following",
        "Visa När ens användares repo senast uppdaterades",
        "Visa de programmeringsspråk som användaren använt",
        "Se en grafisk representation över vilka programmeringssråk som användaren använt mest i sina repon."
     
  ],
      image: GithubStatsImage,
      video: GithubStatsVideo,
      tags: ["C#", "Blazor", ".Net", "Github REST API"],
        links: [
      { label: "Github repo", href: "https://github.com/natta1995/GithubStats" },
    ],
    },
    {
      title: "Socialt Nätverk - DearFriends",
      description:
        "Fullstack applikation - Inspirerad av Facebook.",
      type: "Passionprojekt",
      size: "Stor",
      longText:"I applikationen kan du:",
      list: [
        "Skapa och ta bort konto",
        "Logga in och logga ut",
        "Uppdatera personlig information på profilsidan",
        "Se alla egna inlägg",
        "Besöka andra användares profiler",
        "Skicka och ta emot vänförfrågningar",
        "Skapa inlägg med bilder",
        "Gilla och kommentera inlägg",
        "Söka efter andra användare och få vännerförslag",
  ],
      image: DearFriendsImage,
      video: DearFriendsVideo,
      tags: ["Node.js", "React", "Express.js", "TypeScript", "SQL"],
        links: [
      { label: "Frontend repo", href: "https://github.com/natta1995/frontend-app" },
      { label: "Backend repo", href: "https://github.com/natta1995/backend-app" },
    ],
    },
    {
      title: "Konsoll Application - TheDetectiveQuestTracker",
      description:
        "Ett textbaserat spel där tar tar rollen som en detektiv som löser mysterier i ett London 1936.",
      type: "Passionprojekt",
      size: "Stor",
      longText:"I applikationen kan du:",
      list: [
        
      "Förflytta sig mellan olika miljöer via menyval",
      "Ta sig an nya brottsfall med varierande svårighetsgrad",
      "Undersöka brottsplatser för att samla ledtrådar",
      "Intervjua misstänkta och analysera deras utsagor",
      "Anklaga en misstänkt baserat på insamlad information",
      "Hantera tidsbegränsade fall med olika akutnivåer",
      "Få varning via meddelande när tiden håller på att rinna ut",
      "Riskera att olösta fall försvinner",
      "Se felaktigt lösta fall tas över av Scotland Yard",
      "Ringa Scotland Yard för att få nya fall",
      "Kalla på butlern för vägledning och tips",
      "Navigera spelet genom en loop-baserad spelcykel"
],
  
      image: DetectivTrackerImage,
      video: DemoDetectiveQuestVideo,
      tags: [".Net", "C#"],
        links: [
      { label: "Github repo", href: "https://github.com/natta1995/TheDetectiveQuestTracker"},
    ],
    },
 {
  title: "Frontend applikation - Aktivitetsgenerator",
  description:
    "En React-applikation som genererar aktivitetsförslag baserat på användarens val av plats och årstid.",
      type: "Passionprojekt",
      size: "Mellan",
  longText: "I applikationen kan du:",
  list: [
    "Välja om du är hemma eller borta",
    "Få ett slumpmässigt aktivitetsförslag",
    "Se olika förslag beroende på årstid",
    "Få en tydlig presentation av aktiviteten i ett popup-fönster",
    "Se en beskrivning av aktiviteten och hur den kan göras",
    "Få ett varierat gränssnitt beroende på val och säsong",
    "Utforska ett responsivt gränssnitt byggt med React och CSS"
  ],
  image: WhatToDoTodayImage,
  video: WhatToDoTodayVideo,
  tags: ["JavaScript", "React", "Vite", "CSS"],
  links: [
    { label: "Github repo", href: "https://github.com/natta1995/what-to-do-today" },
  ],
},


  ];

export default projects;