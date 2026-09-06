// Configuração central do WhatsApp (edite aqui para mudar em todo o site)
const WHATSAPP_NUMERO = '5531971395793';
const WHATSAPP_MENSAGEM = 'Olá! Gostaria de ver os horários disponíveis por favor.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;

document.querySelectorAll('.wa-link').forEach((link) => {
    link.href = WHATSAPP_URL;
});

// Atualiza o ano automaticamente no rodapé
document.getElementById('anoAtual').textContent = new Date().getFullYear();

// Efeito de sombra no cabeçalho ao rolar a página
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 50);
});
