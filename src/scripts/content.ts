console.log("ChatGPT Minimap Extension Loaded");

const addMinimap = () => {
  const chatContainer = document.querySelector(
    ".flex.flex-col.items-center.text-sm"
  );
  if (chatContainer) {
    const minimap = document.createElement("div");
    minimap.style.position = "fixed";
    minimap.style.right = "10px";
    minimap.style.top = "10px";
    minimap.style.width = "150px";
    minimap.style.height = "300px";
    minimap.style.border = "1px solid #ddd";
    minimap.style.backgroundColor = "#f9f9f9";
    minimap.textContent = "Minimap goes here!";
    document.body.appendChild(minimap);
  }
};

window.onload = addMinimap;
