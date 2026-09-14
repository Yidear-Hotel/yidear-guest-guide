(function(){
  const languageNames={zh:'繁體中文',en:'English',ja:'日本語',ko:'한국어',vi:'Tiếng Việt'};

  if(typeof detectLang==='function'){
    const originalDetectLang=detectLang;
    detectLang=function(){
      let saved=null;
      try{saved=localStorage.getItem('yidear_lang');}catch(e){}
      if(saved && T[saved]) return saved;
      const browserLang=(navigator.language||'').toLowerCase();
      if(browserLang.startsWith('vi') && T.vi) return 'vi';
      return originalDetectLang();
    };
  }

  function enhanceLanguageUI(){
    const select=document.getElementById('langSelect');
    const wrap=document.querySelector('.lang-wrap');
    const hero=document.querySelector('#view-home .hero');
    if(!select || !wrap || !hero) return false;

    if(!select.querySelector('option[value="vi"]')){
      select.insertAdjacentHTML('beforeend','<option value="vi">Tiếng Việt</option>');
    }

    if(!wrap.querySelector('.lang-globe')){
      wrap.insertAdjacentHTML('afterbegin',`<span class="lang-globe" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12s1.2 6.5 3.5 9"></path></svg></span>`);
    }

    wrap.querySelectorAll('.lang-copy').forEach(el=>el.remove());

    if(!hero.querySelector('.home-language')){
      const buttons=Object.entries(languageNames).map(([code,label])=>`<button type="button" data-set-lang="${code}" aria-pressed="false">${label}</button>`).join('');
      hero.insertAdjacentHTML('beforeend',`<div class="home-language" aria-label="Language"><span class="home-language-title">Language</span>${buttons}</div>`);
      hero.querySelectorAll('[data-set-lang]').forEach(btn=>{
        btn.addEventListener('click',()=>{
          select.value=btn.dataset.setLang;
          select.dispatchEvent(new Event('change',{bubbles:true}));
          syncLanguageUI();
        });
      });
    }

    if(!select.dataset.languageUiBound){
      select.addEventListener('change',syncLanguageUI);
      select.dataset.languageUiBound='1';
    }
    syncLanguageUI();
    return true;
  }

  function syncLanguageUI(){
    const select=document.getElementById('langSelect');
    if(!select) return;
    const current=select.value || 'zh';
    document.querySelectorAll('[data-set-lang]').forEach(btn=>{
      const active=btn.dataset.setLang===current;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }

  if(!enhanceLanguageUI()){
    const app=document.getElementById('app');
    if(!app) return;
    const observer=new MutationObserver(()=>{
      if(enhanceLanguageUI()) observer.disconnect();
    });
    observer.observe(app,{childList:true,subtree:true});
  }
})();
