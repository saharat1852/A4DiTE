// ไปหน้ารหัส
function goToCode(){
location.href="code.html";
}

// ช่องรหัส
function move(el,i){
if(el.value.length==1){
let ins=document.querySelectorAll(".code-inputs input");
if(i<5) ins[i+1].focus();
}
checkCode();
}

// ตรวจรหัส
function checkCode(){
let ins=document.querySelectorAll(".code-inputs input");
let code="";
ins.forEach(x=>code+=x.value);

if(code.length==6){
if(code==="123456"){
location.href="surprise.html";
}else{
document.getElementById("msg").innerText="ผิด 😢";
}
}
}

// พลุในหน้า surprise
if(document.querySelector(".big-flower")){
setInterval(()=>{
let f=document.createElement("div");
f.className="firework";
f.innerHTML="🎆";
f.style.left=Math.random()*100+"vw";
f.style.top=Math.random()*60+"vh";
document.body.appendChild(f);
setTimeout(()=>f.remove(),1500);
},500);
}

// ---------- เกมทายสิ่งที่ชอบ ----------
const quizData = [
{
q:"เค้าชอบดื่มอะไรที่สุด?",
a:["ชานม 🧋","กาแฟ ☕","น้ำผลไม้ 🍊"],
correct:0
},
{
q:"เค้าชอบสีอะไร?",
a:["ชมพู 💗","ฟ้า 💙","ดำ 🖤"],
correct:0
},
{
q:"เค้าชอบกินอะไร?",
a:["หมูกระทะ 🥓","พิซซ่า 🍕","ซูชิ 🍣"],
correct:0
},
{
q:"เค้าชอบไปเที่ยวที่ไหน?",
a:["ทะเล 🌊","ภูเขา ⛰️","ห้าง 🛍️"],
correct:0
},
{
q:"เค้าชอบอะไรจากเธอที่สุด?",
a:["ความใส่ใจ 💖","รอยยิ้ม 😊","กอดอุ่นๆ 🤗"],
correct:2
}
];

let qi = 0;
let score = 0;

function loadQ(){

if(!document.getElementById("question")) return;

if(qi >= quizData.length){
document.getElementById("question").innerHTML =
`💘 รู้ใจเค้าสุดๆ<br>ได้ ${score}/5 คะแนน`;

document.getElementById("answers").innerHTML="";

/* แสดงซองจดหมาย */
document.getElementById("loveBox").style.display="block";
return;
}


const q = quizData[qi];
document.getElementById("question").innerText = q.q;

const ansDiv = document.getElementById("answers");
ansDiv.innerHTML="";

q.a.forEach((choice,index)=>{
const btn = document.createElement("button");
btn.className="open-btn";
btn.innerText=choice;

btn.onclick=()=>{
if(index === q.correct) score++;
qi++;
loadQ();
};

ansDiv.appendChild(btn);
});
}

loadQ();

function openLove(){
document.getElementById("lovePopup").style.display="flex";

/* สร้างหัวใจลอย */
for(let i=0;i<15;i++){
let heart=document.createElement("div");
heart.innerHTML="💗";
heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="0";
heart.style.fontSize="24px";
heart.style.animation="floatUp 2s linear";
document.body.appendChild(heart);

setTimeout(()=>heart.remove(),2000);
}
}

function closeLove(){
const popup = document.getElementById("lovePopup");
popup.style.display = "none";
}
