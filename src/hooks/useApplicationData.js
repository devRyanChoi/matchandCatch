import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook with multiple helper functions for code re-usability
export default function useApplicationData(props) {
  const [state, setState] = useState({
    vehicles: [],
    sellers: [],
    dealers: [],
    auctions: [],
    images: [],
    status: false,
    admin: false,
    users: 0
  });

  //axios.post(url, )
  //axios.post("/api/vehicles",{name:"BMW"})
  const setAuction = (auctions) => setState({ ...state, auctions});
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
        sellers: all[4].data,
      }));
    });
  }, []);

  function makeBid(id, auction) {
  
    const auctions = [...state.auctions, auction];
    //Sends PUT Response to update the Appointment as well as updating remaing spots
    return axios.put(`/api/auctions/bid/${id}`, { auction }).
    then((result) =>   {
      setState({...state, auctions:[...state.auctions,auction]});
    });
  };

  function selectBid(id, auction) {
  
    const auctions = [...state.auctions, auction];
    //Sends PUT Response to update the Appointment as well as updating remaing spots
    return axios.post(`/api/auctions/select/${id}`, { auction }).
    then((result) =>   {
      setState({...state, auctions:[...state.auctions,auction]});
    });
  };

  function selectVehicle(id, auction) {
  
    const auctions = [...state.auctions, auction];
    //Sends PUT Response to update the Appointment as well as updating remaing spots
    return axios.post(`/api/vehicles/select/${id}`, { auction }).
    then((result) =>   {
      setState({...state, auctions:[...state.auctions,auction]});
    });
  };

  return {state, setAuction, makeBid, selectBid, selectVehicle};
}
