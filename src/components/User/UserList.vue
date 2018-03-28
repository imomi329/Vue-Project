<template>
  <div class="container">
      <h1>Get User</h1>
      <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th>First Name __________</th>
          <th>Last Name __________</th>
          <th>Age __________</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in User" :key="x">
          <td class="text-left"> {{ x.id }} </td>
          <td class="text-left"> {{ x.name }} </td>
          <td class="text-left"> {{ x.email }} </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/">
        <button class="btn btn-large btn-block btn-success dull-width"> Add User </button>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'user',
  data() {
      return {
          User: [],

      }
  },
  mounted() {
    axios.get('http://localhost:8088/likeName')
    .then((response) => {
        console.log(response.data);
        // let data = response.data.substring(1, response.data.length-2);
        // console.log(JSON.parse(data));
        this.User = response.data;
        console.log(User);
    })
    .catch((error) => {
        console.log(error);
    });
  }
}
</script>

<style>

</style>
