struct UserSocket < Amber::WebSockets::ClientSocket
  channel "chat_room:*", ChatRoomChannel

  def on_connect
    # self.session and self.cookies available here
    # do authentication here
    # !self.session[:user_id].nil?
    # !user.blank?
    true
  end
end
