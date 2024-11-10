const scrollButton = document.getElementById('scroll-button');
const $scrollStart = document.querySelector('#scroll-container');

function scrollToBottom(element, duration) {
    const start = element.scrollTop; 
    const end = element.scrollHeight - element.clientHeight; 
    const distance = end - start; 
    let startTime = null; 

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime; 
        const timeElapsed = currentTime - startTime; 
        const progress = Math.min(timeElapsed / duration, 1); 

        const ease = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;

        element.scrollTop = start + distance * ease;

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

scrollButton.addEventListener('click', () => {
    scrollToBottom($scrollStart, 35000); 
});