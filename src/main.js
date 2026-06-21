// Menu Database
import gallery1Img from './assets/gallery_1.png'
import gallery2Img from './assets/gallery_2.png'
import gallery3Img from './assets/gallery_3.png'
import burgerImg from './assets/burger.png'
import comboImg from './assets/combo_platter.png'
import momosImg from './assets/momos.png'
import manchurianImg from './assets/manchurian.png'
import mojitoImg from './assets/mojito.png'
import heroBgImg from './assets/hero_bg.png'
import aboutImg from './assets/about_ambience.png'
const menuItems = [
  // 1. Tea & Coffee (beverages)
  {
    id: 1,
    category: 'beverages',
    name: 'सादा चाय (Plain Tea)',
    description: 'Refreshing hot classical Indian tea, brewed with fresh milk.',
    price: 10,
    image: gallery1Img,
    isSpecial: false
  },
  {
    id: 2,
    category: 'beverages',
    name: 'इलायची चाय (Cardamom Tea)',
    description: 'Aromatic milk tea infused with freshly crushed green cardamoms.',
    price: 15,
    image: gallery1Img,
    isSpecial: true
  },
  {
    id: 3,
    category: 'beverages',
    name: 'मसाला चाय (Masala Tea)',
    description: 'Warm milk tea brewed with a special blend of traditional spices.',
    price: 15,
    image: gallery1Img,
    isSpecial: false
  },
  {
    id: 4,
    category: 'beverages',
    name: 'कॉफ़ी (Coffee)',
    description: 'Rich and creamy hot coffee with whipped froth.',
    price: 30,
    image: gallery1Img,
    isSpecial: true
  },

  // 2. Chowmein & Noodles (chinese)
  {
    id: 5,
    category: 'chinese',
    name: 'वेज चाउमीन (Veg Chowmein)',
    description: 'Stir-fried noodles with fresh cabbage, carrots, bell peppers, and soy-garlic sauce. (Half / Full)',
    price: "40 / 70",
    image: comboImg,
    isSpecial: false
  },
  {
    id: 6,
    category: 'chinese',
    name: 'पनीर चाउमीन (Paneer Chowmein)',
    description: 'Stir-fried noodles loaded with fresh paneer cubes and Chinese sauces. (Half / Full)',
    price: "50 / 90",
    image: comboImg,
    isSpecial: true
  },
  {
    id: 7,
    category: 'chinese',
    name: 'मशरुम चाउमीन (Mushroom Chowmein)',
    description: 'Delectable wok-tossed noodles cooked with button mushrooms and spices. (Half / Full)',
    price: "50 / 90",
    image: comboImg,
    isSpecial: false
  },
  {
    id: 8,
    category: 'chinese',
    name: 'पनीर मशरुम चाउमीन (Paneer Mushroom Chowmein)',
    description: 'Special combination of soft paneer, mushrooms, and wok-tossed hakka noodles. (Half / Full)',
    price: "70 / 100",
    image: comboImg,
    isSpecial: true
  },
  {
    id: 9,
    category: 'chinese',
    name: 'हक्का नुडल्स (Hakka Noodles)',
    description: 'Classic wok-tossed street style hakka noodles with mixed veggies. (Half / Full)',
    price: "40 / 70",
    image: comboImg,
    isSpecial: false
  },

  // 3. Burger & Sandwich (fast-food)
  {
    id: 10,
    category: 'fast-food',
    name: 'वेज बर्गर (Veg Burger)',
    description: 'Crispy veg patty in toasted buns with fresh lettuce, onions, and burger cream.',
    price: 30,
    image: burgerImg,
    isSpecial: false
  },
  {
    id: 11,
    category: 'fast-food',
    name: 'पनीर बर्गर (Paneer Burger)',
    description: 'Toasted buns layered with a spiced paneer slab, fresh veggies, and rich mayo.',
    price: 45,
    image: burgerImg,
    isSpecial: true
  },
  {
    id: 12,
    category: 'fast-food',
    name: 'चीज़ बर्गर (Cheese Burger)',
    description: 'Gourmet burger with a melted cheddar cheese slice over a crispy vegetable patty.',
    price: 40,
    image: burgerImg,
    isSpecial: false
  },
  {
    id: 13,
    category: 'fast-food',
    name: 'पनीर चीज़ बर्गर (Paneer Cheese Burger)',
    description: 'Double delight with a rich paneer patty, cheddar cheese slice, and fresh sauces.',
    price: 60,
    image: burgerImg,
    isSpecial: true
  },
  {
    id: 14,
    category: 'fast-food',
    name: 'आलू सैंडविच (Alu Sandwich)',
    description: 'Golden grilled sandwich stuffed with a spiced mashed potato and herb filling.',
    price: 30,
    image: burgerImg,
    isSpecial: false
  },

  // 4. Egg & Rolls (snacks)
  {
    id: 15,
    category: 'snacks',
    name: 'सिंगल अण्डारोल (Single Egg Roll)',
    description: 'Crispy paratha wrap cooked with a single egg, onions, green chilies, and tangy sauces.',
    price: 35,
    image: momosImg,
    isSpecial: false
  },
  {
    id: 16,
    category: 'snacks',
    name: 'डबल अण्डारोल (Double Egg Roll)',
    description: 'Extra protein wrap loaded with two eggs and delicious onion-capsicum stuffing.',
    manchurianImg,
    isSpecial: true
  },
  {
    id: 17,
    category: 'snacks',
    name: 'पनीर रोल (Paneer Roll)',
    description: 'Flaky paratha roll stuffed with spiced scrambled paneer, crisp veggies, and mayo.',
    price: 50,
    image: momosImg,
    isSpecial: true
  },
  {
    id: 18,
    category: 'snacks',
    name: 'चिकन अण्डारोल (Chicken Egg Roll)',
    description: 'Premium combination wrap featuring spiced chicken chunks, egg, and green chutney.',
    price: 70,
    image: momosImg,
    isSpecial: true
  },
  {
    id: 19,
    category: 'snacks',
    name: 'वेज रोल (Veg Roll)',
    description: 'Simple and tasty flatbread wrap loaded with sautéed seasonable vegetables.',
    price: 30,
    image: momosImg,
    isSpecial: false
  },

  // 5. Dal & Rice (main-course)
  {
    id: 20,
    category: 'main-course',
    name: 'दाल फ्राई (Dal Fry)',
    description: 'Creamy yellow lentils cooked with onions, tomatoes, and garlic butter.',
    price: 60,
    image: manchurianImg,
    isSpecial: false
  },
  {
    id: 21,
    category: 'main-course',
    name: 'दाल तड़का (Dal Tadka)',
    description: 'Flavorful yellow lentils finished with a double red-chili and cumin ghee tadka.',
    price: 70,
    image: manchurianImg,
    isSpecial: true
  },
  {
    id: 22,
    category: 'main-course',
    name: 'सादा राइस (Plain Rice)',
    description: 'Perfectly steamed, soft and fluffy long-grain basmati rice. (Half / Full)',
    price: "30 / 50",
    image: manchurianImg,
    isSpecial: false
  },
  {
    id: 23,
    category: 'main-course',
    name: 'जीरा फ्राइड राइस (Jeera Fried Rice)',
    description: 'Aromatic basmati rice sautéed with whole cumin seeds and pure ghee. (Half / Full)',
    price: "40 / 70",
    image: manchurianImg,
    isSpecial: false
  },
  {
    id: 24,
    category: 'main-course',
    name: 'वेज राइस (Veg Fried Rice)',
    description: 'Wok-tossed basmati rice with mixed vegetables and Chinese spices. (Half / Full)',
    price: "45 / 70",
    image: manchurianImg,
    isSpecial: true
  },
  {
    id: 25,
    category: 'main-course',
    name: 'पनीर राइस (Paneer Fried Rice)',
    description: 'Delicious wok-fried rice tossed with golden paneer cubes and spring onions. (Half / Full)',
    price: "60 / 90",
    image: manchurianImg,
    isSpecial: true
  }
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initMenuTabs();
  initGalleryLightbox();
  initReviewsSlider();
  initForms();
});

