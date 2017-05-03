let algo2 = {
	templateUrl: 'js/components/algo2/algo2.html',
	controller: [function(){
		'use strict'

		let foldTo=''

		foldTo=(distance)=>{
  			let foldToDo = 0;
  			let thickness = 0.0001;
  			while (thickness < distance){
      			thickness = thickness * 2;
      			foldToDo ++;
  			}			
  
  		return foldToDo;
		}

		  this.distanceT = foldTo(14928418679754190000);
	}]
}

export default algo2