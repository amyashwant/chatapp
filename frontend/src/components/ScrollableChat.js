import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../context/ChatProvider";

// import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;

// import React from "react";
// import ScrollableFeed from "react-scrollable-feed";
// import {
//   isLastMessage,
//   isSameSender,
//   isSameSenderMargin,
//   isSameUser,
// } from "../config/ChatLogics";
// import { ChatState } from "../context/ChatProvider";
// import { Avatar, Tooltip } from "@chakra-ui/react";

// const ScrollableChat = ({ messages }) => {
//   const { user } = ChatState();
//   messages = [
//     {
//       _id: "64f75a99b3693f74115187be",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "hello",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-05T16:43:05.417Z",
//       updatedAt: "2023-09-05T16:43:05.417Z",
//       __v: 0,
//     },
//     {
//       _id: "64f75af27e6b27bb7f1e16a4",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "hello",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-05T16:44:34.281Z",
//       updatedAt: "2023-09-05T16:44:34.281Z",
//       __v: 0,
//     },
//     {
//       _id: "64f75bb618af7a8d3cba7ca2",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "hii",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-05T16:47:50.234Z",
//       updatedAt: "2023-09-05T16:47:50.234Z",
//       __v: 0,
//     },
//     {
//       _id: "64f75d1adfd4e6116a181f95",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "how are you",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-05T16:53:46.395Z",
//       updatedAt: "2023-09-05T16:53:46.395Z",
//       __v: 0,
//     },
//     {
//       _id: "64f75d79e6d6cc7239a1fe0b",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "whats upp",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-05T16:55:21.378Z",
//       updatedAt: "2023-09-05T16:55:21.378Z",
//       __v: 0,
//     },
//     {
//       _id: "64f7ca7d08342d22dc2a8bdf",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "6-9-23 at 6 am",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-06T00:40:29.534Z",
//       updatedAt: "2023-09-06T00:40:29.534Z",
//       __v: 0,
//     },
//     {
//       _id: "64f7dd473cd0ff3685b6b8d1",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "newMessage",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-06T02:00:39.385Z",
//       updatedAt: "2023-09-06T02:00:39.385Z",
//       __v: 0,
//     },
//     {
//       _id: "64f7e70f3eb0051a95ec5bca",
//       sender: {
//         _id: "64f56268f64fe52f92c2cc3f",
//         name: "hritik",
//         email: "hritik@gmail.com",
//         pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg ",
//       },
//       content: "newMessage",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-06T02:42:23.682Z",
//       updatedAt: "2023-09-06T02:42:23.682Z",
//       __v: 0,
//     },
//     {
//       _id: "64f81473c66d006aa5dab127",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "newMessage",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-06T05:56:03.494Z",
//       updatedAt: "2023-09-06T05:56:03.494Z",
//       __v: 0,
//     },
//     {
//       _id: "64f81491c66d006aa5dab12e",
//       sender: {
//         _id: "64f4b3a2921f4319169a1c4e",
//         name: "yashwant singh",
//         email: "yashwantmeerasingh2002@gmail.com",
//         pic: "http://res.cloudinary.com/dzhpgpumo/image/upload/v1693758367/foodvilla_a1utcp.png",
//       },
//       content: "newMessage",
//       chat: {
//         _id: "64f5957c1d8c9da4219f06f2",
//         chatName: "sender",
//         isGroupChat: false,
//         users: ["64f56268f64fe52f92c2cc3f", "64f4b3a2921f4319169a1c4e"],
//         createdAt: "2023-09-04T08:29:48.349Z",
//         updatedAt: "2023-09-06T05:56:34.538Z",
//         __v: 0,
//         latestMessage: "64f81491c66d006aa5dab12e",
//       },
//       createdAt: "2023-09-06T05:56:33.847Z",
//       updatedAt: "2023-09-06T05:56:33.847Z",
//       __v: 0,
//     },
//   ];

//   return (
//     <ScrollableFeed>
//       {console.log(messages)}
//       {messages &&
//         messages.map((m, i) => {
//           <div style={{ display: "flex" }} key={m._id}>
//             {console.log(m)}
//             {(isSameSender(messages, m, i, user._id) ||
//               isLastMessage(messages, i, user._id)) && (
//               <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
//                 <Avatar
//                   mt="7px"
//                   mr={1}
//                   size="sm"
//                   cursor="pointer"
//                   name={m.sender.name}
//                   src={m.sender.pic}
//                 />
//               </Tooltip>
//             )}

//             <span
//               style={{
//                 backgroundColor: `${
//                   m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
//                 }`,
//                 marginLeft: isSameSenderMargin(messages, m, i, user._id),
//                 marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
//                 borderRadius: "20px",
//                 padding: "5px 15px",
//                 maxWidth: "75%",
//               }}
//             >
//               {m.content}
//             </span>
//           </div>;
//         })}
//     </ScrollableFeed>
//   );
// };

// export default ScrollableChat;
