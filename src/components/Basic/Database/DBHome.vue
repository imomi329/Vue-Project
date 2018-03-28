<template>
  <div class="container">
    <h1>Database need be strong!</h1>
    <div class="form-group">
      <router-link to="/dbInit">
        <button class="btn btn-large btn-block btn-primary full-width">Database Init</button>
      </router-link>
    </div>
    <div class="form-group">
      <router-link to="/">
        <button class="btn btn-large btn-block btn-danger full-width">回首頁</button>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
