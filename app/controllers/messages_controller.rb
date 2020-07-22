class MessagesController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.all
  end

  def new
  end

  def create
    @message = current_user.messages.create message_params
    if @message.save
      ActionCable.server.broadcast "room_channel", message: @message, current_user_id: current_user.id
    else

    end
  end

  private

  def message_params
    params.require(:message).permit :content
  end
end
