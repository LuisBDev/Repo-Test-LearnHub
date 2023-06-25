import React, { useState } from "react";
import { currencyFormatter } from "../../utils/helpers";
import { Badge, Button, Form, Input } from "antd";
import ReactPlayer from "react-player";
import { LoadingOutlined, SafetyOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const SingleCourseJumbotron = ({
    course,
    showModal,
    setShowModal,
    setPreview,
    loading,
    user,
    handlePaidEnrollment,
    handleFreeEnrollment,
    enrolled,
}) => {
    // Destructuring
    const {
        name,
        description,
        instructor,
        updatedAt,
        lessons,
        image,
        price,
        paid,
        category,
    } = course;

    // State to control the visibility of the form and original button
    const [showForm, setShowForm] = useState(false);

    // Handle click event for the new button
    const handlePayButton = () => {
        setShowForm(true);
    };

    // Handle form submission
    const handleFormSubmit = (values) => {
        // Process the form data here
        // ...
        // After processing, hide the form and show the original button
        setShowForm(false);
    };

    // Determine the enrollment button text
    const getButtonText = () => {
        if (!user) {
            return "Inicia sesión para inscribirte";
        } else if (enrolled.status) {
            return "Ir al curso";
        } else if (paid) {
            return "Pagar";
        } else {
            return "Suscribirse";
        }
    };

    const buttonText = getButtonText();

    return (
        <div className="jumbotron bg-primary square">
            <div className="row">
                <div className="col-md-8">
                    {/* Title */}
                    <h1 className="text-light font-weight-bold">{name}</h1>
                    {/* Description */}
                    <p className="lead">{description?.substring(0, 160)}...</p>
                    {/* Category */}
                    <Badge
                        count={category}
                        style={{ backgroundColor: "#03a9f4" }}
                        className="pb-4 mr-2"
                    />
                    {/* Author */}
                    <p>Creado por {instructor.name}</p>
                    {/* Updated At */}
                    <p>Última actualización {new Date(updatedAt).toLocaleDateString()}</p>
                    {/* Price */}
                    <h4 className="text-light">
                        {paid
                            ? currencyFormatter({
                                amount: price,
                                currency: "usd",
                            })
                            : "Gratis"}
                    </h4>
                </div>
                <div className="col-md-4">
                    {/* Video */}
                    {lessons[0]?.video?.Location ? (
                        <div
                            onClick={() => {
                                setPreview(lessons[0].video.Location);
                                setShowModal(!showModal);
                            }}
                        >
                            <ReactPlayer
                                className="react-player-div"
                                url={lessons[0].video.Location}
                                light={image.Location}
                                width="100%"
                                height="225px"
                            />
                        </div>
                    ) : (
                        <>
                            <img
                                src={image ? image.Location : "/course.png"}
                                alt={name}
                                className="img img-fluid"
                            />
                        </>
                    )}

                    {/* Enrollment button */}
                    {loading ? (
                        <div className="d-flex justify-content-center mt-3">
                            <LoadingOutlined className="h1 text-danger" />
                        </div>
                    ) : (
                        <>
                            {paid && !showForm && (
                                <Button
                                    className="mb-3 mt-3"
                                    type="primary"
                                    block
                                    shape="round"
                                    icon={<ShoppingCartOutlined />}
                                    size="large"
                                    disabled={loading}
                                    onClick={handlePayButton}
                                >
                                    Pagar
                                </Button>
                            )}
                            {(!paid || showForm) && (
                                <>
                                    {showForm ? (
                                        <Form onFinish={handleFormSubmit}>
                                            <Form.Item name="name" rules={[{ required: true, message: 'Por favor, completa este espacio' }]}>
                                                <Input placeholder="Nombres" />
                                            </Form.Item>
                                            <Form.Item name="surnames" rules={[{ required: true, message: 'Por favor, completa este espacio' }]}>
                                                <Input placeholder="Apellidos" />
                                            </Form.Item>
                                            <Form.Item name="card_number" rules={[{ required: true, message: 'Por favor, completa este espacio' }]}>
                                                <Input placeholder="Numero de tarjeta" />
                                            </Form.Item>
                                            <Form.Item name="expiration_date" rules={[{ required: true, message: 'Por favor, completa este espacio' }]}>
                                                <Input placeholder="Fecha de expiración" />
                                            </Form.Item>
                                            <Form.Item name="ccv" rules={[{ required: true, message: 'Por favor, completa este espacio' }]}>
                                                <Input placeholder="CVV" />
                                            </Form.Item>
                                            <Button
                                                className="mb-3 mt-3"
                                                type="danger"
                                                block
                                                shape="round"
                                                icon={<SafetyOutlined />}
                                                size="large"
                                                disabled={loading}
                                                onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
                                            >
                                                {buttonText}
                                            </Button>
                                        </Form>
                                    ) : (
                                        <Button
                                            className="mb-3 mt-3"
                                            type="danger"
                                            block
                                            shape="round"
                                            icon={<SafetyOutlined />}
                                            size="large"
                                            disabled={loading}
                                            onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
                                        >
                                            {buttonText}
                                        </Button>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleCourseJumbotron;
