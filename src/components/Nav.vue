<template>
  <nav class="Nav">
    <ul>
      <li v-for="nomSection in nav"  :key="nomSection.nom" @click="choixSection" > 
        <!-- v-bind:navSection="nom" -->
       {{nomSection.nom}}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data(){
        return {
            nav:[
            { nom: "BONJOUR",
             display: true,
            },
            { nom: "VIDÉOS",
             display: false,
            },
            { nom: "IMAGES",
             display: false,
            },
            { nom: "JEUX",
             display: false,
            },
            { nom: "WEB",
             display: false,
            }
          ]
        }
    },
  methods: {
    choixSection: function(){
      this.display = !this.display;
      console.log(this.display);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Nav{
  
  align-self: center;
  height: 100%;
  width: 20vw;
  margin-right: 12wv;
  margin-top: 4vh;

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
  cursor: pointer;

}
li:hover::before{
  content: ">";
  
}

</style>
