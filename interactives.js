document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            const searchTerm = event.target.value.toLowerCase();
            const books = document.querySelectorAll('#books-list li');

            books.forEach(function(book) {
                const text = book.textContent.toLowerCase();
                book.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    // Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('visible');
        });
    }

    // Modal Pop-Up
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = document.getElementById('close-modal');
    if (openModalButton && modal && closeModalButton) {
        openModalButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }


    // Image Gallery Slider - Example Functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 4000); // Change every 4 seconds
    }
});

