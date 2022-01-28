import React from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import getAllProducts from "../functions/getAllProducts";
import eliminarProductoHome from "../functions/eliminarProductoHome";
import filtrarDatos from "../functions/filtrarDatos";

//modales
import ModalAñadir from "../components/ModalAñadir";
import ModalEditar from "../components/ModalEditar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Home({ usuario }) {
  const [contactanos, setProductos] = React.useState([]);
  const [isModalAñadir, setIsModalAñadir] = React.useState(false);
  const [isModalEditar, setIsModalEditar] = React.useState(false);
  const [productoEditar, setProductoEditar] = React.useState(null);

  async function busquedaFormHandler(e) {
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nvosDocus = await filtrarDatos(busqueda);
    setProductos(nvosDocus);
  }

  function actualizarEstadoProductos() {
    getAllProducts().then((contactanos) => {
      setProductos(contactanos);
    });
  }


  React.useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <Container fluid>
      <ModalAñadir
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoProductos={actualizarEstadoProductos}
        usuario={usuario}
      />
      {productoEditar && (
        <ModalEditar
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={actualizarEstadoProductos}
          productoEditar={productoEditar}
          setProductoEditar={setProductoEditar}
          usuario={usuario}
        />
      )}
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{ fontSize: 24 }}>Bienvenido,{usuario.email} </p>
        <Button onClick={signOut}>Cerrar sesión</Button>
      </Stack>
      

      {/* <Form onSubmit={busquedaFormHandler}>
        <Stack direction="horizontal">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar" />
          </Form.Group>
          <Button component={Link} to="/HomeAdop" variant="dark">
            adop
          </Button>
          <Button 
          
            variant="light"
            onClick={() => {
              const input = document.getElementById("busqueda");
              input.value = "";
              actualizarEstadoProductos();
            }}
          >
            Resetear
          </Button>
          
        </Stack>
      </Form>  */}

      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Mensaje</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactanos &&
            contactanos.map((contacto, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contacto.nombre}</td>
                <td>{contacto.mensaje}</td>
                <td>{contacto.email}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...contacto });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      eliminarProductoHome(contacto).then(
                        (confirmacion) => {
                          actualizarEstadoProductos();
                        }
                      );
                    }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      
    </Container>
  );
}

export default Home;
