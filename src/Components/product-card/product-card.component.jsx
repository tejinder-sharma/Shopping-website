

const ProductCard = ({product}) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="card bg-base-100 lg:w-1/4 md:w-1/2 p-4 w-full">
               <div className="shadow-xl">
                  <figure>
                      <img
                        className="w-[400px] h-[225px] object-cover"
                        src={imageUrl}
                        alt={`${name}`}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>{`Price $${price}`}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
               
               </div>
                
          </div>
  );
};

export default ProductCard;
