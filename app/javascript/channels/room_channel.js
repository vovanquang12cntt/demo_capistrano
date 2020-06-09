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
    console.log(data);
    $('.msg').append(`<p>${data.user.name} :${data.content}</p>`);
    $('#message_content').val("");
    // Called when there's incoming data on the websocket for this channel
  }
});
