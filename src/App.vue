<template>
  <div id="app">
   <b-container>
     <h1 class="header">Kors</h1>
      </b-container>
        <b-link class="header__link active" href="#foo">Início</b-link>
          <b-link class="header__link" href="#foo">Contato</b-link>
            <b-link class="header__link" href="#foo">Projetos</b-link>
              <b-link class="header__link" href="#foo">Serviços</b-link>
                <b-link class="header__link" href="#foo">Sobre</b-link>
                
    <b-container class="main">
      <h6 >Soluções para Internet</h6>
    </b-container>
  <b-row>
    <b-col cols="12" sm="12" lg="12" xl="12">
        <b-img class="imagem-main" src="https://images.pexels.com/photos/5387240/pexels-photo-5387240.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5387240.jpg&fm=jpg" 
      fluid-grow alt="Fluid-grow image"></b-img>
    </b-col>
  </b-row>
  
   <b-container>
     <h3 class="slogan">Serviços que oferecemos</h3>
     <h6 class="slogan__frase">Desenvolvimento web de qualidade a preços acessíveis</h6>
   </b-container>
   
   
    <b-container class="cards">
      <b-card 
        title="Design gráfico"
        img-src="https://images.pexels.com/photos/8837747/pexels-photo-8837747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        img-alt="Image"
        img-bottom
        tag="article"
        style="max-width: 20rem;background-color: rgb(241, 243, 243); border:none; "
        class="mb-2"
      >
      </b-card>
        <b-card 
        title="Gerenciamento de projetos"
        img-src="https://images.pexels.com/photos/8145241/pexels-photo-8145241.jpeg?cs=srgb&dl=pexels-olia-danilevich-8145241.jpg&fm=jpg"
        img-alt="Image"
        img-bottom
        tag="article"
        style="max-width: 20rem;background-color: rgb(241, 243, 243); border:none; "
        class="mb-2"
      >
      </b-card>
        <b-card 
        title="Programação"
        img-src="https://images.pexels.com/photos/6001235/pexels-photo-6001235.jpeg?cs=srgb&dl=pexels-sam-lion-6001235.jpg&fm=jpg"
        img-alt="Image"
        img-bottom
        tag="article"
        style="max-width: 20rem;background-color: rgb(241, 243, 243); border:none;"
        class="mb-2"
      >
      </b-card>
</b-container>




  <b-container class="carousel-1">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024px"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        
        img-src="https://images.pexels.com/photos/8837747/pexels-photo-8837747.jpeg"
      >
        <h1>Design gráfico</h1>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://images.pexels.com/photos/8145241/pexels-photo-8145241.jpeg?cs=srgb&dl=pexels-olia-danilevich-8145241.jpg&fm=jpg">
        <h1>Gerenciamento de projetos</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://images.pexels.com/photos/6001235/pexels-photo-6001235.jpeg?cs=srgb&dl=pexels-sam-lion-6001235.jpg&fm=jpg">
        <h1>Programação</h1>
      </b-carousel-slide>
     

  
    </b-carousel>

   
</b-container>

      <b-container>
        <h1 class="portfolio">Portfólio de Desenvolvimento web</h1>
        <p class="portfolio__infos">Oferecemos a nossos clientes uma variedade de serviços de desenvolvimento web que dão vida a seus objetivos. Somos muito detalhistas em nosso trabalho, e focamos na entrega de um produto final bonito, funcional e com interface amigável. Confira algumas amostras do nosso trabalho abaixo e veja como podemos ajudá-lo.</p>
      </b-container>
              
<b-container class="amostras">
      <b-card no-body class="overflow-hidden" style="max-width: 850px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://images.pexels.com/photos/6309808/pexels-photo-6309808.jpeg?cs=srgb&dl=pexels-furkanfdemir-6309808.jpg&fm=jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Atualização em experiência do Usuário">
          <b-card-text class="informacoes">
           Temos muito orgulho deste projeto que foi concebido para tornar o dia-a-dia de nossos clientes mais prático e eficiente. 
           O cliente buscava um design que melhorasse a experiência de seus usuários, e, após um processo colaborativo e inclusivo, conseguimos desenvolver
           um produto que o deixou encantado.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>


  <b-card no-body class="overflow-hidden" style="max-width: 850px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://images.pexels.com/photos/3987011/pexels-photo-3987011.jpeg?cs=srgb&dl=pexels-anna-shvets-3987011.jpg&fm=jpg"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Animação de landing page">
          <b-card-text class="informacoes">
            Na Kors damos a cada projeto a atenção personalizada que merece. Sempre nos esforçamos para entregar projetos com design de primeira linha que dão vida á visão de nossos
            clientes. Este projeto é um ótimo exemplo de como respeitamos os interesses de nossos clientes ao
             criar elementos visuais e interatividade com o usuário.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

  <b-card no-body class="overflow-hidden" style="max-width: 850px; ">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?cs=srgb&dl=pexels-cottonbro-5082576.jpg&fm=jpg"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Design conceitual de aplicativos">
          <b-card-text class="informacoes">
            Quando trabalhamos no projeto Design conceitual de aplicativos, estávamos determinados a produzir
            algo com muito apelo visual, sem que isso comprometesse a funcionalidade. A equipe teve que ir a fundo para desenvolver soluções de programação 
            personalizadas e temos orgulho de dizer que o projeto final teve um resultado fantástico.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
 <b-container class="feed">

 </b-container>
 <b-card no-body class="overflow-hidden" style="max-width: 850px;">

    <b-row no-gutters>

      <b-col md="6">
        <b-card-body title="">
          <b-card-text class="feedback">
            Esse é o parágrafo da seção de feedback.
            Incentive os visitantes do seu site a avaliarem os seus produtos e adicionarem um feedback.
          </b-card-text>
          <b-card-text class="feedback__info">
            O que você achou?
          </b-card-text>
        </b-card-body>
      </b-col>
       <b-col md="6">
        <b-card-img src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg"></b-card-img>
      </b-col>
    </b-row>
  </b-card>
