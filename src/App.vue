<template>
  <div id="app">
     <div class="titre">
      <img id="logo" alt="ma grosse face" src="./assets/moi.png">
      <HelloWorld/> 
     </div>
      <div class="nav">
      <Nav/>
      </div>  
     <transition-group class="gallerie-cadre" name="component-fade" mode="out-in">
    <GallerieImage v-show="isShowing" key="IMAGES" />
    <Bonjour v-show="isShowing" key="BONJOUR"/>
    </transition-group>
    <!--FsLightbox /-->
    <div class="en-construction">
      <img src="./assets/UnderConstruction.gif" alt="en construction">
      <h1>"Bientôt disponible"</h1>
    </div> 
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
//import GallerieVideo from './components/GallerieVideo.vue'
import GallerieImage from './components/GallerieImage.vue'
import Bonjour from './components/Bonjour.vue'
//import FsLightbox from './components/FsLightbox.vue'
export default {
  name: 'App',
  props: {
  },
  components: {
    HelloWorld,
    Nav,
    GallerieImage,
    Bonjour,
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
     isShowing:false,
    }
 },
 methods: {
  //  changeComponent: function(){
  //    if(nomSection.nom == this.key)
  //     this.changeComponent = !this.changeComponent;
  //     console.log(this.changeComponent);
  // }
}
}
</script>

<style>
body{
  display: flex;
  background: black;
  background-image: url("../public/background.png");
  background-repeat: repeat;
  background-size:  100%;
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
  padding-top: 10vh;
}
.gallerie-cadre ::-webkit-scrollbar {
  display: none;
}
.gallerie-cadre {
  background: black;
  display: flex;
  align-self: flex-end;
  margin-top: 2vh;
  color: rgba(255, 255, 255, 0.541);
  height:75vh;
  scrollbar-width: none;
  justify-content: center;
  width: 42vw;
  border-radius: 5px;
  border: rgb(20, 20, 20) solid 1px;
  box-shadow: inset 1px -2px 1px 0px rgba(255, 254, 254, 0.5)
    
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
