const QUESTIONS = [
  { question: "Who is the main storyteller in The Arabian Nights?", options: ["Aladdin","Ali Baba","Sinbad","Scheherazade"], correctIndex: 3, difficulty: 'Easy' },
  { question: "Which character uses a magic lamp?", options: ["Sinbad","Aladdin","Ali Baba","Sinbad's Brother"], correctIndex: 1, difficulty: 'Easy' },
  // Add/replace with your questions
];

let currentIndex = 0;
const qEl = document.getElementById('question');
const optsWrap = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const quizBox = document.getElementById('quiz-box');
const difficultyBadge = document.querySelector('.difficulty-badge');
const resultMsg = document.getElementById('resultMsg');

function showResultMsg(text, show = true, timeout=1800) {
  if(!resultMsg) return;
  resultMsg.textContent = text;
  resultMsg.style.display = show ? 'block' : 'none';
  if(show) setTimeout(()=> resultMsg.style.display = 'none', timeout);
}

function renderQuestion(idx) {
  const data = QUESTIONS[idx];
  if(!data) return;
  // difficulty badge
  difficultyBadge.textContent = data.difficulty ? data.difficulty.toUpperCase() : '';

  qEl.classList.remove('smoke-reveal');
  void qEl.offsetWidth; // reflow to restart animation
  qEl.textContent = data.question;
  qEl.classList.add('smoke-reveal');

  // clear options
  optsWrap.innerHTML = '';
  data.options.forEach((optText, i) => {
    const b = document.createElement('div');
    b.className = 'option fade-in';
    b.tabIndex = 0;
    b.dataset.index = i;
    b.textContent = optText;
    optsWrap.appendChild(b);
  });

  // fire smoke on question load (requirement 1C)
  spawnSmokeAtElement(qEl, {size:140, life:900});

  // announce that question loaded (if needed by external code)
  document.dispatchEvent(new CustomEvent('questionLoaded', { detail: { index: idx, question: data } }));
}

/* next button */
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if(currentIndex >= QUESTIONS.length){
    showResultMsg('Correct Answer 🎉', true, 2400);
    currentIndex = 0; // loop for demo
  }
  renderQuestion(currentIndex);
});

/* option click handling (attached after rendering) */
optsWrap.addEventListener('click', (ev) => {
  const opt = ev.target.closest('.option');
  if(!opt) return;
  const chosen = parseInt(opt.dataset.index,10);
  const correct = QUESTIONS[currentIndex].correctIndex;

  // smoke at option click (requirement 1C)
  spawnSmokeAtElement(opt, {size:80, life:700});

  // glyph burst on hover/click
  spawnGlyphs(opt, 6);

  if(chosen === correct){
    opt.classList.add('correct');
    // confetti at click point
    explodeConfettiAtClient(ev.clientX, ev.clientY);
    // lightning flash
    flashOverlay();
    showResultMsg('Correct! ✨', true, 1200);
  } else {
    opt.classList.add('wrong');
    showResultMsg('Wrong — try the next!', true, 1200);
  }

  // disable options briefly
  Array.from(optsWrap.querySelectorAll('.option')).forEach(o => o.style.pointerEvents = 'none');
  setTimeout(()=> {
    Array.from(optsWrap.querySelectorAll('.option')).forEach(o => { o.style.pointerEvents = ''; o.classList.remove('correct','wrong'); });
  }, 1200);
});

/* mount initial question */
renderQuestion(currentIndex);

/* -----------------------
   2) ANIMATIONS SYSTEMS
   - sparkles (background)
   - confetti
   - smoke (puffs) both on load & click
   - shooting stars
   - glyph particles on hover/click
   - random carpet & lamp flight (2C)
------------------------*/

/* MAGIC SPARKLES */
(function generateSparkles(count=80){
  const container = document.querySelector('.magic');
  if(!container) return;
  for(let i=0;i<count;i++){
    const s = document.createElement('span');
    s.style.left = Math.random()*100 + '%';
    s.style.top = (70 + Math.random()*35) + '%';
    s.style.width = (4 + Math.random()*6) + 'px';
    s.style.height = s.style.width;
    s.style.animationDuration = (5 + Math.random()*6) + 's';
    s.style.animationDelay = (Math.random()*6) + 's';
    container.appendChild(s);
  }
})();

