const QUESTIONS = [
  { question: "Who is the main storyteller in The Arabian Nights?", options: ["Aladdin","Ali Baba","Sinbad","Scheherazade"], correctIndex: 3, difficulty: 'Easy', explanation: "Scheherazade tells stories these many nights to the king to save her life." },
  { question: "Which character uses a magic lamp?", options: ["Sinbad","Aladdin","Ali Baba","Sinbad's Brother"], correctIndex: 1, difficulty: 'Easy', explanation: "Aladdin finds and uses the magic lamp to summon a genie." },
  { question: "What is the phrase to open the thieves' cave?", options: ["Open Sesame","Abracadabra","Open Now","Alakazam"], correctIndex: 0, difficulty: 'Easy', explanation: "'Open Sesame' is the phrase Ali Baba uses to enter the hidden cave." },
  { question: "Who flew on a magic carpet?", options: ["Ali Baba","Prince Housain","Aladdin","Harun al-Rashid"], correctIndex: 1, difficulty: 'Medium', explanation: "Prince Housain is the character associated with flying a magic carpet." },
  { question: "What power does the ebony horse have?", options: ["It can fly","It grants wishes","It talks","It is invisible"], correctIndex: 0, difficulty: 'Medium', explanation: "The ebony horse is a magical horse that can fly." },
  { question: "What is the name of Scheherazade's sister?", options: ["Fetnah", "Dunyazade", "Medea", "Scheherazade has no sister"], correctIndex: 1, difficulty: 'Easy', explanation: "Dunyazade is Scheherazade's sister who listens to her stories." },
  { question: "How many children do Shahryar and Scheherazade have?", options: ["One", "Two", "Three", "Four"], correctIndex: 2, difficulty: 'Medium', explanation: "They have three children together according to some versions." },
  { question: "What does the phrase 'Madinat as-Salam' mean?", options: ["City of Peace", "City of Gold", "City of Sinners", "City of Magic"], correctIndex: 0, difficulty: 'Medium', explanation: "'Madinat as-Salam' refers to the city of Baghdad, meaning City of Peace." },
  { question: "Who is the eldest lady in 'The Eldest Lady's Tale' transformed along with her sisters into?", options: ["Dogs", "Birds", "Camels", "Cats"], correctIndex: 0, difficulty: 'Medium', explanation: "The eldest lady's sisters were transformed into black dogs." },
  { question: "Who does Sinbad the Sailor tell the story of his voyages to?", options: ["The King", "His Wife", "A Merchant", "His Brothers"], correctIndex: 0, difficulty: 'Easy', explanation: "Sinbad recounts his voyages to the king." },
  { question: "What is the punishment Prince Mahmud endures in 'The Tale of the Ensorcelled Prince'?", options: ["Legs turned to marble", "Capital city submerged", "People turned to fish", "All of the above"], correctIndex: 3, difficulty: 'Hard', explanation: "Prince Mahmud is cursed with all these punishments by his wife." },
  { question: "What does the Barber of Baghdad do to prove his innocence?", options: ["Tells stories", "Fights off attackers", "Escapes jail", "None of these"], correctIndex: 0, difficulty: 'Medium', explanation: "He tells stories about his six brothers to the caliph." },
  { question: "What magical item does Aladdin discover?", options: ["Magic carpet", "Magic ring", "Magic lamp", "Magic sword"], correctIndex: 2, difficulty: 'Easy', explanation: "Aladdin finds a magic lamp containing a genie." },
  { question: "Who is Ali Baba?", options: ["A merchant", "A thief", "A poor woodcutter", "King"], correctIndex: 2, difficulty: 'Easy', explanation: "Ali Baba is a poor woodcutter who finds the thieves' cave." },
  { question: "How does Ali Baba open the thieves' cave?", options: ["Sings a song", "Opens a door", "Says 'Open Sesame'", "Shows a key"], correctIndex: 2, difficulty: 'Easy', explanation: "'Open Sesame' is the magic phrase used." },
  { question: "Who kills the thieves in Ali Baba’s story?", options: ["Ali Baba", "Morgiana", "Aladdin", "Sinbad"], correctIndex: 1, difficulty: 'Easy', explanation: "Morgiana, the clever servant, kills the thieves." },
  { question: "How does the fisherman trick the genie in 'The Fisherman and the Genie'?", options: ["Uses a bottle", "Words and wit", "Magic potion", "Sword"], correctIndex: 1, difficulty: 'Hard', explanation: "The fisherman uses clever words to trap the genie back into the bottle." },
  { question: "What is the significance of the Tale of the Three Apples?", options: ["Murder mystery", "Love story", "Adventure", "Magic"], correctIndex: 0, difficulty: 'Medium', explanation: "It is considered one of the first murder mysteries." },
  { question: "Who are Bacbouc, Backbarah, and Backbac?", options: ["Sinbad's brothers", "Barber's brothers", "Kings", "Magicians"], correctIndex: 1, difficulty: 'Medium', explanation: "They are the six brothers in 'The Barber of Baghdad'." },
  { question: "What gift does the king receive from the sages in 'The Ebony Horse'?", options: ["A diamond", "An ebony horse", "A magic lamp", "A flying carpet"], correctIndex: 1, difficulty: 'Medium', explanation: "The ebony horse is one of three gifts from wise men." },
  { question: "Who is the composer famous for a composition inspired by Arabian Nights?", options: ["Rimsky-Korsakov", "Beethoven", "Mozart", "Bach"], correctIndex: 0, difficulty: 'Easy', explanation: "Nikolai Rimsky-Korsakov composed 'Scheherazade'." },
  { question: "What is the moral of many Arabian Nights stories?", options: ["Justice", "Cunning", "Bravery", "All of the above"], correctIndex: 3, difficulty: 'Medium', explanation: "Many tales focus on justice, cunning, and bravery." },
  { question: "Who is Shahryar?", options: ["King", "Merchant", "Prince", "Genie"], correctIndex: 0, difficulty: 'Easy', explanation: "King Shahryar is the ruler who marries and kills brides." },
  { question: "What inspired Scheherazade to tell stories?", options: ["To save herself", "Boredom", "To entertain", "Reward"], correctIndex: 0, difficulty: 'Easy', explanation: "Scheherazade told stories to stop being executed." },
  { question: "How many nights did Scheherazade tell stories?", options: ["1001", "500", "365", "7000"], correctIndex: 0, difficulty: 'Easy', explanation: "She told stories for 1001 nights to save her life." },
  { question: "What type of stories does Arabian Nights contain?", options: ["Folk tales", "Romance", "Adventure", "All of these"], correctIndex: 3, difficulty: 'Easy', explanation: "It is a collection of folk tales with various themes." },
  { question: "Who is Sinbad?", options: ["Sailor", "King", "Merchant", "Thief"], correctIndex: 0, difficulty: 'Easy', explanation: "Sinbad is a sailor famed for his adventures." },
  { question: "What mysterious creature does Sinbad encounter?", options: ["Roc", "Dragon", "Genie", "Snake"], correctIndex: 0, difficulty: 'Medium', explanation: "Sinbad encounters the giant Roc bird on his voyages." },
  { question: "What is the name of Ali Baba’s servant?", options: ["Morgiana", "Shahrazad", "Dunyazade", "Fatima"], correctIndex: 0, difficulty: 'Easy', explanation: "Morgiana is Ali Baba's clever servant." },
  { question: "Which story features a jealous magician?", options: ["Aladdin", "The Three Apples", "The Fisherman and the Genie", "The Tale of the Ensorcelled Prince"], correctIndex: 3, difficulty: 'Hard', explanation: "The jealous magician punishes Prince Mahmud." },
  { question: "What magical item grants wishes?", options: ["Magic lamp", "Magic ring", "Magic sword", "Magic carpet"], correctIndex: 0, difficulty: 'Easy', explanation: "The magic lamp contains the genie who grants wishes." },
  { question: "What is Ali Baba’s relation to Ali Baba and the Forty Thieves?", options: ["Hero", "Villain", "Merchant", "Genie"], correctIndex: 0, difficulty: 'Easy', explanation: "Ali Baba is the hero who discovers the thieves' cave." },
  { question: "How does Morgiana save Ali Baba?", options: ["Kills thieves", "Tells king", "Gives money", "Hides him"], correctIndex: 0, difficulty: 'Medium', explanation: "She kills the thieves to protect Ali Baba." },
  { question: "What form does the genie take in Aladdin’s story?", options: ["Large man", "Small boy", "Old man", "Animal"], correctIndex: 0, difficulty: 'Easy', explanation: "The genie appears as a large powerful man." },
  { question: "What trait helps Scheherazade survive?", options: ["Intelligence", "Strength", "Beauty", "Luck"], correctIndex: 0, difficulty: 'Easy', explanation: "Her intelligence and storytelling skills save her." },
  { question: "What city is the setting of many stories?", options: ["Baghdad", "Cairo", "Damascus", "Mecca"], correctIndex: 0, difficulty: 'Easy', explanation: "Baghdad is the central setting in many tales." },
  { question: "Who often listens to Scheherazade’s stories?", options: ["Dunyazade", "Ali Baba", "Sinbad", "Aladdin"], correctIndex: 0, difficulty: 'Easy', explanation: "Her sister Dunyazade listens nightly." },
  { question: "What type of story is 'The Tale of the Three Apples'?", options: ["Mystery", "Romance", "Comedy", "Adventure"], correctIndex: 0, difficulty: 'Medium', explanation: "It is one of the first murder mystery stories." },
  { question: "Who wrote down most Arabian Nights stories in English?", options: ["Richard Burton", "Al-Akhtal", "Nikolai Rimsky-Korsakov", "Disney"], correctIndex: 0, difficulty: 'Medium', explanation: "Richard Burton translated many stories." },
  { question: "What does 'The Ebony Horse' symbolize?", options: ["Magic", "Freedom", "Life", "Wealth"], correctIndex: 0, difficulty: 'Medium', explanation: "The ebony horse symbolizes magical travel and freedom." },
  { question: "Which character is associated with voyages and adventure?", options: ["Sinbad", "Ali Baba", "Aladdin", "Shahryar"], correctIndex: 0, difficulty: 'Easy', explanation: "Sinbad goes on seven famous voyages." },
  { question: "What is the common theme in many Arabian Night stories?", options: ["Justice", "Wealth", "Magic", "Love"], correctIndex: 0, difficulty: 'Medium', explanation: "Justice and moral lessons are often themes." },
  { question: "What often happens to unfaithful wives in the stories?", options: ["Death", "Forgiveness", "Exile", "Magic punishment"], correctIndex: 3, difficulty: 'Hard', explanation: "They often receive magical punishments." },
  { question: "What magical pet appears in Aladdin?", options: ["Monkey", "Tiger", "Parrot", "Genie"], correctIndex: 3, difficulty: 'Easy', explanation: "The genie acts as a magical helper." },
  { question: "How does Scheherazade end the king's wrath?", options: ["Stories", "Magic lamp", "Genie", "Sword"], correctIndex: 0, difficulty: 'Easy', explanation: "Her stories change his mind about killing wives." },
  { question: "What is the purpose of the frame story?", options: ["Link tales", "Provide suspense", "Show power", "Teach lesson"], correctIndex: 0, difficulty: 'Medium', explanation: "It links all the stories through Scheherazade's narration." },
  { question: "Which story involves a magical ring?", options: ["Aladdin", "The Fisherman and the Genie", "Prince Mahmud", "The Ebony Horse"], correctIndex: 1, difficulty: 'Medium', explanation: "The fisherman uses a magical ring to trap the genie." },
  { question: "Who is Harun al-Rashid?", options: ["Caliph of Baghdad", "Merchant", "Genie", "Sailor"], correctIndex: 0, difficulty: 'Easy', explanation: "Harun al-Rashid is the famous caliph in many tales." },
  { question: "What is the outcome of Scheherazade's storytelling?", options: ["King spares her", "King kills her", "She escapes", "She marries merchant"], correctIndex: 0, difficulty: 'Easy', explanation: "The king spares her after 1001 nights." },
  { question: "What object is key in many Arabian Nights stories?", options: ["Lamp", "Sword", "Scroll", "Crown"], correctIndex: 0, difficulty: 'Easy', explanation: "The magic lamp is a recurring magical object." },
  { question: "What is the theme of 'Ali Baba and the Forty Thieves'?", options: ["Good versus evil", "Love", "Adventure", "Betrayal"], correctIndex: 0, difficulty: 'Easy', explanation: "It pits Ali Baba against evil thieves." },
  { question: "How does Morgiana trick the thieves?", options: ["Boiling oil", "Sword fight", "Poison", "Magic spell"], correctIndex: 0, difficulty: 'Medium', explanation: "She pours boiling oil on the thieves hiding in jars." },
  { question: "In how many versions does King Shahryar pardon Scheherazade?", options: ["All", "Most", "None", "Some"], correctIndex: 3, difficulty: 'Medium', explanation: "In some versions, the king pardons her permanently." },
  { question: "What makes Scheherazade's stories engaging?", options: ["Suspense", "Magic", "Humor", "Adventure"], correctIndex: 0, difficulty: 'Easy', explanation: "Her stories have cliffhangers that keep the king interested." },
  { question: "Which story includes a love potion or cake?", options: ["The Fisherman and the Genie", "Nur Al-Din Ali and Badr Al-Din Hasan", "Aladdin", "Sinbad"], correctIndex: 1, difficulty: 'Hard', explanation: "A special cake recognizes a lost son in this tale." },
  { question: "What is the role of genies? ", options: ["Grant wishes", "Cause trouble", "Teach lessons", "All of the above"], correctIndex: 3, difficulty: 'Medium', explanation: "Genies sometimes grant wishes or serve as obstacles." }
];

