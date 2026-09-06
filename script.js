// Configuração central do WhatsApp (edite aqui para mudar em todo o site)
const WHATSAPP_NUMERO = '5531971395793'; // formato: DDI + DDD + número
const WHATSAPP_MENSAGEM = 'Olá! Gostaria de ver os horários disponíveis por favor.';

function getWhatsappUrl() {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
}

function formatarTelefoneExibicao(numeroCompleto) {
    const semDDI = numeroCompleto.replace(/^55/, '');
    const ddd = semDDI.slice(0, 2);
    const numero = semDDI.slice(2);
    const meio = numero.length === 9 ? numero.slice(0, 5) : numero.slice(0, 4);
    const fim = numero.length === 9 ? numero.slice(5) : numero.slice(4);
    return `(${ddd}) ${meio}-${fim}`;
}

document.querySelectorAll('.wa-link').forEach((link) => {
    link.href = getWhatsappUrl();
});

const telefoneExibido = document.getElementById('telefoneExibido');
if (telefoneExibido) {
    telefoneExibido.textContent = formatarTelefoneExibicao(WHATSAPP_NUMERO);
}

const ldJsonNegocio = document.getElementById('ld-json-negocio');
if (ldJsonNegocio) {
    const dados = JSON.parse(ldJsonNegocio.textContent);
    dados.telephone = `+${WHATSAPP_NUMERO}`;
    ldJsonNegocio.textContent = JSON.stringify(dados);
}

// Atualiza o ano automaticamente no rodapé
document.getElementById('anoAtual').textContent = new Date().getFullYear();

// Efeito de sombra no cabeçalho ao rolar a página
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 50);
});
