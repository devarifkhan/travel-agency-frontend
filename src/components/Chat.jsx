// import { useEffect, useMemo, useState } from "react";
// import { io } from "socket.io-client";

// export default function Chat() {
//   const socket = useMemo(() => io("http://localhost:5000"), []);

//   const [message, setMessage] = useState("");
//   const [room, setRoom] = useState("");
//   const [socketId, setSocketId] = useState("");
//   const [messages, setMessages] = useState([]);
//   const handler = (e) => {
//     e.preventDefault();
//     socket.emit("message", { message, room });
//   };

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("Connected to server", socket.id);
//       setSocketId(socket.id);
//     });
//     socket.on("welcome", (s) => {
//       console.log(s);
//     });
//     socket.on("received", (data) => {
//       console.log(data);
//       setMessages((messages) => [...messages, data]);
//     });
//   });

//   console.log(messages);

//   return (
//     <div>
//       <h1>Socket IO</h1>
//       <p>{socketId}</p>
//       <form onSubmit={handler}>
//         <input
//           value={room}
//           onChange={(e) => setRoom(e.target.value)}
//           placeholder="Room"
//           id="room"
//           name="room"
//           required="required"
//           className="form-control input"
//           autoComplete="off"
//         />
//         <input
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="message"
//           id="message"
//           name="message"
//           required="required"
//           className="form-control input"
//           autoComplete="off"
//         />
//         <button type="submit" className="btn">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
export default function Chat() {
  const socket = useMemo(() => io("http://localhost:5000"), []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server", socket.id);
    });
  });
  return (
    <>
      <div className="flex antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <h1 className="text-center text-gray-600">Ariful Islam (me)</h1>

            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    H
                  </div>
                  <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
                <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                    M
                  </div>
                  <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                  <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                    2
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-auto h-90 p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-start-6 col-end-13 p-3 rounded-lg">
                      <div className="flex items-center justify-start flex-row-reverse">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
