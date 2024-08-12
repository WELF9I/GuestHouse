import EditCabinClient from './EditCabinClient'

interface PageProps {
  params: {
    id: string
  }
  isOpen: boolean
  onClose: () => void
  cabinId: number
  onUpdate: () => void
}

export default function EditCabinPage({ params, isOpen, onClose, cabinId, onUpdate }: PageProps) {
  return (
    <EditCabinClient 
      isOpen={isOpen} 
      onClose={onClose} 
      cabinId={cabinId} 
      onUpdate={onUpdate}
    />
  )
}