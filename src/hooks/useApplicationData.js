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
    currentuser: {}
  });

  //axios.post(url, )
  //axios.post("/api/vehicles",{name:"BMW"})
  useEffect(() => {
    Promise.all([
      axios.get("/api/vehicles"),
      axios.get("/api/auctions"),
      axios.get("/api/dealers"),
      axios.get("/api/images"),
      axios.get("/api/sellers"),
      axios.get("/api/currentuser"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        vehicles: all[0].data,
        auctions: all[1].data,
        dealers: all[2].data,
        images: all[3].data,
        sellers: all[4].data,
        currentuser: all[5].data
      }));
    });
  }, []);

  function setLogin(user) {
  
    console.log(`Trying to sign in as ${user}`);
    //Sends PUT Response to update the Appointment as well as updating remaing spots

    return axios.put(`/api/login/${user.id}`, { user }).
    then((result) =>   {
      setState({...state, currentuser: user});
    });
  };
  
  function removeLogin (user) {
  
    console.log("DELETE users");
    return axios.delete(`/api/login/${user.id}`).
    then((result) =>   {
      setState({...state, currentuser: {}});
    });
  };

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

  function registerCar(id, vehicle) {
    console.log("car");
    //Sends PUT Response to update the Appointment as well as updating remaing spots
    return axios.put(`/api/vehicles/register/${id}`, { vehicle }).
    then((result) =>   {
      setState({...state, vehicles:[...state.vehicles,vehicle]});
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

  function registerImage(id, image) {
    console.log("car");
    //Sends PUT Response to update the Appointment as well as updating remaing spots
    return axios.put(`/api/register/image/${id}`, { image }).
    then((result) =>   {
      setState({...state, images:[...state.images,image]});
    });
  };
  return {state, setLogin, removeLogin ,makeBid, selectBid, selectVehicle, registerCar, registerImage};
}

