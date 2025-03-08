const activities = {
    stressed: "💆‍♂️ Take a 5-minute break & do some desk stretching!",
    bored: "🎨 Try a new CSS animation or design a cool UI!",
    sad: "🎵 Listen to Lo-Fi beats while coding!",
    tired: "🚶‍♂️ Walk around & get fresh air. Hydrate!",
    anxious: "🧘 Do a 2-minute deep breathing exercise!",
    fearful: "📖 Read a tech blog or success story for motivation!",
    frustrated: "✍️ Refactor a messy function & make it cleaner!",
    exhausted: "☕ Grab a coffee & do some light debugging!"
  };
  
  const apiList = [
    
    "https://zenquotes.io/api/random",
  ];
  
  document.getElementById("activate").addEventListener("click", function () {
    const mood = document.getElementById("moodSelect").value;
    
    if (!mood) {
      alert("Please select a mood first!");
      return;
    }
  
    // Set activity
    document.getElementById("activityDisplay").innerHTML = ` ${activities[mood]}`;
  
    // Fetch a random thought from API 
    const randomApi = apiList[Math.floor(Math.random() * apiList.length)];
  
    fetch(randomApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if(data[0] && data[0].q) {
          thought = data[0].q; // Zen Quotes API
        } 
  
        document.getElementById("thoughtDisplay").innerHTML = `${thought}`;
      })
      .catch(function (error) {
        console.error("Error fetching thought:", error);
        document.getElementById("thoughtDisplay").innerHTML = "⚠️ Failed to load thought. Try again!";
      });
  });
  