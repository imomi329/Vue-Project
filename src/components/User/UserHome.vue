<template>
  <div class="container">
    <h1>Member User Role</h1>
    <div class="form-group">
      <router-link to="/users">
        <button class="btn btn-large btn-block btn-primary full-width">User List</button>
      </router-link>
    </div>
    <div class="form-group">
      <router-link to="/userAdd">
        <button class="btn btn-large btn-block btn-success full-width">Add User</button>
      </router-link>
    </div>
    <div class="form-group">
      <router-link to="/#">
        <button class="btn btn-large btn-block btn-info full-width">User Role</button>
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
