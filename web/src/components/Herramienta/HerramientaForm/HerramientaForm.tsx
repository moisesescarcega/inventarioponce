import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const HerramientaForm = (props) => {
  const handleExistencias = () => {
    document.getElementById('hexistencias').value = document.getElementById('hentradas').value - document.getElementById('hsalidas').value;
    document.getElementById('hexistencias').focus();
  }
  const onSubmit = (data) => {






















    props.onSave(data, props?.herramienta?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="descripcion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Descripción
        </Label>

          <TextField
            name="descripcion"
            defaultValue={props.herramienta?.descripcion}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="descripcion" className="rw-field-error" />

        <Label
          name="tipo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tipo
        </Label>

          <TextField
            name="tipo"
            defaultValue={props.herramienta?.tipo}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: false }}
          />


        <FieldError name="tipo" className="rw-field-error" />

        <Label
          name="entradas"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Entradas
        </Label>

          <NumberField
            id='hentradas'
            name="entradas"
            defaultValue={props.herramienta?.entradas ? props.herramienta?.entradas : 0}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: false }}
            onChange={handleExistencias}
          />


        <FieldError name="entradas" className="rw-field-error" />

        <Label
          name="salidas"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salidas
        </Label>

          <NumberField
            id='hsalidas'
            name="salidas"
            defaultValue={props.herramienta?.salidas ? props.herramienta?.salidas : 0}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: false }}
            onChange={handleExistencias}
          />


        <FieldError name="salidas" className="rw-field-error" />

        <Label
          name="existencias"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Existencias
        </Label>

          <NumberField
            id="hexistencias"
            readOnly
            name="existencias"
            defaultValue={props.herramienta?.existencias ? props.herramienta?.existencias : 0}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: false }}
          />


        <FieldError name="existencias" className="rw-field-error" />

        <Label
          name="propiedad"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Propiedad
        </Label>

          <TextField
            name="propiedad"
            defaultValue={props.herramienta?.propiedad}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: false }}
          />


        <FieldError name="propiedad" className="rw-field-error" />

        <Label
          name="notas"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notas
        </Label>

          <TextField
            name="notas"
            defaultValue={props.herramienta?.notas}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: false }}
          />


        <FieldError name="notas" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Guardar
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default HerramientaForm
