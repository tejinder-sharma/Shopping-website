const CategoryItem = (props) => {
    const {title, imageUrl} = props.category;
    console.log(imageUrl)
    return(
        <div className="card bg-base-100 lg:w-1/4 md:w-1/2 p-4 w-full">
               <div className="shadow-xl">
                  <figure>
                      <img
                        src={imageUrl}
                        alt={`Shoes ${title}`}
                        className="w-[400px] h-[225px] object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{title}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Shop Now</button>
                      </div>
                    </div>
               </div>
                
          </div>
    )

}

export default CategoryItem;