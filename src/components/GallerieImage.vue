<template>
    <div class="image-template">
        <ul>
            <li v-for="image in image" v-bind:projet="image" :key="image.titre">
                <h3>{{image.titre}}</h3>
                <img :src="image.src"/>
                 <p></p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'projetImage',
    data() {
        return{
            image: [
                {   
                    titre: "Anachronisme - Photoshop",
                    src:require("../assets/media/image/anachronisme.png"),
                    desc: "imaginer une publicité d'un produit d'aujourd'hui à une autre époque dans le cadre du cours d'images numérique"
                },
                {   
                    titre: "Affiche Knud Knudson - Illustrator",
                    src:require("../assets/media/image/knud_poster.png"),
                    desc: "affiche du concept de jeu 2d"
                },
                {   
                    titre: "Knud Knudson items - Illustrator",
                    src:require("../assets/media/image/knud_item.png"),
                    desc: "assets fait pour le jeu knud knudson"
                },
                {   
                    titre: "Knud Knudson sprite d'animatiion - Illustrator",
                    src:require("../assets/media/image/knud_sprite.png"),
                    desc: "sprit d'animation fait pour le jeu"
                },
                {   
                    titre: "Ocean clean up - Illustrator",
                    src:require("../assets/media/image/ocean_cleanup.png"),
                    desc: "affiche poduite pour le jour de la tere"
                },

            ]
        }
        
    }
}
</script>
<style>

.image-template::-webkit-scrollbar {
  display: none;
}
.image-template{

    overflow: scroll;
}

.image-template ul {
   padding: 0;
    list-style: none;
}


.image-template li {
    margin-top: 4vh;
    list-style: none;
}

.image-template li:last-child {
    padding-bottom: 4vh;


}

.image-template img{
    
    width: 70%;
    height: auto;
    border: 4px solid white ;

}


</style>
