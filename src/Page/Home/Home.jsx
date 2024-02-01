import React, { useEffect, useState } from "react";
import TVShowCard from "../../Components/TVShowCard/TVShowCard";
import {Link} from "react-router-dom";

const Home = () => {
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowDetails(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2" >
      {showDetails.length > 0 &&
        showDetails.map((details, i) => (
          <Link to={`details/${details?.show?.id}`} className="hover:-translate-y-2 hover:shadow-lg shadow-md transition-all duration-200" key={i}>
            <TVShowCard show={details.show} />
          </Link>
        ))}
    </div>
  );
};

export default Home;
