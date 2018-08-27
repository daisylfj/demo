// 提交 mutations是更改Vuex状态的唯一合法方法
const CHANGE_RESULT = 'CHANGE_RESULT'
const SET_PROJECTNUM = 'SET_PROJECTNUM'
const ADD_FILTER = 'ADD_FILTER'

export default {
	[CHANGE_RESULT](state,name) { // A组件点击更改餐馆名称为 A餐馆
	    state.getFilterResult = name // 把方法传递过来的参数，赋值给state中的resturantName
	},
	[SET_PROJECTNUM](state,name) { // A组件点击更改餐馆名称为 A餐馆
	    state.projectNum = name // 把方法传递过来的参数，赋值给state中的resturantName
	},
	[ADD_FILTER](state) {
		state.filters.push({ key: databaseFilter[0].key, val: null });
	},
}
