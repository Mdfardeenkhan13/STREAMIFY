import { LoaderIcon } from "lucide-react"


const ChatLoader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
        <LoaderIcon className="animate-spin size-10 text-primary" />
        <p>Connecting to chat...</p>
    </div>
  )
}

export default ChatLoader