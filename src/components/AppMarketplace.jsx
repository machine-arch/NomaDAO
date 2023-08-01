import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MarketplaceContext from "./context/MarketplaceContext";
export default function App() {
  // hooks
  const navigate = useNavigate();
  // states
  const [MarketplaceActive, setMarketplaceActive] = useState(true); // should aside navigation events be active
  // prettier-ignore

  // navigate to home page on first render
  useEffect(() => {
    navigate("/Home");
  }, [navigate]);

  return (
    // prettier-ignore
    <MarketplaceContext.Provider value={{ MarketplaceActive, setMarketplaceActive}}>
            <Outlet />
    </MarketplaceContext.Provider>
  );
}
