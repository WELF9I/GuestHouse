import EditBookingClient from './EditBookingClient'

interface PageProps {
  params: {
    id: string
  }
  isOpen: boolean
  onClose: () => void
  bookingId: number
  onUpdate: () => void
}

export default function EditBookingPage({ params, isOpen, onClose, bookingId, onUpdate }: PageProps) {
  return (
    <EditBookingClient 
      isOpen={isOpen} 
      onClose={onClose} 
      bookingId={bookingId} 
      onUpdate={onUpdate}
    />
  )
}