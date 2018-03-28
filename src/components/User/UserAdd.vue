<template>
  <div class="container">
    <h4>Add User</h4>
    <form class="well">
      <div class="form-group">
        <label class="pull-left"> Account </label>
        <input type="text" class="form-control" placeHolder="First Name" v-model="User.account">
      </div>
      <div class="form-group">
        <label class="pull-left"> Password </label>
        <input type="passowrd" class="form-control" placeHolder="Last Name" v-model="User.password">
      </div>
      <!-- <div class="form-group">
        <label class="pull-left"> Name </label>
        <input type="text" class="form-control" placeHolder="Name" v-model="User.name">
      </div> -->

      <div class="form-group">
        <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Submit</button>
      </div>
      <div class="form-group">
            <router-link to="/user">
                <button class="btn btn-large btn-block btn-success full-width">回上一頁</button>
            </router-link>
        </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'userAdd',
  data () {
    return {
      User: { account: 'std18', password: '123456' }
    }
  }, methods: {
    addToAPI() {
      let newUser = {
        account: this.User.account,
        password: this.User.password
      }
      console.log(newUser);
      axios.get('http://localhost:8001/User/insert', { params: newUser })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
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
