function ChatNav() {
  const selected = localStorage.getItem("selectedSection");
  return (
    <>
      <div className="col-12 d-none  col-md-2 main-column chat-nav d-md-flex flex-column justify-content-between p-4 mx-0 ">
        <div>
          <div className="mb-4 ">
            <span className="tuchat fs-4">TuChat</span>
          </div>
          <div>
            <ul className="chat-navs d-flex flex-column gap-2">
              <li className="d-flex justify-content-between selected">
                <span>Chats</span>
                <span className="badge bg-danger d-flex align-items-center rounded-circle">
                  3
                </span>
              </li>

              <li>Files</li>
              <li className="">Dashboard</li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
        {/* <div className="d-flex gap-3">
          <div>
            <img src="" alt="avatar" className="rounded " />
          </div>
          <div className="d-flex flex-column ">
            <span>Username</span>
            <span>Online</span>
          </div>
        </div> */}
      </div>
      <div
        className={`col d-flex d-md-none position-fixed bottom-0 p-3 shadow w-100 justify-content-around ${
          selected == "conversation" && "d-none"
        }`}
      >
        <button className="btn border btn-info">Me</button>
        <button className="btn border">Da</button>
        <button className="btn border">Fi</button>
        <button className="btn border">Pr</button>
      </div>
    </>
  );
}
export default ChatNav;
