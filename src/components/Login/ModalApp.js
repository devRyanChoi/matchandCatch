import React, { useState } from "react";
import "./styles.css";
import { Modal } from "./Modal";
export default function ModalApp() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <h1>Popup Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}