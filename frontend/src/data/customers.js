import { Rating } from "@mui/material";
import { Avatar } from "@mui/material";
export const customersColumns = [
  {
    accessorKey: "id", //access nested data with dot notation
    header: "Id",
  },
  {
    accessorKey: "img", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "name", //access nested data with dot notation
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    Cell: ({ cell, row }) => (
      <Rating
        name="half-rating"
        defaultValue={cell.getValue()}
        precision={0.5}
        readOnly
      />
    ),
  },
];

export const customers = [
  // {
  //   id: 1,
  //   name: "Dest William",
  //   gender: "Male",
  //   rating: 3.2,
  //   img: "/images/avatars/avatar1.png",
  // },
  // {
  //   id: 2,
  //   name: "Laura Peter",
  //   gender: "Male",
  //   rating: 3.2,
  //   img: "/images/avatars/avatar3.png",
  // },
  // {
  //   id: 3,
  //   name: "Mary Thomas",
  //   gender: "Female",
  //   rating: 2.8,
  //   img: "/images/avatars/avatar2.png",
  // },
  // {
  //   id: 4,
  //   name: "Fatimah Hassan",
  //   gender: "Female",
  //   rating: 3.8,
  //   img: "/images/avatars/avatar4.png",
  // },
  // {
  //   id: 5,
  //   name: "Lora Messi",
  //   gender: "Male",
  //   rating: 2.8,
  //   img: "/images/avatars/avatar7.png",
  // },
  // {
  //   id: 6,
  //   name: "Jeremy Lane",
  //   gender: "Male",
  //   rating: 4.0,
  //   img: "/images/avatars/avatar7.png",
  // },
  // {
  //   id: 7,
  //   name: "Angel Lane",
  //   gender: "Female",
  //   rating: 1.8,
  //   img: "/images/avatars/avatar6.png",
  // },
  // {
  //   id: 8,
  //   name: "Brittany Mathew",
  //   gender: "Female",
  //   rating: 1.7,
  //   img: "/images/avatars/avatar8.png",
  // },
  // {
  //   id: 9,
  //   name: "George Lauren",
  //   gender: "Male",
  //   img: "/images/avatars/avatar9.png",
  // },
  // {
  //   id: 10,
  //   name: "Michael Ademic",
  //   gender: "Male",
  //   rating: 3.5,
  //   img: "/images/avatars/avatar3.png",
  // },
];

export const conversations = [
  {
    id: 1,
    userId: 1,
    topic: "Artificial Intelligence",
    discussions: [
      {
        id: "m13",
        text: "Hello",
        createdAt: "2022-10-03T14:53:00.000Z",
        user: {
          id: "u2",
          name: "Brian",
        },
      },
      {
        id: "m14",
        text: "Hi, how can i help you tioday?",
        createdAt: "2022-10-03T14:59:00.000Z",
        user: {
          id: "u1",
          name: "Brian",
        },
      },
      {
        id: "m15",
        text: "Tell me about yourself",
        createdAt: "2022-10-03T14:59:00.000Z",
        user: {
          id: "u2",
          name: "Brian",
        },
      },
    ],
  },
  {
    id: 2,
    userId: 1,
    topic: "Artificial Intelligence2",
    discussions: [
      {
        id: "m13",
        text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
        createdAt: "2022-10-03T14:53:00.000Z",
        user: {
          id: "u1",
          name: "Brian",
        },
      },
      {
        id: "m14",
        text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
        createdAt: "2022-10-03T14:59:00.000Z",
        user: {
          id: "u2",
          name: "Brian",
        },
      },
    ],
  },
];
