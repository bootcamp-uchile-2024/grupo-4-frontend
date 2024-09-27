import { Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './forms.css';

const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  apellido: Yup.string().required('El apellido es obligatorio'),
  direccion: Yup.string().required('La dirección es obligatoria'),
  comuna: Yup.string().required('La comuna es obligatoria'),
  ciudad: Yup.string().required('La ciudad es obligatoria'),
  region: Yup.string().required('La región es obligatoria'),
  telefono: Yup.string()
    .required('El teléfono es obligatorio')
    .matches(/^\d+$/, 'El teléfono debe contener solo números')
    .min(8, 'El teléfono debe tener al menos 8 dígitos'),
  correo: Yup.string()
    .email('El correo electrónico no es válido')
    .required('El correo es obligatorio'),
  contrasenna: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmarContrasenna: Yup.string()
    .oneOf([Yup.ref('contrasenna')], 'Las contraseñas no coinciden')
    .required('Debes confirmar la contraseña'),
});

export const UserForms = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      direccion: '',
      comuna: '',
      ciudad: '',
      region: '',
      telefono: '',
      correo: '',
      contrasenna: '',
      confirmarContrasenna: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
        console.log('Valores del formulario:',  JSON.stringify(values));
    },
  });

    return (
        <div className="form-container">
            <form className="form-content" onSubmit={formik.handleSubmit}>
                <div className="mini-caja">
                    <label htmlFor="nombre" className="label-form">Nombre</label>
                    <input
                    type="text"
                    id="nombre"
                    {...formik.getFieldProps('nombre')}
                    />
                    {formik.touched.nombre && formik.errors.nombre ? (
                    <div className="text-danger">{formik.errors.nombre}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="apellido" className="label-form">Apellido</label>
                    <input
                    type="text"
                    id="apellido"
                    {...formik.getFieldProps('apellido')}
                    />
                    {formik.touched.apellido && formik.errors.apellido ? (
                    <div className="text-danger">{formik.errors.apellido}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="direccion" className="label-form">Dirección</label>
                    <input
                    type="text"
                    id="direccion"
                    {...formik.getFieldProps('direccion')}
                    />
                    {formik.touched.direccion && formik.errors.direccion ? (
                    <div className="text-danger">{formik.errors.direccion}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="comuna" className="label-form">Comuna</label>
                    <input
                    type="text"
                    id="comuna"
                    {...formik.getFieldProps('comuna')}
                    />
                    {formik.touched.comuna && formik.errors.comuna ? (
                    <div className="text-danger">{formik.errors.comuna}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="ciudad" className="label-form">Ciudad</label>
                    <input
                    type="text"
                    id="ciudad"
                    {...formik.getFieldProps('ciudad')}
                    />
                    {formik.touched.ciudad && formik.errors.ciudad ? (
                    <div className="text-danger">{formik.errors.ciudad}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="region" className="label-form">Región</label>
                    <input
                    type="text"
                    id="region"
                    {...formik.getFieldProps('region')}
                    />
                    {formik.touched.region && formik.errors.region ? (
                    <div className="text-danger">{formik.errors.region}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="telefono" className="label-form">Teléfono</label>
                    <input
                    type="text"
                    id="telefono"
                    {...formik.getFieldProps('telefono')}
                    />
                    {formik.touched.telefono && formik.errors.telefono ? (
                    <div className="text-danger">{formik.errors.telefono}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="correo" className="label-form">Correo Electrónico</label>
                    <input
                    type="email"
                    id="correo"
                    {...formik.getFieldProps('correo')}
                    />
                    {formik.touched.correo && formik.errors.correo ? (
                    <div className="text-danger">{formik.errors.correo}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="contrasenna" className="label-form">Contraseña</label>
                    <input
                    type="password"
                    id="contrasenna"
                    {...formik.getFieldProps('contrasenna')}
                    />
                    {formik.touched.contrasenna && formik.errors.contrasenna ? (
                    <div className="text-danger">{formik.errors.contrasenna}</div>
                    ) : null}
                </div>

                <div className="mini-caja">
                    <label htmlFor="confirmarContrasenna" className="label-form">Confirmar Contraseña</label>
                    <input
                    type="password"
                    id="confirmarContrasenna"
                    {...formik.getFieldProps('confirmarContrasenna')}
                    />
                    {formik.touched.confirmarContrasenna && formik.errors.confirmarContrasenna ? (
                    <div className="text-danger">{formik.errors.confirmarContrasenna}</div>
                    ) : null}
                </div>

                <div className="d-flex justify-content-start">
                    <Button variant="flat" type="submit" size="sm">Crear Usuario</Button>
                </div>
            </form>
        </div>
    );
};
