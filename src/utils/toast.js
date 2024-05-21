import { toast } from "react-toastify";

export let toastSuccess = (message) => {
  toast.success(message);
};

export let toastError = (message) => {
  toast.error(message);
};
