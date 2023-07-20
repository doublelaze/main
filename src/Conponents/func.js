import Swal from "sweetalert2"


export const SwalAlert = (title, text, icon) => {
    return Swal.fire({
        title,
        text,
        icon,
    })
}