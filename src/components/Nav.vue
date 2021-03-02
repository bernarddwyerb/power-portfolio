<template>
  <nav class="Nav">
    <ul>
      <li>BONJOUR</li>
      <li>IMAGES</li>
      <li>WEB</li>
      <li>VIDÉOS</li>
      <li>JEUX</li>    
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    bonjour: String,
    images: String,
    web: String,
    videos: String,
    jeux: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Nav{
  position: absolute;
  align-self: center;
  top: 20vh;
  left: 20%;
  height: auto;

}

ul{
  display: flex;
  flex-flow: column;
  list-style: none;
  justify-content: flex-start;
  width: 25vw;
  height: auto;
  align-self: center;
}
li{
  color: darkgrey;
  font-family: 'VT323', monospace;
  font-size: 2em;
  align-self: center;
  margin: 3%;
  
}



</style>
