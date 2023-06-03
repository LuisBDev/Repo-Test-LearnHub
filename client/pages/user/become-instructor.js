import { useContext, useState } from "react";
import { Context } from "../../context";
import { Button } from "antd";
import axios from "axios";
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../components/routes/UserRoute";

const BecomeInstructor = () => {
  // state
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeInstructor = () => {
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        toast("¡Ahora eres un instructor!");
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Error al convertirte en instructor. Inténtalo nuevamente.");
        setLoading(false);
      });
  };


  return (
    <>
      <h1 className="jumbotron text-center square">Conviértete en instructor</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="pt-4">
              <UserSwitchOutlined className="display-1 pb-3" />
              <br />
              <h2>Configura el pago para publicar cursos en Edemy</h2>
              <p className="lead text-warning">
                Edemy se asocia con Stripe para transferir las ganancias a tu cuenta bancaria
              </p>

              <Button
                className="mb-3"
                type="primary"
                block
                shape="round"
                icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
                size="large"
                onClick={becomeInstructor}
                disabled={
                  (user && user.role && user.role.includes("Instructor")) ||
                  loading
                }
              >
                {loading ? "Procesando..." : "Configuración de pago"}
              </Button>

              <p className="lead">
                Serás redirigido a Stripe para completar el proceso de incorporación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
