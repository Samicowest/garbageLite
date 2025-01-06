import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogOverlay, DialogContent } from "./components/ui/dialog";
import { ToastContainer, toast } from "react-toastify";

interface AddressProps {
  address: string;
  isOpen: boolean; // State value
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // State updater function
}

const AddressOverlay: React.FC<AddressProps> = ({
  isOpen,
  setIsOpen,
  address,
}) => {
  const closeOverlay = () => setIsOpen(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        toast.info("Address have been copied to clipboard", {
          position: "top-center",
          autoClose: 5000, // Close after 5 seconds
        });
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
        toast.info("Error copying text", {
          position: "top-center",
          autoClose: 5000, // Close after 5 seconds
        });
      });
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        <DialogContent className="max-w-md flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <p>{address}</p>
            <button
              onClick={copyToClipboard}
              className="mt-4 text-white bg-green-500 px-4 py-2 rounded-lg mr-4 hover:bg-green-600 transition"
            >
              Copy
            </button>
            <button
              onClick={closeOverlay}
              className="mt-4 text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <ToastContainer
        style={{
          marginTop: "60px",
          maxWidth: "300px", // Adjust based on navbar height
        }}
      />
    </div>
  );
};

export default AddressOverlay;
