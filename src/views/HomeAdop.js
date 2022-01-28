import React from 'react';
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import getAllProductsAdop from "../functions/getAllProductsAdop";
import eliminarProductoHome from "../functions/eliminarProductoHome";
import filtrarDatos from "../functions/filtrarDatos";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

//modales
import ModalAñadir from "../components/ModalAñadir";
import ModalEditar from "../components/ModalEditar";
import ModalEditarAdop from "../components/ModalEditarAdop";
import eliminarAdop from '../functions/eliminarAdop';
function HomeAdop({ usuario }) {
    const [adopciones, setProductos] = React.useState([]);
    const [isModalAñadir, setIsModalAñadir] = React.useState(false);
    const [isModalEditarAdop, setIsModalEditarAdop] = React.useState(false);
    const [productoEditar, setProductoEditar] = React.useState(null);

  
    function actualizarEstadoProductos() {
      getAllProductsAdop().then((adopciones) => {
        setProductos(adopciones);
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
          <ModalEditarAdop
            isModalEditarAdop={isModalEditarAdop}
            setIsModalEditarAdop={setIsModalEditarAdop}
            actualizarEstadoProductos={actualizarEstadoProductos}
            productoEditar={productoEditar}
            setProductoEditar={setProductoEditar}
            usuario={usuario}
          />
        )}
       
        
  {/* 
        <Form onSubmit={busquedaFormHandler}>
          <Stack direction="horizontal">
            <Form.Group controlId="busqueda" className="w-75 m-3">
              <Form.Control type="text" placeholder="Buscar" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Buscar
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
        </Form> */}
  
        <hr />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>C.I</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Comentario</th>
              <th>Cantidad</th>
              <th>Direccion</th>
              <th>Ciudad</th>
              <th>Codigo Postal</th>
              <th>Telefono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {adopciones &&
              adopciones.map((adopcion, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{adopcion.ci}</td>
                  <td>{adopcion.nombre}</td>
                  <td>{adopcion.apellido}</td>
                  <td>{adopcion.comentario}</td>
                  <td>{adopcion.cantidad}</td>
                  <td>{adopcion.direccion}</td>
                  <td>{adopcion.ciudad}</td>
                  <td>{adopcion.codigo_postal}</td>
                  <td>{adopcion.telefono}</td>
                  <td>{adopcion.email}</td>
                  <td>
                    <Button
                      variant="dark"
                      onClick={() => {
                        setProductoEditar({ ...adopcion });
                        setIsModalEditarAdop(true);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        eliminarAdop(adopcion).then(
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

export default HomeAdop;
