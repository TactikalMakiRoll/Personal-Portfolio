let smoothScrollElems= [];
smoothScrollElems.push(document.getElementById("skills"));
smoothScrollElems.push(document.getElementById("projects"));
smoothScrollElems.push(document.getElementById("contact"));

let smoothScrollLinks = Array.from(document.getElementsByClassName("navigation__link-text"));

smoothScrollLinks.map((elem, index)=>{
    elem.onclick = (event)=>{
        event.preventDefault()
        smoothScrollElems[index].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    
    }
})

let scrollIcon = document.getElementById("scrollIcon");
if(window.pageYOffset === 0){
    scrollIcon.style.animation = "shake 4s linear infinite";
}

window.onscroll = (event)=>{
    scrollIcon.style.opacity = 1 - (window.pageYOffset/300);
    if(window.pageYOffset === 0){
        scrollIcon.style.animation = "shake 4s linear infinite";
    }
    else{
        scrollIcon.style.animation = "";
    }
}

let skillSlider = document.getElementById("skillSlider");
skillSlider.style.left = "-3%";

window.onmousemove = function(event){
    skillSlider.style.left = event.pageX/200 - window.innerWidth/200 + '%';
}

let slideOutElements = [];

slideOutElements.push(document.querySelector(".skills__description"));
slideOutElements.push(document.querySelector(".skills__slider"));
slideOutElements.push(document.querySelector(".projects"));
slideOutElements.push(document.querySelector(".github"));
slideOutElements.push(document.querySelector(".contact__links"));

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            Array.from(entry.target.children).forEach((elem,index)=>{
                elem.classList.add('slideFadeOut');
                elem.style.animationDelay = index/4 + 's';
            });
            return;
        }
        else{
            Array.from(entry.target.children).forEach((elem)=>{
                elem.classList.remove('slideFadeOut');
                elem.style.visibility = "hidden";
            });
        }
    })
})


slideOutElements.forEach((elem) => {
    observer.observe(elem);
})