$(function () { $('[data-toggle="tooltip"]').tooltip() });
document.querySelector('.privacy').addEventListener('click', () => $('#privacyModal').modal('show'));
document.querySelector('.terms').addEventListener('click', () => $('#termsModal').modal('show'));
document.querySelector('.faq').addEventListener('click', () => $('#faqModal').modal('show'));