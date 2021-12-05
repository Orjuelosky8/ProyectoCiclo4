import { cardActionsClassNamees } from "@mui/material";
import React from "react";
import "./Team.css";
import Carlos from "./../../assets/Team/carlos.png";
import Daniel from "./../../assets/Team/Daniel.png";
import Eliana from "./../../assets/Team/Eliana.png";
import Federico from "./../../assets/Team/Federico.png";
import Jazmin from "./../../assets/Team/Jazmin.png";

export default function Proveedores() {
  return (
  <div className="team-section">
    <div className="team-info">
      <img className="team-info__imagen" src={Carlos} alt=""/>
      <h3 className="team-info__title">Carlos Rodriguez</h3>
      <p><span className="subt-3">Telefono: </span><span className="numbers">3002007332</span></p>
      <p><span className="subt-3">Correo Electronico: </span><span className="numbers">carlos_rodriguezs@hotmail.com</span></p>
      <p className="team-info__text">
          Estudiante Tripulante de la UTP.    
      </p>
    </div>

    <div className="team-info">
        <img className="team-info__imagen" src={Daniel} alt=""/>
        <h3 className="team-info__title">Daniel Orjuela</h3>
        <p><span className="subt-3">Telefono: </span><span className="numbers">3112331665</span></p>
        <p><span className="subt-3">Correo Electronico: </span><span className="numbers">daniel.orju8@gmail.com</span></p>
        <p className="team-info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam illo ratione dicta obcaecati. Vero voluptate exercitationem harum, 
            eius repudiandae nesciunt quod molestiae temporibus, enim porro dolore accusamus suscipit. Consectetur!
            {/* Estudiante de Ingeniería de Sistemas.
            Cuenta con un conocimiento amplio en el idioma ingles (B2 certificado), y posee 
            un certificado de aprobacion verificado del curso "Protección de Datos personales en la era digital."  */}
        </p>
    </div>

    <div className="team-info">
        <img className="team-info__imagen" src={Eliana} alt=""/>
        <h3 className="team-info__title">Eliana</h3>
        <p><span className="subt-3">Telefono: </span><span className="numbers">3004221765</span></p>
        <p><span className="subt-3">Correo Electronico: </span><span className="numbers">paola.vene10@gmail.com</span></p>
        <p className="team-info__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
            voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
        </p>
    </div>

    <div className="team-info">
        <img className="team-info__imagen" src={Federico} alt=""/>
        <h3 className="team-info__title">Federico Montes</h3>
        <p><span className="subt-3">Telefono: </span><span className="numbers">3116573785</span></p>
        <p><span className="subt-3">Correo Electronico: </span><span className="numbers">federicomontesgarcia@gmail.com</span></p>
        <p className="team-info__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium nostrum ipsum sit natus molestias perspiciatis, 
            vero, maiores est, distinctio excepturi reprehenderit doloribus dolores perferendis dolorem! Dolorem deserunt voluptates asperiores!
        </p>
    </div>

    <div className="team-info">
        <img className="team-info__imagen" src={Jazmin} alt=""/>
        <h3 className="team-info__title">Jazmin Ceballos</h3>
        <p><span className="subt-3">Telefono: </span><span className="numbers">3123381221</span></p>
        <p><span className="subt-3">Correo Electronico: </span><span className="numbers">jazminf1108@gmail.com</span></p>
        <p className="team-info__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at consequuntur rerum illo in est non nostrum architecto cumque facere. 
            At aliquid necessitatibus reprehenderit illo placeat fugiat, aliquam nobis veritatis.
        </p>
      </div>
  </div>
)}
