// Floating hearts
const hearts=document.querySelector(".hearts");
if(hearts){
  const symbols=["❤","💖","💗","💞"];
  setInterval(()=>{
    const h=document.createElement("span");
    h.className="heart";
    h.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    h.style.left=Math.random()*100+"%";
    h.style.fontSize=Math.random()*14+14+"px";
    h.style.animationDuration=Math.random()*5+6+"s";
    hearts.appendChild(h);
    h.addEventListener("animationend",()=>h.remove());
  },700);
}

// Flower rain
function startRain(){
  const rain=document.querySelector(".rain");
  const flowers=["🌷","🌻"];
  setInterval(()=>{
    const f=document.createElement("span");
    f.className="drop";
    f.textContent=flowers[Math.floor(Math.random()*flowers.length)];
    f.style.left=Math.random()*100+"%";
    f.style.fontSize=Math.random()*18+20+"px";
    f.style.animationDuration=Math.random()*4+4+"s";
    rain.appendChild(f);
    f.addEventListener("animationend",()=>f.remove());
  },300);
}
