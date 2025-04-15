"use client";

import Modal from "./Modal";

const AuthModal = () => {
  return (
    <Modal
      title="Welcome back!"
      description="Login to your account."
      isOpen={true}
      onChange={() => {}}
    >
      <div>
        <p>This is the content inside the auth modal.</p>
      </div>
    </Modal>
  );
}

export default AuthModal;