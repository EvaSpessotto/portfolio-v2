import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import "./about.scss"
import Layout from "../components/Layout"

class about extends Component {
  render() {
    const links = {
      arenes: "http://arenes.entmip.fr/",
      tarbes:
        "http://www.iut-tarbes.fr/Licence-Professionnelle,182.html?retour=back",
      wcs: "https://wildcodeschool.fr/formation-developpeur-web-mobile/",
      commit42: "https://www.commit42.fr/",
      serigraphie: "https://www.instagram.com/seri_golo/",
      argentique:
        "http://1.bp.blogspot.com/-mDY72l6Z1ng/T7skptxJS-I/AAAAAAAAAh8/tf25ZseJ2WY/s1600/Praktica+MTL+50.jpg",
      numerique: "https://www.instagram.com/bourre_palettes/",
    }
    return (
      <Layout>
        <Container className="about">
          <Row>
            <Col lg="6" xs="12" className="header-about">
              <h1>(re)Bonjour !</h1>
              <div className="line" />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="6" xs="12" className="pres-about">
              <p>
                Je m'appelle Eva Spessotto, je suis développeuse junior mais
                aussi graphiste.{" "}
              </p>
              <p>
                Je vis dans la région de Toulouse où j'ai étudié pendant deux
                ans le Design Graphique au{" "}
                <a
                  href={links.arenes}
                  className="yellow-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lycée des Arènes
                </a>
                . J’ai ensuite fait une licence professionnelle en Communication
                digitale à{" "}
                <a
                  href={links.tarbes}
                  className="blue-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  l'IUT de Tarbes
                </a>{" "}
                où j’étais alternante graphiste à Total. C'est durant cette
                année là que je me suis réellement passionnée pour le
                développement web, j'ai alors décidé de faire une formation
                Développeur web à la{" "}
                <a
                  href={links.wcs}
                  className="red-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wild Code School
                </a>{" "}
                de Toulouse.
              </p>
              <p>
                Et me voici, presque 5 mois plus tard après le début de cette
                formation comme développeuse web junior. Spécialisée (pour le
                moment) en Javascript, notamment avec React mais aussi Node JS,
                j’ai décroché un stage chez{" "}
                <a
                  href={links.commit42}
                  className="yellow-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Commit42
                </a>
                , un studio de développement web à Toulouse.
              </p>
              <p>
                Le web n’est pas la seule chose qui me fait vibrer, j’aime tout
                particulièrement l'illustration, la{" "}
                <a
                  href={links.serigraphie}
                  className="blue-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sérigraphie
                </a>{" "}
                et la photographie (
                <a
                  href={links.argentique}
                  className="red-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  argentique
                </a>{" "}
                comme{" "}
                <a
                  href={links.numerique}
                  className="yellow-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  numérique
                </a>
                ). Étant assez adepte du DIY, j’ai monté mon propre atelier de
                sérigraphie tout récemment (commencé il y a 3 ans, il était
                temps...), vous trouverez donc aussi des projets print et
                photographiques sur mon portfolio incessement sous peu.
              </p>
              <p>
                N’hésitez pas à m’envoyer un message pour toute suggestion
                d’amélioration/d’idées ou me faire remonter s’il y a des bugs
                sur ce site.
              </p>
              <p>Bonne visite !</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default about
