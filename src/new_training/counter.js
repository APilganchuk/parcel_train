const refs = {
    counter: document.querySelector('[data-value]'),
    increment: document.querySelector('[data-increment]'),
    decrement: document.querySelector('[data-decrement]'),
};

refs.increment.addEventListener('click', () => {
    refs.counter.textContent = onIncrement();
});
refs.decrement.addEventListener('click', () => {
    refs.counter.textContent = onDecrement();
});

function onDecrement() {
    return (counter = Number(refs.counter.textContent) + 1);
}

function onIncrement() {
    return (counter = Number(refs.counter.textContent) - 1);
}
