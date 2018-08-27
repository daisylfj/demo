export default {
		getProjectItem: (state) => {
			let filterList = state.projectList.filter(function(obj){
				return obj.text === state.projectNum
			});
			if (filterList.length > 0) {
				return filterList[0];
			} else {
				return {}

			}
		} 
}