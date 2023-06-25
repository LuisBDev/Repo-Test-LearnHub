import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import { Context } from "../../context";
import { toast } from "react-toastify";


const SingleCourse = ({ course }) => {
    const [showModal, setShowModal] = useState(false);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [enrolled, setEnrolled] = useState({});

    const { state: { user } } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        if (user && course) {
            checkEnrollment();
        }
    }, [user, course]);

    // Verificar si el usuario está inscrito en el curso
    const checkEnrollment = async () => {
        const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
        console.log("VERIFICAR INSCRIPCIÓN", data);
        setEnrolled(data);
    };

    // Manejar la inscripción pagada
    const handlePaidEnrollment = async (e) => {
        e.preventDefault();
        try {
            if (!user) {
                router.push("/login");
                return;
            }

            if (enrolled.status) {
                router.push(`/user/course/${enrolled.course.slug}`);
                return;
            }

            setLoading(true);
            const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);
            toast(data.message);
            setLoading(false);
            router.push(`/user/course/${data.course.slug}`);

            
        } catch (err) {
            toast("Error en la inscripción pagada, inténtalo de nuevo.");
            console.log(err);
            setLoading(false);
        }
    };

    // Manejar la inscripción gratuita
    const handleFreeEnrollment = async (e) => {
        e.preventDefault();
        try {
            if (!user) {
                router.push("/login");
                return;
            }

            if (enrolled.status) {
                router.push(`/user/course/${enrolled.course.slug}`);
                return;
            }

            setLoading(true);
            const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
            toast(data.message);
            setLoading(false);
            router.push(`/user/course/${data.course.slug}`);
        } catch (err) {
            toast("Error en la inscripción, inténtalo de nuevo.");
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <>
            <SingleCourseJumbotron
                course={course}
                showModal={showModal}
                setShowModal={setShowModal}
                preview={preview}
                setPreview={setPreview}
                user={user}
                loading={loading}
                handlePaidEnrollment={handlePaidEnrollment}
                handleFreeEnrollment={handleFreeEnrollment}
                enrolled={enrolled}
                setEnrolled={setEnrolled}
            />

            <PreviewModal
                showModal={showModal}
                setShowModal={setShowModal}
                preview={preview}
            />

            {course.lessons && (
                <SingleCourseLessons
                    lessons={course.lessons}
                    setPreview={setPreview}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </>
    );
};

export async function getServerSideProps({ query }) {
    const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);
    return {
        props: {
            course: data,
        },
    };
}

export default SingleCourse;
