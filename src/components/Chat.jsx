// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { SiGooglemessages } from "react-icons/si";
import axios from "axios";

export default function Chat() {
  const socket = useMemo(() => io("http://localhost:5000"), []);

  const [mes, setMes] = useState("");
  const [messages, setMessages] = useState(null);
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [sock, setSock] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  console.log(name, phone, email);

  const fetchData = async () => {
    console.log(sock);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/getMessage/${name}`
      );
      console.log("Response:", response);
      setMessages(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 3000);

    const handleReceivedMessage = (data) => {
      setCount(data.count + 1);
      console.log("handle receive message", data);
    };

    const handlePrivateMessage = (privateMessage) => {
      console.log("Received private message from server:", privateMessage);
    };

    socket.on("connect", () => {
      console.log("Connected to server", socket.id);
      setSock(socket.id);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    socket.on("received", handleReceivedMessage);
    socket.on("privateMessage", handlePrivateMessage);

    return () => {
      clearInterval(intervalId);
      socket.off("received", handleReceivedMessage);
      socket.off("privateMessage", handlePrivateMessage);
    };
  }, [name, socket, sock]);

  const hanlderFirstChat = async () => {
    const newCount = count + 1;
    setCount(newCount);
    const newMessage = {
      name: name,
      socketId: socket.id,
      email: email,
      phone: phone,
      message: "How can I book a flight with your travel agency?",
      count: newCount,
    };
    socket.emit("message", newMessage);
    console.log("message sent by admin", newMessage);

    fetchData();
  };

  const hanlderSecondChat = async () => {
    const newCount = count + 1;
    setCount(newCount);
    const newMessage = {
      name: name,
      socketId: socket.id,
      email: email,
      phone: phone,
      message: "Can you recommend family-friendly vacation packages?",
      count: newCount,
    };
    socket.emit("message", newMessage);
    console.log("message sent by admin", newMessage);
    fetchData();
  };

  const hanlderThirdChat = async () => {
    const newCount = count + 1;
    setCount(newCount);
    const newMessage = {
      name: name,
      socketId: socket.id,
      email: email,
      phone: phone,
      message: "What documents do I need for international travel?",
      count: newCount,
    };
    socket.emit("message", newMessage);
    console.log("message sent by admin", newMessage);
    fetchData();
  };

  const handler = async (e) => {
    const newCount = count + 1;
    setCount(newCount);

    e.preventDefault();
    const newMessage = {
      name: name,
      socketId: socket.id,
      message: mes,
      email: email,
      phone: phone,
      count: newCount,
    };
    socket.emit("message", newMessage);
    console.log("message sent by user", newMessage);
    setMes("");
    fetchData();
  };
  const handleName = () => {
    setShow(false);
  };

  console.log("HI", messages);

  return (
    <>
      <div className="fixed bottom-0 right-0 p-20 px-20">
        <button onClick={() => document.getElementById("modal").showModal()}>
          <SiGooglemessages className="object-cover  h-12 w-12" />
        </button>
        <dialog id="modal" className="modal">
          <div className="modal-box">
            <h1 className="text-center text-4xl m-5">Chat To Admin</h1>

            <div>
              {!show ? (
                <h1 className="ms-2 text-center mb-5 font-semibold text-gray-500 dark:text-gray-400">
                  Welcome {name} to our chat
                </h1>
              ) : (
                <div>
                  <label className="input input-bordered flex items-center gap-2 mr-5 mb-2">
                    Name
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="grow"
                      placeholder="Ariful Islam"
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 mr-5 mb-2">
                    Email
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="grow"
                      placeholder="arifkhan@gmail.com"
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 mr-5 mb-2">
                    Phone
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="grow"
                      placeholder="+8801764297928"
                    />
                  </label>
                  <button className="btn" onClick={handleName}>
                    SUBMIT
                  </button>
                </div>
              )}

              {messages != null
                ? messages.map((message, index) => (
                    <div
                      key={index}
                      className={
                        message.name === "admin"
                          ? "chat chat-end"
                          : "chat chat-start"
                      }
                    >
                      <div className="chat-bubble">
                        {index % 2 == 0 ? "You: " : "Admin: "}
                        {message.message}
                      </div>
                    </div>
                  ))
                : ""}

              {!show ? (
                <div>
                  <div className="flex justify-center items-center mb-3">
                    <button
                      className="btn mx-auto my-auto"
                      onClick={hanlderFirstChat}
                    >
                      <div className="bg-yellow-200 leading-none ${props.textColor} rounded-sm p-2 shadow text-teal text-sm">
                        <span className="inline-flex text-pink-700">
                          How can I book a flight with your travel agency?
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="flex justify-center items-center mb-3">
                    <button
                      className="btn mx-auto my-auto"
                      onClick={hanlderSecondChat}
                    >
                      <div className="bg-yellow-200 leading-none ${props.textColor} rounded-sm p-2 shadow text-teal text-sm">
                        <span className="inline-flex text-pink-700">
                          Can you recommend family-friendly vacation packages?
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="flex justify-center items-center mb-3">
                    <button
                      className="btn mx-auto my-auto"
                      onClick={hanlderThirdChat}
                    >
                      <div className="bg-yellow-200 leading-none ${props.textColor} rounded-sm p-2 shadow text-teal text-sm">
                        <span className="inline-flex text-pink-700">
                          What documents do I need for international travel?
                        </span>
                      </div>
                    </button>
                  </div>

                  <textarea
                    placeholder="Type your message here..."
                    value={mes}
                    onChange={(e) => setMes(e.target.value)}
                    className="textarea textarea-bordered textarea-xs w-full"
                  ></textarea>
                  <button
                    className="btn mt-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                    onClick={handler}
                  >
                    Send Message
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}
