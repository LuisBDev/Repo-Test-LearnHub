// Importamos los componentes Button, Progress y Tooltip de la biblioteca "antd"
import { Button, Progress, Tooltip } from "antd";

// Importamos el icono CloseCircleFilled de la biblioteca "@ant-design/icons"
import { CloseCircleFilled } from "@ant-design/icons";


const AddLessonForm = ({
    values,
    setValues,
    handleAddLesson,
    uploading,
    uploadButtonText,
    handleVideo,
    progress,
    handleVideoRemove,
}) => {
    const handleInputChange = (e, field) => {
        setValues({ ...values, [field]: e.target.value });
    };

    return (
        <div className="container pt-3">
            <form onSubmit={handleAddLesson}>
                <input
                    type="text"
                    className="form-control square"
                    onChange={(e) => handleInputChange(e, "title")}
                    value={values.title}
                    placeholder="Título"
                    autoFocus
                    required
                />

                <textarea
                    className="form-control mt-3"
                    cols="7"
                    rows="7"
                    onChange={(e) => handleInputChange(e, "content")}
                    value={values.content}
                    placeholder="Contenido"
                ></textarea>

                <div className="d-flex justify-content-center">
                    <label className="btn btn-dark btn-block text-left mt-3">
                        {uploadButtonText}
                        <input onChange={handleVideo} type="file" accept="video/*" hidden />
                    </label>

                    {!uploading && values.video?.Location && (
                        <Tooltip title="Eliminar">
                            <span onClick={handleVideoRemove} className="pt-1 pl-3">
                                <CloseCircleFilled className="text-danger d-flex justify-content-center pt-4 pointer" />
                            </span>
                        </Tooltip>
                    )}
                </div>

                {progress > 0 && (
                    <Progress
                        className="d-flex justify-content-center pt-2"
                        percent={progress}
                        steps={10}
                    />
                )}

                <Button
                    onClick={handleAddLesson}
                    className="col mt-3"
                    size="large"
                    type="primary"
                    loading={uploading}
                    shape="round"
                >
                    Guardar
                </Button>
            </form>
        </div>
    );
};

export default AddLessonForm;