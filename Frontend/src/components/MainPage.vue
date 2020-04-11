<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <b-button>Button</b-button>
            <b-button variant="danger">Button</b-button>
            <b-button variant="success">Button</b-button>
            <b-button variant="outline-primary">Button</b-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
