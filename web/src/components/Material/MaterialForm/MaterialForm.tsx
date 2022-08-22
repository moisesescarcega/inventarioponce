import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const MaterialForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.material?.id)
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
          Descripcion
        </Label>
        
          <TextField
            name="descripcion"
            defaultValue={props.material?.descripcion}
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
            defaultValue={props.material?.tipo}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
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
            name="entradas"
            defaultValue={props.material?.entradas}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
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
            name="salidas"
            defaultValue={props.material?.salidas}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
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
            name="existencias"
            defaultValue={props.material?.existencias}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
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
            defaultValue={props.material?.propiedad}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
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
            defaultValue={props.material?.notas}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="notas" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MaterialForm
