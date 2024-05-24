const root = document.documentElement;
const headerLogo = document.querySelector('#header-logo');
const themeCheckbox = document.querySelector('#theme-checkbox');
const themeCheckboxLabel = document.querySelector('#theme-checkbox-label');
const sidebarButtons = document.querySelectorAll(".sidebar-button");

if (localStorage.getItem('theme') === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
    headerLogo.src = 'assets/odin-lined-black.png';
    themeCheckbox.checked = true;
} else {
    root.classList.remove('light');
    root.classList.add('dark');
    headerLogo.src = 'assets/odin-lined-white.png';
    themeCheckbox.checked = false;
};

const changeTheme = () => {
    if (themeCheckbox.checked) {
        root.classList.remove('dark');
        root.classList.add('light');
        localStorage.setItem('theme', 'light');
        headerLogo.src = 'assets/odin-lined-black.png';
    } else {
        root.classList.remove('light');
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        headerLogo.src = 'assets/odin-lined-white.png';
    }
}

themeCheckbox.addEventListener('click', changeTheme);
sidebarButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        sidebarButtons.forEach(button => button.classList.remove('dashboard-active'));
        event.target.classList.add('dashboard-active');
    });
});

