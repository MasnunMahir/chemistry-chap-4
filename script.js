/*=========================================================
 P E*RIODIC TABLE
 Interactive Learning Website
 =========================================================*/

/*=========================
 L O*ADER
 =========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },1500);

});


/*=========================
 S C*ROLL PROGRESS BAR
 =========================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight
    - document.documentElement.clientHeight;

    const progress =
    (scrollTop/scrollHeight)*100;

    progressBar.style.width = progress+"%";

});


/*=========================
 B U*TTON RIPPLE EFFECT
 =========================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=
        e.clientX-rect.left-size/2+"px";

        ripple.style.top=
        e.clientY-rect.top-size/2+"px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});


/*=========================
 N A*VBAR GLASS ON SCROLL
 =========================*/

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        nav.style.background=
        "rgba(5,20,40,.82)";

nav.style.backdropFilter=
"blur(30px)";

    }

    else{

        nav.style.background=
        "rgba(255,255,255,.08)";

    }

});


/*=========================
 P A*RALLAX HERO
 =========================*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    const x=
    (window.innerWidth/2-e.clientX)/60;

    const y=
    (window.innerHeight/2-e.clientY)/60;

    hero.style.transform=
    `translate(${x}px,${y}px)`;

});


/*=========================
 F L*OATING PARTICLES
 =========================*/

const bg=document.querySelector(".background");

for(let i=0;i<40;i++){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    particle.style.left=
    Math.random()*100+"%";

    particle.style.top=
    Math.random()*100+"%";

    particle.style.animationDuration=
    6+Math.random()*10+"s";

    particle.style.animationDelay=
    Math.random()*5+"s";

    particle.style.width=
    3+Math.random()*6+"px";

    particle.style.height=
    particle.style.width;

    bg.appendChild(particle);

}


/*=========================
 I N*TERSECTION ANIMATION
 =========================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});


document.querySelectorAll("section").forEach(sec=>{

    observer.observe(sec);

});


/*=========================
 T Y*PING EFFECT
 =========================*/

const subtitle=document.querySelector(".glass h3");

const text="CLASS 9 CHEMISTRY";

subtitle.innerHTML="";

let index=0;

function type(){

    if(index<text.length){

        subtitle.innerHTML+=text.charAt(index);

        index++;

        setTimeout(type,90);

    }

}

type();


/*=========================
 C U*STOM CURSOR GLOW
 =========================*/

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/*=========================
 H E*RO FLOATING EFFECT
 =========================*/

setInterval(()=>{

    const card=document.querySelector(".glass");

    card.animate([

        {transform:"translateY(0px)"},

                 {transform:"translateY(-10px)"},

                 {transform:"translateY(0px)"}

    ],{

        duration:4000,

        iterations:1,

        easing:"ease-in-out"

    });

},4000);


/*=========================
 C O*NSOLE MESSAGE 😄
 =========================*/

console.log(

    "%cWelcome Future Chemist! ⚛",

    "color:#00e5ff;font-size:18px;font-weight:bold"

);
/*==================================================
 N UMBER COUNT ANIMATION                          *
 ==================================================*/

const counters=document.querySelectorAll(".fact h1");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=parseInt(counter.innerText);

            let current=0;

            const speed=target/80;

            const update=()=>{

                current+=speed;

                if(current<target){

                    counter.innerText=Math.floor(current);

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=target;

                }

            };

            update();

        }

    });

});

counters.forEach(c=>counterObserver.observe(c));
/*======================================================
 T IM*ELINE REVEAL
 ======================================================*/

const timelineItems=document.querySelectorAll(".timeline-item");

const timelineObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate(

                [
                    {
                        opacity:0,
                        transform:"translateY(80px)"
                    },
                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }
                ],
                {
                    duration:900,
                    fill:"forwards",
                    easing:"ease"
                }
            );

        }

    });

},{
    threshold:.2
});

timelineItems.forEach(item=>{

    item.style.opacity=0;

    timelineObserver.observe(item);

});
/*==========================================================
 P ER*IODIC TABLE
 ==========================================================*/

const elements = [

    {number:1,symbol:"H",name:"Hydrogen",group:1,period:1,category:"nonmetal"},
{number:2,symbol:"He",name:"Helium",group:18,period:1,category:"noble"},

{number:3,symbol:"Li",name:"Lithium",group:1,period:2,category:"alkali"},
{number:4,symbol:"Be",name:"Beryllium",group:2,period:2,category:"alkaline"},

{number:5,symbol:"B",name:"Boron",group:13,period:2,category:"metalloid"},
{number:6,symbol:"C",name:"Carbon",group:14,period:2,category:"nonmetal"},
{number:7,symbol:"N",name:"Nitrogen",group:15,period:2,category:"nonmetal"},
{number:8,symbol:"O",name:"Oxygen",group:16,period:2,category:"nonmetal"},
{number:9,symbol:"F",name:"Fluorine",group:17,period:2,category:"halogen"},
{number:10,symbol:"Ne",name:"Neon",group:18,period:2,category:"noble"},

{number:11,symbol:"Na",name:"Sodium",group:1,period:3,category:"alkali"},
{number:12,symbol:"Mg",name:"Magnesium",group:2,period:3,category:"alkaline"},

{number:13,symbol:"Al",name:"Aluminium",group:13,period:3,category:"transition"},
{number:14,symbol:"Si",name:"Silicon",group:14,period:3,category:"metalloid"},
{number:15,symbol:"P",name:"Phosphorus",group:15,period:3,category:"nonmetal"},
{number:16,symbol:"S",name:"Sulfur",group:16,period:3,category:"nonmetal"},
{number:17,symbol:"Cl",name:"Chlorine",group:17,period:3,category:"halogen"},
{number:18,symbol:"Ar",name:"Argon",group:18,period:3,category:"noble"},

{number:19,symbol:"K",name:"Potassium",group:1,period:4,category:"alkali"},
{number:20,symbol:"Ca",name:"Calcium",group:2,period:4,category:"alkaline"}

];

