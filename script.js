        // Helper function to create elements with classes
        function createElement(tag, className) {
            const element = document.createElement(tag);
            if (className) element.className = className;
            return element;
        }

        // Function to create a single card
        function createCard() {
            const card = createElement('div', 'card');

            // Add paragraph area
            const contentPlaceholder = createElement('div', 'content-placeholder');
            card.appendChild(contentPlaceholder);

            // Add footer
            const cardFooter = createElement('div', 'card-footer');
            const avatar = createElement('div', 'avatar');
            const footerText = createElement('div', 'footer-text');

            // Add title and subtitle placeholders
            const titlePlaceholder = createElement('div', 'title-placeholder');
            const subtitlePlaceholder = createElement('div', 'subtitle-placeholder');

            footerText.appendChild(titlePlaceholder);
            footerText.appendChild(subtitlePlaceholder);
            cardFooter.appendChild(avatar);
            cardFooter.appendChild(footerText);

            card.appendChild(cardFooter);

            return card;
        }

        // Function to generate multiple cards
        function generateCards(container, numberOfCards) {
            for (let i = 0; i < numberOfCards; i++) {
                const card = createCard();
                container.appendChild(card);
            }
        }

        // Generate and append 5 cards to the body
        const body = document.body;
        generateCards(body, 10);

        document.querySelector('.card').addEventListener('grab', function() {
            console.log("click");
        })

        let isDragging = false;
        let startY;
        let scrollY = 0;

        document.addEventListener('mousedown', (e) => {
            if (e.target.closest('.card')) {
                isDragging = true;
                startY = e.clientY; // Record the initial Y position
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const distance = e.clientY - startY; // Calculate the drag distance
                window.scrollBy(0, -distance); // Scroll the page
                startY = e.clientY; // Update the start position for smoother scrolling
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false; // End dragging on mouse up
        });

        document.addEventListener('mouseleave', () => {
            isDragging = false; // End dragging if mouse leaves the window
        });



        // Function to set active/inactive states
        function updateActiveCard() {
            const cards = document.querySelectorAll('.card');
            const windowHeight = window.innerHeight;
            const centerLine = windowHeight / 2;

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;

                if (Math.abs(centerLine - cardCenter) < rect.height / 2) {
                    // Card is active
                    card.classList.add('active');
                    card.classList.remove('inactive');
                } else {
                    // Card is inactive
                    card.classList.add('inactive');
                    card.classList.remove('active');
                }
            });
        }

        // Attach scroll and resize events
        window.addEventListener('scroll', updateActiveCard);
        window.addEventListener('resize', updateActiveCard);

        // Initial call to set states on load
        updateActiveCard();