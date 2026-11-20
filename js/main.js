(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (!button || !nav) return;
  document.documentElement.classList.add('js');
  button.hidden = false;
  const close = () => button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', () => button.setAttribute('aria-expanded', String(button.getAttribute('aria-expanded') !== 'true')));
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { close(); button.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.header-inner')) close(); });
  document.addEventListener('focusin', event => { if (!event.target.closest('.header-inner')) close(); });
  window.matchMedia('(min-width: 768px)').addEventListener('change', close);
})();
(() => {const dialog=document.querySelector('.image-dialog');if(!dialog || !dialog.showModal)return;let opener;document.querySelectorAll('[data-enlarge]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();opener=link;const source=link.querySelector('img');const image=dialog.querySelector('img');image.src=link.href;image.alt=source.alt;dialog.querySelector('p').textContent=source.alt;dialog.showModal();}));dialog.addEventListener('close',()=>opener?.focus());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});})();
