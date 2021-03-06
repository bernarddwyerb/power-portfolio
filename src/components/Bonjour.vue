<template>
    <div class="bonjour" v-if="visible">
        <h1>Bonjour!</h1>
        <p>{{texte}}</p>
        <p>{{email}}</p>

    </div>
</template>
<script>
export default {
    name:'bonjour',
    data() {
        return{
        visible :true,
        texte:"Il y a déjà plusieurs années que je cherche ce que je veux faire quand je serai grand. J’ai enfin découvert que je suis créatif et aime concevoir des projets en design et jeux vidéos.",
        email : "bernarddwyerb@gmail.com"
        }
    }        
}

</script>
<style>

.bonjour::-webkit-scrollbar {
  display: none;
}

.bonjour{
    
    scrollbar-width: none;
    color: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0 2vw;
}




</style>
