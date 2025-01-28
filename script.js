document.addEventListener("DOMContentLoaded", () => {
    const resumeBtns = document.querySelectorAll('.resume-btn');
    const resumeDetails = document.querySelectorAll('.resume-detail');

    // RESUME (CV) BUTTONS
    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            // Remove 'active' class from all buttons and details
            resumeBtns.forEach(btn => btn.classList.remove('active'));
            resumeDetails.forEach(detail => detail.classList.remove('active'));

            // Add 'active' class to the clicked button and corresponding detail
            btn.classList.add('active');
            if (resumeDetails[idx]) {
                resumeDetails[idx].classList.add('active');
            }
        });
    });

    // PORTFOLIO ARROW BUTTONS
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

    let index = 0;

    // Active Portfolio
    const activePortfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

        portfolioDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        portfolioDetails[index].classList.add('active');
    }
    
    // Arrow right
    arrowRight.addEventListener('click', () => {
        if (index < 4) {
            index++;
            arrowLeft.classList.remove('disabled');
        } else {
            index = 5;
            arrowRight.classList.add('disabled');
        }

        activePortfolio();
    });

    // Arrow left
    arrowLeft.addEventListener('click', () => {
        if (index > 1) {
            index--;
            arrowRight.classList.remove('disabled');
        } else {
            index = 0;
            arrowLeft.classList.add('disabled');
        }

        activePortfolio();
    });

});

    // HOVER EFFECT
    const resumeItems = document.querySelectorAll('.resume-item');
    resumeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-0.5rem)';
            item.style.boxShadow = '0 0.5rem 1.5rem rgba(0, 0, 0, 0.3)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
    });


    // MENU ICON
    document.addEventListener('DOMContentLoaded', () => {
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('header nav');
  
        menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        });
    });















