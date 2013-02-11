// var message = {
//   username: null,
//   text: null
// }


//PostMessage sends msg data to parse
//move to messageModel
// var postMessage = function() {
//   // $.ajax("https://api.parse.com/1/classes/messages", {
//     beforeSend: headerSetter,
//     type: "POST",
//     contentType: "application/json",
//     data: JSON.stringify(message),
//     // need to remove 'success' function to separate function and execute it in messageView
//     // success: function() {
//     //   $("#main").append(message.username + ":" + "<br>" + message.text + "<br>");
//     //   console.log("It worked.");
//     // },
//     // end remove 'success'
//     error: function(data){
//       console.log(data);
//     }
//   });
// };

// var messageGetter = {
//   lastCheck: 0,

//   getMessages: function() {
//     $.ajax("https://api.parse.com/1/classes/messages", {
//       beforeSend: headerSetter,
//       contentType: "application/json",
//       success: this.onGetMessages.bind(messageGetter)
//     });
//   },

//   onGetMessages: function(data){
//     // debugger;
//     var sortedMessages = data.results;
//     if (this.lastCheck) {
//       sortedMessages = _.filter(data.results, function(message) {
//         return new Date(message.createdAt) > this.lastCheck;
//       }, this);
//     }
//     sortedMessages = _.sortBy(sortedMessages, 'createdAt');
//     for (var i = 0; i < sortedMessages.length; i++) {
//       messagetoHTML(sortedMessages[i].username + " said \'" +
//         sortedMessages[i].text + "\' on " + sortedMessages[i].createdAt.slice(0, 10) +
//         " at " + sortedMessages[i].createdAt.slice(11, 16) + "<br>");
//     }
//     this.lastCheck = new Date();
//   }
// };

// var createMessage = function() {
//   message.username = $("#uName").val();
//   message.text = $("#uMessage").val();
//   postMessage();
// };

// var messagetoHTML = function(newMessage) {
//   $("#main").append("<div class=\"postedMessage\">" + newMessage + "</div>");
// };

// var convertDate = function() {

// };

// messageGetter.getMessages();
// setInterval(messageGetter.getMessages.bind(messageGetter), 1000);