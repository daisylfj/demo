import Vue from 'vue'
import VueRouter from 'vue-router'
import FAQ from '@/components/FAQ'
import act from '@/components/ACT'
import actchildren from '@/components/ACT-sub'



const VueRouter = [
  {
    path: '/',
    name: 'FAQ',
    component: FAQ
  }，
  {
    path: '/',
    name: 'ACT',
    component: act
  }，
  {
    path: '/',
    name: 'ACT-sub',
    component: actchildren
  }
]
export default VueRouter
