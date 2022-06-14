import CategoryItem from "../category-item/category-item.component"
const CategoryContainer = ({categories}) => {
    return(
        <div className="flex flex-wrap -m-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.id}/>
          )
          )
        }
        </div>
    )
}

export default CategoryContainer 