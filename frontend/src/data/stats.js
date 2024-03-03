import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";

export const stats = [
  {
    id: 1,
    title: "Total Conversations",
    amount: "2360",
    icon: <IoChatboxEllipsesOutline />,
    iconColor: "#6427ff",
    iconBg: "rgba(100, 39, 255, 0.2)",
    isMoney: false,
  },
  {
    id: 2,
    title: "Bot Conversations",
    amount: "1800",
    icon: <FaRobot />,
    iconColor: "#c49c1a",
    iconBg: "rgba(196, 156, 26, 0.2)",
    isMoney: false,
  },
  {
    id: 3,
    title: "Support Agents Conversations",
    amount: "14",
    icon: <RiCustomerService2Fill />,
    iconColor: "#fd4332",
    iconBg: "rgba(253, 67, 50, 0.2)",
    isMoney: false,
  },
];
