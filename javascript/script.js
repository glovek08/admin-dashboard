const root = document.documentElement;
const headerLogo = document.querySelector('#header-logo');
const themeCheckbox = document.querySelector('#theme-checkbox');
const themeCheckboxLabel = document.querySelector('#theme-checkbox-label');
const sidebarButtons = document.querySelectorAll(".sidebar-button");
const sidebarSpans = document.querySelectorAll('.sidebar-span');
const userDropdownMenuCheckbox = document.querySelector('#user-dropdown-menu-checkbox');
const closeUserDropDownMenuButton = document.querySelector('#close-user-dropdown-menu-button');

checkScroll(); //Applies a bottom borded to each project item's text box if the text content is overflowing Y.

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

//********************************** EVENT LISTENER REALM ************************************/

themeCheckbox.addEventListener('click', changeTheme);
window.addEventListener('resize', checkScroll);
userDropdownMenuCheckbox.addEventListener('click', toggleUserDropdownMenu);
closeUserDropDownMenuButton.addEventListener('click', closeUserDropDownMenu);


//*********************************** EVENT FUNCTIONS ****************************************/

sidebarSpans.forEach(spanEl => {
    spanEl.addEventListener('click', (event) => {
        sidebarButtons.forEach(button => button.classList.remove('dashboard-active'));
        event.target.parentElement.classList.add('dashboard-active');
    });
});

sidebarButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        sidebarButtons.forEach(button => button.classList.remove('dashboard-active'));
        event.currentTarget.classList.add('dashboard-active');
    });
});

function checkScroll() {
    const projectTextBox = document.querySelectorAll('.project-text');
    projectTextBox.forEach(element => {
        if (element.scrollHeight > element.clientHeight) {
            element.classList.add('scrollable');
        } else {
            element.classList.remove('scrollable');
        }
    })
};

const dropdownLabel = document.querySelector('#user-dropdown-menu-span');
function toggleUserDropdownMenu () {
    if (userDropdownMenuCheckbox.checked) {
        dropdownLabel.innerHTML = 'arrow_drop_up';
        console.log('log Up')
    } else if (!userDropdownMenuCheckbox.checked) {
        dropdownLabel.innerHTML = 'arrow_drop_down';
        console.log('log down')
    }
} 

function closeUserDropDownMenu () {
    dropdownLabel.innerHTML = 'arrow_drop_down';
    userDropdownMenuCheckbox.checked = false;
}



