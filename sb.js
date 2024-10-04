

const nav = document.querySelector(".nav");
const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
  else nav.classList.remove("active");
};
window.addEventListener("scroll", fixNav);

const ebooks = [
  { title: "12 Months to $1 Million", href: "s5.html" },
  { title: "100 Years of the Best American Short Stories", href: "s6.html" },
  { title: "365 Bedtime Stories", href: "s3.html" },
  { title: "Adolf Hitler Summary Biography", href: "s30.html" },
  { title: "Do You Wonder Why Bugs are Good", href: "s2.html" },
  { title: "Give and Take", href: "s7.html" },
  { title: "Grandma's Bag of Stories", href: "s29.html" },
  { title: "Harry Potter and the Chamber of Secret", href: "s17.html" },
  { title: "Harry Potter and the Deathly Hallows", href: "s14.html" },
  { title: "Harry Potter and the Goblet of Fire", href: "s15.html" },
  { title: "Harry Potter and the Half Blood Prince", href: "s16.html" },
  { title: "Harry Potter and the Order of the Phoenix", href: "s19.html" },
  { title: "Harry Potter and the Sorcerer's Stone", href: "s18.html" },
  { title: "Harry Potter German", href: "s13.html" },
  { title: "Harry Potter the Complete Series", href: "s12.html" },
  { title: "Ikiagi The Japanese Secret to a Long and Happy Life", href: "s20.html" },
  { title: "Jessica the Rabbit", href: "s1.html" },
  { title: "Kingdom of Ash", href: "s21.html" },
  { title: "Mother Theresa a Biography", href: "s22.html" },
  { title: "Mystery of the Blue Train", href: "s4.html" },
  { title: "Napoleon a Biography", href: "s23.html" },
  { title: "Queen of Shadows", href: "s24.html" },
  { title: "Rich Dad Poor Dad", href: "s9.html" },
  { title: "Short Stories From 100 Selected Stories, by O Henry", href: "s8.html" },
  { title: "Speak to Win", href: "s10.html" },
  { title: "Subtle is The Lord Albert Einstein", href: "s25.html" },
  { title: "The Adventure of Tom Sawyer", href: "s31.html" },
  { title: "The Alchemist", href: "s26.html" },
  { title: "The Murder of Roger Ackroyd", href: "s11.html" },
  { title: "To Kill a Mocking Bird", href: "s27.html" },
  { title: "Wings of Fire", href: "s28.html" },
];

// Search function
function searchEbooks(searchQuery) {
  return ebooks.filter((ebook) => {
    return ebook.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
}

// Render eBook list
function renderEbookList(ebooks) {
  const ebookListContainer = document.getElementById("ebook-list");
  ebookListContainer.innerHTML = "";
  ebooks.forEach((ebook) => {
    const ebookItem = document.createElement("li");
    ebookItem.innerHTML = `<a href="${ebook.href}">${ebook.title}</a>`;
    ebookListContainer.appendChild(ebookItem);
  });
}

// Initialize eBook list
renderEbookList(ebooks);

// Search input event listener
document.getElementById("search-input").addEventListener("input", (e) => {
  const searchQuery = e.target.value;
  const searchedEbooks = searchEbooks(searchQuery);
  renderEbookList(searchedEbooks);
});

// New script for comment system
const commentForm = document.querySelector('.comment-form');
const commentList = document.querySelector('.comment-list');
commentForm.addEventListener('submit', (e) => {
  alert('Comment Added!');
  e.preventDefault();
  const commentText = document.querySelector('#comment-text').value;
  const commentHTML = `<p>${commentText}</p>`;
  commentList.insertAdjacentHTML('beforeend', commentHTML);
  document.querySelector('#comment-text').value = '';
});



$(window).load(function(){
  setTimeout(function(){
    $('#loginModal').modal('show');
  }, 3000); 
});


// Auto-sliding photo frame

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Auto-slide
setInterval(function() {
  plusSlides(1);
}, 3000);

// Show popup on page load
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("confetti-container").style.display = "block";
    setTimeout(function() {
      document.getElementById("confetti-container").style.display = "none";
    }, 3000); // 3-second delay
  }, 2000); // 2-second delay
});

// Close popup
document.getElementById("close-popup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("confetti-container").style.display = "none";
});

// Optional: Show popup on scroll
window.onscroll = function() {
  if (window.scrollY > 500) { // Adjust scroll position
    document.getElementById("popup").style.display = "block";
    document.getElementById("confetti-container").style.display = "block";
  }
}

// Optional: Show popup on click
document.getElementById("show-popup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("confetti-container").style.display = "block";
});

// Optional: Hide popup after X seconds
setTimeout(function() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("confetti-container").style.display = "none";
}, 10000); // 10-second delay


// Show the button when scrolling down
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
             }
                            
