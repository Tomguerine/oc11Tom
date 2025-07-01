import data from "../data/data.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "./Home.scss";
export default function Home() {
  // const dataHome: HomeImage = axios.get("https://example.com/api/data")

  return (
    <div className="home">
      <Banner
        image="https://picsum.photos/1200/300?image=1050"
        text="Chez vous, partout et ailleurs"
      />
      <div className="cards">
        {data.slice(0, 6).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>
    </div>
  );
}
