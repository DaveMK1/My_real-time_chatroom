
const Send_message = () => {
  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form className="containerWrap">
        <input className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Send_message
