import React from "react"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import ChatMessage from "../ChatMessage/ChatMessage"
import "./starredMessage.css"

export default function StarredMessage({ reply }) {
  return (
    <div className="starred-message-container">
      <div className="starred-message-header">
        <div className="person-and-group-info-container">
          <div className="starred-message-profile-picture">
            <ProfilePhoto navProfilePhoto={"starred"} />
          </div>
          <div className="starred-message-person-name">Random Name</div>
          <span className="mini-arrow-right"></span>
          <div className="starred-message-group-name">Random Group</div>
        </div>
        <div className="date-and-arrow-container">
          <div className="date">Friday</div>
          <div className="chat-arrow">
            <svg
              viewBox="0 0 10 21"
              height="21"
              width="10"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enable-background="new 0 0 10 21"
            >
              <path
                fill="currentColor"
                d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="starred-message-body">
        <ChatMessage reply={reply} />
      </div>
    </div>
  )
}