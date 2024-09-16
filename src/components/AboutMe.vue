<script setup>

import computer_icon from '@/assets/integration.png'
import lamp_icon from '@/assets/lampada.png'
import star_icon from '@/assets/star.png'
import talk_icon from '@/assets/talk.png'
import list_icon from '@/assets/pesquisa.png'
import github_icon from '@/assets/github.png'
import linkedin_icon from '@/assets/linkedin.png'
import instagram_icon from '@/assets/instagram.png'

</script>
<template>
    <h1 class=" ms-10 font-bold text-4xl text-white">Quem eu sou?</h1>
        <div class=" ms-10 mt-3 mb-3 linha-azul"></div>
        <p class="ms-10  mt-4 font-bold">
            Sou um estudante de Engenharia de Computação apaixonado por desenvolvimento de software e tecnologias. Com
            um forte interesse em criar soluções inovadoras e enfrentar desafios, estou sempre em busca de oportunidades
            para aplicar meus conhecimentos e habilidades em projetos. Meu objetivo é crescer profissionalmente e
            contribuir para o avanço tecnológico.
        </p>
        <div class="grid grid-cols-3 gap-10  mx-32  mt-12">
            <div class="col-span-1  flex flex-col">

                <div class="flex justify-center w-full">
                    <img class="icons mb-6" :src="computer_icon" alt="">
                </div>
                <h1 class="font-bold text-white mb-2 text-xl">Desenvolvimento de Software</h1>
                <p class="  text-description">Busco oportunidades para adquirir experiência profissional e acompanhar as tendências atuais do mercado de trabalho como desenvolvedor. Tenho o objetivo de contribuir ativamente para o crescimento da empresa e aprimorar minhas habilidades e conhecimentos. </p>
            </div>
            <div class="col-span-1  flex flex-col">
                <div class="flex justify-center w-full">
                    <img class="icons mb-6" :src="star_icon" alt="">
                </div>
                <h1 class="font-bold text-white mb-2 text-xl">Educação</h1>
                <h2 class=" ms-1 font-bold text-white">
                    Graduação em Engenharia de Computação
                </h2>
                
                <ul class="ms-6 text-description">
                    <li>Pontifícia Universidade Católica de Minas Gerais (PUC Minas)</li>
                    <li>7º período</li>
                </ul>
                

            </div>
            <div class="col-span-1  flex flex-col">
                <div class="flex justify-center w-full">
                    <img class="icons mb-6" :src="list_icon" alt="">
                </div>
                <h1 class="font-bold text-white mb-2 text-xl">Cursos e Certificações</h1>

               
                <ul class="ms-6 text-description">
                    <li>Endpoint Security (CISCO)</li>
                    <li>AWS Academy Cloud Foundations</li>
                    <li>Informática</li>
                    <li>Montagem e manutenção de computadores</li>
                </ul>
                
            </div>


            <div class="col-span-1  flex flex-col">
                <h1 class="font-bold text-white mb-2 text-xl">Contato</h1>
                <ul class="ms-6 text-description">
                    <li><span class="font-bold">Email:</span> marlon2020mg@gmail.com</li>
                    <li><span class="font-bold">Telefone:</span> (31) 98710-4803</li>
                   
                </ul>
                <h1 class="font-bold text-white text-xl mt-6">Redes Sociais:</h1>
                <div class="flex gap-6 mt-4">
                    <a target="_blank" href="https://github.com/marlon-bento">
                        <i class="bi bi-github text-white hover:text-description text-3xl"></i>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/marlon-bento-461ba755/">
                        <i class="bi bi-linkedin text-white hover:text-description text-3xl"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/marlon_b_a/">
                        <i class="bi bi-instagram text-white hover:text-description text-3xl"></i>
                    </a>
                </div>
            </div>
            <div class="col-span-1  flex flex-col">
                <div class="flex justify-center w-full">
                    <img class="icons mb-6" :src="talk_icon" alt="">
                </div>
                <h1 class="font-bold text-white mb-2 text-xl">Competências Pessoais</h1>
                <ul class="ms-6 text-description">
                    <li><span class="font-bold block text-white">Trabalho em Equipe: </span> Experiência colaborativa em projetos e equipes.</li>
                    <li><span class="font-bold block text-white">Resolução de Problemas: </span> Habilidade em identificar e solucionar problemas complexos.
                        Comunica</li>
                    <li><span class="font-bold block text-white">Comunicação:  </span> Capacidade de comunicar ideias de forma clara e eficaz.</li>
                   
                </ul>
            </div>
            <div class="col-span-1  flex flex-col">
                <div class="flex justify-center w-full">
                    <img class="icons mb-6" :src="lamp_icon" alt="">
                </div>
                <h1 class="font-bold text-white mb-2 text-xl">Interesses</h1>
                <p><span class="font-bold block text-white">Tecnologia: </span> Fascinado por inovações tecnológicas e suas aplicações práticas.</p>
                <p><span class="font-bold block text-white">Aprendizado Contínuo: </span> Comprometido em expandir meus conhecimentos e habilidades.</p>
                <p><span class="font-bold block text-white">Desenvolvimento Sustentável:  </span> Interesse em projetos que promovam sustentabilidade e eficiência energética.</p>
            </div>
        </div>
</template>

<style scoped>
    ul{
        list-style: circle;
    }
    .linha-azul {
        width: 180px;
        height: 5px;
        background-color: #22449A;
    }

    .icons {
        width: 100px;
    }

</style>