/* CONFETTI */
function explodeConfettiAtClient(x, y) {
  for(let i=0;i<40;i++){
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = (x - 6) + 'px';
    el.style.top = (y - 6) + 'px';
    el.style.background = `hsl(${Math.floor(Math.random()*360)}, 85%, 55%)`;
    el.style.setProperty('--i', Math.random());
    document.body.appendChild(el);
    setTimeout(()=> el.remove(), 1200);
  }
}

/* LIGHTNING FLASH OVERLAY */
function flashOverlay(){
  const ov = document.getElementById('overlay-flash');
  ov.classList.remove('overlay-flash-on');
  void ov.offsetWidth;
  ov.classList.add('overlay-flash-on');
}

/* SMOKE (genie puff) — simple particle-based smoke */
/* SMOKE — auto-removes after ~1.2 sec */
function spawnSmokeAtElement(targetEl, opts={size:60, life:600}) {
  const rect = targetEl.getBoundingClientRect();
  const centerX = rect.left + rect.width/2;
  const centerY = rect.top + rect.height/2;

  const count = Math.max(4, Math.round(opts.size / 30));

  for(let i=0; i<count; i++){
    const p = document.createElement('div');
    p.className = 'glyph';

    p.style.left = centerX + (Math.random()*opts.size - opts.size/3) + 'px';
    p.style.top  = centerY + (Math.random()*opts.size/10) + 'px';

    // Small dots
    p.style.width  = p.style.height = (6 + Math.random()*10) + 'px';
    p.style.opacity = 0;
    p.style.borderRadius = '50%';
    p.style.background = `radial-gradient(circle, rgba(255,255,255,0.7), rgba(180,150,80,0.05))`;
    p.style.filter = 'blur(4px)';
    p.style.transform = `translate(-50%,-50%)`;
    p.style.position = 'fixed';
    p.style.zIndex = 9999;
    document.body.appendChild(p);

    const dx = (Math.random()-0.5) * 25;
    const dy = -(20 + Math.random()*40);
    const rot = (Math.random()-0.5) * 30;

    const duration = 900 + Math.random()*300;  // ≈0.9s–1.2s

    p.animate([
      { transform: `translate(0,0) scale(0.5) rotate(0)`, opacity: 0.05 },
      { transform: `translate(${dx}px, ${dy}px) scale(1.1) rotate(${rot}deg)`, opacity: 0.5 },
      { transform: `translate(${dx*1.2}px, ${dy*1.3}px) scale(1.3) rotate(${rot*1.3}deg)`, opacity: 0 }
    ], {
      duration: duration,
      easing: 'ease-out'
    });

    // 🔥 Guaranteed removal
    setTimeout(() => {
      p.remove();
    }, duration + 50);
  }
}


/* GLYPH BURST (on hover & click) */
function spawnGlyphs(parent, num=7){
  const pr = parent.getBoundingClientRect();
  for(let i=0;i<num;i++){
    const g = document.createElement('div');
    g.className = 'glyph';
    g.style.left = (pr.left + pr.width/2 + (Math.random()-0.5)*pr.width*0.8) + 'px';
    g.style.top  = (pr.top + pr.height/2 + (Math.random()-0.5)*pr.height*0.4) + 'px';
    g.style.fontSize = (10 + Math.random()*14) + 'px';
    g.style.color = `hsl(${20 + Math.random()*60}, 90%, ${60+Math.random()*10}%)`;
    g.textContent = ['✦','✺','✪','✦','✿','✧'][Math.floor(Math.random()*6)];
    document.body.appendChild(g);
    const dx = (Math.random()-0.5)*200;
    const dy = - (30 + Math.random()*160);
    g.animate([
      { transform: `translate(0,0) scale(0.6)`, opacity:1 },
      { transform: `translate(${dx}px, ${dy}px) scale(1.1)`, opacity:0 }
    ], { duration: 900 + Math.random()*600, easing: 'cubic-bezier(.2,.7,.2,1)'});
    setTimeout(()=> g.remove(), 1400 + Math.random()*600);
  }
}

