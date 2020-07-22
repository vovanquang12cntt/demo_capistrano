class AddRoomIdToMessagesTable < ActiveRecord::Migration[6.0]
  def change
    add_reference :messages, :room, index: true
  end
end