// 1. Navbar Logic
function initNavbar() {
  const header = document.getElementById('navbar-container');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  
  // Sticky Navbar Effect on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('py-3', 'shadow-2xl');
      header.classList.remove('py-5');
    } else {
      header.classList.add('py-5');
      header.classList.remove('py-3', 'shadow-2xl');
    }
    
    // Highlight Active Link on Scroll
    highlightNavLink();
  });

  // Mobile Hamburger Toggle
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    
    // Toggle Hamburger Icon shapes
    const svgIcon = mobileMenuBtn.querySelector('svg');
    if (!isExpanded) {
      svgIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
    } else {
      svgIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
    }
  });

  // Close Mobile Menu on Link Click
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      const svgIcon = mobileMenuBtn.querySelector('svg');
      svgIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
    });
  });
}

// Highlight Current Section Link in Navbar
function highlightNavLink() {
  const sections = document.querySelectorAll('section, header[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  let currentId = '';
  const scrollPos = window.scrollY + 120; // Offset for navbar height

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentId = section.getAttribute('id');
    }
  });

  if (!currentId) return;

  const updateLinks = (links) => {
    links.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === currentId) {
        link.classList.add('text-gold-400');
        link.classList.remove('text-slate-300');
      } else {
        link.classList.remove('text-gold-400');
        link.classList.add('text-slate-300');
      }
    });
  };

  updateLinks(navLinks);
  updateLinks(mobileLinks);
}

