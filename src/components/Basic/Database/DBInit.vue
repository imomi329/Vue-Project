<template>
    <div class="container" style="margin-top:150px">
        <h1>ＤＢ initialization</h1>
        <form>
            <div class="well">
                <div class="form-group" style="margin-top:50px">
                    <label class="pull-left"> Database Name </label>
                    <input type="text" class="form-control text-center" placeHolder="Database Name" v-model="initDB.name">
                </div>
                <div class="form-group" style="margin-top:100px">
                    <label class="pull-left"> Database Charset (Encoding) </label>
                    <input type="text" class="form-control text-center" placeHolder="Coding Type" v-model="initDB.charset">
                </div>
                <div class="form-group" style="margin-top:100px">
                    <label class="pull-left"> Database Collation </label>
                    <input type="text" class="form-control text-center" placeHolder="Coding Type" v-model="initDB.collation">
                </div>
            </div>

            <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="create" style="margin-top:100px">CREATE</button>
            <button type="submit" class="btn btn-large btn-block btn-danger full-width" @click="drop">DROP</button>
        </form>
        <div class="form-group">
            <router-link to="/db">
                <button class="btn btn-large btn-block btn-success full-width">回上一頁</button>
            </router-link>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
    name: 'DBInit',
    data () {
        return {
            msg: 'Welcome to your Vue.js App',
            initDB: { name: 'testABC', charset: 'utf8', collation: 'utf8_general_ci' }
        }
    }, methods: {
        create() {
            let newDB = {
                name: this.initDB.name,
                charset: this.initDB.charset,
                collation: this.initDB.collation
            }
            console.log(newDB);
            axios.get('http://localhost:8001/DB/Init', { params: newDB })
            .then((response) => {
                console.log(response.data);
                alert(response.data.data);
                axios.get('http://localhost:8001/Table/create', { params: {databaseName: this.initDB.name}})
                .then((response) => {
                    console.log(response.data);
                    alert(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
                //if(response.data.code == "1") {
                //    this.$router.push({ path: 'DB' })
                //}
            })
            .catch((error) => {
                console.log(error);
            })
        },
        drop() {
            console.log(this.initDB.name);
            axios.get('http://localhost:8001/DB/Drop', { params: {name: this.initDB.name}})
            .then((response) => {
                console.log(response.data);
                alert(response.data.data);
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