// State
let currentIndex = 0;
let selectedQuestions = [];
let userAnswers = [];
let answeredFlags = [];

const qEl = document.getElementById('question');
const optsWrap = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const difficultyBadge = document.querySelector('.difficulty-badge');
const resultMsg = document.getElementById('resultMsg');

function selectRandomQuestions() {
  const copy = QUESTIONS.slice(); // copy all questions
  selectedQuestions = [];
  for(let i = 0; i < 20 && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    selectedQuestions.push(copy.splice(idx, 1)[0]);
  }
  userAnswers = new Array(selectedQuestions.length).fill(null);
  answeredFlags = new Array(selectedQuestions.length).fill(false);
}


// UI helpers
function showResultMsg(text, show = true, timeout=1800) {
  if(!resultMsg) return;
  resultMsg.textContent = text;
  resultMsg.style.display = show ? 'block' : 'none';
  if(show) setTimeout(() => resultMsg.style.display = 'none', timeout);
}

function updateNavigation() {
  nextBtn.textContent = currentIndex === selectedQuestions.length - 1 ? 'Submit' : 'Next';
}

function renderQuestion(idx) {
  const data = selectedQuestions[idx];
  if(!data) return;

  difficultyBadge.textContent = data.difficulty ? data.difficulty.toUpperCase() : '';

  qEl.classList.remove('smoke-reveal');
  void qEl.offsetWidth;
  qEl.textContent = data.question;
  qEl.classList.add('smoke-reveal');

  optsWrap.innerHTML = '';
  data.options.forEach((text, i) => {
    const opt = document.createElement('div');
    opt.className = 'option fade-in';
    opt.tabIndex = 0;
    opt.dataset.index = i;
    opt.textContent = text;

    if(answeredFlags[idx]) {
      if(i === data.correctIndex) opt.classList.add('correct');
      else if(i === userAnswers[idx]) opt.classList.add('wrong');
      opt.style.pointerEvents = 'none';
    }

    optsWrap.appendChild(opt);
  });

  spawnSmokeAtElement(qEl, {size:140, life:900});
  document.dispatchEvent(new CustomEvent('questionLoaded', {detail: {index: idx, question: data}}));

  updateNavigation();
}

