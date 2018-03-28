<template>
    <div class="container">
        <h1 style="color:red;">Class 01-05</h1>
        <h2 style="color:red;">使用javascript表達式</h2>
        <br>
        <h3>
            應用場景：在業務場景中一些方法判斷或這簡單得過濾，<br>
            那我們可以用javascript表達式，能讓代碼更簡潔、更清晰，<br>
            比方說用一格三元表達式...等<br><br>
        </h3>
        <div>
            <div id="method1">
                <span>[[method1]]</span><br><br>
                <p>{{ count > 0 ? '-' : '+'}} {{count + 1}}</p>
                <button @click='count ++'>增加</button>
                <button @click='count --'>减少</button>
            </div>
            <br><br><br>
            <div id="method2">
                <span>[[method2]]</span><br><br>
                <input type="text" v-model='message'>
                <h1>{{ message.split('').reverse().join('') }}</h1>
            </div>
        </div>
        <br><br>
        <h3>
            在id:method1裡，我们做了一個對count進行+1，<br>
            對coun進行行三元表達式来進行判斷做出不同的顯示<br><br>
            在id:method2裡，我進行了v-model指令和h1里message進行了雙向綁定，<br>
            隨著message的改變h1裡的值隨著表達式的改變而改變注意事項，<br>
            在官方提出来的這幾種是不可行的
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
              count : 0,
              message : ""
         }
     }
}
</script>

作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。