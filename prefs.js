
(function(){
  const KEY = 'hes_prefs';
  const defaults = { theme:'system', fontScale:100, contrast:false, reduceMotion:false, name:'', preferredOffice:'' };
  const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
  const prefs = Object.assign({}, defaults, saved);

  function apply(p){
    if(p.theme==='dark') document.documentElement.dataset.theme = 'dark';
    else if(p.theme==='light') document.documentElement.dataset.theme = '';
    else {
      document.documentElement.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : '';
    }
    document.documentElement.style.fontSize = (p.fontScale||100) + '%';
    document.documentElement.dataset.contrast = p.contrast ? 'high' : '';
    if(p.reduceMotion) document.documentElement.dataset.reduceMotion = '1'; else document.documentElement.removeAttribute('data-reduce-motion');

    document.querySelectorAll('[data-user-name]').forEach(el => el.textContent = p.name || 'there');
    document.querySelectorAll('[data-user-office]').forEach(el => el.textContent = p.preferredOffice || 'your nearest office');

    const sel = document.getElementById('officeSelect');
    if(sel && p.preferredOffice){
      Array.from(sel.options).forEach(o => { if(o.value===p.preferredOffice) sel.value = o.value; });
    }
  }
  apply(prefs);
  function save(){ localStorage.setItem(KEY, JSON.stringify(prefs)); }

  const panel = document.getElementById('prefs');
  const trigger = document.getElementById('prefs-trigger');
  if(trigger){ trigger.addEventListener('click', ()=> panel.classList.toggle('open')); }

  function bind(id, prop, transform){
    const el = document.getElementById(id);
    if(!el) return;
    const handler = ()=>{ prefs[prop] = transform ? transform(el) : (el.type==='checkbox' ? el.checked : el.value); save(); apply(prefs); };
    el.addEventListener('input', handler);
    el.addEventListener('change', handler);
  }
  bind('p-theme','theme');
  bind('p-font','fontScale', el => +el.value);
  bind('p-contrast','contrast');
  bind('p-motion','reduceMotion');
  bind('p-name','name', el => el.value.trim());
  bind('p-office','preferredOffice');

  function initControls(){
    const t = document.getElementById('p-theme'); if(t) t.value = prefs.theme;
    const f = document.getElementById('p-font'); if(f) f.value = prefs.fontScale;
    const c = document.getElementById('p-contrast'); if(c) c.checked = prefs.contrast;
    const m = document.getElementById('p-motion'); if(m) m.checked = prefs.reduceMotion;
    const n = document.getElementById('p-name'); if(n) n.value = prefs.name;
    const o = document.getElementById('p-office'); if(o) o.value = prefs.preferredOffice;
  }
  document.addEventListener('DOMContentLoaded', initControls);
})();
