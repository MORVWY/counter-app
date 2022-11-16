window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
        warningAlert = body.querySelector('.main-alert'),
        counter = body.querySelector('.main-number'),
        increaseButton = body.querySelector('.main-buttons__increase-item img'),
        resetButton = body.querySelector('.main-buttons__reset-item img'),
        decreaseButton = body.querySelector('.main-buttons__decrease-item img');

    let value = 0;

    function warningMessage() {
        warningAlert.classList.add('main-alert__active');
        setTimeout(() => warningAlert.classList.remove('main-alert__active'), 3000);
    }

    function increaseCounter() {
        value += 1;
        counter.innerText = value;

        return value;
    }

    function resetCounter() {
        value = 0;
        counter.innerText = value;

        return value;
    }

    function decreaseCounter() {
        value -= 1;
        counter.innerText = value;

        return value;
    }

    function animationRotateRemove() {
        resetButton.classList.remove('rotate');
    }

    increaseButton.addEventListener('click', () => {
        increaseCounter();
    });

    resetButton.addEventListener('click', () => {
        if (value !== 0) {
            resetButton.classList.add('rotate');
            resetCounter();
        } else {
            warningMessage();
        }
    });

    decreaseButton.addEventListener('click', () => {
        decreaseCounter();
    });

    resetButton.addEventListener("animationend", animationRotateRemove, false);
});