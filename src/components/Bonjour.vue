<template>
    <div>
        <h1>Qui suis-je ?</h1>
        <p>{{texte}}</p>
        <p>{{texte2}}</p>
        <p>{{email}}</p>

    </div>
</template>
<script>
export default {
    name:'bonjour',
    data() {
        return{
        visible :true,
        texte:"Il y a déjà plusieurs années que je cherche ce que je veux faire quand je serai grand. J’ai enfin découvert que je suis créatif et aime concevoir des projets en design et jeux vidéos. je vous présente quelques-unes de mes réalisations. J'ai travailler longtemps en hôtellerie et par la suite en transport et logistique avant d'aboutir dans le secteur du multimédia.",
        texte2:"N'hésitez pas à me contacter pour tout vos besoins en multimédia. J'ai hâte de participer à vos projets!",
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
    color:  rgb(182, 178, 178);
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0 2vw;
}

h1{
  color:  rgb(182, 178, 178);
  font-family: 'VT323', monospace;
  font-size: 3rem;
}
p{
    color: rgb(182, 178, 178);
    padding: 2vh 2vw;   
}



</style>
