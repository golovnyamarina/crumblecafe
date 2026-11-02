export function loadMenu(){
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');
    menuDiv.classList.add('fade-in-tab');

    const headline = document.createElement('h1');
    headline.textContent = 'Наше меню';
    menuDiv.appendChild(headline);

    const items = [
        {
            name: 'Яблочный пирог',
            price: '350 p.',
            decs: 'Традиционный пирог с яблоком и корицей'
        },
        {
            name: 'Яблочный пирог',
            price: '350 p.',
            decs: 'Традиционный пирог с яблоком и корицей'
        },
        {
            name: 'Яблочный пирог',
            price: '350 p.',
            decs: 'Традиционный пирог с яблоком и корицей'
        },
    ];
    items.forEach((item) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item');

        const title = document.createElement('h3');
        title.textContent = `${item.name} - ${item.price}`;
        const description = document.createElement('p');
        description.textContent = item.decs;

        itemCard.appendChild(title);
        itemCard.appendChild(description);
        menuDiv.appendChild(itemCard);
    });
    content.appendChild(menuDiv);
}