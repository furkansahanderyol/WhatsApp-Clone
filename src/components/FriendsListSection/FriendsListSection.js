import React from "react"
import Navbar from "../Navbar/Navbar"
import Archived from "../Archived/Archived"
import SearchFriend from "../SearchFriend/SearchFriend"
import Chat from "../Chat/Chat"

export default function FriendsListSection() {
  return (
    <>
      <div className="friends-list-section-wrapper">
        <div className="navbar-and-searchbar-wrapper">
          <div>
            <Navbar type={"friends-list"} />
          </div>
          <div>
            <SearchFriend />
          </div>
        </div>
        <div className="chat-section-wrapper">
          <Archived />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <footer className="friend-list-footer">
            Your personal messages are{" "}
            <span className="footer-highlighted">end-to-end encrypted</span>
          </footer>
        </div>
      </div>
    </>
  )
}
