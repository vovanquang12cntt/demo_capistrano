class RoomsController < ApplicationController
  before_action :load_room, only: :show

  def index
    @rooms = Room.all
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new room_params
    if @room.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @rooms = Room.all
    @room_message = Message.new room: @room
    @room_messages = @room.messages.includes(:user)
  end

  private

    def room_params
      params.require(:room).permit(:name)
    end

    def load_room
      @room = Room.find params[:id]
    end
end