const table = document.getElementById("periodicTable");

function buildTable(){

    table.innerHTML="";

    for(let period=1; period<=4; period++){

        for(let group=1; group<=18; group++){

            const element = elements.find(e=>e.period===period && e.group===group);

            if(element){

                const div=document.createElement("div");

                div.className=`element ${element.category}`;

                div.innerHTML=`
                <div class="number">${element.number}</div>
                <div class="symbol">${element.symbol}</div>
                `;

                div.title=`${element.name}`;

                div.onclick=()=>{

                    document.getElementById("elementPanel").classList.add("open");

                    document.getElementById("elementNumber").textContent=element.number;

                    document.getElementById("elementSymbol").textContent=element.symbol;

                    document.getElementById("elementName").textContent=element.name;

                    document.getElementById("infoGroup").textContent=element.group;

                    document.getElementById("infoPeriod").textContent=element.period;

                    document.getElementById("infoCategory").textContent=element.category;

                    document.getElementById("infoElectron").textContent=element.electron;

                    document.getElementById("infoDescription").textContent=element.description;

                };

                table.appendChild(div);

            }

            else{

                const blank=document.createElement("div");

                blank.className="placeholder";

                table.appendChild(blank);

            }

        }

    }

}

buildTable();

/*==========================================================
 S EA*RCH
 ==========================================================*/

const search=document.getElementById("elementSearch");

search.addEventListener("input",()=>{

    const value=search.value.toLowerCase();

    document.querySelectorAll(".element").forEach(box=>{

        const title=box.title.toLowerCase();

        const symbol=box.querySelector(".symbol").innerText.toLowerCase();

        if(title.includes(value)||symbol.includes(value)){

            box.style.opacity="1";
            box.style.transform="scale(1)";

        }else{

            box.style.opacity=".18";
            box.style.transform="scale(.9)";

        }

    });

});
document
.getElementById("closePanel")
.onclick=()=>{

    document
    .getElementById("elementPanel")
    .classList
    .remove("open");

};
/*==================================================
 S TU*DY TIP HIGHLIGHT
 ==================================================*/

document.querySelectorAll(".study-tip").forEach(tip=>{

    tip.addEventListener("mouseenter",()=>{

        tip.style.transform="scale(1.03)";

    });

    tip.addEventListener("mouseleave",()=>{

        tip.style.transform="scale(1)";

    });

});
/*==================================================
 C ON*FIGURATION CARD ANIMATION
 ==================================================*/

document.querySelectorAll(".config-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});
/*==================================================
 G RO*UP & PERIOD FINDER
 ==================================================*/

const configBtn = document.getElementById("checkConfig");

const resultBox = document.getElementById("finderResult");

configBtn.addEventListener("click", () => {

    const input = document.getElementById("configInput").value.trim();

    if(input===""){

        resultBox.style.display="block";

        resultBox.innerHTML="❌ Please enter an electronic configuration.";

        return;

    }

    const shells = input.split(",");

    const period = shells.length;

    const valence = Number(shells[shells.length-1]);

    let group;

    if(valence===1){

        group=1;

    }

    else if(valence===2){

        group=2;

    }

    else if(valence>=3 && valence<=8){

        group=valence+10;

    }

    if(input==="2"){

        group=18;

    }

    resultBox.style.display="block";

    resultBox.innerHTML=`

    <h3>Result</h3>

    <p><b>Electronic Configuration:</b> ${input}</p>

    <p><b>Number of Shells:</b> ${period}</p>

    <p><b>Valence Electrons:</b> ${valence}</p>

    <p><b>Period:</b> ${period}</p>

    <p><b>Group:</b> ${group}</p>

    <hr style="margin:20px 0;border-color:rgba(255,255,255,.1);">

    <p>

    📘 <b>Explanation</b>

    <br><br>

    • Number of occupied shells = <b>${period}</b>, so the element belongs to <b>Period ${period}</b>.

    <br><br>

    • The last shell contains <b>${valence}</b> electron(s), so the element belongs to <b>Group ${group}</b>.

    </p>

    `;

});
/*==================================================
 P RO*PERTY CARD ANIMATION
 ==================================================*/

document.querySelectorAll(".property-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});
/*=========================
 S MO*OTH NAVIGATION
 =========================*/

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener('click',function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth',

                block:'start'

            });

        }

    });

});
