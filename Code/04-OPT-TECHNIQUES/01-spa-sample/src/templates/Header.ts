import '@styles/header.css'
import { MenuList } from '@data/MenuList';
import profile from '@images/people.png';

export const Header = () => {
    const view = `
        <header class="Header-main">
            <div class="header-content">
                <img src=${profile} alt="Luismonz">
                <div class="header-content__options">
                    ${MenuList.map(menuElement => `
                        <div class="content__menu">
                            <a href="${menuElement.menuRoute}">
                                <h2>${menuElement.menuName}</h2>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </header>
    `;

    return view;
}