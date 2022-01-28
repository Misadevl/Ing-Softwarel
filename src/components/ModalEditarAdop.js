import React from "react";

import { Modal, Stack, Form, Button } from "react-bootstrap";

import editarAdop from "../functions/editarAdop";

function ModalEditarAdop({
  isModalEditarAdop,
  setIsModalEditarAdop,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
  usuario,
}) {
  function editarAdopModal() {
    //obtener infor del formulario
    const ci = document.getElementById("ci").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const comentario = document.getElementById("comentario").value;
    const cantidad = document.getElementById("cantidad").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigo_postal = document.getElementById("codigo_postal").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    // enviar informacion a firebase
    const infoAdop = { ci, nombre, apellido, comentario, cantidad, direccion, ciudad, codigo_postal, telefono, email};
    editarAdop(infoAdop, usuario.email);
    // cerrar modal
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditarAdop(false);
  }

  const [productoEstado, setProductoEstado] = React.useState({
    ...productoEditar,
  });

  return (
    <Modal
      show={isModalEditarAdop}
      onHide={() => {
        setIsModalEditarAdop(false);
        setProductoEditar(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="ci"
              placeholder="C.I"
              type="text"
              className="mb-1"
              value={productoEstado?.ci}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  ci: e.target.value,
                })
              }
            />
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
              id="apellido"
              placeholder="Apellido"
              type="text"
              className="mb-1"
              value={productoEstado?.apellido}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  apellido: e.target.value,
                })
              }
            />
            <Form.Control
              id="comentario"
              placeholder="Comentario"
              type="text"
              className="mb-1"
              value={productoEstado?.comentario}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  comentario: e.target.value,
                })
              }
            />
            <Form.Control
              id="cantidad"
              placeholder="Cantidad"
              type="text"
              className="mb-1"
              value={productoEstado?.cantidad}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  cantidad: e.target.value,
                })
              }
            />
            <Form.Control
              id="direccion"
              placeholder="Direccion"
              type="text"
              className="mb-1"
              value={productoEstado?.direccion}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  direccion: e.target.value,
                })
              }
            />
            <Form.Control
              id="ciudad"
              placeholder="Ciudad"
              type="text"
              className="mb-1"
              value={productoEstado?.ciudad}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  ciudad: e.target.value,
                })
              }
            />
            <Form.Control
              id="codigo_postal"
              placeholder="Codigo Postal"
              type="text"
              className="mb-1"
              value={productoEstado?.codigo_postal}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  codigo_postal: e.target.value,
                })
              }
            />
            <Form.Control
              id="telefono"
              placeholder="Telefono"
              type="text"
              className="mb-1"
              value={productoEstado?.telefono}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  telefono: e.target.value,
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
            setIsModalEditarAdop(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarAdopModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditarAdop;
