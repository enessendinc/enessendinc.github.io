//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        // Offset değerini düşürerek animasyonun daha erken başlamasını sağlarız
        // Bu değeri deneyerek en uygun sonucu bulabilirsin
        let offset = sec.offsetTop - 250; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Navigasyon linklerini etkinleştirme
        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // Animasyonu sadece bir kez ekle, eğer zaten eklenmemişse
            // Bu sayede bir kez göründüğünde animasyon tekrar etmez
            if (!sec.classList.contains('show-animate')) {
                sec.classList.add('show-animate');
            }
        }
        // else bloğu tamamen kaldırıldı.
        // Bu, bir kez animasyon oynadıktan sonra içeriğin görünür kalmasını sağlar.
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toogle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};