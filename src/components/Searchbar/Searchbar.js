import React from "react"
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg"
import { ReactComponent as BackArrowIcon } from "../../icons/back-arrow.svg"
import "./searchbar.css"

export default function Searchbar(props) {
  const {
    type,
    setSearchedEmojis,
    setSearchedGifs,
    setSearchedStickers,
    setSearchedChatEmojis
  } = props

  let placeholder = ""
  let styleInput = {}
  let styleArrowAndSearchbar = {}

  if (type === "search friend") {
    styleInput = {
      border: "none",
      backgroundColor: "var(--navbar-theme-color-dark)",
      color: "var(--searchbar-text-color-dark)",
      outline: "none",

      width: "100%",
      marginTop: "0",
      padding: "0.5rem 3rem",
      borderRadius: "0.6em"
    }

    styleArrowAndSearchbar = {
      position: "absolute",
      top: "20%",
      left: "3%",
      color: "var(--searchbar-text-color-dark)"
    }

    placeholder = "Search or start a new chat"
  } else if (type === "new chat") {
    styleInput = {
      border: "none",
      backgroundColor: "var(--navbar-theme-color-dark)",
      color: "var(--searchbar-text-color-dark)",
      outline: "none",

      width: "100%",
      marginTop: "0.4rem",
      padding: "0.7rem 3rem",
      borderRadius: "0.6em"
    }

    styleArrowAndSearchbar = {
      position: "absolute",
      top: "25%",
      left: "3%",
      color: "var(--searchbar-text-color-dark)"
    }

    placeholder = "Search contacts"
  } else if (type === "emoji-search") {
    styleInput = {
      border: "none",
      outline: "none",
      margin: "0",
      padding: "10px 5px",
      width: "1000px",
      borderRadius: "0.2em",
      backgroundColor: "var(--panel-background)",
      position: "relative"
    }

    styleArrowAndSearchbar = {
      display: "none"
    }

    placeholder = "Search Emoji"
  } else if (type === "gif-search") {
    styleInput = {
      border: "none",
      outline: "none",
      margin: "0",
      padding: "10px 5px",
      width: "950px",
      borderRadius: "0.2em",
      backgroundColor: "var(--panel-background)",
      position: "relative"
    }

    styleArrowAndSearchbar = {
      display: "none"
    }

    placeholder = "Search GIFs via Tenor"
  } else if (type === "sticker-search") {
    styleInput = {
      border: "none",
      outline: "none",
      margin: "0",
      padding: "10px 5px",
      width: "950px",
      borderRadius: "0.2em",
      backgroundColor: "var(--panel-background)",
      position: "relative"
    }

    styleArrowAndSearchbar = {
      display: "none"
    }

    placeholder = "Search  via WhatsApp sticker store"
  } else if (type === "emoji-search-reaction") {
    styleInput = {
      border: "none",
      outline: "none",
      margin: "0",
      padding: "10px 5px",
      width: "375px",
      borderRadius: "0.2em",
      position: "relative"
    }

    styleArrowAndSearchbar = {
      display: "none"
    }

    placeholder = "Search Reaction"
  }

  function handleEmojiSearch(e) {
    const reactionsContainer = document.querySelector(".reactions-container")
    const emojiContainer = reactionsContainer.querySelector(".emojis-container")
    const searchedEmojisContainer =
      reactionsContainer.querySelector(".searched-emojis")
    const value = e.target.value.toLowerCase()
    const emojis = [...document.querySelectorAll(".emoji-wrapper")]

    if (e.target.value === "") {
      emojiContainer.style.display = "block"
      searchedEmojisContainer.style.display = "none"
    } else {
      emojiContainer.style.display = "none"
      searchedEmojisContainer.style.display = "grid"
    }

    const array = []

    const matchedValues = emojis
      .filter(emoji => {
        const attribute = emoji.getAttribute("emojiname")
        return attribute?.includes?.(value)
      })
      .map(value => {
        const valueAttribute = value.getAttribute("emojiname")

        const em = {
          emoji: value.textContent,
          emojiName: valueAttribute
        }

        if (array.some(emoji => emoji.emojiName === em.emojiName)) return
        array.push(em)
      })

    setSearchedEmojis([...array])
  }

  function handleGifSearch(e) {
    const reactionsContainer = document.querySelector(".reactions-container")
    const emojiContainer = reactionsContainer.querySelector(".gifs-container")
    const searchedGifsContainer =
      reactionsContainer.querySelector(".searched-gifs")
    const value = e.target.value.toLowerCase()
    const gifs = [...document.querySelectorAll(".gif-img")]

    if (value !== "") {
      emojiContainer.style.display = "none"
      searchedGifsContainer.style.display = "block"
    } else {
      searchedGifsContainer.style.display = "none"
      emojiContainer.style.display = "block"
    }

    const array = []

    const matchedValues = gifs.filter(gif => {
      const attribute = gif.getAttribute("gifname")
      return attribute?.includes?.(value)
    })

    matchedValues.map(value => {
      const valueAttribute = value.getAttribute("gifname").toLowerCase()
      const gif = {
        gifName: valueAttribute,
        link: value.src
      }

      if (array.some(item => item.gifName === gif.gifName)) return

      array.push(gif)
    })

    setSearchedGifs([...array])
  }

  function handleStickerSearch(e) {
    const reactionsContainer = document.querySelector(".reactions-container")
    const stickersContainer = reactionsContainer.querySelector(
      ".stickers-container"
    )
    const searchedStickersContainer =
      reactionsContainer.querySelector(".searched-stickers")
    const value = e.target.value.toLowerCase()
    const stickers = [...document.querySelectorAll(".sticker-img")]

    if (value !== "") {
      stickersContainer.style.display = "none"
      searchedStickersContainer.style.display = "block"
    } else {
      searchedStickersContainer.style.display = "none"
      stickersContainer.style.display = "block"
    }

    const array = []

    const matchedValues = stickers.filter(sticker => {
      const attribute = sticker.getAttribute("stickername")
      return attribute?.includes?.(value)
    })

    matchedValues.map(value => {
      const valueAttribute = value.getAttribute("stickername").toLowerCase()

      const sticker = {
        stickerName: valueAttribute,
        link: value.src
      }

      if (array.some(item => item.stickerName === sticker.stickerName)) return

      array.push(sticker)
    })
    setSearchedStickers([...array])
  }

  function handleEmojiReactionSearch(e) {
    const container = e.target.closest(".emojis-list")
    const reactionEmojiChat = container.querySelector(".reaction-emoji-chat")
    const emojisContainer = container.querySelector(
      ".emojis-container-message-chat"
    )
    const searchedEmojisContainer = container.querySelector(
      ".searched-emojis-chat"
    )
    const value = e.target.value.toLowerCase()
    const emojis = [...document.querySelectorAll(".emoji-wrapper")]

    if (e.target.value === "") {
      emojisContainer.style.display = "block"
      searchedEmojisContainer.style.display = "none"
    } else {
      emojisContainer.style.display = "none"
      searchedEmojisContainer.style.display = "grid"
    }

    const array = []
    const matchedValues = emojis
      .filter(emoji => {
        const attribute = emoji.getAttribute("emojiname")
        return attribute?.includes?.(value)
      })
      .map(value => {
        const valueAttribute = value.getAttribute("emojiname")
        const em = {
          emoji: value.textContent,
          emojiName: valueAttribute
        }
        if (array.some(emoji => emoji.emojiName === em.emojiName)) return
        array.push(em)
      })
    setSearchedChatEmojis([...array])
  }

  return (
    <div
      onInput={e => {
        if (type === "emoji-search") {
          handleEmojiSearch(e)
        } else if (type === "gif-search") {
          handleGifSearch(e)
        } else if (type === "sticker-search") {
          handleStickerSearch(e)
        } else if (type === "emoji-search-reaction") {
          handleEmojiReactionSearch(e)
        }
      }}
      className="searchbar-wrapper"
    >
      <input style={styleInput} placeholder={placeholder}></input>
      <div style={styleArrowAndSearchbar} className="search-icon">
        <SearchIcon />
      </div>
      <div style={styleArrowAndSearchbar} className="back-arrow">
        <BackArrowIcon />
      </div>
    </div>
  )
}
