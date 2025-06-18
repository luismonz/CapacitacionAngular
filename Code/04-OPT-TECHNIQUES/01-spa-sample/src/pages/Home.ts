import '@styles/Home.css';
import html from '@images/html.png';
import js from '@images/js.png';
import css from '@images/css.png';
import git from '@images/git.png';
import angular from '@images/angular.png';
import person from '@images/people.png';

const abilities = [
    {
        id: 1,
        title: 'Front-end Developer',
        description: 'HTML, CSS and JS. Capable of using React, Angular'
    },
    {
        id: 2,
        title: 'UX/UI Designer',
        description: 'Using figma for components, layouts and UI design systems'
    },
    {
        id: 3,
        title: 'Data Scientist Developer',
        description: 'Using many libraries related to machine learning and A.I.'
    }
]

export const Home = () => {

    const view = `
        <div class="Home">
            <div class="home-main">
                <div class="intro-luismonz">
                    <h1> I'm YYYXXX </h1>
                    <p>A self-taught learner in web development, maths and physics.</p>
                    <div class="button"><a href="/" class="home-hireme">Hire me!</a></div>
                </div>
                <div class="technologies-icons">
                    <img src="${html}" alt="html">
                    <div class="tech-mid">
                        <img src="${js}" alt="javascript">
                        <img src="${css}" alt="css">
                    </div>
                    <div class="tech-down">
                        <img src="${git}" alt="github">
                        <img src="${angular}" alt="angular">
                    </div>
                </div>
                <div class="person-icon">
                    <img src="${person}" alt="person">
                </div>
            </div>
            <div class="cards-main">
                ${abilities.map(e => `
                    <div class="card-content">
                        <div class="card-title">
                            <h1>${e.title}</h1>
                        </div>
                        <div class="card-description">
                            <p>${e.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    return view;

}