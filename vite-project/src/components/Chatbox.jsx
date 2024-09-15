
const Chatbox = () => {

  const messages = [
    {
     id: 1,
     message: "hi there"
    },
    {
     id: 2,
     message: "hey"
    }
  ]

  return (
    <div className="pb-46 pt-23 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default Chatbox
