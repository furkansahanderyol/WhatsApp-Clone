import React, { useContext, useEffect, useState } from "react"
import ChatMessage from "../ChatMessage/ChatMessage"
import Navbar from "../Navbar/Navbar"
import TypeMessage from "../TypeMessage/TypeMessage"
import { v4 as uuidv4 } from "uuid"
import { DatabaseContext } from "../../App"
import "./directMessage.css"

export default function DirectMessage(props) {
  const {
    selectedWallpaper,
    doodles,
    setDoodles,
    starredMessage,
    setStarredMessage,
    messageHistory,
    setMessageHistory,
    theme
  } = props
  const [database, setDatabase, userId, setUserId] = useContext(DatabaseContext)
  const [replyMessage, setReplyMessage] = useState([])

  let directBodyStyles
  const selectedMessage = database.filter(messages => {
    return messages.id === userId
  })

  const selectedUserId = selectedMessage[0].id

  const selectedUser = selectedMessage.find(message => message.id === userId)

  const starredMessages = selectedUser.messages.filter(message => {
    return message.starred === "true"
  })

  const selectedUserName = selectedUser.userName

  const userProfilePhotoURL = selectedUser.userProfilePhoto

  const [renderMessages, setRenderMessages] = useState(
    [...selectedUser.messages].reverse()
  )

  if (doodles) {
    directBodyStyles = {
      display: "flex",
      flexDirection: "column-reverse",
      backgroundColor: `${selectedWallpaper}`,
      backgroundImage:
        "url(../../wpBackgroundDoodle/wp-background-doodle.png) repeat",
      backgroundBlendMode: "overlay",
      position: "relative",
      padding: "40px",
      paddingBottom: "15px",
      gap: "5px",
      overflow: "hidden",
      overflowY: "auto",
      height: "100%"
    }
  } else {
    directBodyStyles = {
      display: "flex",
      flexDirection: "column-reverse",
      background: `${selectedWallpaper} url(../../wpBackgroundDoodle/wp-background-doodle.png) repeat`,
      backgroundBlendMode: "overlay",
      position: "relative",
      padding: "40px",
      paddingBottom: "15px",
      gap: "5px",
      overflow: "hidden",
      overflowY: "auto",
      height: "100%"
    }
  }
  useEffect(() => {
    setRenderMessages([...selectedUser.messages].reverse())
  }, [userId])

  useEffect(() => {
    setRenderMessages([...selectedUser.messages].reverse())
  }, [messageHistory])

  return (
    <div className="direct-message-container">
      <div className="direct-message-header-wrapper">
        <Navbar
          type={"direct-message"}
          userProfilePhoto={userProfilePhotoURL}
        />
      </div>
      <div style={directBodyStyles} className="direct-message-body">
        {renderMessages.map(message => {
          if (message.type === "incoming") {
            return (
              <div className={"incoming-message"} key={uuidv4()}>
                <ChatMessage
                  location={"direct-message"}
                  id={message.id}
                  origin={message.type}
                  message={message.message}
                  starred={message.starred}
                  time={message.time}
                  reply={message.reply}
                  status={message.status}
                  deleted={message.delete}
                  repliedMessage={message.repliedMessage}
                  contactName={message.contactName}
                  replyMessage={replyMessage}
                  setReplyMessage={setReplyMessage}
                  selectedUserName={selectedUserName}
                  userId={userId}
                  database={database}
                  starredMessage={starredMessage}
                  setStarredMessage={setStarredMessage}
                  messageHistory={messageHistory}
                  setMessageHistory={setMessageHistory}
                  theme={theme}
                />
              </div>
            )
          } else if (message.type === "outgoing") {
            return (
              <div className={"outgoing-message"} key={uuidv4()}>
                <ChatMessage
                  location={"direct-message"}
                  id={message.id}
                  origin={message.type}
                  message={message.message}
                  starred={message.starred}
                  time={message.time}
                  reply={message.reply}
                  status={message.status}
                  deleted={message.delete}
                  repliedMessage={message.repliedMessage}
                  contactName={message.contactName}
                  replyMessage={replyMessage}
                  setReplyMessage={setReplyMessage}
                  userId={userId}
                  database={database}
                  starredMessage={starredMessage}
                  setStarredMessage={setStarredMessage}
                  messageHistory={messageHistory}
                  setMessageHistory={setMessageHistory}
                  theme={theme}
                />
              </div>
            )
          }
        })}
      </div>
      <div className="type-area">
        <TypeMessage
          selectedUserId={selectedUserId}
          replyMessage={replyMessage}
          setReplyMessage={setReplyMessage}
          messageHistory={messageHistory}
          setMessageHistory={setMessageHistory}
          key={uuidv4()}
        />
      </div>
    </div>
  )
}
