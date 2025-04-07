import { useEffect, useState } from "react";
import onSend from "./textSend";
import { useLocation, useNavigate } from "react-router-dom";

const texts = [
  {
    sender: "me",
    text: "Eish, maze huku kuna vibe legit!",
    time: "12:09",
    delivered: true,
    seen: false,
    sent: true,
  },
  {
    sender: "other",
    text: "Lakini inabamba sana na hii app, kwanza ni rahisi kutumia na ina speed sana",
    time: "12:09",
  },
  {
    sender: "me",
    text: "Eish, maze huku kuna vibe legit!",
    time: "12:09",
    delivered: true,
    seen: false,
    sent: true,
  },
  {
    sender: "other",
    text: "Lakini inabamba sana na hii app, kwanza ni rahisi kutumia na ina speed sana",
    time: "12:09",
  },
  {
    sender: "me",
    text: "Eish, maze huku kuna vibe legit!",
    time: "12:09",
    delivered: true,
    seen: false,
    sent: true,
  },
  {
    sender: "other",
    text: "Lakini inabamba sana na hii app, kwanza ni rahisi kutumia na ina speed sana",
    time: "12:09",
  },
  {
    sender: "me",
    text: "Eish, maze huku kuna vibe legit!",
    time: "12:09",
    delivered: true,
    seen: false,
    sent: true,
  },
  {
    sender: "other",
    text: "Lakini inabamba sana na hii app, kwanza ni rahisi kutumia na ina speed sana",
    time: "12:09",
  },
];

function ChatPrev() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const section = localStorage.getItem("selectedSection");

  useEffect(() => {
    const handlePopState = (event) => {
      console.log("Back button pressed!");
      navigate("/chat-page");
      localStorage.setItem("selectedSection", "chats");
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location]);
  return (
    <div
      className={` ${
        section == "conversation" ? "d-block" : "d-none"
      } d-md-inline col p-0`}
    >
      <div className=" p-3 d-flex justify-content-between ">
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <span
            onClick={() => {
              localStorage.setItem("selectedSection", "chats");
            }}
            className="d-md-none"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <img
            style={{ maxHeight: "32px", maxWidth: "32px" }}
            src=""
            alt="img"
          />
          <div className="d-flex flex-column justify-content-center">
            <span className="peer-name">Kevin Bryan</span>
            <span className={`text-success`}>online</span>
          </div>
        </div>
        <div className=" d-flex px-2 gap-2">
          <button className="btn  shadow ">
            <i className="fa-solid fa-star"></i>
          </button>
          <button className="btn shadow">
            <i className="fa-solid fa-video"></i>
          </button>
          <button className="btn shadow">
            <i className="fa-solid fa-phone"></i>
          </button>
        </div>
      </div>
      <div
        className="chat-div px-md-5 pt-5 pb-2 d-flex flex-column prev-chat"
        style={{
          height: "76vh",
          overflowY: "scroll",
        }}
      >
        {texts.map((text) => (
          <div
            className={`${
              text.sender == "me" ? "my-message   ms-auto" : "other-message"
            } position-relative p-3 `}
          >
            Eish, maze huku kuna vibe legit!then at some point the text can be a
            little bit longer
            <div className="position-absolute end-0 bottom-0 me-2 mt-2 timer">
              <span>12:09 </span>
              <span>
                {text.sender == "me" &&
                  (!text.sent ? (
                    <i className="bi bi-clock"></i>
                  ) : text.delivered ? (
                    text.seen ? (
                      <span style={{ color: "blue" }}> R </span>
                    ) : (
                      <span style={{ color: "green" }}> S </span>
                    )
                  ) : (
                    <span style={{ color: "red" }}> S </span>
                  ))}
              </span>
            </div>
          </div>
        ))}
      </div>
      <form
        class="d-flex align-items-center border p-3 rounded w-100 align-self-center"
        onSubmit={(e) => onSend(e)}
      >
        <button type="button" class="btn btn-outline-secondary me-2">
          <i class="bi bi-paperclip"></i>
        </button>

        <input
          type="text"
          class="form-control me-2"
          placeholder="Type a message..."
        />

        <button type="submit" class="btn btn-primary">
          <i class="bi bi-send"></i>
        </button>
      </form>
    </div>
  );
}
export default ChatPrev;
