import React from "react";
import { homeContent } from "../utilities/Strings";

const Welcome = () => {
  return (
    <div className="welcome">
      <img src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
      <p>{homeContent.headingPTag}</p>
      <h2>{homeContent.headingH2Tag}</h2>
    </div>
  );
};

export default Welcome;
