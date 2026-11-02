import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const tabContent = document.createElement('div');
tabContent.id = 'tab-content';

function createNav(){
    const content = document.getElementById('content');
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Главная';
    homeBtn.onclick = (e) => clearAndLoad(loadHome, e.target); 

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Меню';
    menuBtn.onclick = (e) => clearAndLoad(loadMenu, e.target);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Контакты';
    contactBtn.onclick = (e) => clearAndLoad(loadContact, e.target);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    content.appendChild(nav);
    content.appendChild(tabContent);
    homeBtn.classList.add('active');
}

function clearAndLoad(loadFunction, clickedButton){
    const content = document.getElementById('content');
    const children = Array.from(content.children);
    children.forEach(child => {
        if (child.tagName !== 'NAV') {
            child.remove();
        }
    });

  
    loadFunction();

    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    createNav();
    
    const firstBtn = document.querySelector('nav button');
    clearAndLoad(loadHome, firstBtn);
});
