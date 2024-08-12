import EditBookingClient from './EditBookingClient'

interface PageProps {
  params: {
    id: string
  }
}

export default function EditBookingPage({ params }: PageProps) {
  return (
    <EditBookingClient 
      isOpen={true} 
      onClose={() => {}} 
      bookingId={parseInt(params.id)} 
      onUpdate={() => {}}
    />
  )
}