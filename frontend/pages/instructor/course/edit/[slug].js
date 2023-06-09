import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { List, Avatar, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateLessonForm from "../../../../components/forms/UpdateLessonForm";

const { Item } = List;

const CourseEdit = () => {
    // estado
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "9.99",
        uploading: false,
        paid: true,
        category: "",
        loading: false,
        lessons: [],
    });
    const [image, setImage] = useState({});
    const [preview, setPreview] = useState("");
    const [uploadButtonText, setUploadButtonText] = useState("Subir imagen");

    // estado para la actualización de las lecciones
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState({});
    const [uploadVideoButtonText, setUploadVideoButtonText] = useState(
        "Subir video"
    );
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);

    // router
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        loadCourse();
    }, [slug]);

    const loadCourse = async () => {
        const { data } = await axios.get(`/api/course/${slug}`);
        console.log(data);
        if (data) setValues(data);
        if (data?.image) setImage(data.image);
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        let file = e.target.files[0];
        setPreview(window.URL.createObjectURL(file));
        setUploadButtonText(file.name);
        setValues({ ...values, loading: true });
        // redimensionar
        Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
            try {
                let { data } = await axios.post("/api/course/upload-image", {
                    image: uri,
                });
                console.log("IMAGEN SUBIDA", data);
                // establecer la imagen en el estado
                setImage(data);
                setValues({ ...values, loading: false });
            } catch (err) {
                console.log(err);
                setValues({ ...values, loading: false });
                toast("Error en la carga de la imagen. Inténtalo más tarde.");
            }
        });
    };

    const handleImageRemove = async () => {
        try {
            setValues({ ...values, loading: true });
            const res = await axios.post("/api/course/remove-image", { image });
            setImage({});
            setPreview("");
            setUploadButtonText("Subir imagen");
            setValues({ ...values, loading: false });
            console.log(res);
        } catch (err) {
            console.log(err);
            setValues({ ...values, loading: false });
            toast("Error en la carga de la imagen. Inténtalo más tarde.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/course/${slug}`, {
                ...values,
                image,
            });
            toast("¡Curso actualizado!");
            console.log(data);
            router.push(`/instructor/course/view/${slug}`);
        } catch (err) {
            toast(err.response.data);
        }
    };

    const handleDrag = (e, index) => {
        e.dataTransfer.setData("itemIndex", index);
    };

    const handleDrop = async (e, index) => {
        const movingItemIndex = e.dataTransfer.getData("itemIndex");
        const targetItemIndex = index;
        let allLessons = values.lessons;

        let movingItem = allLessons[movingItemIndex];
        allLessons.splice(movingItemIndex, 1);
        allLessons.splice(targetItemIndex, 0, movingItem);

        setValues({ ...values, lessons: [...allLessons] });


        toast("Lecciones reorganizadas exitosamente");
    };

    const handleDelete = async (index) => {
        const answer = window.confirm("¿Estás seguro de que deseas eliminar?");
        if (!answer) return;
        let allLessons = values.lessons;
        const removed = allLessons.splice(index, 1);
        setValues({ ...values, lessons: allLessons });

        const { data } = await axios.put(`/api/course/${slug}/${removed[0]._id}`);
        console.log("LECCIÓN ELIMINADA =>", data);
    };

    /**
     * Funciones de actualización de las lecciones
     */

    const handleVideo = async (e) => {
        if (current?.video?.Location) {
            const res = await axios.post(
                `/api/course/video-remove/${values.instructor._id}`,
                current.video
            );
            console.log("ELIMINADO ===>", res);
        }

        const file = e.target.files[0];
        setUploadVideoButtonText(file.name);
        setUploading(true);

        const videoData = new FormData();
        videoData.append("video", file);
        videoData.append("courseId", values._id);

        const { data } = await axios.post(
            `/api/course/video-upload/${values.instructor._id}`,
            videoData,
            {
                onUploadProgress: (e) =>
                    setProgress(Math.round((100 * e.loaded) / e.total)),
            }
        );
        console.log(data);
        setCurrent({ ...current, video: data });
        setUploading(false);
    };

    const handleUpdateLesson = async (e) => {
        e.preventDefault();
        const { data } = await axios.put(
            `/api/course/lesson/${slug}/${current._id}`,
            current
        );
        setUploadVideoButtonText("Subir video");
        setVisible(false);

        if (data.ok) {
            let arr = values.lessons;
            const index = arr.findIndex((el) => el._id === current._id);
            arr[index] = current;
            setValues({ ...values, lessons: arr });
            toast("Lección actualizada");
        }
    };

    return (
        <InstructorRoute>
            <h1 className="jumbotron text-center square">Actualizar Curso</h1>
            <div className="pt-3 pb-3">
                <CourseCreateForm
                    handleSubmit={handleSubmit}
                    handleImageRemove={handleImageRemove}
                    handleImage={handleImage}
                    handleChange={handleChange}
                    values={values}
                    setValues={setValues}
                    preview={preview}
                    uploadButtonText={uploadButtonText}
                    editPage={true}
                />
            </div>

            <hr />

            <div className="row pb-5">
                <div className="col lesson-list">
                    <h4>{values?.lessons?.length} Lecciones</h4>
                    <List
                        onDragOver={(e) => e.preventDefault()}
                        itemLayout="horizontal"
                        dataSource={values?.lessons}
                        renderItem={(item, index) => (
                            <Item
                                draggable
                                onDragStart={(e) => handleDrag(e, index)}
                                onDrop={(e) => handleDrop(e, index)}
                            >
                                <Item.Meta
                                    onClick={() => {
                                        setVisible(true);
                                        setCurrent(item);
                                    }}
                                    avatar={<Avatar>{index + 1}</Avatar>}
                                    title={item.title}
                                ></Item.Meta>

                                <DeleteOutlined
                                    onClick={() => handleDelete(index)}
                                    className="text-danger float-right"
                                />
                            </Item>
                        )}
                    ></List>
                </div>
            </div>

            <Modal
                title="Actualizar lección"
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <UpdateLessonForm
                    current={current}
                    setCurrent={setCurrent}
                    handleVideo={handleVideo}
                    handleUpdateLesson={handleUpdateLesson}
                    uploadVideoButtonText={uploadVideoButtonText}
                    progress={progress}
                    uploading={uploading}
                />
            </Modal>
        </InstructorRoute>
    );
};

export default CourseEdit;
