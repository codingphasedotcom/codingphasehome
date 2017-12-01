class HomeController < ApplicationController
  def index
    @users = ["Joe", "Charly"]
    UserSocket.broadcast("message", "chat_room:123", "msg:new", {"message" => "message sent from a controller"})
    session["user"] = "joe"
    render("index.slang")
  end
end