</b-container>

<b-container class="contato">
    

    <b-row >
     
      <b-col  md="6">
        <b-card-body >
          <h4  class="contate-nos">Contate-nos</h4>
          <b-card-text class="contat">
            Av. Bernardino de Campos, 98 <br> São Paulo<br>
            kors@gmail.com<br>
            Tel: (11) 3456-7899
          </b-card-text>
         
        </b-card-body>
      </b-col>
      
       <b-col md="3">
        <label class="label__text" for="input-live">Nome*</label>
          <b-form-input
            id="input-live"
            v-model="name"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Insira seu nome"
            trim
          ></b-form-input>

            <label class="label__text" for="input-live">Telefone</label>
          <b-form-input
            id="input-live"
            v-model="name"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Insira seu Telefone"
            trim
          ></b-form-input>
            
      </b-col>
       <b-col md="3">
        <label class="label__text" for="input-live">Email*</label>
          <b-form-input
            id="input-live"
            v-model="name"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Insira seu Email"
            trim
          ></b-form-input>
            
            <label class="label__text" for="input-live">Endereço</label>
          <b-form-input
            id="input-live"
            v-model="name"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Insira seu Endereço"
            trim
          ></b-form-input>
      </b-col>
    <b-col md="6"></b-col>
      <b-col md="6">
        <label class="label__text" for="input-live">Assunto</label>
          
          <b-form-input
            id="input-live"
            v-model="name"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Insira o Assunto"
            trim
          ></b-form-input>
           <label class="label__text" for="input-live">Mensagem</label>          
          <b-form-input
            id="input-live"
            v-model="name"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Digite sua mensagem aqui"
            trim
            class="mensagem"
          ></b-form-input>
           </b-col>

           <b-col md="6"></b-col>
      <b-col md="6">
       
            <b-button class="botao">Enviar</b-button>
         
           </b-col>
    </b-row>
</b-container>
    <div class="footer">
      <p class="paragrafo__footer">©2021 por Kors.</p>
    </div>

  </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>
#app {

  text-align: center;
  color: #2c3e50;
border: 0;
padding: 0;
margin: 0;
  font-family: 'Sulphur Point', sans-serif;
    
}
.header{
    margin-top: 50px;
  font-family: 'Sulphur Point', sans-serif;
  font-size: 40px;
  border-bottom: 1px solid rgb(105, 104, 104);
  padding-bottom: 20px;
}
.header__link{
  color: black;
   font-family: 'Sulphur Point', sans-serif;
  text-decoration: none;
  
  padding: 5px;
 
}
.header__link:hover{
   color: rgb(131, 128, 128);
}
.main{
   
   padding: 30px 0 30px 0;

 }
 .slogan{
   text-transform: uppercase;
    padding: 50px 0 0 0;
    font-weight: bolder;
    color: rgb(126, 126, 126);
 }
 .slogan__frase{
    padding: 30px 0 30px 0;
 }
 .card-title{
    text-transform: uppercase;
    margin: 20px 0 0 0;
    text-align:center;
    font-weight:bolder;
    color: rgb(126, 126, 126);
 }
 .cards{
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
justify-content:space-evenly;

 }
 
 .card-body{
   text-align: left;
 }
 .sr-only{
   display: none;
 }
 .carousel-1{
  width: 300px;
  justify-content: center!important;
 }
@media (max-width: 992px ) {
    .cards{
    display: none;
  }



  }
  @media (min-width: 992px ) {
    .carousel-1{
     display: none;
  }
  }
 .portfolio{
    text-transform: uppercase;
    padding: 50px 0 70px 0;
 }
 .portfolio__infos{
padding: 0px 0 70px 0;
 }
 .informacoes{
   font-size: 15px;
 }
 .amostras{
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content:space-evenly;

 }
 .contat{
   font-size: 15px;
 }
.contate-nos{
  text-transform: uppercase;
    margin: 20px 0 20px 0;
   
    font-weight:bolder;
    color: rgb(126, 126, 126);
}
 .informacoes{
   padding-top: 20px;
 }
.feedback{
  font-size: 19px;
  padding: 20px;
   color: rgb(48, 48, 48);
}
.feedback__info{
  font-size: 20px;
  font-weight: bolder;
  color: rgb(48, 48, 48);
  padding: 0 20px 0 18px;
}
.feed{
    border-top: 1px solid rgb(131, 129, 129)!important;
    

}
.overflow-hidden{
  margin: 30px;
  background-color:rgb(240, 240, 240)!important;
}

.card{
  border: none!important;
}

.label__text{
  display: flex;
  justify-content: flex-start;
  padding: 5px 0;
  font-weight: bolder;
}
.form-control{
  border: none!important;
  border-bottom: 1px solid rgb(29, 29, 29)!important;
  border-radius: 0!important;
  padding: 10px 0 10px 0 !important;
}
.botao{
  width:  100%;
  height: 80%;
  margin-top: 20px;
  background-color: rgb(0, 0, 0)!important;
  border-radius: 0!important;
 
}
.mensagem{
  
  height: 100px;
  
}
.footer{
height: 90px;
margin: 50px 0 0 0;
  background-color: rgb(99, 98, 98);
}
.paragrafo__footer{
   padding: 30px;
   color: rgba(197, 195, 195, 0.911);
   font-size: 16px;
}
</style>
