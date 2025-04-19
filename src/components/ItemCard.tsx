type Props = {
    title: string;
    description: string;
    image: string;
    location: string;
  };
  
  const ItemCard = ({ title, description, image, location }: Props) => (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{location}</p>
    </div>
  );
  
  export default ItemCard;
  