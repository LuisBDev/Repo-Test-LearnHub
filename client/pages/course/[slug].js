import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import { Context } from "../../context";
import { toast } from "react-toastify";


const SingleCourse = ({ course }) => {
    // estado
    const [showModal, setShowModal] = useState(false);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [enrolled, setEnrolled] = useState({});
    // contexto
    const {
        state: { user },
    } = useContext(Context);

    useEffect(() => {
        if (user && course) checkEnrollment();
    }, [user, course]);

    const checkEnrollment = async () => {
        const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
        console.log("VERIFICAR INSCRIPCIÓN", data);
        setEnrolled(data);
    };

    const router = useRouter();
    const { slug } = router.query;

    const handlePaidEnrollment = async () => {
        try {
            setLoading(true);
            // verificar si el usuario ha iniciado sesión
            if (!user) router.push("/login");
            // verificar si ya está inscrito
            if (enrolled.status)
                return router.push(`/user/course/${enrolled.course.slug}`);
            const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
            stripe.redirectToCheckout({ sessionId: data });
        } catch (err) {
            toast("Error en la inscripción, inténtalo de nuevo.");
            console.log(err);
            setLoading(false);
        }
    };

    const handleFreeEnrollment = async (e) => {
        e.preventDefault();
        try {
            // verificar si el usuario ha iniciado sesión
            if (!user) router.push("/login");
            // verificar si ya está inscrito
            if (enrolled.status)
                return router.push(`/user/course/${enrolled.course.slug}`);
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
            {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
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
