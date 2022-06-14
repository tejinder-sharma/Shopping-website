
import CategoryContainer from './Components/category-container/category-container.component.jsx';

function App() {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://api.lorem.space/image/shoes?w=400&h=225"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://api.lorem.space/image/shoes?w=400&h=225"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://api.lorem.space/image/shoes?w=400&h=225"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://api.lorem.space/image/shoes?w=400&h=225"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://api.lorem.space/image/shoes?w=400&h=225"
    }
  ];
  
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <CategoryContainer categories={categories}/>
      </div>
    </div>
  );
}

export default App;
