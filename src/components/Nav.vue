<template>
  <nav class="Nav">
    <ul>
      <li v-for="nomSection in nav"  :key="nomSection.nom" @click="isShowing = !true" > 
       {{nomSection.nom}}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props:{
    isShowing: Boolean 
  },
  data(){
        return {
          
          nav:[
            { nom: "BONJOUR",
             isShowing: true,
            },
            { nom: "VIDÉOS",
             isShowing: false,
            },
            { nom: "IMAGES",
             isShowing: false,
            },
            { nom: "JEUX",
             isShowing: false,
            },
            { nom: "WEB",
             isShowing: false,
            }
          ] 
        }
    },
  methods: {
    // toggleComponent: function(){
    //   this.changeComponent = !this.changeComponent;
    //   console.log(this.changeComponent);
    // }
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
  flex-flow: column nowrap;
  list-style: none;
  justify-content: flex-start;
  width: 16vw;
  height: auto;
  align-self: center;
  margin-right: 10vw;
}
li{
  color: darkgrey;
  font-family: 'VT323', monospace;
  font-size: 3rem;
  align-self: flex-end;
  
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
