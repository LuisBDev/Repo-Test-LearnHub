// Importamos los componentes 'Card' y 'Badge' desde la librería 'antd'.
// Estos componentes nos permiten crear tarjetas y distintivos (badges) en nuestra interfaz.
import { Card, Badge } from "antd";

// Importamos el componente 'Link' desde la librería 'next/link'.
// Este componente nos ayuda a crear enlaces en nuestra aplicación Next.js.
import Link from "next/link";

// Importamos la función 'currencyFormatter' desde el archivo 'helpers.js' dentro de la carpeta 'utils'.
// Esta función se utilizará para formatear cantidades de dinero en nuestra aplicación.
import { currencyFormatter } from "../../utils/helpers";


// Definición del componente CourseCard que recibe un objeto "course" como prop.

const CourseCard = ({ course }) => {
    // Extraemos las propiedades relevantes del objeto "course" mediante destructuring.
    const { name, instructor, price, slug, paid, category, image } = course;
    
    // Si existe una propiedad "image" en el objeto "course", usamos su ubicación ("Location"),
    // de lo contrario, asignamos una imagen por defecto ("/course.png").
    const imageUrl = image ? image.Location : "/course.png";

    return (
        <Link href={`/course/${slug}`}>
            <a>
                <Card
                    className="mb-4 border"
                    cover={
                        <img
                            src={imageUrl}
                            alt={name}
                            style={{ height: "200px", objectFit: "cover" }}
                            className="p-1"
                        />
                    }
                >
                    <h2 className="font-weight-bold">{name}</h2>
                    <p>by {instructor.name}</p>
                    <Badge
                        count={category}
                        style={{ backgroundColor: "#03a9f4" }}
                        className="pb-2 mr-2"
                    />
                    <h4 className="pt-2">
                        {paid ? currencyFormatter({ amount: price, currency: "usd" }) : "Gratuito"}
                    </h4>
                </Card>
            </a>
        </Link>
    );
};

export default CourseCard;
