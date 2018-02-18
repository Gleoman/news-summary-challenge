/* eslint-disable */

describe("The front page should provide a list of articles", function(){
	it("Should have an empty list/array if no articles have been provided", function(){
		var frontpage = new Frontpage()
		console.log(assert.isEmpty(frontpage.displayList))
	})
})
