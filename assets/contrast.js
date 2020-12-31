const rootEl = document.querySelector('[data-wrapper]')
const contrastAct = document.querySelector('[data-icon-contrast]')
contrastAct.addEventListener('click', () => rootEl.classList.toggle('-light'))
