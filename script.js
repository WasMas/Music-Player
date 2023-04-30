/*const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

const container = document.getElementById("scrollContainer");
const content = document.getElementById("scrollContent");

document.getElementById("scrollBtnLeft").addEventListener("click", function() {
  container.scrollBy({
    left: -100,
    behavior: "smooth"
  });
});

document.getElementById("scrollBtnRight").addEventListener("click", function() {
  container.scrollBy({
    left: 100,
    behavior: "smooth"
  });
});

content.addEventListener("scroll", function() {
  if (content.scrollLeft <= 0) {
    document.getElementById("scrollBtnLeft").disabled = true;
  } else {
    document.getElementById("scrollBtnLeft").disabled = false;
  }
  
  if (content.scrollLeft >= content.scrollWidth - content.offsetWidth) {
    document.getElementById("scrollBtnRight").disabled = true;
  } else {
    document.getElementById("scrollBtnRight").disabled = false;
  }
});

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

const container = document.getElementById("scrollContainer");
const content = document.getElementById("scrollContent");

document.getElementById("left").addEventListener("click", function() {
  container.scrollBy({
    left: -100,
    behavior: "smooth"
  });
});

document.getElementById("right").addEventListener("click", function() {
  container.scrollBy({
    left: 100,
    behavior: "smooth"
  });
});

content.addEventListener("scroll", function() {
  if (content.scrollLeft <= 0) {
    document.getElementById("left").disabled = true;
  } else {
    document.getElementById("left").disabled = false;
  }
  
  if (content.scrollLeft >= content.scrollWidth - content.offsetWidth) {
    document.getElementById("right").disabled = true;
  } else {
    document.getElementById("right").disabled = false;
  }
});*/
const music = new Audio('audio/1.mp3');
//music.play();
const songs = [
  {
    id: 1,
    songName: `DEATH
    <div class="subtitle">Melanie Martinez</div>`,
    poster: "img/img2.png"
  },
  {
    id: 2,
    songName: `Faded
    <div class="subtitle">Alan Walker</div>`,
    poster: "img/alan.jpg"
  },
  {
    id: 3,
    songName: `Anti-Hero
    <div class="subtitle">Taylor Swift</div>`,
    poster: "img/taylor.jpg"
  },
  {
    id: 4,
    songName: `Kill Bill
    <div class="subtitle">SZA</div>`,
    poster: "img/1.jpg"
  },
  {
    id: 5,
    songName: `Compass
    <div class="subtitle">TNBH</div>`,
    poster: "img/tnbh.jpg"
  },
  {
    id: 6,
    songName: `Cupid
    <div class="subtitle">Fifty Fifty</div>`,
    poster: "img/img3.png"
  },
  {
    id: 7,
    songName: `Pistol
    <div class="subtitle">Cig After S</div>`,
    poster: "img/img6.jpg"
  },
  {
    id: 8,
    songName: `TUNNEL VISION
    <div class="subtitle">Melanie Martinez</div>`,
    poster: "img/img2.png"
  },
  {
    id: 9,
    songName: `You're On Your Own Kid
    <div class="subtitle">Taylor Swift</div>`,
    poster: "img/taylor.jpg"
  },
  {
    id: 10,
    songName: `Softcore
    <div class="subtitle">TNBH</div>`,
    poster: "img/tnbh.jpg"
  },
  {
    id: 11,
    songName: `Waves
    <div class="subtitle">Calpurnia</div>`,
    poster: "img/calpurnia.jpg"
  },
  {
    id: 12,
    songName: `VOID
    <div class="subtitle">Melanie Martinez</div>`,
    poster: "img/img2.png"
  }
];

Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add('active2');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
  } else {
    music.pause();
    wave.classList.remove('active2');
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
  }
});
const makeAllplays= () =>{
  Array.from(document.getElementsByClassName('Playlistplay')).forEach((el)=>{
    el.classList.add('bi-play-circle-fill');
    el.classList.remove('bi-pause-circle-fill');
  })
}
const makeAllBackground= () =>{
  Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
     el.style.background = 'rgb(150,105, 170,.0)';
  })
}
let index = 0;
let poster_master_play =document.getElementById('poster_master_play');
let title =document.getElementById('title');
Array.from(document.getElementsByClassName('Playlistplay')).forEach((e)=>{
  e.addEventListener('click', (el)=>{
    index =el.target.id;
   // console.log(index);
   music.src=`audio/${index}.mp3`;
   //poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songtitle = songs.filter((els)=>{
    return els.id == index;
  });
    songtitle.forEach(elss =>{
      let{songName, poster}= elss;
      title.innerHTML = songName;
      poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background ="rgb(150,105, 170,.1)"
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active2');
  });
})

let currentstart= document.getElementById('currentstart');
let currentend= document.getElementById('currentend');
let bar2= document.getElementById('bar2');
let seek= document.getElementById('seek');
let dot= document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=> {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  //console.log(music_dur);
  let min1 = Math.floor(music_dur/60);
  let sec1 = Math.floor(music_dur%60);
  if (sec1<10) {
    sec1=`0${sec1}`;
    
  }
  currentend.innerText=`${min1}:${sec1}`;
  let min2 = Math.floor(music_curr/60);
  let sec2 = Math.floor(music_curr%60);
  if (sec2<<10) {
    sec2=`0${sec2}`;
    
  }
  currentstart.innerText=`${min2}:${sec2}`;
  let progressbar = parseInt((music_curr/music_dur)*100);
  seek.value = progressbar;
  //console.log(seek.value);
  let seekbar = seek.value;
  bar2.style.width=`${seekbar}%`;
  dot.style.left=`${seekbar}%`;
})
seek.addEventListener('change', () =>{
  music.currentTime = seek.value * music.duration/100;
})
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementById('vol_bar');
vol.addEventListener('change',()=>{
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-off-fill');
    
  }
  if (vol.value>0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');  
  }
  if (vol.value>50 ) {
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click',()=> {
  index-=1;
  if (index<1) {
    index = Array.from(document.getElementsByClassName('songitem')).length;
  }
  music.src=`audio/${index}.mp3`;
   //poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songtitle = songs.filter((els)=>{
    return els.id == index;
  });
    songtitle.forEach(elss =>{
      let{songName, poster}= elss;
      title.innerHTML = songName;
      poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background ="rgb(150,105, 170,.1)"
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active2');
});
next.addEventListener('click',()=> {
  index++;
  if (index>Array.from(document.getElementsByClassName('songitem')).length) {
    index = 1 ;
  }
  music.src=`audio/${index}.mp3`;
   //poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songtitle = songs.filter((els)=>{
    return els.id == index;
  });
    songtitle.forEach(elss =>{
      let{songName, poster}= elss;
      title.innerHTML = songName;
      poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background ="rgb(150,105, 170,.1)"
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active2');
});
