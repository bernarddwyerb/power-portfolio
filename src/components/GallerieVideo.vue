<template>
  <div class="GallerieVideo">
    <ul>
      <li v-for="video in videos" v-bind:projet="video" :key="video.titre">
                <h3>{{video.titre}}</h3>
                <video width="80%" height="auto" controls>
                <source :src="video.mov" type="video/mp4">
                </video>
                 <p>{{video.description}}</p>
            </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GallerieVideo',
  data(){ 
    return{
      videos:[
      {
      titre: 'Once upon a time in the West - Premier pro',
      mov: require("../assets/media/video/ouatitw.mp4"),
      description: 'Montage photo inspiré de "Once upon a time in the West" édition playmobil'
      },
      {
      titre: 'The Commute - Premier pro',
      mov: require("../assets/media/video/The_Commute.mp4"),
      description: 'Bande annonce utilisant des extraits du film Amélie Poulain afin de créer un tout autre film'
      },
      {
      titre: 'Hypa hypa - After effects ',
      mov: require("../assets/media/video/hypa-hypa.mp4"),
      description: 'courte Animation sur un extrait de hypa hypa de Eskimo callboy '
      },
       {
      titre: 'Bonjour la galaxie! - After effects - Premier pro ',
      mov: require("../assets/media/video/bonjourLaGalaxie.mp4"),
      description: 'génrique d\'une émission matinale dans le monde de Elite:Dangerous '
      }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.GallerieVideo{
 
  align-self: flex-start;
  top: 20vh;
  left: 20%;
  height: 80vh;
}

ul{
  
  display: flex;
  flex-flow: column;
  list-style: none;
  justify-content: flex-start;
  width: 40vw;
  height: 80vh;
  align-self: center;
 
}
li{
  margin-top: 2vh;
  color: darkgrey;
  font-family: 'VT323', monospace;
  font-size: 2em;
  align-self: center;
  margin: 3%;
}
ul:first-child{

  margin-top: 1vh;
}


.GallerieVideo ul {
   padding: 0;
    list-style: none;
}


.GallerieVideo li {
    margin-top: 4vh;
    list-style: none;
}

.GallerieVideo li:last-child {
    padding-bottom: 4vh;


}

.GallerieVideo img{
    
    width: 70%;
    height: auto;
    border: 4px solid white ;

}


</style>
