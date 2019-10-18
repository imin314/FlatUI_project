import EmailForm from './email-form';

$('.js-email-form').each((i, element) => new EmailForm(element));
