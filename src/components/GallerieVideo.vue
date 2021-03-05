<template>
  <div class="GallerieVideo">
    <ul>
      <li>{{titre}}</li>
      <li>{{img}}</li>
      <li>{{site}}</li>
      <li>{{descritpion}}</li>   
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GallerieVideo',
  data: {

      titre: 'yo mama',
      img: 'yomama.png',
      site: 'yomama.com',
      description: 'yo mama yo mama yo mama yo mama yo mama yo mama'

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.GallerieVideo{
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
