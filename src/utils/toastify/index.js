import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToast = (msg) => {
    toast.success(msg, {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const errorToast = (msg) => {
    toast.error(msg, {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const warnToast = (msg) => {
    toast.warn(msg, {
        transition: Flip,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}