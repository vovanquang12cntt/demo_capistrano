import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Room channel was connected!!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if (data.current_user_id = data.message.user_id) {
      var message = "<p class='p-me'><span class='p-me'>" + data.message.content + "</span></p>"
    } else {
      var message = `<p class='p-other'>${data.user.name}: ${data.message.content}</p>`;
    }
    $('.msg').append(message);
    $('#message_content').val("");
    // Called when there's incoming data on the websocket for this channel
  }
});
