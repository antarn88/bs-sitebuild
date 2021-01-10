'use strict';

// Tooltip
$(function () { $('[data-toggle="tooltip"]').tooltip() });

// Modals
document.querySelector('.privacy').addEventListener('click', () => $('#privacyModal').modal('show'));
document.querySelector('.terms').addEventListener('click', () => $('#termsModal').modal('show'));
document.querySelector('.faq').addEventListener('click', () => $('#faqModal').modal('show'));

// Scrool animation
$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function () {
                window.location.hash = hash;
            });
        }
    });
});