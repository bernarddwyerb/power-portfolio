<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg2 }}</h1>
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

}

h1 {
  margin:0;
  font-family: 'VT323', monospace;
  color: rgb(233, 233, 233);
  font-size: 5vw;
  text-shadow: 2px 2px 0 #0000, 4px 4px 0 #9c9c9c;
}
</style>
