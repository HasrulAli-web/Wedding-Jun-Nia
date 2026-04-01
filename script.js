/* OPEN INVITATION */
function openInvitation(){
document.getElementById("opening").style.display="none";
document.getElementById("music").play();
startAutoScroll();
}

/* MUSIC */
function toggleMusic(){
const music = document.getElementById("music");
music.paused ? music.play() : music.pause();
}

/* COUNTDOWN */
const targetDate = new Date("April 05, 2026 14:00:00").getTime();

setInterval(()=>{
const now = new Date().getTime();
const distance = targetDate - now;

const d = Math.floor(distance/(1000*60*60*24));
const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const m = Math.floor((distance%(1000*60*60))/(1000*60));
const s = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
d+" Hari "+h+" Jam "+m+" Menit "+s+" Detik";
},1000);

/* RSVP */
function kirimRSVP(){
let nama = document.getElementById("nama").value;
let jumlah = document.getElementById("jumlah").value;
let status = document.getElementById("status").value;
let pesan = document.getElementById("pesan").value;

let url = "https://wa.me/6281939005718?text="
+"Nama: "+nama+
"%0AJumlah: "+jumlah+
"%0AStatus: "+status+
"%0APesan: "+pesan;

window.open(url);
}

/* AUTO SCROLL */
let autoScroll = false;
let scrollInterval;

function startAutoScroll(){
autoScroll = true;
scrollInterval = setInterval(()=>{
window.scrollBy(0,1);
},20);
}

function toggleAuto(){
if(autoScroll){
clearInterval(scrollInterval);
autoScroll=false;
}else{
startAutoScroll();
}
}

/* Nama tamu dari link */
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if(nama){
document.getElementById("guestName").innerText = nama;
}