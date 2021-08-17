<!--
 * @Author: your name
 * @Date: 2021-06-13 23:28:12
 * @LastEditTime: 2021-08-11 18:40:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/components/Test.vue
-->
<template>
  <div class="container">
    <p class="transition-p">{{ testText }}</p>
    <ul class="my-ul">
      <li><span>111</span></li>
      <li>222</li>
      <li>333</li>
    </ul>
    <button @click="goHello">hello></button>
    <!-- <h2>{{$attrs}}</h2> -->
    <div v-for="item in list" :ref="setItemRef" :key="item"></div>
    <div class="test-inline-flex">
      <div class="test-div"></div>
      <div class="test-div"></div>
      <div class="test-div"></div>
      <div class="test-div"></div>
    </div>
    <Icon class="trigger"/>
  </div>
</template>
<script>
import { ref, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Icon } from 'ant-design-vue';
export default {
  components:{ Icon },
  setup() {
    let list = [
      111,222,333
    ];
    const route = useRoute();
    const router = useRouter();
    const testText = ref("test.....");
    let itemRefs = reactive([]);
    // composition api 获取refs的方式 取与refs同名的 值设为null
    const testDiv = ref(null);
    onMounted(() => {
      console.log(route.query);
      const {data:list} = {data:['1','2']};
      console.log(list,'-------------------');
      console.log('itemRefs',itemRefs);
    });
    const goHello = () => {
      // router.push({path:'/home',query:{from:route.query.from,msg:'hello'}});
      // router.push({name:'home',params:{msg:'params-hello'}});
      router.push({ path: "/home/222222" });
    };
    const setItemRef = el => {
      if (el) {
        itemRefs.push(el)
      }
    }
    return {
      testDiv,
      testText,
      goHello,
      list,
      setItemRef,
      itemRefs
    };
  },
};
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
.container {
  .test-inline-flex{
    background-color: pink;
    display: flex;
    .test-div{
      width: 100px;
      height: 100px;
      background-color: green;
      margin-right: 10px;
    }
    
  }
  .test-inline-flex :nth-child(2){
      height: 200px;
  }

  .transition-p{
    color: pink;
  }
  .transition-p:hover{
    color: green;
    transition: color 2s;
  }
  .my-ul{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      span{
        background-color: pink;
      }
      // display: inline-block;
    }
  }

}
</style>