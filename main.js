

$(document).ready(function() {
  let faqQuestionContainers = document.querySelectorAll(`[unique-script-id="w-w-dm-id"] .faq-question-container`);

  faqQuestionContainers.forEach(function(faqQuestionContainer) {
    faqQuestionContainer.onclick = function() {
      this.parentElement.classList.toggle("active");
    };
  });
})

jQuery(document).ready(function($) {
    var $carousel = $('#customers-testimonials');

    $carousel.owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 5,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1170: { items: 3 }
        }
    });

    // Ensure correct center item for fade/scale effect
    $carousel.on('initialized.owl.carousel translated.owl.carousel', function() {
        $carousel.find('.owl-item').removeClass('center');
        $carousel.find('.owl-item.active').eq(1).addClass('center');
    });
});
