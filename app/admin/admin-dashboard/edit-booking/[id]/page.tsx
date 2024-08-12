import EditBookingClient from './EditBookingClient';

interface PageParams {
  id: string;
}

export default function EditBookingPage({ params }: { params: PageParams }) {

  const isOpen = true; 
  const onClose = () => {};
  const bookingId = parseInt(params.id);
  const onUpdate = async () => {};

  return (
    <EditBookingClient 
      isOpen={isOpen} 
      onClose={onClose} 
      bookingId={bookingId} 
      onUpdate={onUpdate}
    />
  );
}
