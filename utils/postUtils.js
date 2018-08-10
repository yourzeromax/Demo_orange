
var postUtils =function(id) {
  this.postId=id;
}

postUtils.prototype={
  postList:require('../data/data.js'),

  getPost:function(){
  this.postList
  }
}