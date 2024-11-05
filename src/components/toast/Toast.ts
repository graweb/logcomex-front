import swal from 'sweetalert2';

export function toast(icon, title) {
    const showToast = swal.mixin({
        toast: true,
        width: 400,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
        },
    });

    return showToast.fire({
        icon,
        title,
    });
}