import React from "react"

export default function PrimaryHeaderText(props) {
  const { headerType, text } = props

  let style = {}

  let renderText = ""

  if (headerType === "archived") {
    style = {
      color: "var(--primary-header-text-dark)",
      marginLeft: "1.5rem",
      fontSize: "1.2rem"
    }

    renderText = "Archived"
  } else if (headerType === "chat") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "18px"
    }

    renderText = text
  } else if (headerType === "section") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "24px",
      fontWeight: "bold"
    }
  } else if (headerType === "contact") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "16px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "settings") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "19px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "setting-primary") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "15px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "setting-privacy") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "20px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "setting-privacy-notification") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "17px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "alert") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "20px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "request-report") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "17px",
      fontWeight: "normal"
    }

    renderText = text
  } else if (headerType === "keyboard-shortcuts") {
    style = {
      color: "var(--primary-header-text-dull)",
      fontSize: "20px",
      fontWeight: "400"
    }

    renderText = text
  } else if (headerType === "keyboard-shortcuts-key") {
    style = {
      color: "var(--primary-header-text-dull)",
      fontSize: "14px",
      fontWeight: "400"
    }

    renderText = text
  } else if (headerType === "chat-section-main") {
    style = {
      color: "var(--primary-header-text-dull)",
      fontSize: "32px",
      fontWeight: "300"
    }

    renderText = text
  } else if (headerType === "direct-message") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "16px",
      fontWeight: "500"
    }

    renderText = text
  }

  return <div style={style}>{renderText}</div>
}
