const btn = document.getElementById('theme-btn');


btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        btn.innerText = 'Dark mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        btn.innerText = 'Light mode';
    }
});


function updateClock() {
    const now = new Date();
    
    
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();

    const sDeg = (s / 60) * 360;
    const mDeg = (m / 60) * 360 + (s / 60) * 6;
    const hDeg = (h / 12) * 360 + (m / 60) * 30;

    document.getElementById('sec-h').style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
    document.getElementById('min-h').style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
    document.getElementById('hour-h').style.transform = `translateX(-50%) rotate(${hDeg}deg)`;

  
    let hh = h % 12 || 12;
    let mm = m < 10 ? '0' + m : m;
    let ampm = h >= 12 ? 'PM' : 'AM';
    document.getElementById('txt-time').innerText = `${hh}:${mm} ${ampm}`;

    const options = { weekday: 'long', month: 'short' };
    let dateString = now.toLocaleDateString('es-ES', options).toUpperCase();
    document.getElementById('txt-date').innerText = dateString;
    document.getElementById('txt-day').innerText = now.getDate();
}

setInterval(updateClock, 1000);

