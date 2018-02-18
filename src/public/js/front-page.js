

function Frontpage(){
	this.displayList = []
}

Frontpage.prototype.addArticle = function(article){
	this.displayList.push(article)
}
