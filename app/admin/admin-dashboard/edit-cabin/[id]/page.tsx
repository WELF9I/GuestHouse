import EditCabinClient from './EditCabinClient'

interface PageParams {
  id: string;
}


export default function EditCabinPage({ params }: { params: PageParams }) {
  const isOpen = true;
  const onClose = () => {}; 
  const cabinId = parseInt(params.id);
  const onUpdate = async () => {}; 

  return (
    <EditCabinClient 
      isOpen={isOpen} 
      onClose={onClose} 
      cabinId={cabinId} 
      onUpdate={onUpdate}
    />
  )
}