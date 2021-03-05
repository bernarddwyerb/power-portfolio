<template>
  <nav class="Nav">
    <ul>
      <li>BONJOUR</li>
      <li>VIDÉOS</li>
      <li>IMAGES</li>
      <li>JEUX</li>
      <li>WEB</li>
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
  
  align-self: center;
  height: 100%;
  width: 10wh;
  margin-right: 12wv;
}

ul{
  display: flex;
  flex-flow: column;
  list-style: none;
  justify-content: flex-start;
  width: 15vw;
  height: auto;
  align-self: center;
}
li{
  color: darkgrey;
  font-family: 'VT323', monospace;
  font-size: 4em;
  align-self: flex-end;
  margin: 3%;
  text-shadow: 1px 1px 5px rgba(255, 253, 253, 0), 1px 2px 0 #9c9c9c;
  
}
li:hover{

  color: white;
  border-style: 1px sold red;

}
li:hover::before{
  content: ">";
}

</style>
