<template>
  <nav class="Gallerie">
    <ul>
      <li v-if="item in items">{{items.titre}}</li>
      <li>{{img}}</li>
      <li>{{site}}</li>
      <li>{{descritpion}}</li>   
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Gallerie',
  props: {
    titre: String,
    img: String,
    site: String,
    descritpion: String,
  },
  items: [
    {titre: 'il était un fois dans l\'est', media: './media/video/ouatitw.mp4' , descritpion: ''},
    {titre: 'il était un fois dans l\'est'},

  ]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Gallerie{
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
