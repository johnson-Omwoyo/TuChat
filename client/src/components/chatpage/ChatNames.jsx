import trimText from "./trimText";

const chats = [
  {
    img: "some image link",
    name: "Kevin Bryan",
    status: "status",
    finalText:
      "Eish, maze huku kuna vibe legit!then at some point the text can be a little bit longer",
    time: "12:09",
    pinned: true,
    unread: 2,
    starred: true,
  },
  {
    img: "some image link",
    name: "Kevin Bryan",
    status: "status",
    finalText:
      "Eish, maze huku kuna vibe legit!then at some point the text can be a little bit longer",
    time: "12:09",
    pinned: true,
    unread: 2,
    starred: true,
  },
];

function ChatNames() {
  const section = localStorage.getItem("selectedSection");
  console.log(section);

  return (
    <div
      className={` ${
        section == "chats" ? "d-block " : "d-none"
      } d-md-block col-12 col-md-2 vh-100 px-md-4 py-3`}
    >
      <div className=" p-2 m-0 my-2  d-flex justify-content-between align-items-center d-md-none">
        <span
          style={{ fontFamily: "Roboto", fontWeight: "600" }}
          className="tuchat-logo fs-5"
        >
          TuChat
        </span>
        <span>...</span>
      </div>
      
      <div className="d-flex align-items-center justify-content-between">
        <span className="" style={{ fontFamily: "Roboto", fontWeight: "600" }}>
          Active
        </span>
        <button className="btn"></button>
      </div>
      <div className="d-flex online-avatars my-3 p-2 gap-3">
        <div className="position-relative rounded">
          <img
            style={{ maxHeight: "32px", maxWidth: "32px" }}
            src=""
            alt="img"
          />
          <div
            style={{
              maxHeight: "max-content",
              maxWidth: "max-content",
              backgroundColor: "green",
            }}
            className=" position-absolute rounded-circle   p-1 top-0 end-0"
          ></div>{" "}
        </div>
      </div>
      <div className="my-4 d-flex align-items-center">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search or start New "
          className="rounded-pill form-control"
        />
        <button className="btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div>
        <span className="" style={{ fontFamily: "Roboto", fontWeight: "600" }}>
          Pinned Chats
        </span>
        {chats.map((chat) => (
          <>
            <div className="d-flex gap-3 my-2">
              <div
                className="position-relative rounded "
                style={{ cursor: "pointer" }}
              >
                <img
                  style={{ maxHeight: "32px", maxWidth: "32px" }}
                  src=""
                  alt="img"
                />
                <div
                  style={{
                    maxHeight: "max-content",
                    maxWidth: "max-content",
                    backgroundColor: "green",
                  }}
                  className=" position-absolute rounded-circle   p-1 top-0 end-0"
                ></div>{" "}
              </div>

              <div
                className="w-100 d-flex flex-column"
                onClick={() => {
                  localStorage.setItem("selectedSection", "conversation");
                  setSelectedSection;
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex w-100 justify-content-between">
                  <span>Brian Kim</span>
                  <span className="text-secondary">14:02</span>
                </div>
                <div className="mt-1 d-flex justify-content-between">
                  <span className="text-secondary">
                    {trimText("This is the sample of the text")}
                  </span>

                  {chat.unread > 0 && (
                    <div className="badge bg-danger d-flex align-items-center rounded-circle">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
export default ChatNames;
