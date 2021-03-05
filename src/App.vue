<template>
  <div id="app">
     <div class="titre">
      <img id="logo" alt="ma grosse face" src="./assets/moi.png">
      <HelloWorld/> 
     </div>
      <Nav />  
    <GallerieImage />
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
//import GallerieVideo from './components/GallerieVideo.vue'
import GallerieImage from './components/GallerieImage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav,
    GallerieImage
    
  }
}
</script>

<style>
body{
  display: flex;
  background: black;
  background-image: url("../public/background.png") ;
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
  width: 100vw;
  margin: 0;
}

#logo{ 

  width: 30vw;
  height: auto;
  justify-self: flex-start;
  padding-top: 10vh;
}

</style>
