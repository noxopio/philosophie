/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../shared/PageLayout.module.scss';
import { getImageFilter } from '../utiils';
import { useTheme } from '@/app/context/ThemeContext';

interface Article {
    id: number;
    title: string;
    subtitle: string;
    content: React.ReactNode;
    image: string;
    category: string;
}

const ying = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bagua-name-later.svg/250px-Bagua-name-later.svg.png';
const MainContent = () => {
    const { theme } = useTheme();
    const articles: Article[] = [
        {
            id: 1,
            title: 'Cosmovisión Oriental',
            subtitle: 'La liberación del sufrimiento y la comprensión de la realidad',
            content: (<>
                <p>
                    La palabra Oriente, que designa al Este, en relación con Europa, procede de la
                    palabra latina orior, que significa: nacer o levantarse. Se refiere pues a que es
                    el horizonte por donde el sol se ve levantarse por la mañana.
                    En esta cosmovisión encontramos a la filosofía japonesa que se origina a partir
                    del desarrollo cultural de Japón, a través del proceso religioso e histórico que
                    surgió del pensamiento chino, por otra parte se encuentra la filosofía india
                    como tradición milenaria que busca la liberación del sufrimiento y la
                    comprensión de la realidad.
                    La filosofía japonesa (taoísmo) se ha mantenido hasta la época de Heian,
                    enfocándose en la sabiduría practica y la experiencia vivida. Conceptos como
                    ikigai representan la razón de ser y la motivación en la vida.
                    La filosofía india (budismo) se divide en dos categorías: Las escuelas
                    ortodoxas (astika). que aceptan los vedas como autoridad, y las escuelas
                    heterodoxas (nastika), que no los aceptan, Las principales escuelas ortodoxas
                    incluyen Vedanta, Yoga, Samkhya, Nyaya, Vaisheshika y Mimamsa.
                </p>
                <p><b>Dimensiones:</b></p>
                <p><b>•Corporal:</b> Dominio de la mente y el cuerpo (atención plena)</p>
                <p><b>•Simbólica:</b> Mantras, mitos, leyendas y simplicidad.</p>
                <p><b>•Racional:</b>  Aportes científicos a través de la corriente Rangaku, por ejemplo.
                    También el pensamiento lógico y el razonamiento como vías para alcanzar el
                    conocimiento superior, además de la realidad percibida a través de los
                    sentidos.</p>
                <p><b>•Ética: </b>  Proceso en el devenir de los seres humanos a lo largo de las reencarnaciones, las relaciones con los dioses, o el placer, entre otros. Justicia, virtud, humildad, aceptación y adaptabilidad.</p>
                <p><b>•Espiritual: </b>  La espiritualidad hindú se manifiesta a través de la práctica de yoga, la meditacion y rituales que buscan la liberación del ciclo de reencarnaciones y la unión con lo sagrado. </p>
                <p><b>•Descripción: </b>  Se desarrollo en regiones como India, China y Japón. A diferencia de la filosofía occidental, que se basa en el razonamiento lógico, la filosofía oriental se enfoca en la experiencia directa y el desarrollo personal. </p>
            </>),
            image: "☯️",
            category: 'Filosofía Oriental',
        },
        {
            id: 2,
            title: 'Cosmovisión Occidental',
            subtitle: 'Para los humanos, el alma es la esencia',
            content: (<>
                <p>
                    El Occidente, es el horizonte donde el sol se pone o muere. Tradicionalmente
                    se considera que la cultura occidental nace en la Antigua Grecia. Sus mayores
                    contribuciones en los ámbitos de la filosofía fueron, las matemáticas y la
                    ciencia.
                    La filosofía occidental comienza en el siglo VI a.C. con los filósofos
                    presocráticos, quienes buscaban explicaciones racionales sobre el mundo,
                    alejándose de las narrativas míticas.
                    Ha influido en áreas como la ciencia, la política y la ética. Su desarrollo ha
                    sido un proceso continuo de cuestionamiento y reflexión moldeando la cultura
                    occidental. La filosofía no solo busca entender el mundo, sino también

                    transformar la sociedad a través del pensamiento crítico y la búsqueda de la
                    verdad.
                    Un representante de la filosofía occidental fue Tomás de Aquino, quien se vio
                    influenciado por Aristóteles, y de esta forma pretendió  conciliar su filosofía
                    con la teología cristiana. Con el objetivo de desarrollar una comprensión
                    del alma, se vio abocado a considerar las cuestiones metafísicas de la Teoría
                    de la sustancia, la materia, la forma y el cambio. Definió una sustancia
                    material como la combinación de una esencia y rasgos accidentales, siendo la
                    esencia una combinación de materia y forma, similar a la visión aristotélica.
                    Para los humanos, el alma es la esencia. También influenciado por Platón,
                    veía el alma como algo inmutable e independiente del cuerpo.
                </p>
                <p><b>Dimensiones:</b></p>
                <p><b>•Corporal:</b> Razón y fe.</p>
                <p><b>•Simbólica:</b> Oraciones, escrituras, imágenes y cantos.</p>
                <p><b>•Racional:</b> Se interesaron en analizar los problemas acerca de la naturaleza y la
                    moralidad del poder político, la unidad nacional, la seguridad interna, el poder
                    del Estado y la justicia internacional.</p>
                <p><b>•Ética:</b>  Examina la naturaleza de los juicios morales, y la ética normativa, que
                    establece principios sobre cómo debemos actuar. La compasión y la conexión
                    con todo lo que existe.</p>
                <p><b>•Espiritual:</b> Espiritual: en occidente surgen doctrinas y prácticas religiosas, especialmente
                    en la perspectiva de la relación entre el ser humano y un ser superior, Dios.</p>
                <p><b>•Descripción:</b>  Aportes científicos a través de la corriente Rangaku, por ejemplo.
                    También el pensamiento lógico y el razonamiento como vías para alcanzar el
                    conocimiento superior, además de la realidad percibida a través de los
                    sentidos.</p>
            </>),
            image: '📐',
            category: 'Filosofía Occidental',
        },

    ];

    return (
        <main className={styles.mainContent}>
            <motion.header
                className={styles.heroSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.heroContent}>
                    <img
                        src="/philo.svg"
                        alt="Philosophie"
                        width={150}
                        height={150}
                        style={{ filter: getImageFilter(theme) }}
                        className={styles.heroImage}
                    />
                    <div className={styles.heroText}>
                        <h1 className={styles.mainTitle}>Introducción</h1>
                        <p className={styles.mainSubtitle}>
                            La disociación que evidenciamos sobre el Ser desde el principio ,no es más que
                            la divina creación de sí mismo por sí mismo y para sí, en la representación de
                            la imagen en conjunto, elaborada por las partes del alma y las partes del
                            cuerpo, esta imagen es la acción de su creación, de su mundo. El ser
                            humano en su búsqueda incansable por el conocimiento y la plenitud, se ha
                            cuestionado sobre temas como la existencia y el propósito del hombre,
                            creando formas filosóficas y religiones que han proporcionado identidad
                            cultural a los pueblos, sentido y significado. “El hombre es antes un espíritu
                            encarnado que un viviente racional, un animal espiritual, se podría decir, si
                            anima se interpreta según su etimología indoeuropea (aniti, él respira; anilah,
                            soplo). Anima incluiría entonces también el espíritu.” (Panikkar, 2015, P. 21)
                        </p>
                    </div>
                </div>
            </motion.header>

            <div className={styles.articlesContainer}>
                {articles.map((article, index) => (
                    <ArticleCard key={article.id} article={article} index={index} />
                ))}
            </div>

            {/* <motion.section
                className={styles.conclusionSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
            >
                <h2>Comparación crítica </h2>
                <p>
                    La filosofía nos invita a cuestionar, reflexionar y buscar la verdad. Desde los antiguos
                    griegos hasta los pensadores contemporáneos, cada época ha aportado nuevas perspectivas
                    que enriquecen nuestra comprensión de la existencia, el conocimiento y la moralidad.
                </p>
            </motion.section> */}
        </main>
    );
};

interface ArticleCardProps {
    article: Article;
    index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
    const { theme } = useTheme();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const imageFilter = getImageFilter(theme);

    const renderImage = (src: string | undefined) => {
        if (!src) return null;
        if (src.startsWith('http') || src.startsWith('/')) {
            return (
                <img
                    src={src}
                    alt={article.title}
                    width={120}
                    height={120}
                    style={{ filter: imageFilter }}
                />
            );
        }
        return <span>{src}</span>;
    };

    return (
        <motion.article
            ref={ref}
            className={styles.articleCard}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className={styles.articleHeader}>
                <div className={styles.articleImage}>
                    {renderImage(article.image)}
                </div>
                <div className={styles.articleMeta}>
                    <span className={styles.category}>{article.category}</span>
                    <h2 className={styles.articleTitle}>{article.title}</h2>
                    <h3 className={styles.articleSubtitle}>{article.subtitle}</h3>
                </div>
            </div>

            <div className={styles.articleContent}>
                {typeof article.content === 'string' ? <p>{article.content}</p> : article.content}
            </div>

            {/* <motion.button
                className={styles.readMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Leer más →
            </motion.button> */}
        </motion.article>
    );
};

export default MainContent;
