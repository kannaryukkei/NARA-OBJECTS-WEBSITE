const navbtn=document.getElementById('navbtn'),navlinks=document.getElementById('navlinks');
function closeNav(){navlinks.classList.remove('open');navbtn.setAttribute('aria-expanded','false')}
navbtn.addEventListener('click',()=>{const open=navbtn.getAttribute('aria-expanded')!=='true';navbtn.setAttribute('aria-expanded',String(open));navlinks.classList.toggle('open',open)});
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
document.addEventListener('click',e=>{if(navlinks.classList.contains('open')&&!navlinks.contains(e.target)&&!navbtn.contains(e.target))closeNav()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navlinks.classList.contains('open')){closeNav();navbtn.focus()}});
document.querySelectorAll('[data-cat]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('category').value=a.dataset.cat}));
const sections=[...document.querySelectorAll('main section[id]')],navItems=[...navlinks.querySelectorAll('a')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const current=navItems.find(link=>link.getAttribute('href')==='#'+entry.target.id);if(current)navItems.forEach(link=>{if(link===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}})},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(section=>observer.observe(section))}
const revealNodes=[...document.querySelectorAll('[data-reveal]')];
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion&&'IntersectionObserver' in window){
  document.documentElement.classList.add('motion-ready');
  const revealObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const siblings=[...entry.target.parentElement.querySelectorAll(':scope > [data-reveal]')];
      const order=Math.max(0,siblings.indexOf(entry.target));
      entry.target.style.setProperty('--reveal-delay',Math.min(order,4)*85+'ms');
      requestAnimationFrame(()=>entry.target.classList.add('is-visible'));
      observer.unobserve(entry.target);
    });
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  revealNodes.forEach(node=>revealObserver.observe(node));
}else revealNodes.forEach(node=>node.classList.add('is-visible'));
const progress=document.getElementById('progress');function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?Math.min(100,window.scrollY/max*100):0)+'%'}window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const materialContent={dimensions:{title:'Ukuran & ruang gerak',text:'Lebar, tinggi, kedalaman, akses masuk dan ruang gerak menjadi titik awal perancangan.',src:'assets/credenza.webp',alt:'Visual konsep AI credenza walnut; bukan proyek nyata NARA',label:'01 / DIMENSI'},specification:{title:'Material & hardware',text:'Jenis papan atau kayu, mekanisme, engsel, handle dan detail finishing memengaruhi karakter serta kebutuhan perawatan.',src:'assets/joinery-detail.webp',alt:'Visual konsep AI detail sambungan kayu; bukan dokumentasi produksi NARA',label:'02 / SPESIFIKASI'},execution:{title:'Lokasi & pelaksanaan',text:'Kondisi dinding dan lantai, akses pengiriman, instalasi serta detail custom ikut membentuk rencana pengerjaan.',src:'assets/pantry.webp',alt:'Visual konsep AI pantry cabinetry; bukan proyek nyata NARA',label:'03 / PELAKSANAAN'}};
const materialTabs=[...document.querySelectorAll('.material-tab')],materialImage=document.getElementById('materialImage'),materialTitle=document.getElementById('materialTitle'),materialText=document.getElementById('materialText'),materialLabel=document.getElementById('materialLabel');
function selectMaterial(tab){const data=materialContent[tab.dataset.material];if(!data)return;materialTabs.forEach(item=>{const active=item===tab;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))});materialTitle.textContent=data.title;materialText.textContent=data.text;materialImage.src=data.src;materialImage.alt=data.alt;materialLabel.textContent=data.label+' — VISUAL KONSEP AI'}
materialTabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectMaterial(tab));tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?materialTabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+materialTabs.length)%materialTabs.length;materialTabs[next].focus();selectMaterial(materialTabs[next])})});
const faqItems=[...document.querySelectorAll('.faq details')];faqItems.forEach(item=>item.addEventListener('toggle',()=>{const summary=item.querySelector('summary');if(summary)summary.setAttribute('aria-expanded',String(item.open));if(item.open)faqItems.forEach(other=>{if(other!==item)other.open=false})}));
const fields={category:document.getElementById('category'),city:document.getElementById('city'),size:document.getElementById('size'),timeline:document.getElementById('timeline'),notes:document.getElementById('notes')};let brief='';const generate=document.getElementById('generate'),status=document.getElementById('status'),copy=document.getElementById('copy'),preview=document.getElementById('summary');
// Invalidate a generated brief as soon as any source field changes; never leave a stale copyable summary.
Object.values(fields).forEach(field=>field.addEventListener('input',()=>{if(!brief)return;brief='';preview.hidden=true;copy.disabled=true;status.textContent='Ada perubahan pada isian. Buat ulang ringkasan sebelum menyalin.'}));
generate.addEventListener('click',()=>{if(!Object.values(fields).every(field=>field.reportValidity()))return;brief=['NARA OBJECTS — BRIEF KONSEP','Kebutuhan: '+fields.category.value,'Area: '+fields.city.value,'Ukuran: '+fields.size.value,'Target: '+fields.timeline.value,'Catatan: '+fields.notes.value].join('\n');preview.textContent=brief;preview.hidden=false;status.textContent='Ringkasan siap. Tidak ada data yang dikirim atau disimpan.';copy.disabled=false});
copy.addEventListener('click',async()=>{if(!brief)return;try{await navigator.clipboard.writeText(brief);status.textContent='Ringkasan disalin.'}catch{preview.hidden=false;preview.focus();const range=document.createRange();range.selectNodeContents(preview);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='Clipboard tidak tersedia. Ringkasan telah dipilih; gunakan Ctrl/Cmd+C untuk menyalin.'}});
