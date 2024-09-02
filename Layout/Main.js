const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  speed: 600,
  centeredSlides: true,
  slidesPerView: 1.2,
});

new Accordion('.accordion-container', {
    duration: 600,
    showMultiple: true,
});

document.addEventListener('DOMContentLoaded', function () {
  // Array de porcentagens que queremos monitorar
  const scrollMilestones = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  
  // Função para calcular a porcentagem de rolagem
  function getScrollPercentage() {
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    return Math.floor((scrollPosition / pageHeight) * 100);
  }

  // Função para verificar e disparar eventos de rolagem
  function checkScrollPercentage() {
    const scrollPercentage = getScrollPercentage();

    // Itera sobre o array de milestones e dispara o evento se a porcentagem foi atingida
    for (let i = 0; i < scrollMilestones.length; i++) {
      if (scrollPercentage >= scrollMilestones[i]) {
        fbq('trackCustom', `Scroll_${scrollMilestones[i]}%`);
        // console.log(`Evento Scroll_${scrollMilestones[i]}% disparado`);
        
        // Remove a porcentagem do array após disparar o evento
        scrollMilestones.splice(i, 1);
        
        // Volta o índice para não pular nenhum item
        i--;
      }
    }

    // Se todas as porcentagens foram atingidas, remove o listener
    if (scrollMilestones.length === 0) {
      window.removeEventListener('scroll', checkScrollPercentage);
    }
  }

  // Adiciona o listener de scroll
  window.addEventListener('scroll', checkScrollPercentage);
});

document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os botões que você quer monitorar
  const buttons = document.querySelectorAll('.Button__Purchase');

  // Função para disparar o evento ao clicar
  function handleButtonClick(event) {
    const buttonLabel = event.target.getAttribute('data-label'); // Obtém o rótulo do botão (opcional)
    const url = this.getAttribute('data-url');
    
    fbq('trackCustom', `Botão_${buttonLabel}`);
    // console.log(`Evento Botão_${buttonLabel} disparado`);

    // Redireciona após um pequeno atraso
    setTimeout(() => {
        window.location.href = url;
    }, 300); // Ajuste o tempo de acordo com a necessidade
  }

  // Adiciona o listener de click para cada botão
  buttons.forEach(function (button) {
    button.addEventListener('click', handleButtonClick);
  });
});