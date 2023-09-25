const testimonials = [
    {
        "id": 1,
        "username": "@Selena",
        "text": "I was impressed with the speed and quality of work delivered by this web developer. He was able to bring my ideas to life and create an app that exceeded my expectations.",
        "job": "software developer",
        "profile": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        "id": 2,
        "username": "@john",
        "text": "Working with him was an outstanding experience from start to finish. He was able to take my vision and turn it into a beautiful, functional website that I am proud to share with the world.",
        "job": "Engineer",
        "profile": "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
        "id": 3,
        "username": "@Hardin",
        "text": "This developer listened to my needs and was able to turn my vision into a reality. The end result was a stunning website that was not only visually appealing but also highly functional.",
        "job": "Software Tester",
        "profile": "https://randomuser.me/api/portraits/men/4.jpg"
    }
]

const username = document.getElementById("name");
const job = document.getElementById("job");
const image = document.getElementById("image");
const text = document.getElementById("text");

// Toggle buttons:
const prev = document.getElementById("toggle_prev");
const next = document.getElementById("toggle_next");

let iterator = 0;

window.addEventListener("DOMContentLoaded", function () {
    showItem(iterator);
})

function showItem(iter) {
    const item = testimonials[iter];
    username.innerHTML = item.username;
    text.innerHTML = item.text;
    image.src = item.profile;
    job.innerHTML = item.job;
}


prev.addEventListener("click", function () {
    iterator--;
    if (iterator < 0) {
        iterator = testimonials.length - 1;
    }
    showItem(iterator);
})

next.addEventListener("click", function () {
    iterator++;
    if (iterator >= testimonials.length) {
        iterator = 0;
    }
    showItem(iterator);
})