export function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-container');
    contactDiv.classList.add('fade-in-tab');

    const headline = document.createElement('h1');
    headline.textContent = 'Контакты';
    contactDiv.appendChild(headline);

    const infoList = document.createElement('ul');
    infoList.classList.add('contact-info');

    const address = document.createElement('li');
    address.innerHTML = 'Адрес: ул. Кофейная, д. 42';
    
    const phone = document.createElement('li');
    phone.innerHTML = 'Телефон: +7 (999) 123-45-67';

    const hours = document.createElement('li');
    hours.innerHTML = 'Часы работы: Ежедневно с 09:00 до 22:00';

    const social = document.createElement('li');
    social.innerHTML = 'Мы в соцсетях: @crumblecafe';

    infoList.appendChild(address);
    infoList.appendChild(phone);
    infoList.appendChild(hours);
    infoList.appendChild(social);

    contactDiv.appendChild(infoList);
    content.appendChild(contactDiv);
}
