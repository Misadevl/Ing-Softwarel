import React from "react";

import { Modal, Stack, Form, Button } from "react-bootstrap";

import editarProducto from "../functions/editarProducto";

function ModalEditar({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
  usuario,
}) {
  function editarProductoModal() {
    //obtener infor del formulario
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    const email = document.getElementById("email").value;
    // enviar informacion a firebase
    const infoProducto = { nombre, mensaje, email };
    editarProducto(infoProducto, usuario.email);
    // cerrar modal
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  const [productoEstado, setProductoEstado] = React.useState({
    ...productoEditar,
  });

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="nombre"
              placeholder="Nombre"
              type="text"
              className="mb-1"
              value={productoEstado?.nombre}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  nombre: e.target.value,
                })
              }
            />
            <Form.Control
              id="mensaje"
              placeholder="Mensaje"
              type="text"
              className="mb-1"
              value={productoEstado?.mensaje}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  mensaje: e.target.value,
                })
              }
            />
            <Form.Control
              id="email"
              placeholder="Email"
              type="text"
              className="mb-1"
              value={productoEstado?.email}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  email: e.target.value,
                })
              }
              disabled/>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditar;
