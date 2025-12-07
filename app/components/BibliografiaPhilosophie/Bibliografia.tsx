/* eslint-disable @next/next/no-img-element */
'use client';

import { motion, useInView } from 'framer-motion';
import styles from '../shared/PageLayout.module.scss';
import { getImageFilter } from '../utiils';
import { useRef } from 'react';

interface Article {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    category: string;
}

const Bibliografia = () => {
    const articles: Article[] = [
        {
            id: 1,
            title: 'Filosofía Medieval',
            subtitle: 'La filosofía durante la Edad Media',
            content:
                'La filosofía medieval se extiende, a grandes rasgos, desde la cristianización del Imperio romano hasta el Renacimiento.[37]​ Se define, en parte, por el redescubrimiento y posterior desarrollo de la griega clásica y de la filosofía helenística, y, en parte, por la necesidad de abordar los problemas teológicos y de integrar las doctrinas sagradas, entonces muy extendidas, de la religión abrahámica. (Judaísmo, Cristianismo y Islam) con el aprendizaje del secular. Algunos problemas discutidos a lo largo de este periodo son la relación de la fe con la razón, la existencia y unidad de Dios, el objeto de la teología y la metafísica, los problemas del conocimiento, de los universales y de la individuación.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saint_Augustine_by_Philippe_de_Champaigne.jpg/250px-Saint_Augustine_by_Philippe_de_Champaigne.jpg',
            category: 'Filosofía Bibliografia',
        },
        {
            id: 2,
            title: 'Renacimiento y Humanismo',
            subtitle: 'El resurgimiento del pensamiento clásico',
            content:
                'El Renacimiento fue un periodo de renovación cultural e intelectual en Europa que abarcó aproximadamente desde el siglo XIV hasta el siglo XVII. Durante este tiempo, hubo un resurgimiento del interés por la filosofía, el arte y la ciencia de la antigüedad clásica. El Humanismo, una corriente filosófica central del Renacimiento, enfatizaba el valor y la dignidad del individuo, así como la importancia de la educación y el estudio de las humanidades (literatura, historia, filosofía). Filósofos como Pico della Mirandola y Erasmus promovieron ideas que desafiaban las doctrinas medievales y sentaron las bases para el pensamiento moderno.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Giordano_Bruno_Campo_dei_Fiori.jpg/250px-Giordano_Bruno_Campo_dei_Fiori.jpg',
            category: 'Filosofía Bibliografia',
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
                        src="/book.svg"
                        alt="Book Icon"
                        width={250}
                        height={250}
                        style={{ filter: getImageFilter() }}
                        className={styles.heroImage}
                    />

                    <div className={styles.heroText}>
                        <h1 className={styles.mainTitle}> Bibliografia</h1>
                        <p className={styles.mainSubtitle}>
                            Bibliografia de las principales obras y autores que han influido en la filosofía a lo largo de la historia.
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
                <h2>Normas APA </h2>

                <p>
                    pautas básicas para referencias y citas según la <strong>APA</strong>
                </p>

                <h3>Formato general — Lista de referencias</h3>
                <ul>
                    <li><strong>Libro:</strong> Apellido, A. A. (Año). <em>Título del libro</em>. Editorial.</li>
                    <li><strong>Artículo de revista:</strong> Apellido, A. A., & Apellido, B. B. (Año). Título del artículo. <em>Título de la revista</em>, volumen(número), pp–pp. https://doi.org/xx.xxx/yyyy</li>
                    <li><strong>Página web:</strong> Apellido, A. A. (Año, día mes). Título de la página. Nombre del sitio. URL</li>
                </ul>

                <h3>Citas en el texto</h3>
                <ul>
                    <li><strong>Paráfrasis:</strong> (Apellido, año) — ejemplo: (González, 2019).</li>
                    <li><strong>Cita textual corta:</strong> (Apellido, año, p. xx) — ejemplo: (González, 2019, p. 23).</li>
                    <li><strong>Autor en el texto:</strong> Apellido (año) presenta... — ejemplo: González (2019) afirma que...</li>
                </ul>

                <h3>Ejemplos prácticos</h3>
                <ul>
                    <li><strong>Libro:</strong> Smith, J. A. (2020). <em>Introducción a la filosofía</em>. Editorial Ejemplo.</li>
                    <li><strong>Artículo:</strong> Pérez, L., & Ruiz, M. (2018). La ética en la modernidad. <em>Revista de Filosofía</em>, 45(2), 123-145. https://doi.org/10.1234/rf.v45i2.678</li>
                    <li><strong>Sitio web:</strong> López, R. (2021, 10 de marzo). Historia del pensamiento oriental. FilosofíaHoy. https://filosofiahoy.org/historia-oriental</li>
                </ul>

                <p>
                    Para referencias con múltiples autores, DOI, ediciones, capítulos de libros o recursos especializados, consulte la guía oficial de la APA 7ª edición. Esta sección pretende ser una ayuda rápida para redactar la sección de bibliografía siguiendo las normas básicas.
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    // const imageFilter = getImageFilter();

    const renderImage = (src: string | undefined) => {
        if (!src) return null;
        if (src.startsWith('http') || src.startsWith('/')) {
            return (
                <img
                    src={src}
                    alt={article.title}
                    width={120}
                    height={120}
                // style={{ filter: imageFilter }}
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
                <p>{article.content}</p>
            </div>
        </motion.article>
    );
};

export default Bibliografia;
