chrome.storage.local.get("mood", async (data) => {
    let mood = data.mood || "stressed";
    const message = await fetchMessage(mood);
  
    let div = document.createElement("div");
    div.innerText = message;
    div.style.position = "fixed";
    div.style.bottom = "20px";
    div.style.right = "20px";
    div.style.background = "rgba(255, 255, 255, 0.9)";
    div.style.color = "#222";
    div.style.padding = "15px";
    div.style.borderRadius = "10px";
    div.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    div.style.fontSize = "14px";
    div.style.zIndex = "9999";
    div.style.transition = "0.3s ease-in-out";
    document.body.appendChild(div);
  
    setTimeout(() => {
      div.style.opacity = "0";
      setTimeout(() => div.remove(), 500);
    }, 5000);
  });
  
  async function fetchMessage(mood) {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      
      if (data && data.length > 0) {
        return `"${data[0].q}" — ${data[0].a}`;
      } else {
        return "Stay positive! You're doing great!";
      }
    } catch (error) {
      console.error("Error fetching message:", error);
      return "Keep going! A fresh start is always possible!";
    }
  }
  