const root = document.documentElement;
const headerLogo = document.querySelector('#header-logo');
const themeCheckbox = document.querySelector('#theme-checkbox');
const themeCheckboxLabel = document.querySelector('#theme-checkbox-label');
const sidebarButtons = document.querySelectorAll(".sidebar-button");
const sidebarSpans = document.querySelectorAll('.sidebar-span');
const userDropdownMenuCheckbox = document.querySelector('#user-dropdown-menu-checkbox');
const userDropdownMenu = document.querySelector('#user-dropdown-menu');
const userDropdownMenuLabel = document.querySelector('#user-dropdown-menu-label');
const closeUserDropDownMenuButton = document.querySelector('#close-user-dropdown-menu-button');
const dropdownSpanMaterial = document.querySelector('#user-dropdown-menu-span');
const HEADER_HEIGHT = document.getElementsByTagName('header')[0].clientHeight;

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

document.addEventListener('click', (event) => {
    const isClickInside = userDropdownMenu.contains(event.target) || event.target.id === 'user-dropdown-menu-checkbox' || event.target.id === 'user-dropdown-menu-span';
    if (!isClickInside) {
        userDropdownMenuCheckbox.checked = false;
        toggleUserDropdownMenu();
    }
});

//********************************** EVENT LISTENER REALM ************************************/

themeCheckbox.addEventListener('click', changeTheme);
window.addEventListener('resize', checkScroll);
userDropdownMenuCheckbox.addEventListener('click', toggleUserDropdownMenu);
closeUserDropDownMenuButton.addEventListener('click', closeUserDropdownMenu);
// userDropdownMenuLabel.addEventListener('click', toggleUserDropdownMenu);


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


function toggleUserDropdownMenu () {
    if (userDropdownMenuCheckbox.checked) {
        dropdownSpanMaterial.innerHTML = 'arrow_drop_up';
        toggleDropdownMenuVisibility(true);
        console.log('log down');
        return;
    } else if (!userDropdownMenuCheckbox.checked) {
        dropdownSpanMaterial.innerHTML = 'arrow_drop_down';
        toggleDropdownMenuVisibility(false);
        console.log('log up');
        return;
    }
    //it's getting called twice, use outlines to check what elements are u pressing.
} 

function closeUserDropdownMenu () {
    dropdownSpanMaterial.innerHTML = 'arrow_drop_down';
    userDropdownMenuCheckbox.checked = false;
    toggleDropdownMenuVisibility(false);
}

function toggleDropdownMenuVisibility (toggle) {
    if (toggle) {
        userDropdownMenu.style.transform = `translateY(${HEADER_HEIGHT-1}px)`;
    } else if (!toggle) {
        userDropdownMenu.style.transform = `translateY(-300px)`;
    }
}



