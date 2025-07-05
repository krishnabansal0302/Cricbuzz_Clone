const players = [
  {
    name: "KL Rahul",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/K.L._Rahul_%281%29.jpg",
    profile: "https://www.espncricinfo.com/player/kl-rahul-422108",
  },
  {
    name: "Virat Kohli",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg",
   profile: "https://www.espncricinfo.com/cricketers/virat-kohli-253802",
  },
  {
    name: "Shubhman Gill",
    image: "https://static.toiimg.com/thumb/msid-121861613,imgsize-128634,width-400,resizemode-4/121861613.jpg",
    profile: "https://www.espncricinfo.com/cricketers/shubman-gill-1070173",
  },
  {
    name: "Yashasvi Jaiswal",
    image: "https://c.ndtvimg.com/2023-05/sgf80rv8_jaiswal_625x300_12_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    profile: "https://www.espncricinfo.com/cricketers/yashasvi-jaiswal-1151278",
  },
  
  {
    name: "Hardik Pandya",
    image: "https://institute.careerguide.com/wp-content/uploads/2024/04/Hardik-Pandya-1024x767.jpeg",
    profile: "https://www.espncricinfo.com/cricketers/hardik-pandya-625371",
  },
  {
    name: "Jasprit Bumrah",
    image: "https://www.aljazeera.com/wp-content/uploads/2024/12/AFP__20241122__36N39GM__v1__HighRes__CricketAusInd-1733131187.jpg?resize=1920%2C1440",
    profile: "https://www.espncricinfo.com/cricketers/jasprit-bumrah-625383",
  },
  {
    name: "Kuldeep Yadav",
    image: "https://images.news18.com/ibnlive/uploads/2024/12/kuldeep-yadav-birthday-2024-12-17fb13b7c01cf4891c37eada2db5d0dc-16x9.jpg",
    profile: "https://www.espncricinfo.com/player/kuldeep-yadav-559235",
  },
  {
    name: "Mohd Siraj",
    image: "https://images.mid-day.com/images/images/2025/apr/gill-siraj-super_d.jpg",
    profile: "https://www.espncricinfo.com/cricketers/mohammed-siraj-940973",
  },
  {
    name: "Rishabh Pant",
    image: "https://preview.redd.it/what-are-your-thoughts-on-rishabh-pant-these-days-v0-aye699bbhxye1.jpeg?auto=webp&s=5cd3f2daf4105775968cefa0437657dc7e1f411f",
    profile: "https://www.espncricinfo.com/player/rishabh-pant-931581",
  },
];

const matches = [
  {
    team1: { name: "India", flag: "https://flagcdn.com/w40/in.png" },
    team2: { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
    date: "July 5, 2025",
    time: "3:30 PM IST",
    venue: "Wankhede Stadium",
    status: "Live Now"
  },
  {
    team1: { name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
    team2: { name: "England", flag: "https://flagcdn.com/w40/gb.png" },
    date: "July 6, 2025",
    time: "7:00 PM PKT",
    venue: "Gaddafi Stadium",
    status: "Upcoming"
  },
  {
    team1: { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
    team2: { name: "New Zealand", flag: "https://flagcdn.com/w40/nz.png" },
    date: "July 3, 2025",
    time: "2:00 PM SAST",
    venue: "Newlands",
    status: "Completed"
  }
];


const container = document.getElementById("player-container");
const matchesContainer = document.getElementById("matches-container");

// Render player cards
players.forEach(player => {
  const card = document.createElement("div");
  card.className = "player-card";

   // Make entire card clickable
  card.onclick = () => window.open(player.profile, "-blank");

  const img = document.createElement("img");
  img.src = player.image;
  img.alt = `${player.name} profile image`;


  const details = document.createElement("div");
  details.className = "player-details";

  const name = document.createElement("h3");
  name.textContent = player.name;

  details.appendChild(name);
  card.appendChild(img);
  card.appendChild(details);
  container.appendChild(card);
});

// Render match cards with flags
matches.forEach(match => {
  const card = document.createElement("div");
  card.className = "match-card";

  const statusColor =
    match.status === "Live Now" ? "#28a745" :
    match.status === "Upcoming" ? "#fd7e14" :
    "#6c757d";

  card.innerHTML = `
    <div class="date">${match.date}</div>
    <div class="teams">
      <div><img src="${match.team1.flag}" class="flag-icon" alt="${match.team1.name} flag"></div>
      <span>vs</span>
      <div><img src="${match.team2.flag}" class="flag-icon" alt="${match.team2.name} flag"></div>
    </div>
    <div class="venue">${match.venue}</div>
    <div class="time">${match.time}</div>
    <div class="status badge" style="background-color: ${statusColor};">${match.status}</div>
  `;

  matchesContainer.appendChild(card);
});


const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-search");

// 🔍 Search + Show/Hide player cards
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  clearBtn.style.display = query ? "block" : "none"; // toggle "×" button

  document.querySelectorAll(".player-card").forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    const isMatch = name.includes(query);
    card.style.display = isMatch ? "inline-block" : "none";
  });
});

// ❌ Clear input & reset all players
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.style.display = "none";

  document.querySelectorAll(".player-card").forEach(card => {
    card.style.display = "inline-block";
  });
});
