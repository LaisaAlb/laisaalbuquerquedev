let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFechar = document.getElementById('btn-fechar');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});


// Função para abrir o banner de especialidade
function abrirBanner(tipo) {
    const banner = document.getElementById("banner-especialidade");
    const img = document.getElementById("img-banner");
    const titulo = document.getElementById("titulo-banner");
    const descricao = document.getElementById("descricao-banner");

    if (tipo === "website") {
        img.src = "assets/website.jpeg";
        titulo.textContent = "Desenvolvimento Web";
        descricao.innerHTML = "Com foco em desenvolvimento front-end, sou capaz de criar portfólios, sites, landing pages, sistemas web e muito mais. Tudo isso com frameworks modernos como  React e Angular. Além disso,  possuo conhecimentos em back-end. <br> Minha trajetória em desenvolvimento web começou em 2023 e, desde então, venho aprimorando minhas habilidades com projetos práticos. Tenho 1 ano de experiência como Desenvolvedora Júnior, o que consolidou ainda mais minha paixão pela programação e ampliou meus conhecimentos técnicos e interpessoais. <br> Além disso, estou sempre em busca de aprendizado contínuo, aberta a conhecer novas linguagens de programação e trabalhando para continuar desenvolvendo minhas habilidades. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.";

    } else if (tipo === "product") {
        img.src = "assets/productowner.jpeg";
        titulo.textContent = "Product Owner";
        descricao.innerHTML = "Em minha experiência como Product Owner, atuei no levantamento de requisitos, definição de escopo, priorização de demandas, acompanhamento do time nas entregas e na garantia da satisfação do cliente com o produto.<br> Durante essa atuação, adquiri conhecimentos técnicos importantes, como Scrum, Kanban, gerenciamento de equipe, testes, valor de negócio e sprints. Além disso, consegui aprimorar minhas habilidades em liderança, trabalho em equipe e tomada de decisão.Essa vivência também me proporcionou uma compreensão melhor da visão do cliente, o que contribuiu para meu crescimento como desenvolvedora. <br> Com base nessa experiência, desenvolvi interesse pela especialidade e tenho curiosidade e vontade de me especializar. Estou pronta para colaborar de forma leve, estratégica e eficiente, contribuindo com ótimos resultados para as empresas e equipes com as quais eu venha a trabalhar.";

    } else if (tipo === "ux") {
        img.src = "assets/uiux.jpeg";
        titulo.textContent = "UI/UX Designer";
        descricao.innerHTML = "Atuo com UI/UX Design aplicando minha sensibilidade visual e foco na experiência do usuário para desenvolver interfaces funcionais, intuitivas e alinhadas aos objetivos do projeto. Tenho experiência na criação de telas para sistemas web, desktop e mobile, utilizando principalmente Figma e Canva como ferramentas de prototipagem e design.<br> Minha vivência prática me ajudou a compreender a importância da harmonia entre cores, tipografia, hierarquia visual e navegação clara — sempre considerando o perfil do público-alvo. Unir essa visão de design com meus conhecimentos em desenvolvimento Frontend me permite entregar soluções completas e centradas no usuário, com foco em usabilidade, acessibilidade e impacto visual.";
    }

    banner.style.display = "flex";
    banner.style.display = "flex";
    banner.scrollTop = 0;
}

// Função para fechar o banner
function fecharBanner() {
    document.getElementById("banner-especialidade").style.display = "none";
}

