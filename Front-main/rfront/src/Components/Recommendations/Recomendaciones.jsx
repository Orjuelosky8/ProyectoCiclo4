import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Recommendations.css";

export default function Recomendations(){
    return(
        <div className="Recomendations">
            <div className="Recomendations-In">
                <div className="Introductions">
                    <h2>
                        ↓ RECOMENDACIONES INTERNACIONALES ↓
                    </h2>
                </div>
                <CardGroup className="Tarjetas">
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="https://turismo.org/wp-content/uploads/2014/11/tu-a%C3%B1o-nuevo-en-sidney-01-760x500.jpg" />
                        <Card.Body>
                        <Card.Title>Sídney, Australia</Card.Title>
                        <Card.Text className="desc-places">
                            Si quieres ser de las primeras personas en el mundo en celebrar el Año Nuevo, Sydney es tú destino. Debido a su posición geográfica, esta maravillosa ciudad es de las primeras en recibir el año nuevo y lo festeja con una gran show de fuegos pirotécnicos en la Bahía de Sydney con la panorámica del Puente de Harbour y el Opera House. Esta celebración es una de las más importantes en el mundo que hasta tiene su 
                            página web
                            donde puedes encontrar toda la programación y así puedas disfrutarla al máximo. 
                            <br/>
                            No te puedes perder: El desfile de barcos iluminados. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted">Last updated on November 3rd</small>
                        </Card.Footer>
                    </Card>
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="https://lavozdechile.com/wp-content/uploads/2020/11/Dubai-espectaculo-2021.jpg" />
                        <Card.Body>
                        <Card.Title>Dubai, Emiratos Árabes Unidos</Card.Title>
                        <Card.Text className="desc-places">
                            Dubai es sin duda de los mejores destinos para la fiesta de fin de año. El año pasado fue la sede de fuegos artificiales más largos del mundo. 
                            Este espectáculo se origina en el Burj Khalifa, el edificio más alto del mundo con show de agua, luces y pirotecnia que deja a miles de 
                            espectadores sin aliento con espectaculares fuegos artificiales nunca antes vistos. <br/>
                            Te aconsejamos llegar temprano para que tengas una muy buena ubicación en el paseo marítimo de la Fuente de Dubai. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted updated">Last updated on October 31rd</small>
                        </Card.Footer>
                    </Card>
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="https://www.molaviajar.com/wp-content/uploads/2016/11/nochevieja-y-ano-nuevo-en-la-ciudad-de-nueva-york-2017.jpg" />
                        <Card.Body>
                        <Card.Title>Nueva York, Estados Unidos</Card.Title>
                        <Card.Text className="desc-places">
                        El descenso de “la bola” en Times Square es la celebración más simbólica para la fiesta de Año Nuevo, pues desde 1907 es una tradición que reúne a millones de personas de todo el mundo.
                        Las presentaciones de artistas empiezan 7 horas antes del inicio del nuevo año, por lo cual te recomendamos llegar muy temprano, con buen abrigo y provisiones de alimentos porque una vez entres al sitio de la celebración no puedes salir. 
                        Si no te gustan las aglomeraciones, no te preocupes porque los juegos pirotécnicos los puedes apreciar en el puente de Brooklyn o en el Battery Park. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted updated">Last updated on November 18rd</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>   
            </div>
            <hr/>
            <div className="Recomendations-Na">
                <div className="Introductions">
                    <h2>
                        ↓ RECOMENDACIONES NACIONALES ↓
                    </h2>
                </div>
                <CardGroup className="Tarjetas">
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="https://www.elpais.com.co/files/article_main/uploads/2020/10/21/5f90f6a40aab4.jpeg" />
                        <Card.Body>
                        <Card.Title>Cali, Valle del Cauca</Card.Title>
                        <Card.Text className="desc-places">
                            La majestuosa capital del Valle del Cauca mantiene la tradición de su feria, comenzando desde el 25 de diciembre 
                            hasta el 30 de diciembre, empezando por desfiles, comparsas, conciertos, y los
                            mejores bailarines de salsa, todo lo necesario para tener una agenda diversas opciones.
                            https://www.feriadecali.com.co/programacion
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted updated">Last updated on November 15th</small>
                        </Card.Footer>
                    </Card>
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="https://files.lafm.com.co/assets/public/2019-10/medellinnavidad_0.jpg" />
                        <Card.Body>
                        <Card.Title>Medellin, Antioquia </Card.Title>
                        <Card.Text className="desc-places">
                            Las festividades de la llamada “capital de la montaña” son diversas, desde la mejor iluminación navideñas adornando de sur a norte, 
                            el rio que atraviesa toda la ciudad, otro de los atractivos es la gastronomía y todo el gentilicio y buena atención de los “Paisas” hará que quieras siempre volver.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted updated">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="http://cdn.shopify.com/s/files/1/1164/9110/files/Everything-you-need-to-know-about-Christmas-and-New-Year-in-Cartagena-2.jpg?v=1478988495" />
                        <Card.Body>
                        <Card.Title>Cartagena</Card.Title>
                        <Card.Text className="desc-places">
                            Cartagena la bien llamada “Ciudad amurallada” capital del departamento de Bolívar es considerada una de las maravillas del 
                            mundo siendo el destino más turístico de Colombia y en navidad la ciudad vibra al ritmo de villancicos y gastronomía, 
                            para disfrutar en familia.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted updated">Last updated on December 3rd</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>   
                <br/>
                <CardGroup className="Tarjetas">
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="https://www.boyacaradio.com/imagenes/fotos_noticias/085258b1-9b45-433b-935d-020b6349dbb1.jpg" />
                        <Card.Body>
                        <Card.Title>Tunja, Boyaca</Card.Title>
                        <Card.Text className="desc-places">
                            La ciudad de Tunja capital del departamento de Boyacá es considerada la más fría de Colombia, teniendo unos paisajes inolvidables, 
                            la ruta de las luces es su principal atractivo turístico estas navidades Se arman rutas por lugares como el Puente de Boyacá, 
                            Tunja, Paipa, Duitama, Corrales y Villa de Leyva.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted updated">Last updated on November 15th</small>
                        </Card.Footer>
                    </Card>
                    <Card className="Tarjeta">
                        <Card.Img variant="top" src="https://i0.wp.com/culturabogota.com/wp-content/uploads/2019/12/4_206_0.jpg" />
                        <Card.Body>
                        <Card.Title>Bogotá D.C. </Card.Title>
                        <Card.Text className="desc-places">
                            La capital de Colombia es una ciudad multicultural que te sorprenderá con su ritmo movido, tiene diversas actividades que puedes disfrutar en familia, 
                            subir al cerro de Monserrate, visitar el jardín botánico, las diferentes plazas con juego de luces, usaquen con la mejor gastronomía de la ciudad.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="updated">
                        <small className="text-muted updated">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>   
            </div>
        </div>
    )
}