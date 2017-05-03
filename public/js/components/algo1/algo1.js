let algo1 = {
	templateUrl: 'js/components/algo1/algo1.html',
	controller: [function(){
		'use strict'

		let friend = ''

		friend=(friends)=>{

  			let trueFriend = []
  				friends.forEach(function(person) {
    				if (person.length === 4){
      					trueFriend.push(person);
    				}
  				})
  			return trueFriend;
		}

		this.myFriends = friend(["Ryan", "Kieran", "Mark"])
	}]
}

export default algo1