// 2. Scroll Reveal Animations (Intersection Observer)
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once animated to prevent repeat performance degradation
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
  });

  revealElements.forEach(el => observer.observe(el));
}

// 3. Featured Menu Logic (Tabs & Cards Generation)
function initMenuTabs() {
  const menuContainer = document.getElementById('menu-items-grid');
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  
  // Render Menu Items
  console.log("Menu Loaded", menuItems.length);
  function renderMenu(category = 'all') {
    // Fade out effect
    menuContainer.style.opacity = '0';
    
    setTimeout(() => {
      menuContainer.innerHTML = '';
      
      const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
      
      filteredItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'h-full';
        
        itemCard.innerHTML = `
          <div class="vintage-frame flex flex-col items-center text-center p-6 bg-slate-950/30 glass-card h-full reveal group">
            <div class="vintage-corners"></div>
            <div class="vintage-corners-alt"></div>
            
            <!-- Circular Image Plate -->
            <div class="plate-frame w-36 h-36 mb-5 shrink-0 overflow-hidden">
              <img 
                src="${item.image}" 
                alt="${item.name}" 
                loading="lazy"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <!-- Details -->
            <div class="flex flex-col justify-between flex-grow w-full">
              <div class="mb-5">
                <div class="flex flex-col items-center gap-1 mb-2">
                  <h3 class="font-serif text-lg font-bold text-slate-100 group-hover:text-gold-400 transition-colors">${item.name}</h3>
                  <span class="text-gold-400 font-serif font-bold text-base mt-1">₹${item.price}</span>
                </div>
                <p class="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">${item.description}</p>
              </div>
              
              <a 
                href="https://wa.me/918353968003?text=Hi%20New%20Chatapata%20Cafe%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}%20(Price%3A%20%E2%82%B9${item.price})."
                target="_blank"
                class="btn-outline-gold w-full text-center py-2.5 rounded text-[10px] tracking-wider uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 2.066 14.12 1.04 11.999 1.04 6.562 1.04 2.137 5.411 2.133 10.84c-.002 1.722.453 3.401 1.317 4.894l-.994 3.626 3.722-.966zM17.487 14.39c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.672.15-.2.3-.775.975-.95 1.174-.175.2-.35.224-.65.074-1.208-.604-1.986-.984-2.753-2.301-.19-.323.19-.3.542-1.001.075-.15.038-.275-.019-.375-.057-.1-.472-1.14-.648-1.564-.173-.414-.347-.359-.472-.366-.123-.006-.264-.007-.406-.007-.141 0-.372.053-.566.264-.194.212-.74.723-.74 1.761s.755 2.039.86 2.176c.105.137 1.484 2.265 3.597 3.177 1.21.522 1.962.667 2.633.567.747-.111 2.296-.94 2.62-1.85.324-.909.324-1.686.226-1.85-.098-.163-.293-.263-.593-.413z"/>
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
        `;
        menuContainer.appendChild(itemCard);
        
        // Trigger small delayed animation for cards
        setTimeout(() => {
          const cardEl = itemCard.querySelector('.vintage-frame');
          cardEl.classList.add('active');
        }, 50);
      });
      
      menuContainer.style.opacity = '1';
    }, 300);
  }

  // Bind Tab Click events
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderMenu(category);
    });
  });

  // Initial load
  renderMenu('all');
}

