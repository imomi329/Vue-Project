import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index' /* Index.vue */

import Sample from '@/components/Sample/Sample00Home' /* Sample00Home.vue */
import Sample01 from '@/components/Sample/Sample01' /* Sample01.vue */
import Sample011 from '@/components/Sample/Sample011' /* Sample011.vue */
import Sample012 from '@/components/Sample/Sample012' /* Sample012.vue */
import Sample013 from '@/components/Sample/Sample013' /* Sample013.vue */
import Sample014 from '@/components/Sample/Sample014' /* Sample014.vue */
import Sample015 from '@/components/Sample/Sample015' /* Sample015.vue */
import Sample016 from '@/components/Sample/Sample016' /* Sample016.vue */
import Sample0161 from '@/components/Sample/Sample0161' /* Sample0161.vue */

import Sample02 from '@/components/Sample/Sample01' /* Sample02.vue */
import Sample03 from '@/components/Sample/Sample01' /* Sample03.vue */

import Basic from '@/components/Basic/BasicHome' /* BasicHome.vue */
import DB from '@/components/Basic/Database/DBHome' /* DBHome.vue */
import DBInit from '@/components/Basic/Database/DBInit' /* DBInit.vue */

import User from '@/components/User/UserHome' /* UserHome.vue */
import UserList from '@/components/User/UserList' /* UserList.vue */
import UserAdd from '@/components/User/UserAdd' /* UserAdd.vue */

Vue.use(Router)
/* eslint-disable */

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    { path: '/sample', name: 'Sample', component: Sample },
      { path: '/sample01', name: 'Sample01', component: Sample01 },
        { path: '/sample011', name: 'Sample011', component: Sample011 },
        { path: '/sample012', name: 'Sample012', component: Sample012 },
        { path: '/sample013', name: 'Sample013', component: Sample013 },
        { path: '/sample014', name: 'Sample014', component: Sample014 },
        { path: '/sample015', name: 'Sample015', component: Sample015 },
        { path: '/sample016', name: 'Sample016', component: Sample016 },
          { path: '/sample0161', name: 'Sample0161', component: Sample0161 },
      { path: '/sample02', name: 'Sample02', component: Sample02 },
      { path: '/sample03', name: 'Sample03', component: Sample03 },
    { path: '/basic', name: 'Basic', component: Basic },
      { path: '/db', name: 'DB', component: DB },
      { path: '/dbInit', name: 'DBInit', component: DBInit },
    { path: '/user', name: 'User', component: User },
      { path: '/users', name: 'UserList', component: UserList },
      { path: '/userAdd', name: 'UserAdd', component: UserAdd }
  ]
})


