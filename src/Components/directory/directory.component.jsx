import CategoryContainer from "../category-container/category-container.component";
const Directory = ({categories}) =>{
      return(
        <div className="container px-5 py-24 mx-auto font-Roboto">
                  <CategoryContainer categories={categories}/>
        </div>
      )

}

export default Directory
