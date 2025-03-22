import React from "react";
import { FaUser, FaComments, FaUsers, FaHeart, FaPhone, FaCog } from "react-icons/fa"; 

const Sidebar = () => {
  const favoriteChats = [
    { name: "Janet Nurse", img: "https://via.placeholder.com/50" },
    { name: "Emily", img: "https://via.placeholder.com/50" },
  ];

  const chats = [
    { name: "Jeep C", img: "https://via.placeholder.com/50" },
    { name: "Jackie", img: "https://via.placeholder.com/50" },
    { name: "Aby", img: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="d-flex sidebar-container">
      {/* Left-side Icons */}
      <div className="d-flex flex-column align-items-center py-4 border-end bg-light" style={{ width: "70px" }}>
        <FaUser className="mb-4 fs-3 text-muted cursor-pointer" title="Profile" />
        <FaComments className="mb-4 fs-3 text-primary cursor-pointer" title="Messages" />
        <FaUsers className="mb-4 fs-3 text-muted cursor-pointer" title="Groups" />
        <FaHeart className="mb-4 fs-3 text-danger cursor-pointer" title="Favorites" />
        <FaPhone className="mb-4 fs-3 text-muted cursor-pointer" title="Call Logs" />
        <FaCog className="mb-4 fs-3 text-muted cursor-pointer" title="Settings" />
      </div>

      {/* Right-side Content */}
      <div className="flex-grow-1 p-3 right-side-content">
        {/* Search Bar */}
        <input type="text" className="form-control mb-4 shadow-sm" placeholder="Search chats..." />

        {/* Favorites Section */}
        {favoriteChats.length > 0 && (
          <div className="mb-4">
            <h6 className="text-muted fw-bold">Favorites</h6>
            <ul className="list-group">
              {favoriteChats.map((chat, index) => (
                <li key={index} className="list-group-item d-flex align-items-center gap-3 p-2 shadow-sm rounded">
                  <img src={chat.img} alt={chat.name} className="rounded-circle border" width="45" height="45" />
                  <span className="fw-semibold">{chat.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Chat List */}
        <h6 className="text-muted fw-bold">Chats</h6>
        <ul className="list-group">
          {chats.map((chat, index) => (
            <li key={index} className="list-group-item d-flex align-items-center gap-3 p-2 shadow-sm rounded">
              <img src={chat.img} alt={chat.name} className="rounded-circle border" width="45" height="45" />
              <span className="fw-semibold">{chat.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
