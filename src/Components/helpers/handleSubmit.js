import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
export const handleSubmit = (e, nombre, email, mensaje, setActiveBtn) => {
    e.preventDefault();
    setActiveBtn(true);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    const templateParams = {
        name: nombre,
        email: email,
        message: mensaje,
    };

    emailjs
        .send(serviceId, templateId, templateParams, {
            publicKey: publicKey,
        })
        .then(
            () => {
                Swal.fire({
                    icon: "success",
                    title: "Su correo ha sido enviado",
                    showConfirmButton: true,
                    timer: 1500,
                });
                setActiveBtn(false);
            },
            (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Ha habido un problema. Por favor, intente nuevamente",
                    showConfirmButton: true,
                    timer: 1500,
                });
            }
        );
};
