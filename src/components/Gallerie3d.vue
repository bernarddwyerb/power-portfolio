<template>
  <div class="Gallerie3d">
<ul>
    <li v-for="video3d in videos3d" v-bind:projet="video3d" :key="video3d.titre">
                <h3>{{video3d.titre}}</h3>
              
               <iframe loading="lazy" :params="{autoplay: 1}" :src="video3d.lien" :title="video3d.titre"></iframe>
                <p>{{video3d.description}}</p>
            </li>
    </ul>
  </div>
</template>

<script>

import Vue from 'vue'
import Embed from 'v-video-embed'
Vue.use(Embed);

export default {
  name: 'Gallerie3d',
  data(){ 
    return{
      videos3d:[
      {
      titre: 'Nature x Binarire',
      lien: 'https://www.youtube.com/embed/ojaCdzYPXD0',
      site: '',
      description: 'Créer dans le cadre de notre cours de 3d-3 introduction du logo TIM maisonneuve Charles Noël, Geoffroi Henquin'
      },
      {
      titre: 'vaisseau spatial',
      lien: 'https://www.youtube.com/embed/nFZbH78DP4E',
      site: '',
      description: 'Créer dans le cadre de notre cours de 3d-i moyen de transport inspiré d\'animaux  '
      }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.GallerieVideo{
 
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
  width: 90%;
  height: auto;
  align-self: center;
  
}
li{
  color: darkgrey;
  font-family: 'VT323', monospace;
  font-size: 2em;
  align-self: center;
  margin: 3%;
  width: 100%;
}
iframe{
  width: 100%;
  height: 50vh;
}


</style>
