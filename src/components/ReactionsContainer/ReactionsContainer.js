import React, { useState, useEffect } from "react"
import Searchbar from "../Searchbar/Searchbar"
import GifGrid from "../GifGrid/GifGrid"
import StickerGrid from "../StickerGrid/StickerGrid"
import { v4 as uuidv4 } from "uuid"
import "./reactionsContainer.css"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import Gif from "../Gif/Gif"
import ReactionEmojiContainer from "../ReactionEmojiContainer/ReactionEmojiContainer"
import Sticker from "../Sticker/Sticker"
import { ReactComponent as RecentIconSticker } from "../../icons/recent-icon-sticker.svg"
import { ReactComponent as StickerStoreIcon } from "../../icons/sticker-store-icon.svg"

function ReactionsContainer() {
  const [searchedGifs, setSearchedGifs] = useState([])
  const [searchedStickers, setSearchedStickers] = useState([])

  function renderSearchedGifs() {
    return searchedGifs.map(gif => {
      return <Gif key={uuidv4()} gifname={gif.gifName} link={gif.link} />
    })
  }

  function renderSearchedStickers() {
    return searchedStickers.map(sticker => {
      return (
        <Sticker
          key={uuidv4()}
          stickername={sticker.gifName}
          link={sticker.link}
        />
      )
    })
  }

  function handleGifHeader(e) {
    const gifHeaderBorder = document.querySelector(".gif-header-border")
    const gifGrids = [...document.querySelectorAll(".gif-grid-container")]
    const selectedHeader = e.target.closest(".gif-header")

    hideReactionContainer(gifGrids, selectedHeader, "trending")
    hideReactionContainer(gifGrids, selectedHeader, "haha")
    hideReactionContainer(gifGrids, selectedHeader, "sad")
    hideReactionContainer(gifGrids, selectedHeader, "love")
    hideReactionContainer(gifGrids, selectedHeader, "reactions")
    hideReactionContainer(gifGrids, selectedHeader, "sports")
    hideReactionContainer(gifGrids, selectedHeader, "tv")

    if (selectedHeader.classList.contains("trending")) {
      gifHeaderBorder.style.transform = "translateX(0px)"
      gifHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("haha")) {
      gifHeaderBorder.style.transform = "translateX(165px)"
      gifHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("sad")) {
      gifHeaderBorder.style.transform = "translateX(310px)"
      gifHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("love")) {
      gifHeaderBorder.style.transform = "translateX(453px)"
      gifHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("reactions")) {
      gifHeaderBorder.style.transform = "translateX(620px)"
      gifHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("sports")) {
      gifHeaderBorder.style.transform = "translateX(795px)"
      gifHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("tv")) {
      gifHeaderBorder.style.transform = "translateX(940px)"
      gifHeaderBorder.style.transition = "transform 0.1s"
    }
  }

  function handleStickerHeaders(e) {
    const stickerHeaderBorder = document.querySelector(".sticker-header-border")
    const stickerGrids = [
      ...document.querySelectorAll(".sticker-grid-container")
    ]
    const selectedHeader = e.target.closest(".sticker-header")

    hideReactionContainer(stickerGrids, selectedHeader, "recent")
    hideReactionContainer(stickerGrids, selectedHeader, "love")
    hideReactionContainer(stickerGrids, selectedHeader, "greetings")
    hideReactionContainer(stickerGrids, selectedHeader, "happy")
    hideReactionContainer(stickerGrids, selectedHeader, "sad")
    hideReactionContainer(stickerGrids, selectedHeader, "angry")
    hideReactionContainer(stickerGrids, selectedHeader, "celebrate")
    hideReactionContainer(stickerGrids, selectedHeader, "sticker-store")

    if (selectedHeader.classList.contains("recent")) {
      stickerHeaderBorder.style.transform = "translateX(0px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("love")) {
      stickerHeaderBorder.style.transform = "translateX(120px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("greetings")) {
      stickerHeaderBorder.style.transform = "translateX(265px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("happy")) {
      stickerHeaderBorder.style.transform = "translateX(420px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("sad")) {
      stickerHeaderBorder.style.transform = "translateX(545px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("angry")) {
      stickerHeaderBorder.style.transform = "translateX(680px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("celebrate")) {
      stickerHeaderBorder.style.transform = "translateX(830px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    } else if (selectedHeader.classList.contains("sticker-store")) {
      stickerHeaderBorder.style.transform = "translateX(970px)"
      stickerHeaderBorder.style.transition = "transform 0.1s"
    }
  }

  function hideReactionContainer(grids, selectedHeader, className) {
    if (selectedHeader.classList.contains(className)) {
      grids.forEach(grid => {
        if (grid.classList.contains(`${className}-gif`)) {
          return grid.classList.remove("hide-content")
        } else if (grid.classList.contains(`${className}-stickers`)) {
          return grid.classList.remove("hide-content")
        }
        grid.classList.add("hide-content")
      })
    }
  }

  return (
    <div className="reactions-container">
      <ReactionEmojiContainer type={"text"} />
      <div className="reaction-gif">
        <div className="gif-headers-wrapper">
          <div onClick={handleGifHeader} className="gif-header trending">
            <SecondaryHeaderText headerType={"gif-header"} text={"TRENDING"} />
          </div>
          <div onClick={handleGifHeader} className="gif-header haha">
            <SecondaryHeaderText headerType={"gif-header"} text={"HAHA"} />
          </div>
          <div onClick={handleGifHeader} className="gif-header sad">
            <SecondaryHeaderText headerType={"gif-header"} text={"SAD"} />
          </div>
          <div onClick={handleGifHeader} className="gif-header love">
            <SecondaryHeaderText headerType={"gif-header"} text={"LOVE"} />
          </div>
          <div onClick={handleGifHeader} className="gif-header reactions">
            <SecondaryHeaderText headerType={"gif-header"} text={"REACTIONS"} />
          </div>
          <div onClick={handleGifHeader} className="gif-header sports">
            <SecondaryHeaderText headerType={"gif-header"} text={"SPORTS"} />
          </div>
          <div onClick={handleGifHeader} className="gif-header tv">
            <SecondaryHeaderText headerType={"gif-header"} text={"TV"} />
          </div>
          <div className="gif-header-border"></div>
        </div>
        <div className="reaction-search">
          <Searchbar setSearchedGifs={setSearchedGifs} type={"gif-search"} />
        </div>
        <div className="searched-gifs">{renderSearchedGifs()}</div>
        <div className="gifs-container">
          <div className="trending-gif gif-grid-container">
            <GifGrid gifArray={trendingGifs} />
          </div>
          <div className="haha-gif gif-grid-container  hide-content">
            <GifGrid gifArray={hahaGifs} />
          </div>
          <div className="sad-gif gif-grid-container  hide-content">
            <GifGrid gifArray={sadGifs} />
          </div>
          <div className="love-gif gif-grid-container  hide-content">
            <GifGrid gifArray={loveGifs} />
          </div>
          <div className="reactions-gif gif-grid-container  hide-content">
            <GifGrid gifArray={reactionsGif} />
          </div>
          <div className="sports-gif gif-grid-container  hide-content">
            <GifGrid gifArray={sportsGif} />
          </div>
          <div className="tv-gif gif-grid-container  hide-content">
            <GifGrid gifArray={tvGifs} />
          </div>
        </div>
      </div>
      <div className="reaction-sticker">
        <div className="sticker-headers-wrapper">
          <div className="sticker-header recent" onClick={handleStickerHeaders}>
            <RecentIconSticker />
          </div>
          <div className="sticker-header love" onClick={handleStickerHeaders}>
            <SecondaryHeaderText headerType={"sticker-header"} text={"LOVE"} />
          </div>
          <div
            className="sticker-header greetings"
            onClick={handleStickerHeaders}
          >
            <SecondaryHeaderText
              headerType={"sticker-header"}
              text={"GREETINGS"}
            />
          </div>
          <div className="sticker-header happy" onClick={handleStickerHeaders}>
            <SecondaryHeaderText headerType={"sticker-header"} text={"HAPPY"} />
          </div>
          <div className="sticker-header sad" onClick={handleStickerHeaders}>
            <SecondaryHeaderText headerType={"sticker-header"} text={"SAD"} />
          </div>
          <div className="sticker-header angry" onClick={handleStickerHeaders}>
            <SecondaryHeaderText headerType={"sticker-header"} text={"ANGRY"} />
          </div>
          <div
            className="sticker-header celebrate"
            onClick={handleStickerHeaders}
          >
            <SecondaryHeaderText
              headerType={"sticker-header"}
              text={"CELEBRATE"}
            />
          </div>
          <div
            className="sticker-header sticker-store"
            onClick={handleStickerHeaders}
          >
            <StickerStoreIcon />
          </div>
          <div className="sticker-header-border"></div>
        </div>
        <div className="reaction-search">
          <Searchbar
            setSearchedStickers={setSearchedStickers}
            type={"sticker-search"}
          />
        </div>
        <div className="searched-stickers">{renderSearchedStickers()}</div>
        <div className="stickers-container">
          <div className="recent-stickers sticker-grid-container">
            <StickerGrid stickerArray={[]} create={true} />
          </div>
          <div className="love-stickers sticker-grid-container hide-content">
            <StickerGrid stickerArray={loveStickers} create={false} />
          </div>
          <div className="greetings-stickers sticker-grid-container hide-content">
            <StickerGrid stickerArray={greetingsStickers} create={false} />
          </div>
          <div className="happy-stickers sticker-grid-container hide-content">
            <StickerGrid stickerArray={happyStickers} create={false} />
          </div>
          <div className="sad-stickers sticker-grid-container hide-content">
            <StickerGrid stickerArray={sadStickers} create={false} />
          </div>
          <div className="angry-stickers sticker-grid-container hide-content">
            <StickerGrid stickerArray={angryStickers} create={false} />
          </div>
          <div className="celebrate-stickers sticker-grid-container hide-content">
            <StickerGrid stickerArray={celebrateStickers} create={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactionsContainer

const trendingGifs = [
  {
    gifName: "jerry needs food",
    link: "https://media.tenor.co/et7zQsg-djgAAAAc/korjik.gif"
  }
]

const hahaGifs = [
  {
    gifName: "happy cat",
    link: "https://media.tenor.co/OnKQNX5oChUAAAAc/haha-lol.gif"
  }
]

const sadGifs = [
  {
    gifName: "crying",
    link: "https://media.tenor.co/zwuefXVe4mEAAAAc/sad-face.gif"
  }
]

const loveGifs = [
  {
    gifName: "lovely bear",
    link: "https://media.tenor.co/6qh0LogjmtkAAAAc/joy.gif"
  }
]

const reactionsGif = [
  {
    gifName: "disappointed dog",
    link: "https://media.tenor.co/RHbqk0f8XVoAAAAc/me-reaction-really-funny-animals.gif"
  }
]

const sportsGif = [
  {
    gifName: "Ferrari SF70",
    link: "https://media.tenor.co/V1zMYJPYwEUAAAAc/arabpunkz-habibi.gif"
  }
]

const tvGifs = [
  {
    gifName: "sponge bob and patrick",
    link: "https://media.tenor.co/9O0URkk1kjYAAAAc/spongebob-squarepants-patrick-star.gif"
  }
]

const loveStickers = [
  {
    stickerName: "loving bunny",
    link: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/lovely-rabbit-4b/sticker_11.gif?f238b6b60456e6d322a68a491e3d48bf"
  }
]

const greetingsStickers = [
  {
    stickerName: "merry christmas",
    link: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/amway-christmas-greetings-sticker/sticker_2.gif?1e4c0294db406c9ba056ed9fdfd0a014"
  }
]

const happyStickers = [
  {
    stickerName: "cheering bunny",
    link: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/b-f-happy-new-year/sticker_8.gif?5b9b702f6a8307e92eddb2cad7c3651e"
  }
]

const sadStickers = [
  {
    stickerName: "sad cat",
    link: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/sad-cats/sticker_4.webp?8abdd1ce6d0c03fc94510badeefefe02&d=200x200"
  }
]

const angryStickers = [
  {
    stickerName: "angry panda",
    link: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/angry-panda/sticker_3.png?9986db51ff0190a0a086266df31a42e9&d=200x200"
  }
]

const celebrateStickers = [
  {
    stickerName: "party",
    link: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/brown-friends-celebrate-eng/sticker_14.gif?98660dee34d08d11204e85fb2fc7124d"
  }
]
