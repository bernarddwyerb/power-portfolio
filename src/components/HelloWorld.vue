<template>
  <div class="hello">
    <h1 class="b">BERNARD</h1>
    <h1 class="db">DWYER-BEAUDET;</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    msg2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  display: flex;
  flex-direction: column;
  width: 30vw;
  text-align: left;

}

.b  {

  font-family: 'VT323', monospace;
  color: rgb(233, 233, 233);
  font-size: 12vh;
  text-shadow: 2px 2px 0 #0000, 4px 4px 0 #9c9c9c;
  margin:0;
}
.db {
  font-family: 'VT323', monospace;
  color: rgb(233, 233, 233);
  font-size: 12vh;
  text-shadow: 2px 2px 0 #0000, 4px 4px 0 #9c9c9c;
  margin: 0;
}
</style>
