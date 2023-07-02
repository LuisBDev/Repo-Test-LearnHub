// Importamos las librerías necesarias desde React y antd
import React, { useState } from "react";
import { Button, Input, Radio } from "antd";

const AddQuestionForm = ({
  valuesQuestion,
  setValuesQuestion,
  handleAddQuestion,
  uploadingQuestion
}) => {
    // Definición del estado "formErrors" utilizando el Hook de useState. Inicialmente, está vacío.
    const [formErrors, setFormErrors] = useState({});
    
    // Función "handleChangeTitle" que se ejecuta cuando hay cambios en el título de la pregunta.
    // Actualiza el estado "valuesQuestion" con el nuevo valor del título.
    const handleChangeTitle = (e) => {
      setValuesQuestion({ ...valuesQuestion, title: e.target.value });
    };
    
    // Función "handleChangeContent" que se ejecuta cuando hay cambios en el contenido de la pregunta.
    // Actualiza el estado "valuesQuestion" con el nuevo valor del contenido.
    const handleChangeContent = (e) => {
      setValuesQuestion({ ...valuesQuestion, content: e.target.value });
    };
    
    // Función "handleChangeAnswer" que se ejecuta cuando hay cambios en la respuesta seleccionada.
    // Convierte el índice de la respuesta a cadena y actualiza el estado "valuesQuestion" con el nuevo valor de la respuesta.
    const handleChangeAnswer = (e) => {
      const answerIndex = e.target.value.toString(); // Convertir a cadena
      setValuesQuestion({ ...valuesQuestion, answer: answerIndex });
    };
    
    // Función "handleChangeOption" que se ejecuta cuando hay cambios en una opción específica de la pregunta.
    // Crea una copia del array de opciones, actualiza la opción específica y luego actualiza el estado "valuesQuestion" con las nuevas              opciones.
    const handleChangeOption = (optionIndex, e) => {
      const options = [...valuesQuestion.options];
      options[optionIndex] = e.target.value;
      setValuesQuestion({ ...valuesQuestion, options });
    };


     // Esta función se encarga de manejar el evento de envío del formulario.
    const handleSubmit = (e) => {
      e.preventDefault(); // Evitamos que el formulario se envíe de forma predeterminada.
      const errors = validateForm(); // Validamos el formulario y almacenamos los errores.
    
      if (Object.keys(errors).length > 0) {
        // Si hay errores en el formulario, los establecemos en el estado y detenemos la ejecución.
        setFormErrors(errors);
        return;
      }
    
      handleAddQuestion(e); // Si no hay errores, llamamos a la función que maneja la adición de la pregunta.
    };
    
    // Esta función se encarga de validar el formulario.
    const validateForm = () => {
      const errors = {}; // Creamos un objeto para almacenar los posibles errores.
    
      if (!valuesQuestion.title.trim()) {
        errors.title = "El título es requerido"; // Verificamos si el título está vacío y, de ser así, añadimos un error.
      }
    
      if (valuesQuestion.options.some((option) => !option.trim())) {
        errors.options = "Todas las opciones son requeridas"; // Verificamos si hay opciones vacías y, de ser así, añadimos un error.
      }
    
      if (!valuesQuestion.answer) {
        errors.answer = "Debe seleccionar la respuesta correcta"; // Verificamos si no se ha seleccionado una respuesta y, de ser así, añadimos un error.
      }

      return errors; // Devolvemos el objeto con los errores encontrados (si los hay) o un objeto vacío si no hay errores.
    };


  // Definición de una función llamada "isFormValid"
    const isFormValid = () => {
      // Retorno de la función, se utiliza la palabra reservada "return"
      return (
        // Evaluación de tres condiciones que deben cumplirse para que la función devuelva true
    
        // La primera condición verifica si el título en "valuesQuestion" tiene al menos un caracter no espaciado (trim() elimina espacios al principio y al final del string)
        valuesQuestion.title.trim() &&
    
        // La segunda condición utiliza el método "every" para verificar que todos los elementos del arreglo "options" en "valuesQuestion" tengan al menos un caracter no espaciado
        valuesQuestion.options.every((option) => option.trim()) &&
    
        // La tercera condición verifica si la propiedad "answer" en "valuesQuestion" tiene un valor asignado (es diferente de null, undefined, 0, cadena vacía, etc.)
        valuesQuestion.answer
      );
    };


  return (
    <div className="container pt-3">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="form-control square"
          value={valuesQuestion.title}
          onChange={handleChangeTitle}
          placeholder="Pregunta"
          autoFocus
          required
        />
        {formErrors.title && <span className="text-danger">{formErrors.title}</span>}

        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          value={valuesQuestion.content}
          onChange={handleChangeContent}
          placeholder="Contenido"
          required
        ></textarea>

        <h4>Opciones de respuesta:</h4>
        {valuesQuestion.options.map((option, index) => (
          <div key={option.id}>
            <Radio.Group
              onChange={(e) => handleChangeAnswer(e)}
              value={valuesQuestion.answer.toString()} // Convertir a cadena
            >
              <Radio value={index.toString()}>{option}</Radio> {/* Convertir a cadena */}
            </Radio.Group>
            <Input
              type="text"
              value={option}
              onChange={(e) => handleChangeOption(index, e)}
              placeholder={`Opción ${index + 1}`}
              required
            />
            {formErrors.options && <span className="text-danger">{formErrors.options}</span>}
          </div>
        ))}

        {formErrors.answer && <span className="text-danger">{formErrors.answer}</span>}

        <Button
          className="col mt-3"
          size="large"
          type="primary"
          loading={uploadingQuestion}
          shape="round"
          htmlType="submit"
          disabled={!isFormValid()} // Deshabilitar el botón si el formulario no es válido
        >
          Agregar Pregunta
        </Button>
      </form>
    </div>
  );
};

export default AddQuestionForm;
