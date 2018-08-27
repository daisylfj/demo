import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import actions from './actions'
import mutations from './mutations'



Vue.use(Vuex)

 
const state = {
    projectList:[
            {
              text: 'CNLP2001',
              id:'AAC',
              company:'广东鼎湖山泉有限公司',
              totalcost:'187090',
              billedcost:'18000'
            },
            {
              text: 'CNLP2002',
              id:'Big data',
              company:'狮王日用化工（青岛）有限公司',
              totalcost:'551116',
              billedcost:'28000'
            },
            {
              text: 'CNLP2003',
              id:'CI',
              company:'联合利华（中国）有限公司',
              totalcost:'20543',
              billedcost:'8000'
            },
            {
              text: 'CNLP2004',
              id:'NOL',
              company:'上海陆家嘴国际金融资产交易市场股份有限公司',
              totalcost:'400000',
              billedcost:'68000'
            },
            {
              text: 'CNLP2005',
              id:'Neuro',
              company:'中山市中顺商贸有限公司',
              totalcost:'253340',
              billedcost:'9000'
            },
            {
              text: 'CNLP2006',
              id:'RMS',
              company:'益海嘉里食品营销有限公司',
              totalcost:'990566',
              billedcost:'990566'
            },
            {
              text: 'CNLP2007',
              id:'RMS',
              company:'云南烟草国际有限公司',
              totalcost:'930000',
              billedcost:'30000'
            }
    ],
    cityList: [
                {
                    value: 'AAC',
                    label: 'AAC'
                },
                {
                    value: 'Big data',
                    label: 'Big data'
                },
                {
                    value: 'CI',
                    label: 'CI'
                },
                {
                    value: 'Neuro',
                    label: 'Neuro'
                },
                {
                    value: 'NOL',
                    label: 'NOL'
                },
                {
                    value: 'RMS',
                    label: 'RMS'
                }
    ],
    getFilterResult: '',
    projectNum:'', // 搜索关键字
    resultNum: ''// 保存搜索到的值
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})