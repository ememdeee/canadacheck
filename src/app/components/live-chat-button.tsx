'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export function LiveChatButton() {
  const [chatStarted, setChatStarted] = useState(false)

  const startChat = () => {
    // Here you would typically initialize your chat widget
    // For this example, we'll just update the state
    setChatStarted(true)
  }

  return (
    <Button 
      onClick={startChat} 
      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 text-white"
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      {chatStarted ? 'Chat in Progress, Eh!' : 'Start Live Chat, Buddy!'}
    </Button>
  )
}

