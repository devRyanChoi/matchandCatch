import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook with multiple helper functions for code re-usability
export default function useApplicationData(props) {
  const [state, setState] = useState({
    vehicles: [],
    seller: [],
    dealer: [],
    auctions: [],
    images: [],
    status: false,
    admin: false
  });

  //axios.post(url, )
  axios.post("/api/vehicles",{name:"BMW"})
  

  useEffect(() => {
    Promise.all([
      axios.get("/api/vehicles"),
      axios.get("/api/auctions"),
      axios.get("/api/dealers"),
      axios.get("/api/images"),
      axios.get("/api/sellers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        vehicles: all[0].data,
        auctions: all[1].data,
        dealers: all[2].data,
        images: all[3].data,
        sellers: all[4].data
      }));
    });
  }, []);

  

  return { state};
}