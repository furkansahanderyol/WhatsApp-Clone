import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import LogoAndText from "../LogoAndText/LogoAndText"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox"
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as TextAndVoiceMessagesIcon } from "../../icons/text-and-voice-messages-icon.svg"
import { ReactComponent as AudioAndVideoCallsIcon } from "../../icons/audio-and-video-calls-icon.svg"
import { ReactComponent as PhotosVideosAndDocumentsIcon } from "../../icons/photos-videos-and-documents-icon.svg"
import { ReactComponent as LocationSharingIcon } from "../../icons/location-sharing-icon.svg"
import { ReactComponent as StatusUpdateIcon } from "../../icons/status-update-icon.svg"
import "./security.css"

const listItems = [
  {
    logo: <TextAndVoiceMessagesIcon />,
    text: "Text and voice messages"
  },
  {
    logo: <AudioAndVideoCallsIcon />,
    text: "Audio and video calls"
  },
  {
    logo: <PhotosVideosAndDocumentsIcon />,
    text: "Photos, videos and documents"
  },
  {
    logo: <LocationSharingIcon />,
    text: "Location sharing"
  },
  {
    logo: <StatusUpdateIcon />,
    text: "Status updates"
  }
]

export default function Security(props) {
  const { securityActive, setSecurityActive } = props
  const securitySection = useRef()

  function handleSecuritySectionVisibility() {
    if (!securityActive) {
      securitySection?.current?.classList?.remove("section-active")
      securitySection?.current?.classList?.add("section-deactivate")
    }

    if (securityActive) {
      securitySection?.current?.classList?.remove("section-deactivate")
      securitySection?.current?.classList?.add("section-active")
    }
  }

  handleSecuritySectionVisibility()
  return (
    <div
      ref={securitySection}
      className="security-container section-deactivate"
    >
      <div className="security-header">
        <SectionHeader
          securityActive={securityActive}
          setSecurityActive={setSecurityActive}
          header={"Security"}
        />
      </div>
      <div className="security-body">
        <div className="security-icon">
          <svg
            viewBox="0 0 84 84"
            width="84"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <circle cx="42" cy="42" r="42" fill="#07CD9E"></circle>
            <path
              d="M53.2411 33.432C53.2411 31.3535 52.7335 29.4441 51.7185 27.7039C50.7193 25.9476 49.3553 24.5619 47.6265 23.5468C45.9136 22.5156 44.042 22 42.0119 22C39.9659 22 38.0785 22.5156 36.3497 23.5468C34.6368 24.5619 33.2728 25.9476 32.2577 27.7039C31.2585 29.4441 30.7589 31.3535 30.7589 33.432V37.8066C30.6638 37.8389 30.4734 37.9275 30.1879 38.0725C29.157 38.6365 28.3719 39.434 27.8327 40.4653C27.5313 41.0292 27.3172 41.6495 27.1903 42.3263C27.0634 43.003 27 44.0101 27 45.3474V53.8792C27 55.2165 27.0634 56.2236 27.1903 56.9003C27.3172 57.577 27.5313 58.1974 27.8327 58.7613C28.3719 59.7925 29.157 60.5901 30.1879 61.1541C30.7272 61.4602 31.3299 61.6777 31.996 61.8066C32.678 61.9356 33.6693 62 34.9699 62H49.0301C50.3307 62 51.314 61.9356 51.9802 61.8066C52.6622 61.6777 53.2728 61.4602 53.8121 61.1541C54.8271 60.6062 55.6122 59.8087 56.1673 58.7613C56.4687 58.1974 56.6828 57.577 56.8097 56.9003C56.9366 56.2236 57 55.2165 57 53.8792V45.3474C57 44.0101 56.9366 43.003 56.8097 42.3263C56.6828 41.6495 56.4687 41.0292 56.1673 40.4653C55.6122 39.4179 54.8271 38.6203 53.8121 38.0725C53.5266 37.9275 53.3362 37.8389 53.2411 37.8066V33.432ZM35.2554 33.432C35.2554 32.1913 35.5567 31.0473 36.1594 30C36.7621 28.9366 37.5789 28.0987 38.6098 27.4864C39.6566 26.8741 40.7906 26.568 42.0119 26.568C43.2332 26.568 44.3592 26.8741 45.3902 27.4864C46.4211 28.0987 47.2379 28.9366 47.8406 30C48.4433 31.0473 48.7446 32.1913 48.7446 33.432V37.2266H35.2554V33.432Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="description-area">
          <div className="description-area-header">
            <PrimaryHeaderText
              headerType={"setting-privacy"}
              text={"Your chats and calls are private"}
            />
          </div>
          <div className="description-area-text">
            <SecondaryHeaderText
              headerType={"chat"}
              text={
                "End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:"
              }
            />
          </div>
          <div className="description-area-list">
            {listItems.map(item => {
              return (
                <LogoAndText key={uuidv4()} logo={item.logo} text={item.text} />
              )
            })}
          </div>
          <div className="learn-more">Learn more</div>
        </div>
        <div className="security-option">
          <div className="security-option-header">
            <div className="checkbox-container">
              <CustomCheckbox />
            </div>
            <div className="header-container">
              <PrimaryHeaderText
                headerType={"setting-privacy-notification"}
                text={"Show security notifications on this computer"}
              />
            </div>
          </div>
          <div className="security-option-description">
            Get notified when your security code changes for a contact’s phone.
            If you have multiple devices, this setting must be enabled on each
            device where you want to get notifications.
            <span className="learn-more">Learn more</span>
          </div>
        </div>
      </div>
    </div>
  )
}
