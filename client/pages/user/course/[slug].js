import React, { useState, useEffect, createElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import { Button, Menu, Avatar } from "antd";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import {
    PlayCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";

const { Item } = Menu;

const SingleCourse = () => {
    const [clicked, setClicked] = useState(-1);
    const [collapsed, setCollapsed] = useState(false);
    const [course, setCourse] = useState({ lessons: [] });

    // router
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        const loadCourse = async () => {
            try {
                const { data } = await axios.get(`/api/user/course/${slug}`);
                setCourse(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (slug) {
            loadCourse();
        }
    }, [slug]);


    return (
        <StudentRoute>
            <div className="row">
                <div style={{ maWidth: 320 }}>
                    <Button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-primary mt-1 btn-block mb-2"
                    >
                        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}{" "}
                        {!collapsed && "Lecciones"}
                    </Button>
                    <Menu
                        defaultSelectedKeys={[clicked]}
                        inlineCollapsed={collapsed}
                        style={{ height: "80vh", overflow: "scroll" }}
                    >
                        {course.lessons.map((lesson) => (
                            <Item
                                onClick={() => setClicked(lesson.id)} // Utiliza una propiedad única de la lección como clave
                                key={lesson.id} // Usa una propiedad única de la lección como clave
                                icon={<Avatar>{lesson.id}</Avatar>} // Utiliza una propiedad única de la lección como clave
                            >
                                {lesson.title.substring(0, 30)}
                            </Item>
                        ))}
                    </Menu>
                </div>

                <div className="col">
                    {clicked !== -1 ? (
                        <>
                            {course.lessons[clicked]?.video?.Location && (
                                <>
                                    <div className="wrapper">
                                        <ReactPlayer
                                            className="player"
                                            url={course.lessons[clicked].video.Location}
                                            width="100%"
                                            height="100%"
                                            controls
                                        />
                                    </div>
                                </>
                            )}

                            <ReactMarkdown
                                source={course.lessons[clicked].content}
                                className="single-post"
                            />
                        </>
                    ) : (
                        <div className="d-flex justify-content-center p-5">
                            <div className="text-center p-5">
                                <PlayCircleOutlined className="text-primary display-1 p-5" />
                                <p className="lead">Haz clic en las lecciones para comenzar a aprender</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </StudentRoute>
    );
};

export default SingleCourse;
