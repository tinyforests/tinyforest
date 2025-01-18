// Dynamic Tree Counter Effect
let treeCount = 12345;
let co2Count = 50000;
const treeElement = document.getElementById('tree-count');
const co2Element = document.getElementById('co2-count');

function animateCounter(element, start, end, duration) {
    let range = end - start;
    let increment = range / (duration / 10);
    let current = start;
    let timer = setInterval(() => {
        current += increment;
        element.textContent = Math.round(current);
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        }
    }, 10);
}

animateCounter(treeElement, 12000, treeCount, 2000);
animateCounter(co2Element, 48000, co2Count, 2000);

// Shop Button Click Effect
document.querySelectorAll('.forest-kit button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Customization feature coming soon!');
    });
});

// Placeholder for Impact Map (to integrate later)
document.getElementById('map').textContent = "Interactive map coming soon!";
