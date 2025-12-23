const btn = document.getElementById('theme-btn');
const body = document.body;

// Check saved theme
if(localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark');
    btn.innerHTML = '<i class="fas fa-sun"></i>';
}

btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    let mode = 'light';
    
    if(body.classList.contains('dark')) {
        mode = 'dark';
        btn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('mode', mode);
});