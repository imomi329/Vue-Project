<template>
    <div class="container">
        <h1 style="color:red;">Class 01-01</h1>
        <h2 style="color:red;">文本</h2>
        <br>
        <h3>
            數據綁定最常見的形式就是使用 “Mustache” 語法（雙大括號）的文本插值 ：<br>
            Mustache 標籤將會被替代為對應數據對象上的 world 屬性得值<br>
            而且一直會監聽world的值，一但改變會跟著改變<br><br>
            應用場景 ： 可以說處處都用的到<br><br>
        </h3>
        <p>hello {{world}}</p>
        <p v-text="'hello ' + world"></p>
        <p>{{`hello ${world}`}}</p>
        <p v-text="`hello ${world}`"></p>
        <button class="btn btn-success" @click="world=', Are you happy today?'">改變 wrold 的值</button>
        <button class="btn btn-danger" @click="world='is a beautiful day!'">改變 wrold 的值</button>
        <br><br><br><br>
        <h3>
            以上用了四種寫法<br>
            第一种“Mustache” 语法（双大括号）写法<br>
            第二种 用v-text的指今写法<br>
            第三种和第四是对es6写法的拓展写法，称模板字符串<br>
        </h3>
        <br><br>
        <div class="form-group">
            <router-link to="/sample01">
                <button class="btn btn-large btn-block btn-primary full-width">上一頁</button>
            </router-link>
        </div>
     </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            world : "world's"
        }
    }
}
</script>

作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。