import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        // bg="red"
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px 20px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;

// import { Box } from "@chakra-ui/layout";
// import { useState } from "react";
// // import Chatbox from "../components/Chatbox";
// import MyChats from "../components/MyChats";
// import SideDrawer from "../components/miscellaneous/SideDrawer";
// // import { ChatState } from "../Context/ChatProvider";

// const Chatpage = () => {
//   // const [fetchAgain, setFetchAgain] = useState(false);
//   const { user } = ChatState();

//   return (
//     <div style={{ width: "100%" }}>
//       {user && <SideDrawer />}
//       <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
//         {user && <MyChats />}
//         {user && <ChatBox />}
//       </Box>
//     </div>
//   );
// };

// export default Chatpage;
