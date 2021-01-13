import React from "react";
import { Link } from "react-router-dom";

const Authorization = () => {
  return (
    <form>
      <div className="authorization">
        <input type="email" className="authorization__email" />
        <input type="password" className="authorization__password" />
        <Link to="/products" className="authorization__submit">
          <button>Authorize</button>
        </Link>
      </div>
    </form>
  );
};

export default Authorization;
