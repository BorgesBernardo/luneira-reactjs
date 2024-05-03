import { number, object, string } from "yup"

let userSchema = object ({

  name: string().required("Este campo es obligatorio"),
  phone: number().required("Ingrese solo números").positive().integer(),
  email: string().email().required("Este formato debe contener formato E-Mail"),
  direccion: string().required("Este campo es obligatorio")

})

const validateForm = async (dataForm) =>{
  try{
    await userSchema.validate(dataForm)
    return { status: "success"  }
  } catch (error) {
    return { status: "error", error: error.message }
  }
}

export default validateForm