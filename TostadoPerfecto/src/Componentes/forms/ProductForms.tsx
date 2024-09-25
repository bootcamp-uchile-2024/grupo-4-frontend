import { Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './forms.css';

const validationSchema = Yup.object({
  nombreProducto: Yup.string()
    .required('El nombre del producto es obligatorio'),
  descripcion: Yup.string()
    .required('La descripción es obligatoria'),
  precio: Yup.number()
    .required('El precio es obligatorio')
    .positive('El precio debe ser un número positivo'),
  stock: Yup.number()
    .required('El stock es obligatorio')
    .min(0, 'El stock no puede ser negativo'),
  marca: Yup.string()
    .required('La marca es obligatoria'),
  origen: Yup.string()
    .required('El origen es obligatorio'),
  tipo: Yup.string()
    .required('Debes seleccionar un tipo'),
  formato: Yup.string()
    .required('El formato es obligatorio'),
  fechaCreacion: Yup.date()
    .required('La fecha de creación es obligatoria'),
  imagen: Yup.mixed()
    .required('La imagen es obligatoria'),
  destacado: Yup.boolean(),
});

export const ProductForms = () => {
  const formik = useFormik({
    initialValues: {
      nombreProducto: '',
      descripcion: '',
      precio: '',
      stock: '',
      marca: '',
      origen: '',
      tipo: '',
      formato: '',
      fechaCreacion: '',
      imagen: null,
      destacado: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('Valores del formulario:', values);
    },
  });

  return (
    <div className="form-container">
      <form className="form-content" onSubmit={formik.handleSubmit}>
        <div className="mini-caja">
          <label htmlFor="nombreProducto" className="label-form">Nombre producto</label>
          <input
            type="text"
            id="nombreProducto"
            {...formik.getFieldProps('nombreProducto')}
          />
          {formik.touched.nombreProducto && formik.errors.nombreProducto ? (
            <div className="text-danger">{formik.errors.nombreProducto}</div>
          ) : null}
        </div>
        
        <div className="mini-caja">
          <label htmlFor="descripcion" className="label-form">Descripcion</label>
          <input
            type="text"
            id="descripcion"
            {...formik.getFieldProps('descripcion')}
          />
          {formik.touched.descripcion && formik.errors.descripcion ? (
            <div className="text-danger">{formik.errors.descripcion}</div>
          ) : null}
        </div>
        
        <div className="mini-caja">
          <label htmlFor="precio" className="label-form">Precio</label>
          <input
            type="number"
            id="precio"
            {...formik.getFieldProps('precio')}
          />
          {formik.touched.precio && formik.errors.precio ? (
            <div className="text-danger">{formik.errors.precio}</div>
          ) : null}
        </div>

        <div className="mini-caja">
          <label htmlFor="stock" className="label-form">Stock</label>
          <input
            type="number"
            id="stock"
            {...formik.getFieldProps('stock')}
          />
          {formik.touched.stock && formik.errors.stock ? (
            <div className="text-danger">{formik.errors.stock}</div>
          ) : null}
        </div>

        <div className="mini-caja">
          <label htmlFor="marca" className="label-form">Marca</label>
          <input
            type="text"
            id="marca"
            {...formik.getFieldProps('marca')}
          />
          {formik.touched.marca && formik.errors.marca ? (
            <div className="text-danger">{formik.errors.marca}</div>
          ) : null}
        </div>

        <div className="mini-caja">
          <label htmlFor="origen" className="label-form">Origen</label>
          <input
            type="text"
            id="origen"
            {...formik.getFieldProps('origen')}
          />
          {formik.touched.origen && formik.errors.origen ? (
            <div className="text-danger">{formik.errors.origen}</div>
          ) : null}
        </div>

        <div className="mini-caja">
          <label htmlFor="tipo" className="label-form">Tipo</label>
          <select
            id="tipo"
            {...formik.getFieldProps('tipo')}
          >
            <option value="">--Seleccione un tipo--</option>
            <option value="accesorios">Accesorios</option>
            <option value="bebidas">Bebidas</option>
            <option value="box">Box</option>
          </select>
          {formik.touched.tipo && formik.errors.tipo ? (
            <div className="text-danger">{formik.errors.tipo}</div>
          ) : null}
        </div>

        <div className="mini-caja">
          <label htmlFor="formato" className="label-form">Formato</label>
          <input
            type="text"
            id="formato"
            {...formik.getFieldProps('formato')}
          />
          {formik.touched.formato && formik.errors.formato ? (
            <div className="text-danger">{formik.errors.formato}</div>
          ) : null}
        </div>

        <div className="mini-caja">
          <label htmlFor="fechaCreacion" className="label-form">Fecha de creación</label>
          <input
            type="date"
            id="fechaCreacion"
            {...formik.getFieldProps('fechaCreacion')}
          />
          {formik.touched.fechaCreacion && formik.errors.fechaCreacion ? (
            <div className="text-danger">{formik.errors.fechaCreacion}</div>
          ) : null}
        </div>

        <div className="mini-caja">
          <label htmlFor="imagen" className="label-form">Imagen</label>
          <input
            type="file"
            id="imagen"
            onChange={(event) => {
              const file = event.currentTarget?.files ? event.currentTarget.files[0] : null;
              formik.setFieldValue("imagen", file);
            }}
          />
          {formik.touched.imagen && formik.errors.imagen ? (
            <div className="text-danger">{formik.errors.imagen}</div>
          ) : null}
        </div>

        <div className="d-flex gap-1 align-items-center justify-content-start">
          <label htmlFor="destacado" className="label-form">Destacado</label>
          <input
            type="checkbox"
            id="destacado"
            {...formik.getFieldProps('destacado')}
          />
        </div>

        <div className="d-flex justify-content-end">
          <Button variant="flat" type="submit" size="sm">Crear Producto</Button>
        </div>
      </form>
    </div>
  );
};