// Função para abrir banner de projetos
function abrirProjeto(projeto) {
    const banner = document.getElementById("modal-projeto");
    const img = document.getElementById("img-projeto");
    const video = document.getElementById("video-projeto");
    const sourceVideo = document.getElementById("source-video");
    const titulo = document.getElementById("titulo-projeto");
    const descricao = document.getElementById("descricao-projeto");

    // Dados dos projetos: imagem, vídeo, título, descrição
    const dados = {
        projeto1: {
            videoSrc: "videos/apae.mp4",
            titulo: "APAE - LTD - UNIFAVIP 👶🏻",
            descricao: `APAE foi um projeto desenvolvido pelo alunos da UNIFAVIP WYDEN pelo LTD. <br> Neste projeto, desenvolvemos um programa voltado para auxiliar crianças com deficiência intelectual e múltipla, com objetivo delas conseguirem desenvolver suas interações sociais. <br> As funcionalidades do sistema consistem em fazer com a criança interagir  saiba pedir coisas básicas como 'estou com cede' e também tem jogos interativos para ajudar elas a desenvolverem suas habilidades cognitivas e lógicas. <br> As tecnologias utilizadas foram  <strong>HTML  ,CSS , JavaScript</strong> <br>
            🔗Publicação no LinkedIn: <a href="https://www.linkedin.com/posts/la%C3%ADsa-albuquerque-777406271_unifavipwyden-ensinosuperior-laborataejriodetransformaaexaetodigital-activity-7329518032953798656-9HpT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJyLMsBU20VWqy_XqCUEoy5TbDJ5qhu2Z8" target="_blank">APAE</a><br>
            💻 GitHub do projeto: <a href="https://github.com/KelvinGuimaraes/Apae-V2.git" target="_blank">Apae-V2</a>`
        },

        projeto2: {
            videoSrc: "videos/veiculos.mp4",
            titulo: "AUTODRIVE 🚗",
            descricao: `AUTODRIVE é uma aplicação Full Stack desenvolvida por mim, com foco em gerenciamento de veículos. A plataforma permite que cadastre, edite, exclua, liste, arquive e desarquive veículos. <br> Além da gestão de veículos, o sistema conta com autenticação completa, permitindo que o usuário se cadastre e realize login com validação de token. Todas as ações são acompanhadas por mensagens de retorno do sistema, garantindo uma experiência clara e orientada ao usuário. <br> <strong>Tecnologias Front-End</strong>: React 18+, React Router DOM, React Icons, Axios, CSS, JavaScript, TypeScript, Biblioteca react-toastify <br> <strong>Tecnologias Back-End</strong>: Node.js , Express.js, Prisma ORM, PostgreSQL, Dotenv, Cors, Bcrypt, JWT (autenticação) <br>

            💻Github Front-End: <a href="https://github.com/LaisaAlb/GerenciamentoDeVeiculosFront.git" target="_blank">AUTODRIVE</a><br>
            💻 GitHub Back-End: <a href="https://github.com/LaisaAlb/GerenciamentoDeVeiculosBack.git" target="_blank">AUTODRIVE</a>`
        },
        projeto3: {
            videoSrc: "videos/spotify.mp4",
            titulo: "SPOTIFY 🎶",
            descricao: `Este projeto representou uma oportunidade de consolidar ainda mais meus conhecimentos na ferramenta Figma. <br> Através dele, pude compreender com mais clareza como estruturar e organizar a criação e a prototipagem de telas de forma mais profissional. <br> Entre os principais aprendizados, destaco: <br> 🔄 Criação de interações entre as telas, <br> 🎯 Aplicação de efeitos visuais em bordas e elementos <br>🗂️ Organização eficiente de arquivos e camadas dentro do Figma <br> <br>
            🔗Publicação no LinkedIn: <a href="https://www.linkedin.com/posts/la%C3%ADsa-albuquerque-777406271_uxdesign-uidesign-figma-activity-7330547869831139328-YKKe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJyLMsBU20VWqy_XqCUEoy5TbDJ5qhu2Z8" target="_blank">SPOTIFY</a><br>
            💻 Link do Figma: <a href="https://www.figma.com/design/Pnz6HeeAnIf2Ulb9lrNXwb/SPOTIFY?node-id=0-1&t=q0Qx7rcwrTBuITKi-1" target="_blank">SPOTIFY</a>`
        },
        projeto4: {
            videoSrc: "videos/userPlataform.mp4",
            titulo: "USER PLATAFORM 💳",
            descricao: `Com o intuito de aprimorar e expandir meus conhecimentos no framework Angular, desenvolvi o projeto User Plataform, onde permite que os usuários visualizem suas transações financeiras (créditos e débitos) e acessem seus dados pessoais, endereço e informações de contato. Suas principais funcionalidades <br> 🔹 Principais funcionalidades: <br> ✅ Página inicial com acesso a todas as funcionalidades <br> ✅ Visualização de transações bancárias (créditos e débitos)<br> ✅ Exibição de dados pessoais do usuário <br> ✅ Acesso a endereço e informações de contato E tecnologias  <br> 🔹 Tecnologias utilizadas: , 🟢 Angular v17 , 📌 TypeScript , 💻 HTML / SCSS 
            🔗Publicação no LinkedIn: <a href="https://www.linkedin.com/posts/la%C3%ADsa-albuquerque-777406271_angular-frontend-desenvolvimentoweb-activity-7310323015567716354-JlQ0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJyLMsBU20VWqy_XqCUEoy5TbDJ5qhu2Z8" target="_blank">User Plataform</a><br>
            💻 GitHub do projeto: <a href="https://github.com/LaisaAlb/userPlataform.git" target="_blank">User Plataform</a>`
        },
        projeto5: {
            videoSrc: "videos/reactiveForm.mp4",
            titulo: "REACTIVE FORMS 🗃️",
            descricao: `Com o objetivo de consolidar meus conhecimentos em Angular e TypeScript, desenvolvi esta aplicação focada na gestão de usuários e seus dependentes. 
            <br> Nela, é possível cadastrar, editar, excluir e listar usuários, com destaque para a forte tipagem e validação rigorosa dos dados, garantindo uma experiência de uso mais robusta e confiável. Um dos pontos fortes do sistema é a funcionalidade de edição, que proporciona uma interação completa e dinâmica com o usuário. <br> O principal aprendizado que obtive neste projeto foi a utilizar o TypeScript com a tipagem correta dos dados e estruturar/organizar bem os projetos <br>🛠️ Principais tecnologias utilizadas: Angular, TypeScript e SCSS.
            🔗Publicação no LinkedIn: <a href="https://www.linkedin.com/posts/la%C3%ADsa-albuquerque-777406271_ol%C3%A1-usu%C3%A1rio-na-busca-para-aprimorar-activity-7303418448737411073-Z6V-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJyLMsBU20VWqy_XqCUEoy5TbDJ5qhu2Z8" target="_blank">Reactive Forms</a><br>
            💻 GitHub do projeto: <a href="https://github.com/LaisaAlb/project-reactive-form.git" target="_blank">Reactive Forms</a>`
        },
        projeto6: {
            videoSrc: "videos/chamados.mp4",
            titulo: "CHAMADOS ☎️",
            descricao: `Esta é uma aplicação desenvolvida em React com foco na visualização, gerenciamento e interação com chamados. O projeto utiliza o Firebase para gerenciamento de dados e é estruturado com componentes reutilizáveis em React, além da integração com o React Router para navegação entre as páginas. <br> Desenvolvi este projeto com o objetivo de consolidar meus conhecimentos em React e aprofundar meu entendimento sobre o funcionamento dessa biblioteca. <br> 🛠️ Principais funcionalidades: Exibição de chamados , Criação de novos chamados ,  Modal de detalhes, Carregamento assíncrono <br>
            🔗Publicação no LinkedIn: <a href="https://www.linkedin.com/posts/la%C3%ADsa-albuquerque-777406271_angular-react-react-activity-7312880727086247936-KiuZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJyLMsBU20VWqy_XqCUEoy5TbDJ5qhu2Z8" target="_blank">Chamados</a><br>
            💻 GitHub do projeto: <a href="https://github.com/LaisaAlb/Chamados.git" target="_blank">Chamados</a>`
        }
    };

    if (!dados[projeto]) {
        console.error("Projeto não encontrado:", projeto);
        return;
    }

    const info = dados[projeto];

    titulo.textContent = info.titulo;
    descricao.innerHTML = info.descricao;

    if (info.videoSrc) {
        img.style.display = "none";
        video.style.display = "block";
        sourceVideo.src = info.videoSrc;
        video.load();
        video.play();
    } else {
        video.pause();
        video.style.display = "none";
        img.style.display = "block";
        img.src = info.imgSrc;
    }

    banner.style.display = "flex";
    banner.scrollTop = 0;
}

function fecharProjeto() {
    const banner = document.getElementById("modal-projeto");
    const video = document.getElementById("video-projeto");

    banner.style.display = "none";

    if (!video.paused) {
        video.pause();
    }
}

document.getElementById('banner-especialidade').addEventListener('click', function (e) {
  const conteudo = document.querySelector('.conteudo-banner');
  if (!conteudo.contains(e.target)) {
    fecharBanner();
  }
});

document.getElementById('modal-projeto').addEventListener('click', function (e) {
  const conteudo = document.querySelector('#modal-projeto .conteudo-banner');
  if (!conteudo.contains(e.target)) {
    fecharProjeto();
  }
});

document.querySelector('.btn-contato-whatsapp button').addEventListener('click', () => {
  window.open('https://wa.me/55081998857075', '_blank', 'noopener,noreferrer');
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const celular = document.getElementById("celular").value;
            const mensagem = document.getElementById("mensagem").value;

            const texto = `Olá, me chamo ${nome}%0AEmail: ${email}%0ACelular: ${celular}%0AMensagem: ${mensagem}`;
            const numero = "5581998857075";

            window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
        });
    }
});
