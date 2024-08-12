import EditCabinClient from './EditCabinClient'

interface PageProps {
  params: {
    id: string
  }
}

export default function EditCabinPage({ params }: PageProps) {
  return (
    <EditCabinClient 
      isOpen={true} 
      onClose={() => {}} 
      cabinId={parseInt(params.id)} 
      onUpdate={() => {}}
    />
  )
}