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

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleLessonClick = (lessonId) => {
        setClicked(lessonId);
    };

    const renderMenuItems = () => {
        return course.lessons.map((lesson) => (
            <Item
                onClick={() => handleLessonClick(lesson.id)}
                key={lesson.id}
                icon={<Avatar>{lesson.id}</Avatar>}
            >
                {lesson.title.substring(0, 30)}
            </Item>
        ));
    };

    const renderContent = () => {
        if (clicked !== -1) {
            const lesson = course.lessons[clicked];
            return (
                <>
                    {lesson?.video?.Location && (
                        <div className="wrapper">
                            <ReactPlayer
                                className="player"
                                url={lesson.video.Location}
                                width="100%"
                                height="100%"
                                controls
                            />
                        </div>
                    )}

                    <ReactMarkdown className="single-post">
                        {lesson.content}
                    </ReactMarkdown>
                </>
            );
        } else {
            return (
                <div className="d-flex justify-content-center p-5">
                    <div className="text-center p-5">
                        <PlayCircleOutlined className="text-primary display-1 p-5" />
                        <p className="lead">Haz clic en las lecciones para comenzar a aprender</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <StudentRoute>
            <div className="row">
                <div style={{ maWidth: 320 }}>
                    <Button
                        onClick={toggleCollapsed}
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
                        {renderMenuItems()}
                    </Menu>
                </div>

                <div className="col">
                    {renderContent()}
                </div>
            </div>
        </StudentRoute>
    );
};

export default SingleCourse;
