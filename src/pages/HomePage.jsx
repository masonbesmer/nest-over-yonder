import React from "react";
import Listing from "../components/Listing";

const sampledescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta nam mollitia tempore deleniti officiis vero error pariatur in a voluptatibus corporis incidunt, placeat, rem iure cupiditate, dolorum maiores tempora?";

function HomePage() {
  return (
    <div>
      <Listing
        id="1"
        src="../public/house1/house1.png"
        title="Huge House"
        description={sampledescription}
        location="Lakewood, Texas"
        price="$500"
        rating="4.89"
      />

      <Listing
        id="2"
        src="../public/house1/house2.png"
        title="Enormous House"
        description={sampledescription}
        location="Denton, Texas"
        price="$500"
        rating="4.59"
      />

      <Listing
        id="3"
        src="../public/house1/house3.png"
        title="Humongous House"
        description={sampledescription}
        location="Plano, Texas"
        price="$500"
        rating="3.12"
      />
    </div>
  );
}

export default HomePage;