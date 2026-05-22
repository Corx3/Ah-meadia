document.addEventListener('DOMContentLoaded', () => {
    
    // إعدادات واجهة المحمول (Hamburger Menu)
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    // فتح وإغلاق القائمة عند الضغط على الزر
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // إغلاق تلقائي للقائمة عند الضغط على أي رابط بداخلها للانتقال السلس
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navMenu.classList.remove('active');
        });
    });

    // التحكم الجمالي في عمق الهيدر عند التمرير
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.9)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });
});