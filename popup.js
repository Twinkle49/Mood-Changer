const activities = {
  stressed: ["💆‍♂️ Organize your workspace!", "📅 Plan your tasks for the next hour!", "☕ Take a deep breath and relax!"],
  bored: ["📝 Write 3 self-improvement ideas!", "🎨 Try sketching something creative!", "📑 Read a quick productivity tip!"],
  sad: ["📖 Read an inspiring tech blog!", "🎵 Listen to soothing music!", "💬 Talk to a friend or mentor!"],
  tired: ["🚶‍♂️ Stand up and stretch!", "☕ Grab some coffee!", "🌿 Take a break with fresh air!"],
  anxious: ["🧘 Try a 2-minute meditation!", "📝 Write down 3 things you're grateful for!", "📑 Focus on a simple, easy task!"],
  fearful: ["🔄 Review and simplify your current task!", "📖 Read a success story!", "🎧 Listen to motivational audio!"],
  frustrated: ["✍️ Refactor a small part of your code!", "🗑️ Declutter your desk!", "📑 Take notes on your progress!"],
  exhausted: ["☕ Drink water and relax!", "🎵 Listen to light background music!", "🚶 Walk around for 5 minutes!"]
};

const apiList = [
  "https://uselessfacts.jsph.pl/random.json?language=en"
];

document.getElementById("activate").addEventListener("click", function () {
  const mood = document.getElementById("moodSelect").value;

  if (!mood) {
      alert("Please select a mood first!");
      return;
  }

  // Select a random activity from the chosen mood category
  const randomActivity = activities[mood][Math.floor(Math.random() * activities[mood].length)];
  document.getElementById("activityDisplay").innerHTML = `📝 ${randomActivity}`;

  // Fetch a random thought from API
  const randomApi = apiList[Math.floor(Math.random() * apiList.length)];

  fetch(randomApi)
      .then(response => response.json())
      .then(data => {
          let thought = data.text || data.fact || "🤔 Keep learning something new!"; // Handle different API responses
          document.getElementById("thoughtDisplay").innerHTML = `💡 ${thought}`;
      })
      .catch(error => {
          console.error("Error fetching thought:", error);
          document.getElementById("thoughtDisplay").innerHTML = "⚠️ Failed to load thought. Try again!";
      });
});