/* attach hover spawn to options for serpentine glyphs */
optsWrap.addEventListener('mouseover', (ev) => {
  const opt = ev.target.closest('.option');
  if(!opt) return;
  spawnGlyphs(opt, 4);
});

/* SHOOTING STARS - periodic */
(function shootingStarsLoop(){
  const interval = 2800 + Math.random()*4200;
  setTimeout(()=> {
    const s = document.createElement('div');
    s.className = 'shooting-star';
    s.style.left = (50 + Math.random()*60) + '%';
    s.style.top = (5 + Math.random()*30) + '%';
    const scale = 0.6 + Math.random()*1.4;
    s.style.transform = `rotate(-22deg) scale(${scale})`;
    document.body.appendChild(s);
    setTimeout(()=> s.remove(), 1200);
    shootingStarsLoop();
  }, interval);
})();

/* ------------------------
   3) Lamp & Carpet random flight (2C)
   Carpet and lamp will occasionally "fly" across the screen — crazy mode.
   Strategy: reposition off-screen then animate to random spot using Web Animations API.
------------------------*/
const lamp = document.getElementById('lamp');
const carpet = document.getElementById('carpet');

function randomOffscreenSide() {
  // returns object {left, top} starting coordinates off screen
  const w = window.innerWidth, h = window.innerHeight;
  const side = Math.floor(Math.random()*4);
  switch(side){
    case 0: return { left: -200, top: 50 + Math.random() * (h-100) }; // left
    case 1: return { left: w + 200, top: 50 + Math.random() * (h-100) }; // right
    case 2: return { left: 50 + Math.random()*(w-200), top: -200 }; // top
    default: return { left: 50 + Math.random()*(w-200), top: h + 200 }; // bottom
  }
}

function randomOnScreenTarget() {
  const w = window.innerWidth, h = window.innerHeight;
  return { left: 40 + Math.random()*(w-120), top: 40 + Math.random()*(h-240) };
}

function flyElement(el, duration=4200, easing='cubic-bezier(.2,.8,.2,1)') {
  const start = randomOffscreenSide();
  const end = randomOnScreenTarget();
  el.style.left = start.left + 'px';
  el.style.top = start.top + 'px';
  el.style.opacity = 1;
  el.animate([
    { transform: 'translate(0,0) rotate(0deg) scale(0.8)', opacity: 0.95, offset:0 },
    { transform: 'translate(0,0) rotate(10deg) scale(1.0)', opacity: 1, offset:0.3 },
    { transform: `translate(${end.left - start.left}px, ${end.top - start.top}px) rotate(-10deg) scale(0.95)`, opacity: 1, offset:0.8 },
    { transform: `translate(${(end.left - start.left)+40}px, ${end.top - start.top + 40}px) rotate(0deg) scale(0.9)`, opacity: 0.85, offset:1 }
  ], { duration, easing });
  // after animation, position element where it ended
  setTimeout(()=> {
    el.style.left = (end.left + 40) + 'px';
    el.style.top = (end.top + 40) + 'px';
  }, duration - 80);
}

/* schedule random flights */
(function scheduleFlights(){
  // first one after short delay
  setTimeout(()=> {
    flyElement(lamp, 5200);
    flyElement(carpet, 7000);
    // schedule next wave (chaotic pattern)
    setTimeout(()=> scheduleFlights(), 8000 + Math.random()*13000);
  }, 1500 + Math.random()*2500);
})();

/* responsive reposition on resize */
window.addEventListener('resize', () => {
  // keep them inside bounds (simple)
  [lamp, carpet].forEach(el => {
    if(!el) return;
    const r = el.getBoundingClientRect();
    const w = window.innerWidth, h = window.innerHeight;
    if(r.left > w || r.top > h) {
      el.style.left = Math.random()* (w-100) + 'px';
      el.style.top = Math.random()* (h-200) + 'px';
    }
  });
});

/* ------------------------
   Helpful: expose a small API for integration with other quiz scripts
------------------------*/
window.arabianNightsEffects = {
  explode: explodeConfettiAtClient,
  smokeAtElement: spawnSmokeAtElement,
  flash: flashOverlay,
  spawnGlyphs
};