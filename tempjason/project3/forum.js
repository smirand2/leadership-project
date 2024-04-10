import { getExperiences } from './data.js';

function showExperiences() {
const experiences = getExperiences();
const allPosts = document.querySelector('.all-posts');
experiences.forEach(({ userName, userCountry, userDescription }) => {
    const experiencePost = document.createElement('div');
    experiencePost.classList.add('experience-post');

    const h3 = document.createElement('h3');
    h3.textContent = 'Experience Title';

    const p1 = document.createElement('p');
    p1.classList.add('experience-meta');
    p1.textContent = `Posted by ${userName} on [date]`;

    const p2 = document.createElement('p');
    p2.textContent = userDescription;

    experiencePost.appendChild(h3);
    experiencePost.appendChild(p1);
    experiencePost.appendChild(p2);
    allPosts.appendChild(experiencePost);
});
}

showExperiences();