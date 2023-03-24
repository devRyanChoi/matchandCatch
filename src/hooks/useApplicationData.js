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
    transactions:[],
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
      axios.get("/api/transactions"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        vehicles: all[0].data,
        auctions: all[1].data,
        dealers: all[2].data,
        images: all[3].data,
        sellers: all[4].data,
        transactions: all[5].data
      }));
    });
  }, []);

  function makeBid(id, auction) {

    const auctions = [...state.auctions, auction];
    //Sends PUT Response to update the Appointment as well as updating remaing spots
    return axios.put(`/api/auctions/${id}`, { auction }).
    then((result) =>   {
      setState({...state, auctions:[...state.auctions,auction]});
    });
  };
  

  return {state, setAuction, makeBid};
}