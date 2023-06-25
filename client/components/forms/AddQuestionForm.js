import { Button, Input, Radio } from 'antd';

const AddQuestionForm = ({
    valuesQuestion,
    setValuesQuestion,
    handleAddQuestion,
    uploadingQuestion
}) => {
    const handleChangeTitle = (e) => {
        setValuesQuestion({ ...valuesQuestion, title: e.target.value });
    };

    const handleChangeContent = (e) => {
        setValuesQuestion({ ...valuesQuestion, content: e.target.value });
    };

    const handleChangeAnswer = (e) => {
        setValuesQuestion({ ...valuesQuestion, answer: e.target.value });
    };

    const handleChangeOption = (optionIndex, e) => {
        const options = [...valuesQuestion.options];
        options[optionIndex] = e.target.value;
        setValuesQuestion({ ...valuesQuestion, options });
    };

    return (
        <div className="container pt-3">
            <form onSubmit={handleAddQuestion}>
                <Input
                    type="text"
                    className="form-control square"
                    value={valuesQuestion.title}
                    onChange={handleChangeTitle}
                    placeholder="Pregunta"
                    autoFocus
                    required
                />

                <textarea
                    className="form-control mt-3"
                    cols="7"
                    rows="7"
                    value={valuesQuestion.content}
                    onChange={handleChangeContent}
                    placeholder="Contenido"
                ></textarea>

                <h4>Opciones de respuesta:</h4>
                {valuesQuestion.options.map((option, index) => (
                    <div key={option.id}>
                        <Radio.Group
                            onChange={(e) => handleChangeAnswer(e)}
                            value={valuesQuestion.answer}
                        >
                            <Radio value={index}>{option}</Radio>
                        </Radio.Group>
                        <Input
                            type="text"
                            value={option}
                            onChange={(e) => handleChangeOption(index, e)}
                            placeholder={`Opción ${index + 1}`}
                        />
                    </div>
                ))}

                <Button
                    onClick={handleAddQuestion}
                    className="col mt-3"
                    size="large"
                    type="primary"
                    loading={uploadingQuestion}
                    shape="round"
                >
                    Agregar Pregunta
                </Button>
            </form>
        </div>
    );
};

export default AddQuestionForm;
