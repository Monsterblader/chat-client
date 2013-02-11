var MessageView = Backbone.View.extend ({
  initialize: function(){
    $('#sendMessageButton').on("click", this.createMessage);
  },

  createMessage: function() {
    message.username = $("#uName").val();
    message.text = $("#uMessage").val();
    postMessage();
  },

  render: function(){

  }
});


//Create View of all messages
var MessageListView = Backbone.View.extend ({
  initialize: function(){
    setInterval(function(data){    console.log("You are here");
    var sortedMessages = data.results;
    sortedMessages = _.sortBy(sortedMessages, 'createdAt');
    sortedMessages = _.last(sortedMessages, 10);
    for (var i = 0; i < sortedMessages.length; i++) {
      messagetoHTML(sortedMessages[i].username + " said \'" +
        sortedMessages[i].text + "\' on " + sortedMessages[i].createdAt.slice(0, 10) +
        " at " + sortedMessages[i].createdAt.slice(11, 16) + "<br>");
    }
}, 1000);

  },

  displayAllMessages: function(data) {
    console.log("You are here");
    var sortedMessages = data.results;
    sortedMessages = _.sortBy(sortedMessages, 'createdAt');
    sortedMessages = _.last(sortedMessages, 10);
    for (var i = 0; i < sortedMessages.length; i++) {
      messagetoHTML(sortedMessages[i].username + " said \'" +
        sortedMessages[i].text + "\' on " + sortedMessages[i].createdAt.slice(0, 10) +
        " at " + sortedMessages[i].createdAt.slice(11, 16) + "<br>");
    }
  },
  //how do we want to use showMessage?
  showMessage: function() {
    $("#main").append(message.username + ":" + "<br>" + message.text + "<br>");
    console.log("It worked.");
  },

  //rewrite messagetoHTML to only return messages with HTML tags (no append).
  messagetoHTML: function(newMessage) {
    $("#main").append("<div class='postedMessage'>" + newMessage + "</div>");
  }

});