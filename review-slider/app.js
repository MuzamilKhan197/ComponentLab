// Local Review Data Array
const reviews = [
  {
    id: 1,
    name: 'Daniel Carter',
    job: 'Senior UI/UX Designer',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    text: 'The interface design is beautifully structured and incredibly intuitive. Every interaction feels smooth, modern, and carefully crafted for the best user experience.',
  },

  {
    id: 2,
    name: 'Sophia Williams',
    job: 'Creative Product Designer',
    img: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg',
    text: 'This platform has completely transformed the way I build layouts. The responsive structure and clean visual hierarchy make development faster and far more enjoyable.',
  },
  
  {
    id: 3,
    name: 'Michael Brown',
    job: 'Software Engineer',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: 'This review slider demonstrates how clean JavaScript logic and elegant UI styling can combine to create highly interactive and professional user experiences.',
  } ,
  
  {
      id: 4,
      
      name: 'Emily Watson',
      job: 'Front-End Developer',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'The overall performance and responsiveness are outstanding. Every component feels polished, lightweight, and perfectly optimized for modern web applications.',
    },

    {
      id: 5,
      name: 'Ethan Walker',
      job: 'Front-End Intern',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'As someone new to web development, this project helped me understand DOM manipulation and event handling in a very practical and beginner-friendly way.',
    }

];

// Select Items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Starting Item
let currentItem = 0;

// Load Initial Review
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

// Show Person Function
function showPerson(person) {

  const item = reviews[person];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Next Button
nextBtn.addEventListener('click', () => {

  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});

// Previous Button
prevBtn.addEventListener('click', () => {

  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});