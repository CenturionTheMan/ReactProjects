import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { useUser } from "../data/UserService";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

export function MailModal({ modalIsOpen, setModalIsOpen }) {
  const mailContentRef = useRef();

  const handleMail = () => {
    const mail = mailContentRef.current.value;
    setModalIsOpen(false);
    toast.success(`Mail sent: ${mail}`);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="auth-modal"
    >
      <h2>Mail</h2>
      <form>
        <label>
          Content
          <input type="text" required ref={mailContentRef} />
        </label>

        <button type="submit" className="button primary" onClick={handleMail}>
          Send
        </button>
      </form>
    </Modal>
  );
}
