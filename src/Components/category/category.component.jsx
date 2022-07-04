import CategoryContainer from "../category-container/category-container.component";
const Category = () =>{

    const categories = [
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": "https://images.pexels.com/photos/7880314/pexels-photo-7880314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": "https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 4,
          "title": "Womens",
          "imageUrl": "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 5,
          "title": "Mens",
          "imageUrl": "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ];
      return(
        <div className="container px-5 py-24 mx-auto font-Roboto">
                  <CategoryContainer categories={categories}/>
        </div>
      )

}

export default Category