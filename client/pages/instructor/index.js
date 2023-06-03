import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const response = await axios.get("/api/instructor-courses");
      setCourses(response.data);
    } catch (error) {
      console.log("Error al cargar los cursos del instructor:", error);
    }
  };

  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Instructor Dashboard</h1>

      {courses ? (
        courses.map((course) => (
          <div key={course._id} className="media pt-2">
            <Avatar
              size={80}
              src={course.image ? course.image.Location : "/course.png"}
            />

            <div className="media-body pl-2">
              <div className="row">
                <div className="col">
                  <Link
                    href={`/instructor/course/view/${course.slug}`}
                    className="pointer"
                  >
                    <a className="mt-2 text-primary">
                      <h5 className="pt-2">{course.name}</h5>
                    </a>
                  </Link>
                  <p style={{ marginTop: "-10px" }}>
                    {course.lessons.length} Lecciones
                  </p>

                  {course.lessons.length < 5 ? (
                    <p style={myStyle} className="text-warning">
                      Se requieren al menos 5 lecciones para publicar un curso
                    </p>
                  ) : (
                    <p style={myStyle} className="text-success">
                      {course.published
                        ? "Tu curso está publicado en el mercado"
                        : "Tu curso está listo para ser publicado"}
                    </p>
                  )}
                </div>

                <div className="col-md-3 mt-3 text-center">
                  {course.published ? (
                    <Tooltip title="Publicado">
                      <CheckCircleOutlined className="h5 pointer text-success" />
                    </Tooltip>
                  ) : (
                    <Tooltip title="No publicado">
                      <CloseCircleOutlined className="h5 pointer text-warning" />
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay cursos disponibles</p>
      )}
    </InstructorRoute>
  );

};

export default InstructorIndex;
