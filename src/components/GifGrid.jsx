import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categoria }) => {
  //custom hook
  const { images, isLoading } = useFetchGifs(categoria);

  return (
    <>
      {isLoading && <h5 className="text-white">Cargando...</h5>}

      <h4 className="text-white text-camel-case">{categoria}</h4>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
