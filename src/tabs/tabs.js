const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('[data-panes]'),
};

refs.controls.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'A') {
        return;
    }
    const currentActiveControlItem = refs.controls.querySelector(
        '.controls__item--active',
    );

    if (currentActiveControlItem) {
        currentActiveControlItem.classList.remove('controls__item--active');

        const paneId = getPainId(currentActiveControlItem);
        const pane = getPainById(paneId)
        
        pane.classList.remove('pane--active');
    }
    const controlItem = e.target;
    controlItem.classList.add('controls__item--active');

    const paneId = controlItem.getAttribute('href').slice(1);
    const pane = getPainById(paneId)
    
    pane.classList.add('pane--active');
});

function getPainId(currentControlItem) {
    return currentControlItem.getAttribute('href').slice(1);
}
function getPainById(id) {
    return refs.panes.querySelector(`#${id}`);
}
