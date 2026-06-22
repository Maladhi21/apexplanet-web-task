let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2800);
}

const helloMessages = [
  "👋 Hello there, future developer!",
  "🙌 Welcome aboard! Ready to learn?",
  "😊 Hey! Glad to see you here.",
  "🚀 Hello! Let's build something cool today."
];
function sayHello(){
  const el = document.getElementById('helloMsg');
  if(!el) return;
  el.textContent = helloMessages[Math.floor(Math.random()*helloMessages.length)];
}

const quotes = [
  ["The best way to predict the future is to invent it.", "Alan Kay"],
  ["Code is like humor. When you have to explain it, it's bad.", "Cory House"],
  ["First, solve the problem. Then, write the code.", "John Johnson"],
  ["Simplicity is the soul of efficiency.", "Austin Freeman"],
  ["Experience is the name everyone gives to their mistakes.", "Oscar Wilde"],
  ["Programs must be written for people to read.", "Harold Abelson"],
  ["Talk is cheap. Show me the code.", "Linus Torvalds"]
];
function newQuote(){
  const textEl = document.getElementById('quoteText');
  const authorEl = document.getElementById('quoteAuthor');
  if(!textEl || !authorEl) return;
  const [text, author] = quotes[Math.floor(Math.random()*quotes.length)];
  textEl.textContent = '"' + text + '"';
  authorEl.textContent = '– ' + author;
}

function toggleTips(){
  const box = document.getElementById('tipsBox');
  if(box) box.classList.toggle('show');
}

function toggleMode(){
  const sw = document.getElementById('modeSwitch');
  const label = document.getElementById('modeLabel');
  const isDark = sw.classList.contains('on');
  if(isDark){
    sw.classList.remove('on');
    label.textContent = 'Light Mode';
    document.body.classList.add('light-mode');
  } else {
    sw.classList.add('on');
    label.textContent = 'Dark Mode';
    document.body.classList.remove('light-mode');
  }
}

function handleContactSubmit(e){
  e.preventDefault();
  showToast('✅ Message sent! We will get back to you soon.');
  e.target.reset();
}
