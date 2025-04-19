import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Item Detail</h1>
      <p>Viewing details for item ID: <strong>{id}</strong></p>
    </div>
  );
};

export default ItemDetailPage;
