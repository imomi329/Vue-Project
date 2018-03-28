<template>
    <div class="container">
        <h1 style="color:red;">Class 01-04</h1>
        <h2 style="color:red;">属性</h2>
        <br>
        <h3>
            在vue中屬性這個東西很關鍵，在組件與組件中數據傳遞時會很有用，<br>
            但是對於屬性得解析我們不能用{}*2 “Mustache” 語法（雙大括號）寫法<br>
            我們同時還是要用指令去解析，那就是v-bind:*, 同時我們可以簡寫用v-bind語法糖：即可<br><br>
            如果我們先不考慮組件傳遞，我們就是考慮簡單的元素加屬性<br>
            應用場景：在組建中傳遞時需要用，其他元素上得綁定屬性都要這個功能<br>
        </h3>

        <div>
            <a :href='href'>href</a>
            <p :id='id'>id</p>
            <img :src="src" alt="图片"/><br>
            <button :disabled = 'disabled'>按钮</button>
        </div>

        <br><br>
        <h3>
            我们在屬性中支持number、string、boolean類型，<br>
            以上顯示能在界面中看出都能正常運行和原本屬性所預期的，<br>
            不用：來綁定的屬性可以直接屬性賦值，如果一定要通過data數據選項中返回的值<br>
            一定要加：<br>
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
            id : 2,
            href : 'http://www.baidu.com',
            src : 'https://cn.vuejs.org/images/logo.png',
            disabled : true
        }
    }
}
</script>
作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。