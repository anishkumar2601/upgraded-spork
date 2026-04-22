const games=[
{name:"Cyber War",price:"$40"},
{name:"Sky Legends",price:"$50"},
{name:"Racing Pro",price:"$30"},
{name:"Battle Arena",price:"$60"},
{name:"Zombie Land",price:"$20"},
{name:"Galaxy Quest",price:"$45"},
{name:"Sniper Elite",price:"$35"},
{name:"Dragon World",price:"$55"},
{name:"Speed Rush",price:"$25"},
{name:"Shadow Ops",price:"$70"},
{name:"Mystic RPG",price:"$65"},
{name:"Warzone X",price:"$50"}
];

const grid=document.getElementById("games");

games.forEach(g=>{
let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="https://picsum.photos/200/300?random=${Math.random()}">
<div class="card-content">
<h4>${g.name}</h4>
<p class="price">${g.price}</p>
<p class="discount">-20%</p>
</div>`;

card.onclick=()=>openModal(g.name);
grid.appendChild(card);
});

function openModal(name){
document.getElementById("modal").style.display="flex";
document.getElementById("modalTitle").innerText=name;
}

document.querySelector(".close").onclick=()=>{
document.getElementById("modal").style.display="none";
};

let slides=document.querySelectorAll(".slide");
let index=0;

setInterval(()=>{
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
},3000);

document.getElementById("search").addEventListener("input",e=>{
let val=e.target.value.toLowerCase();

document.querySelectorAll(".card").forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(val)?"block":"none";
});
});

document.querySelector(".toggle").onclick=()=>{
document.body.classList.toggle("light");
};
