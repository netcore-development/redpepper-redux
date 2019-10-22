import React from "react";

// For icons
import { FaUserEdit, FaTimes } from "react-icons/fa";

// reactstrap
import { Button } from "reactstrap";

// For moment JS
import moment from "moment";
import localization from "moment/locale/es";

// Setting spanish as global local for moment js
moment.updateLocale("es", localization);

const Persona = ({ persona }) => {
  return (
    <tr>
      <td>{persona.id}</td>
      <td>{persona.nombres}</td>
      <td>{persona.apellidos}</td>
      <td>{persona.sexo}</td>
      <td>{moment(persona.fechaNacimiento).format("DD/MMM/YYYY")}</td>
      <td>{persona.direccion}</td>
      <td>{persona.nit}</td>
      <td>
        <Button color="info">
          <FaUserEdit size="15" />
        </Button>
      </td>
      <td>
        {/* onClick={() => 
            deletePerson(persona.id)} */}
        <Button color="danger">
          <FaTimes size="15" />
        </Button>
      </td>
    </tr>
  );
};

export default Persona;
