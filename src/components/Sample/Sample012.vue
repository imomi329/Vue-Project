<template>
    <div class="container">
        <h1 style="color:red;">Class 01-02</h1>
        <h2 style="color:red;">v-once</h2>
        <br>
        <h3>
            通過指令我們可以對文本值進行一次性賦值操作<br>
            只進行第一次的數據渲染，如果再次改變值，文本值也不會改變<br><br>
            應用場景 ： 一般是用在组件樹中傳遞時，導致组件數據一層一層傳遞時，變改了不需要改變的場景<br>
            用v-once可以避免在组件數中只需用一次性赋值操作<br><br>
        </h3>

        <h4 style="color:blue;">v-once(X)</h4>
        <p>hello {{world}}</p>

        <h4 style="color:blue;">v-once(O)</h4>
        <p v-once>hello {{world}}</p>

        <button class="btn btn-danger" @click="world='is a beautiful day!'">CHANGE BUTTON</button>
        <br><br><br><br>
        <h3>
            我們再次點擊button時，我們會發現沒有任何改變，執行了所謂的一次性賦值
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
            world : "world"
        }
    }
}
</script>

作者：混元霹雳手ziksang
链接：https://juejin.im/post/58d4a19e5c497d0057e9afc0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。