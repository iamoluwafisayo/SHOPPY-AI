import { FiHome, FiMessageCircle, FiSettings } from "react-icons/fi";

export const navigationLinks = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "./",
  },
  {
    name: "Chats",
    icon: <FiMessageCircle />,
    url: "/dashboard/chats",
  },
  // {
  //   name: "Notifications",
  //   icon: <MdNotificationsNone />,
  //   url: "/notifications",
  // },
  {
    name: "Settings",
    icon: <FiSettings />,
    url: "/dashboard/settings",
  },
];
