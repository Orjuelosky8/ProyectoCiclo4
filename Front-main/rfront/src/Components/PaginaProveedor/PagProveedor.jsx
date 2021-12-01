import './PagProveedor.css';
import ProvBar from './ProvBar';
import ProvImg from './ProvImg';
import ProvContactData from './ProvContactData';
import ProvInfo from './ProvInfo';
import ProvDescription from './ProvDescription';
import ProvOffer from './ProvOffer';

function PagProveedor() {
  return (
    <div className="pag-container">
      <header>
        <ProvBar email="dummy2@email.com"/>
        <ProvImg src="https://loremflickr.com/1440/600/cat"/>
      </header>
      <main>
        <ProvInfo 
        provName="Nombre Empresa LTDA."
        provSlogan="Eslogan de la empresa"
        provDesc="Descripción limitada de la empresa, para saber que hace la empresa o que ofrece de diferente"
        />
        <div className="main-container">
          <aside>
            <h2>Datos de Contacto</h2>
            <dl>
              <ProvContactData 
              type="Horario de Atención:"
              data="L-S de 10:00am a 9:00pm"
              />
              <ProvContactData 
              type="Teléfono:"
              data="300 455 6677"
              />
              <ProvContactData 
              type="Dirección:"
              data="Calle 10 # 12 - 13"
              />
            </dl>
          </aside>
          <section className="prov-description">
            <ProvDescription 
            description="Esta es la descripción larga del asunto"
            />
          </section>
          <section className="prov-services">
              <ProvOffer 
              type="servicio" 
              title="Servicio uno" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="servicio" 
              title="Servicio dos" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="servicio" 
              title="Servicio tres" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="producto" 
              title="Producto uno" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
              <ProvOffer 
              type="producto" 
              title="Producto dos" 
              description="Esta es la descripción limitada del servicio para conocer detalles o características destacadas de cada producto o servicio" 
              />
          </section>

        </div>
      </main>
    </div>
  );
}

export default PagProveedor;