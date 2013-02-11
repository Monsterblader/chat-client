var MessageModel = Backbone.Model.extend ({
  message: {
    username: null,
    text: null
  },
  model: MessageModel,
  url: "https://api.parse.com/1/classes/messages",
  //need to set this up in initialize in messageView
  postMessageToParse: function(){
    this.save({
      contentType:"application/json",
      beforeSend: headerSetter
    });
  }

});


var MessageCollection = Backbone.Collection.extend({
  model: MessageModel.message,
  url: "https://api.parse.com/1/classes/messages",
  //need to set this up in MessageListView
  getAllMessagesFromParse: function(){
    //do we need to 'return' a value from fetch.
    this.fetch({
      beforeSend: headerSetter,
      contentType: "application/json",
    })
  },
  parse: function(response){
    return response.results;
  }
});