optsWrap.addEventListener('click', (ev) => {
  if(answeredFlags[currentIndex]) return; // disable re-answer

  const opt = ev.target.closest('.option');
  if(!opt) return;
  const chosen = parseInt(opt.dataset.index, 10);
  const correctIndex = selectedQuestions[currentIndex].correctIndex;

  userAnswers[currentIndex] = chosen;
  answeredFlags[currentIndex] = true;

  spawnSmokeAtElement(opt, {size:80, life:700});
  spawnGlyphs(opt, 6);

  if(chosen === correctIndex){
    opt.classList.add('correct');
    explodeConfettiAtClient(ev.clientX, ev.clientY);
    flashOverlay();
    showResultMsg('Correct! ✨');
  } else {
    opt.classList.add('wrong');
    showResultMsg('Wrong — try the next!');
    // Highlight correct option
    Array.from(optsWrap.children).forEach(o => {
      if(parseInt(o.dataset.index, 10) === correctIndex) o.classList.add('correct');
    });
  }

  // Disable all options on answered
  Array.from(optsWrap.children).forEach(o => o.style.pointerEvents = 'none');
});

nextBtn.addEventListener('click', () => {
  if(!answeredFlags[currentIndex]) {
    showResultMsg('Please select an option before continuing!', true, 1500);
    return;
  }
  currentIndex++;
  if(currentIndex >= selectedQuestions.length) {
    showFinalResults();
    return;
  }
  renderQuestion(currentIndex);
});

