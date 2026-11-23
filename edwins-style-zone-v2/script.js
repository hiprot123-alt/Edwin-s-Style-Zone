const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}));
const slides=[...document.querySelectorAll('.hero-slide')];let current=0;
function showSlide(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===current));document.querySelector('.slide-count').innerHTML=`0${current+1} <i></i> 0${slides.length}`;}
document.querySelector('.slide-prev').addEventListener('click',()=>showSlide(current-1));
document.querySelector('.slide-next').addEventListener('click',()=>showSlide(current+1));
document.querySelectorAll('.service-card a[data-service]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#serviceSelect').value=a.dataset.service;}));
const dateInput=document.querySelector('#dateInput');const now=new Date();dateInput.min=new Date(now-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#bookingForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=[
"Hello Edwin's Style Zone, I would like to request an appointment.",
`Name: ${d.get('name')}`,`Contact: ${d.get('phone')}`,`Service: ${d.get('service')}`,
`Preferred date: ${d.get('date')}`,`Preferred time: ${d.get('time')}`,d.get('notes')?`Message: ${d.get('notes')}`:''
].filter(Boolean).join('\\n');document.querySelector('#formStatus').textContent='Opening WhatsApp with your appointment request…';window.open('https://wa.me/919787619061?text='+encodeURIComponent(msg),'_blank','noopener');});
