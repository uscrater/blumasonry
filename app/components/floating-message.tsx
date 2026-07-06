import { MessageSquareText } from 'lucide-react'

export default function FloatingMessage() {
  // O número da empresa e a mensagem pré-programada
  const phoneNumber = '+17816276932'
  const message = "Hi BluMasonry! I'm interested in a free estimate for my project."
  
  // Codifica a mensagem para URLs
  const encodedMessage = encodeURIComponent(message)
  
  // Link para SMS (Funciona para Android e iOS)
  const smsUrl = `sms:${phoneNumber}?body=${encodedMessage}`

  return (
    <a
      href={smsUrl}
      className="md:hidden fixed bottom-6 right-6 z-[99] w-14 h-14 bg-[#E4B973] text-[#060D1C] rounded-full shadow-[0_4px_20px_rgba(228,185,115,0.5)] hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
      aria-label="Send a Message"
    >
      <MessageSquareText size={28} strokeWidth={2.5} />
    </a>
  )
}