function showFinalResults() {
  qEl.textContent = 'Quiz Results';
  optsWrap.innerHTML = '';
  difficultyBadge.textContent = '';
  nextBtn.style.display = 'none';

  let score = 0;
  selectedQuestions.forEach((q, i) => {
    const container = document.createElement('div');
    container.className = 'result-container';

    const qText = document.createElement('p');
    qText.textContent = `Q${i+1}: ${q.question}`;
    container.appendChild(qText);

    const yourAnswerIndex = userAnswers[i];
    const correctAnswerIndex = q.correctIndex;

    const yourAns = document.createElement('p');
    yourAns.textContent = `Your answer: ${yourAnswerIndex !== null ? q.options[yourAnswerIndex] : 'No answer'}`;
    yourAns.style.color = yourAnswerIndex === correctAnswerIndex ? 'green' : 'red';
    container.appendChild(yourAns);

    const correctAns = document.createElement('p');
    correctAns.textContent = `Correct answer: ${q.options[correctAnswerIndex]}`;
    container.appendChild(correctAns);

    const explanation = document.createElement('p');
    explanation.textContent = `Explanation: ${q.explanation}`;
    container.appendChild(explanation);

    optsWrap.appendChild(container);

    if(yourAnswerIndex === correctAnswerIndex) score++;
  });

  const scoreText = document.createElement('h2');
  scoreText.textContent = `Your Score: ${score} / ${selectedQuestions.length}`;
  optsWrap.prepend(scoreText);
}

// Start Quiz on load
function startQuiz() {
  currentIndex = 0;
  selectRandomQuestions();
  nextBtn.style.display = 'inline-block';
  renderQuestion(currentIndex);
}
startQuiz();

// Keep your original animation code unchanged (sparkles, confetti, smoke, glyphs, flying lamp and carpet, etc.)



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