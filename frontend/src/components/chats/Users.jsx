// import styled from "@emotion/styled";
// import {
//   Avatar,
//   Badge,
//   Box,
//   Divider,
//   IconButton,
//   ListItemButton,
//   Tooltip,
//   Typography,
// } from "@mui/material";

// import { FaEllipsisV } from "react-icons/fa";
// import { customers } from "../../data/customers";

// const Users = ({ onSelectUser }) => {
//   const dummyMessage =
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, hic.";
//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     "& .MuiBadge-badge": {
//       backgroundColor: "#44b700",
//       color: "#44b700",
//       boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//       "&::after": {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         borderRadius: "50%",
//         border: "1px solid currentColor",
//         content: '""',
//       },
//     },
//   }));

//   return (
//     <Box sx={{height:"100vh"}}>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           borderRightWidth: "1px",
//           borderRightColor: "divider",
//           maxHeight:"100%",
//         }}
//       >
//         <Typography variant="h6">Messages</Typography>
//         <Tooltip title="More">
//           <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
//             <FaEllipsisV />
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Divider sx={{ paddingTop: "15px" }} />
//       <Box
//         sx={{
//           borderRightWidth: "1px",
//           borderRightColor: "divider",
//           // height: { xs: "fit-content", sm: "60vh" },
//           overflow: "auto",
//         }}
//         className="hide-scrollbar"
//       >
//         <Box
//           sx={{
//             display: { xs: "flex", sm: "block" },
//             gap: 2,
//             height:"100%"
//           }}
//         >
//           {customers.map(({ id, img, name }) => (
//             <ListItemButton
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//               key={id}
//               onClick={() => onSelectUser({ id, name })}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <StyledBadge
//                   overlap="circular"
//                   anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//                   variant="dot"
//                 >
//                   <Avatar src={img} sx={{ width: "30px", height: "30px" }} />
//                 </StyledBadge>

//                 <Box sx={{ display: { xs: "none", sm: "block" } }}>
//                   <Typography>{name}</Typography>
//                   <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
//                     {dummyMessage.slice(0, 20)}...
//                   </Typography>
//                 </Box>
//               </Box>
//               <Box sx={{ display: { xs: "none", sm: "block" } }}>
//                 <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
//                   11:12 AM
//                 </Typography>
//                 <IconButton
//                   sx={{
//                     width: "16px",
//                     height: "16px",
//                     backgroundColor: "#fc424a !important",
//                     color: "#fff",
//                     fontSize: "10px",
//                     float: "right",
//                   }}
//                 >
//                   {Math.floor(Math.random() * 10)}
//                 </IconButton>
//               </Box>
//             </ListItemButton>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Users;
