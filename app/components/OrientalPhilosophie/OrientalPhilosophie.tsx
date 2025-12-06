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

const Oriental = () => {
    const articles: Article[] = [
        {
            id: 1,
            title: 'Pa kua',
            subtitle: 'El símbolo de los ocho trigramas en la filosofía china',
            content:
                'El Pa kua o Bagua (‘ocho estados de cambio’) es el nombre que recibe un símbolo de origen chino compuesto por ocho trigramas (agrupaciones de tres líneas, unas sobre otras, algunas enteras y otras cortadas) ordenados de una manera determinada alrededor de un centro, el yin-yang. Cada trigrama representa un concepto fundamental de la filosofía china, como el cielo, la tierra, el trueno, el viento, el agua, el fuego, la montaña y el lago. El Pa kua es un símbolo central en el taoísmo y se utiliza en diversas prácticas filosóficas y espirituales chinas, incluyendo el feng shui y las artes marciales.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bagua-name-later.svg/250px-Bagua-name-later.svg.png',
            category: 'Filosofía Oriental',
        },
        {
            id: 2,
            title: 'Pa kua',
            subtitle: 'El símbolo de los ocho trigramas en la filosofía china',
            content:
                'El Pa kua o Bagua (‘ocho estados de cambio’) es el nombre que recibe un símbolo de origen chino compuesto por ocho trigramas (agrupaciones de tres líneas, unas sobre otras, algunas enteras y otras cortadas) ordenados de una manera determinada alrededor de un centro, el yin-yang. Cada trigrama representa un concepto fundamental de la filosofía china, como el cielo, la tierra, el trueno, el viento, el agua, el fuego, la montaña y el lago. El Pa kua es un símbolo central en el taoísmo y se utiliza en diversas prácticas filosóficas y espirituales chinas, incluyendo el feng shui y las artes marciales.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bagua-name-later.svg/250px-Bagua-name-later.svg.png',
            category: 'Filosofía Oriental',
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


                    <div className={styles.heroText}>
                        <h1 className={styles.mainTitle}>Filosofía Oriental</h1>
                        <p className={styles.mainSubtitle}>
                            El concepto de filosofía oriental surgió de la academia occidental para agrupar las
                            diversas tradiciones filosóficas originadas en Asia, incluyendo las filosofías de
                            China, India, Japón y otras regiones del continente. A diferencia de la filosofía
                            occidental, que a menudo se centra en el análisis lógico y la argumentación
                            sistemática, la filosofía oriental tiende a enfatizar la armonía con la naturaleza, la
                            introspección y la búsqueda de la sabiduría a través de la experiencia directa y la
                            meditación.
                        </p>
                    </div>
                    <img
                        src="/flor.svg"
                        alt="Philosophie"
                        width={400}
                        height={400}
                        // style={{ filter: getImageFilter() }}
                        className={styles.heroImage}
                    />
                </div>
            </motion.header>

            <div className={styles.articlesContainer}>
                {articles.map((article, index) => (
                    <ArticleCard key={article.id} article={article} index={index} />
                ))}
            </div>

            <motion.section
                className={styles.conclusionSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
            >
                <h2>Conclusión</h2>
                <p>
                    La filosofía oriental nos invita a reflexionar sobre nuestra existencia, la naturaleza del
                    conocimiento y la búsqueda de la sabiduría. A través de las enseñanzas de grandes
                    pensadores como Sócrates, Platón y Aristóteles, podemos comprender mejor el mundo que nos
                    rodea y nuestro lugar en él. Este viaje filosófico no solo enriquece nuestra mente, sino
                    que también nos guía hacia una vida más plena y consciente.
                </p>
            </motion.section>
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
    const imageFilter = getImageFilter();

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
                <p>{article.content}</p>
            </div>
        </motion.article>
    );
};

export default Oriental;
