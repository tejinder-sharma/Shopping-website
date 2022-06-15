import Directory from "../../Components/directory/directory.component";
import { Outlet } from "react-router-dom";
function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://api.lorem.space/image/shoes?w=400&h=225",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://api.lorem.space/image/shoes?w=400&h=225",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://api.lorem.space/image/shoes?w=400&h=225",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://api.lorem.space/image/shoes?w=400&h=225",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://api.lorem.space/image/shoes?w=400&h=225",
    },
  ];
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
