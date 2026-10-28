//skeleton
setTimeout(()=>{
  document.querySelectorAll('.skeleton').forEach(el=> el.style.display='none');
  document.querySelectorAll('.hidden').forEach(el=> el.style.display='block');
},3000);



function checkScroll(){
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    if(scrollPosition>20){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
    let newSize = 3 - (scrollPosition *0.03);
    newSize = Math.max(1.5,newSize);
    newSize = Math.min(3,newSize);

    logo.style.fontSize = newSize + 'rem';
}

window.addEventListener('scroll',checkScroll);

const themeSwitcher = document.getElementById('theme-switcher');

function updateThemeIcon(isDarkMode){
    themeSwitcher.children[0].classList.replace(isDarkMode ? 'fa-sun': 'fa-moon', isDarkMode?'fa-moon':'fa-sun');
}
function prefersDarkMode(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
}
function setThemeBasedOnPreference(){
    const isDarkMode = prefersDarkMode();
    document.documentElement.setAttribute('data-theme', isDarkMode?'dark':'light');
    updateThemeIcon(isDarkMode);
}
function switchTheme(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
     document.documentElement.setAttribute('data-theme',newTheme);
     localStorage.setItem('theme',newTheme);
     updateThemeIcon(newTheme === 'dark');
    
}

themeSwitcher.addEventListener('click',switchTheme);
function initializeTheme(){
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        document.documentElement.setAttribute('data-theme',savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    }else{
        setThemeBasedOnPreference();
    }
}

window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',setThemeBasedOnPreference);
initializeTheme();