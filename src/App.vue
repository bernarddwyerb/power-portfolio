<template>
  <div id="app">
     <div class="titre">
      <img id="logo" alt="ma grosse face" src="./assets/moi.png">
      <HelloWorld/> 
     </div>
      <div class="nav">
      <Nav/>
      </div>  
     <div class="gallerie-cadre" >
       <router-view></router-view>
     </div>
    <!--FsLightbox /-->
    <div class="en-construction">
      <img src="./assets/UnderConstruction.gif" alt="en construction">
      <h1>"Bientôt disponible"</h1>
    </div> 
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import VueRouter from 'vue-router'
import Embed from 'v-video-embed'
Vue.use(VueRouter)
Vue.use(Embed);

export default {
  name: 'App',
  props: {
  },
  components: {
    HelloWorld,
    Nav,
    // GallerieImage,
    // Bonjour,
    //FsLightbox
    // 'v-a': {
    //   template: '<GallerieImage />'
    // },
    // 'v-b': {
    //   template: '<Bonjour />'
    // }
  },
 data(){
      return {
    }
 },
 methods: {

}
}
</script>

<style>
body{
  display: flex;
  background: black;
  background-image: url("../public/background.png");
  background-repeat: repeat;
  height: 100%;
  width: 100%;
  margin: 0;
}
.titre{
  display: flex;
  flex-direction: column;  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2vh;
  display: flex;
  flex-flow: row;
  flex-flow: wrap;
  justify-content: center;
  width: 100vw;
  margin: 0;
}

#logo{ 

  width: 30vw;
  height: auto;
  justify-self: flex-start;
  padding-top: 0vh;
}

.gallerie-cadre::-webkit-scrollbar {
  display: none;
}

.gallerie-cadre {
  background: black;
  display: flex;
  align-self: flex-start;
  margin-top: 2vh;
  color: rgba(255, 255, 255, 0.541);
  height:90vh;
  scrollbar-width: 0;
  justify-content: center;
  width: 42vw;
  border-radius: 5px;
  border: rgb(255, 255, 255) solid 1px;
  box-shadow: inset 1px -2px 1px 0px rgba(255, 254, 254, 0.5);
  overflow: scroll;  
}
.en-construction{

  display: none;
}

@media (max-width: 900px) {

#app{

  height: 100%;
}

.titre{
  display: none;
}
.gallerie-cadre{
  display: none;
}
.nav{
   display: none;
}
.en-construction{
display: flex;
flex-direction: column;
justify-content: center;
color:white
}
.en-construction:hover::after {

  content: "lol";
}
}

</style>
