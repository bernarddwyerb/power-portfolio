<template>
  <div id="app">
     <Nav />  
     <div class="titre">
      <img alt="ma grosse face" src="./assets/moi.png">
      <HelloWorld msg="BERNARD"/> 
      <HelloWorld msg="DWYER-BEAUDET;"/>  
      <Gallerie />
     </div>
  </div>
</template>

<script>
import Gallerie from './components/Gallerie.vue'
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav,
    Gallerie 
  }
}
</script>

<style>
body{
  background: black;
  background-size:  100%;
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
  margin-top: 60px;
  display: flex;
  flex-flow: column;
  
}

#app img{ 
  width: 30vw;
  height: auto;
  justify-self: flex-start;
}
</style>
