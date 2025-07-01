import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import HostInfo from "../components/HostInfo";
import RatingStars from "../components/RatingStars";
import TagList from "../components/TagList";
import { useParams, Navigate } from "react-router-dom";
import data from "../data/data.json";
import "./Property.scss";

export default function Property() {
  const { id } = useParams();
  const item = data.find((d) => d.id === id);
  if (!item) {
    return <Navigate to="/404" />;
  }
  return (
    <div className="property">
      <Slideshow images={item.pictures} title={item.title} />
      <div className="header">
        <div className="main-info">
          <h1>{item.title}</h1>
          <p>{item.location}</p>
          <TagList tags={item.tags} />
        </div>
        <div className="side-info">
          <HostInfo name={item.host.name} picture={item.host.picture} />
          <RatingStars rating={parseInt(item.rating, 10)} />
        </div>
      </div>
      <div className="details">
        <Collapse title="Description">{item.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {item.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
