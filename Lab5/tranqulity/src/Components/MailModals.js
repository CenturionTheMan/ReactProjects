import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { auth } from "../Firebase";

Modal.setAppElement("#root");

export function MailModal({ modalIsOpen, setModalIsOpen }) {
  const mailContentRef = useRef();
  const mailToRef = useRef();

  const handleMail = () => {
    if (!auth.currentUser) {
      toast.error("You need to login to send mail");
      setModalIsOpen(false);
    } else {
      const mailContent = mailContentRef.current.value;
      const mailTo = mailToRef.current.value;
      setModalIsOpen(false);
      toast.success(`Mail sent to ${mailTo}`);
    }
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
          To
          <input type="text" required ref={mailToRef} />
        </label>

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
