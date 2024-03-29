export default function SecondaryHeaderText(props) {
  const { headerType, text, option } = props

  let style = {}
  let renderText = ""

  if (headerType === "chat") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      overflow: "hidden",
      textOverflow: "ellipsis "
    }

    renderText = text
  } else if (headerType === "setting-secondary") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "light"
    }

    renderText = text
  } else if (headerType === "setting-secondary-light") {
    style = {
      color: "var(--secondary-header-light-text-color-dark)",
      fontSize: "14px",
      fontWeight: "300"
    }

    renderText = text
  } else if (headerType === "request-account-secondary") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "light"
    }

    renderText = text
  } else if (headerType === "chat-section-main") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "400"
    }

    renderText = text
  } else if (headerType === "emoji-header") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "400"
    }

    renderText = text
  } else if (headerType === "gif-header") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "13px",
      fontWeight: "bold"
    }

    renderText = text
  } else if (headerType === "sticker-header") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "13px",
      fontWeight: "bold"
    }

    renderText = text
  } else if (headerType === "option") {
    style = {
      color: "var(--primary-input-text-color)",
      fontSize: "14.5px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "alert") {
    style = {
      color: "var(--primary-input-text-color)",
      fontSize: "14.2px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "message") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      maxWidth: "270px",
      textOverflow: "ellipsis "
    }

    renderText = text
  } else if (headerType === "empty-archived-section") {
    style = {
      color: "var(--secondary-header-light-text-color-dark)",
      fontSize: "16px",
      fontWeight: "500"
    }

    renderText = text
  }

  return (
    <div className={option ? "option-text" : ""} style={style}>
      {renderText}
    </div>
  )
}
