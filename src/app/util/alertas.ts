import { PreguntaAlertaMensaje } from "app/models/PreguntaAlertaMensaje";
import Swal, { SweetAlertIcon } from "sweetalert2";

export const alertaSimple = (title :string= '',text:string = '',icon:SweetAlertIcon = 'success' ):void =>{

    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
    
}

export const alertaPregunta = async (preguntaAlertaMensaje:PreguntaAlertaMensaje):Promise<void> =>{
    const {titleQuestion,textQuestion,icon,textConfirmButtonQuestion,textCancelButtonText,titleConfirmed,textConfirmed,iconConfirmed,metodo} = preguntaAlertaMensaje;
    Swal.fire({
        title: titleQuestion,
        text: textQuestion,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: textConfirmButtonQuestion,
        cancelButtonText: textCancelButtonText
      }).then(async(result) => {
        if (result.isConfirmed) {
        await metodo();
          Swal.fire({
            title: titleConfirmed,
            text: textConfirmed,
            icon: iconConfirmed
          });
        }
      });
}