// 4. Image Gallery Lightbox Setup
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = document.getElementById('lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightbox.classList.add('active');
      document.body.classList.add('overflow-hidden');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Esc key closes lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// 5. Customer Reviews Carousel (Auto Slider)
function initReviewsSlider() {
  const track = document.getElementById('reviews-track');
  const slides = Array.from(track.children);
  const nextButton = document.getElementById('review-next-btn');
  const prevButton = document.getElementById('review-prev-btn');
  
  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let slideInterval;

  const updateSlides = () => {
    // Fade out, move index, fade in
    slides.forEach((slide, index) => {
      slide.style.display = index === currentIndex ? 'block' : 'none';
      if (index === currentIndex) {
        slide.classList.add('fade-in');
      }
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  };

  // Add click events
  nextButton.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevButton.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // Automatic transition every 5 seconds
  const startInterval = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };

  // Initial layout setting
  updateSlides();
  startInterval();
}

// 6. Interactive Forms & Validation
function initForms() {
  const tableForm = document.getElementById('table-booking-form');
  const partyForm = document.getElementById('party-booking-form');
  const successModal = document.getElementById('success-modal');
  const modalClose = document.getElementById('modal-close-btn');

  // Helper to open Success Modal
  const showSuccess = (message) => {
    const successMsgText = document.getElementById('success-modal-message');
    if (successMsgText) {
      successMsgText.textContent = message;
    }
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  // Close Success Modal
  if (modalClose && successModal) {
    modalClose.addEventListener('click', () => {
      successModal.classList.add('hidden');
      successModal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // A. Online Table Reservation Form
  if (tableForm) {
    tableForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('booking-name').value.trim();
      const phone = document.getElementById('booking-phone').value.trim();
      const guests = document.getElementById('booking-guests').value;
      const date = document.getElementById('booking-date').value;
      const time = document.getElementById('booking-time').value;

      if (!name || !phone || !guests || !date || !time) {
        alert('Please fill out all fields for table booking.');
        return;
      }

      // Format WhatsApp details
      const whatsappText = `Hi New Chatapata Cafe, I would like to book a Table Reservation:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n👥 Guests: ${guests}\n📅 Date: ${date}\n⏰ Time: ${time}`;
      const encodedText = encodeURIComponent(whatsappText);
      const waUrl = `https://wa.me/918353968003?text=${encodedText}`;

      // Simulate API success
      showSuccess(`Table reservation initiated! We are redirecting you to WhatsApp to finalize your booking for ${guests} guests on ${date} at ${time}.`);
      
      // Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        window.open(waUrl, '_blank');
        tableForm.reset();
      }, 2500);
    });
  }

  // B. Birthday & Party Booking Form
  if (partyForm) {
    partyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('party-name').value.trim();
      const phone = document.getElementById('party-phone').value.trim();
      const eventType = document.getElementById('party-type').value;
      const guests = document.getElementById('party-guests').value.trim();
      const date = document.getElementById('party-date').value;
      const message = document.getElementById('party-message').value.trim();

      if (!name || !phone || !eventType || !guests || !date) {
        alert('Please fill out all required fields.');
        return;
      }

      // Format WhatsApp details
      const whatsappText = `Hi New Chatapata Cafe, I would like to make a Party/Event Booking:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n🎉 Event Type: ${eventType}\n👥 Expected Guests: ${guests}\n📅 Event Date: ${date}\n📝 Message: ${message || 'No additional instructions'}`;
      const encodedText = encodeURIComponent(whatsappText);
      const waUrl = `https://wa.me/918353968003?text=${encodedText}`;

      // Simulate API success
      showSuccess(`Your event booking request for a ${eventType} on ${date} has been registered! Redirecting to WhatsApp to coordinate details...`);

      // Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        window.open(waUrl, '_blank');
        partyForm.reset();
      }, 2500);
    });
  }
}
