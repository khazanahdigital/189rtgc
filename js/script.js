// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Toggle between menu and close icons
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Testimonial Slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(n) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Set the current slide index
        currentSlide = (n + slides.length) % slides.length;
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Next/previous controls
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            showSlide(currentSlide - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            showSlide(currentSlide + 1);
        });
    }
    
    // Dot controls
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const inquiry = document.getElementById('inquiry').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For demo purposes, just show a success message
            alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
            contactForm.reset();
        });
    }
    
    // Inventory Data
    const inventoryData = [
        // Audi vehicles
        {
            id: 1,
            make: 'audi',
            model: 'a3',
            year: '2023',
            price: 38500,
            image: 'images/audi-a3.jpg',
            mileage: '2,500',
            mpg: '28/36',
            transmission: 'Automatic',
            description: '2023 Audi A3 Premium with Tech Package'
        },
        {
            id: 2,
            make: 'audi',
            model: 'a4',
            year: '2022',
            price: 42750,
            image: 'images/audi-a4.jpg',
            mileage: '15,200',
            mpg: '25/34',
            transmission: 'Automatic',
            description: '2022 Audi A4 Premium Plus'
        },
        {
            id: 3,
            make: 'audi',
            model: 'a6',
            year: '2021',
            price: 49900,
            image: 'images/audi-a6.jpg',
            mileage: '22,400',
            mpg: '23/31',
            transmission: 'Automatic',
            description: '2021 Audi A6 Prestige'
        },
        {
            id: 4,
            make: 'audi',
            model: 'q3',
            year: '2023',
            price: 41800,
            image: 'images/audi-q3.jpg',
            mileage: '5,100',
            mpg: '22/30',
            transmission: 'Automatic',
            description: '2023 Audi Q3 Premium'
        },
        {
            id: 5,
            make: 'audi',
            model: 'q5',
            year: '2022',
            price: 48500,
            image: 'images/audi-q5.jpg',
            mileage: '18,700',
            mpg: '23/28',
            transmission: 'Automatic',
            description: '2022 Audi Q5 Premium Plus'
        },
        {
            id: 6,
            make: 'audi',
            model: 'q7',
            year: '2021',
            price: 54750,
            image: 'images/audi-q7.jpg',
            mileage: '24,300',
            mpg: '19/25',
            transmission: 'Automatic',
            description: '2021 Audi Q7 Prestige'
        },
        
        // BMW vehicles
        {
            id: 7,
            make: 'bmw',
            model: '3-series',
            year: '2023',
            price: 45999,
            image: 'images/bmw-3.jpg',
            mileage: '3,200',
            mpg: '26/36',
            transmission: 'Automatic',
            description: '2023 BMW 3 Series 330i'
        },
        {
            id: 8,
            make: 'bmw',
            model: '5-series',
            year: '2022',
            price: 58999,
            image: 'images/bmw-5.jpg',
            mileage: '12,500',
            mpg: '25/33',
            transmission: 'Automatic',
            description: '2022 BMW 5 Series 540i'
        },
        {
            id: 9,
            make: 'bmw',
            model: '7-series',
            year: '2021',
            price: 79500,
            image: 'images/bmw-7.jpg',
            mileage: '18,900',
            mpg: '22/29',
            transmission: 'Automatic',
            description: '2021 BMW 7 Series 740i'
        },
        {
            id: 10,
            make: 'bmw',
            model: 'x3',
            year: '2023',
            price: 49800,
            image: 'images/bmw-x3.jpg',
            mileage: '4,500',
            mpg: '23/29',
            transmission: 'Automatic',
            description: '2023 BMW X3 xDrive30i'
        },
        {
            id: 11,
            make: 'bmw',
            model: 'x5',
            year: '2022',
            price: 64500,
            image: 'images/bmw-x5.jpg',
            mileage: '15,700',
            mpg: '21/26',
            transmission: 'Automatic',
            description: '2022 BMW X5 xDrive40i'
        },
        {
            id: 12,
            make: 'bmw',
            model: 'x7',
            year: '2021',
            price: 82750,
            image: 'images/bmw-x7.jpg',
            mileage: '22,300',
            mpg: '19/24',
            transmission: 'Automatic',
            description: '2021 BMW X7 xDrive40i'
        },
        
        // Mercedes vehicles
        {
            id: 13,
            make: 'mercedes',
            model: 'a-class',
            year: '2023',
            price: 39800,
            image: 'images/mercedes-a.jpg',
            mileage: '2,900',
            mpg: '25/35',
            transmission: 'Automatic',
            description: '2023 Mercedes-Benz A-Class A220'
        },
        {
            id: 14,
            make: 'mercedes',
            model: 'c-class',
            year: '2022',
            price: 49800,
            image: 'images/mercedes-c.jpg',
            mileage: '14,200',
            mpg: '23/33',
            transmission: 'Automatic',
            description: '2022 Mercedes-Benz C-Class C300'
        },
        {
            id: 15,
            make: 'mercedes',
            model: 'e-class',
            year: '2021',
            price: 59900,
            image: 'images/mercedes-e.jpg',
            mileage: '19,800',
            mpg: '22/31',
            transmission: 'Automatic',
            description: '2021 Mercedes-Benz E-Class E350'
        },
        {
            id: 16,
            make: 'mercedes',
            model: 'gla',
            year: '2023',
            price: 42500,
            image: 'images/mercedes-gla.jpg',
            mileage: '3,800',
            mpg: '24/34',
            transmission: 'Automatic',
            description: '2023 Mercedes-Benz GLA GLA250'
        },
        {
            id: 17,
            make: 'mercedes',
            model: 'glc',
            year: '2022',
            price: 52700,
            image: 'images/mercedes-glc.jpg',
            mileage: '16,400',
            mpg: '22/29',
            transmission: 'Automatic',
            description: '2022 Mercedes-Benz GLC GLC300'
        },
        {
            id: 18,
            make: 'mercedes',
            model: 'gle',
            year: '2021',
            price: 64800,
            image: 'images/mercedes-gle.jpg',
            mileage: '21,500',
            mpg: '19/26',
            transmission: 'Automatic',
            description: '2021 Mercedes-Benz GLE GLE350'
        },
        
        // Toyota vehicles
        {
            id: 19,
            make: 'toyota',
            model: 'camry',
            year: '2023',
            price: 29500,
            image: 'images/toyota-camry.jpg',
            mileage: '2,100',
            mpg: '28/39',
            transmission: 'Automatic',
            description: '2023 Toyota Camry XLE'
        },
        {
            id: 20,
            make: 'toyota',
            model: 'corolla',
            year: '2022',
            price: 24800,
            image: 'images/toyota-corolla.jpg',
            mileage: '12,300',
            mpg: '31/40',
            transmission: 'Automatic',
            description: '2022 Toyota Corolla XSE'
        },
        {
            id: 21,
            make: 'toyota',
            model: 'rav4',
            year: '2021',
            price: 31900,
            image: 'images/toyota-rav4.jpg',
            mileage: '18,500',
            mpg: '27/35',
            transmission: 'Automatic',
            description: '2021 Toyota RAV4 Limited'
        },
        {
            id: 22,
            make: 'toyota',
            model: 'highlander',
            year: '2023',
            price: 41500,
            image: 'images/toyota-highlander.jpg',
            mileage: '3,500',
            mpg: '21/29',
            transmission: 'Automatic',
            description: '2023 Toyota Highlander XLE'
        },
        {
            id: 23,
            make: 'toyota',
            model: 'tacoma',
            year: '2022',
            price: 36800,
            image: 'images/toyota-tacoma.jpg',
            mileage: '14,700',
            mpg: '18/22',
            transmission: 'Automatic',
            description: '2022 Toyota Tacoma TRD Off-Road'
        },
        {
            id: 24,
            make: 'toyota',
            model: 'tundra',
            year: '2021',
            price: 45900,
            image: 'images/toyota-tundra.jpg',
            mileage: '19,200',
            mpg: '17/22',
            transmission: 'Automatic',
            description: '2021 Toyota Tundra Limited'
        },
        
        // Honda vehicles
        {
            id: 25,
            make: 'honda',
            model: 'civic',
            year: '2023',
            price: 26500,
            image: 'images/honda-civic.jpg',
            mileage: '1,900',
            mpg: '31/40',
            transmission: 'Automatic',
            description: '2023 Honda Civic Touring'
        },
        {
            id: 26,
            make: 'honda',
            model: 'accord',
            year: '2022',
            price: 32800,
            image: 'images/honda-accord.jpg',
            mileage: '11,800',
            mpg: '30/38',
            transmission: 'Automatic',
            description: '2022 Honda Accord Touring'
        },
        {
            id: 27,
            make: 'honda',
            model: 'cr-v',
            year: '2021',
            price: 29900,
            image: 'images/honda-crv.jpg',
            mileage: '17,200',
            mpg: '28/34',
            transmission: 'Automatic',
            description: '2021 Honda CR-V EX-L'
        },
        {
            id: 28,
            make: 'honda',
            model: 'pilot',
            year: '2023',
            price: 39500,
            image: 'images/honda-pilot.jpg',
            mileage: '2,800',
            mpg: '20/27',
            transmission: 'Automatic',
            description: '2023 Honda Pilot Elite'
        },
        {
            id: 29,
            make: 'honda',
            model: 'odyssey',
            year: '2022',
            price: 37800,
            image: 'images/honda-odyssey.jpg',
            mileage: '13,500',
            mpg: '19/28',
            transmission: 'Automatic',
            description: '2022 Honda Odyssey Touring'
        },
        {
            id: 30,
            make: 'honda',
            model: 'ridgeline',
            year: '2021',
            price: 38900,
            image: 'images/honda-ridgeline.jpg',
            mileage: '16,800',
            mpg: '18/24',
            transmission: 'Automatic',
            description: '2021 Honda Ridgeline RTL-E'
        }
    ];
    
    // Dynamic car make/model selection
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const yearSelect = document.getElementById('year');
    const priceSelect = document.getElementById('price');
    const filterForm = document.querySelector('.filter-form');
    const inventoryContainer = document.getElementById('inventory-container');
    const noResults = document.getElementById('no-results');
    
    if (makeSelect && modelSelect) {
        // Sample car models by make
        const carModels = {
            audi: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7'],
            bmw: ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7'],
            mercedes: ['A-Class', 'C-Class', 'E-Class', 'GLA', 'GLC', 'GLE'],
            toyota: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Tacoma', 'Tundra'],
            honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'Ridgeline']
        };
        
        makeSelect.addEventListener('change', function() {
            const selectedMake = this.value;
            
            // Clear current options
            modelSelect.innerHTML = '<option value="">All Models</option>';
            
            // If a make is selected, populate models
            if (selectedMake && carModels[selectedMake]) {
                carModels[selectedMake].forEach(model => {
                    const option = document.createElement('option');
                    option.value = model.toLowerCase().replace(' ', '-');
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
            }
            
            // Filter inventory based on current selections
            filterInventory();
        });
        
        // Add event listeners to all filter elements
        modelSelect.addEventListener('change', filterInventory);
        yearSelect.addEventListener('change', filterInventory);
        priceSelect.addEventListener('change', filterInventory);
        
        // Filter form submission
        if (filterForm) {
            filterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                filterForm.classList.add('searched'); // Mark that a search has been performed
                filterInventory();
            });
        }
        
        // Initialize inventory section to show message but no vehicles
        if (inventoryContainer && noResults) {
            inventoryContainer.style.display = 'none';
            noResults.classList.add('show');
        }
    }
    
    // Function to filter inventory based on selections
    function filterInventory() {
        const selectedMake = makeSelect.value;
        const selectedModel = modelSelect.value;
        const selectedYear = yearSelect.value;
        const selectedPrice = priceSelect.value ? parseInt(priceSelect.value) : 0;
        
        // Filter the inventory data
        let filteredInventory = inventoryData;
        
        if (selectedMake) {
            filteredInventory = filteredInventory.filter(item => item.make === selectedMake);
        }
        
        if (selectedModel) {
            filteredInventory = filteredInventory.filter(item => item.model === selectedModel);
        }
        
        if (selectedYear) {
            filteredInventory = filteredInventory.filter(item => item.year === selectedYear);
        }
        
        if (selectedPrice) {
            filteredInventory = filteredInventory.filter(item => item.price <= selectedPrice);
        }
        
        // Display the filtered inventory
        displayInventory(filteredInventory);
    }
    
    // Function to display inventory
    function displayInventory(inventory) {
        // Clear current inventory
        inventoryContainer.innerHTML = '';
        
        // Show/hide no results message and inventory results
        if (inventory.length === 0) {
            // No search performed yet or no results
            if (!filterForm.classList.contains('searched')) {
                noResults.classList.add('show');
                noResults.textContent = 'Use the filters above to search our inventory';
                inventoryContainer.style.display = 'none';
            } else {
                noResults.classList.add('show');
                noResults.textContent = 'No vehicles match your search criteria. Please try different filters.';
                inventoryContainer.style.display = 'none';
            }
        } else {
            noResults.classList.remove('show');
            inventoryContainer.style.display = 'grid';
            
            // Create vehicle cards for each inventory item
            inventory.forEach(vehicle => {
                const vehicleCard = document.createElement('div');
                vehicleCard.className = 'vehicle-card';
                
                // Use a default image if the specific vehicle image doesn't exist
                const defaultImage = vehicle.make === 'audi' ? 'car2.jpg' : 
                                   vehicle.make === 'bmw' ? 'car1.jpg' : 
                                   vehicle.make === 'mercedes' ? 'car3.jpg' : 
                                   vehicle.make === 'toyota' ? 'car1.jpg' : 'car2.jpg';
                
                vehicleCard.innerHTML = `
                    <div class="vehicle-image">
                        <img src="images/${defaultImage}" alt="${vehicle.description}" onerror="this.src='images/${defaultImage}'">
                        ${vehicle.year === '2023' ? '<div class="vehicle-tag">New Arrival</div>' : ''}
                    </div>
                    <div class="vehicle-details">
                        <h3>${vehicle.year} ${vehicle.make.charAt(0).toUpperCase() + vehicle.make.slice(1)} ${vehicle.model.toUpperCase().replace('-', ' ')}</h3>
                        <p class="vehicle-price">$${vehicle.price.toLocaleString()}</p>
                        <div class="vehicle-specs">
                            <span><i class="fas fa-tachometer-alt"></i> ${vehicle.mileage} mi</span>
                            <span><i class="fas fa-gas-pump"></i> ${vehicle.mpg} mpg</span>
                            <span><i class="fas fa-cog"></i> ${vehicle.transmission}</span>
                        </div>
                        <a href="#" class="btn btn-outline">View Details</a>
                    </div>
                `;
                
                inventoryContainer.appendChild(vehicleCard);
            });
        }
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.vehicle-card, .service-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    document.querySelectorAll('.vehicle-card, .service-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
});
