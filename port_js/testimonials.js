const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = testimonialsContainer.querySelector('.testimonial');
const logo = testimonialsContainer.querySelector('.logoa');
const username = testimonialsContainer.querySelector('.username');
const role = testimonialsContainer.querySelector('.role');

const testimonials = [
   
    {
        "name": "Upwork Client",
        "position": "",
        "photo": "https://www.dexbytes.com/images/upwork.png",
    "text": "Amazing job, very fluid communication during the whole project. He is really into the job from start to finish, I will work with them again."
    },
    {
        "name": "Upwork Client",
        "position": "",
        "photo": "https://www.dexbytes.com/images/upwork.png",
    "text": "\"Work was done quickly and to spec. Very impressed with quality and speed.\""
    },
    {
        "name": "Upwork Client",
        "position": "",
        "photo": "https://www.dexbytes.com/images/upwork.png",
    "text": "\"Dinesh and his expert team of app developers did an amazing job with our flutter app. Highly recommended.\""
    },
    {
        "name": "Upwork Client",
        "position": "",
        "photo": "https://www.dexbytes.com/images/upwork.png",
    "text": "\"Very good development team and thorough! Will work with them again.\""
    },
    {
        "name": "Upwork Client",
        "position": "",
        "photo": "https://www.dexbytes.com/images/upwork.png",
    "text": "\"Very talented organization with extremely competent professionals. They always made themselves available, made changes that we felt were necessary without additional costs. 10/10 would recommend.\""
    },
    {
        "name": "Upwork Client",
        "position": "",
        "photo": "https://www.dexbytes.com/images/upwork.png",
    "text": "\"Excellent experience working with Dinesh. Started off as a single project and then added two more milestones given his speed and quality of deliverables and also his co-operation and understanding of my deadlines and working towards that. Will be working with Dinesh with additional projects as well.\""
    }
];
let idx = 1;


function updateTestimonial() {
  let { name, position, photo, text } = testimonials[idx];
  
  testimonial.innerHTML = text;
  logo.src  = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  
  idx++;
  if(idx > testimonials.length -1 ) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);