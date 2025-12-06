/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../shared/PageLayout.module.scss';
import { getImageFilter } from '../utiils';

interface Article {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    category: string;
}

const ying = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bagua-name-later.svg/250px-Bagua-name-later.svg.png';
const MainContent = () => {
    const articles: Article[] = [
        {
            id: 1,
            title: 'Pa kua',
            subtitle: 'El símbolo de los ocho trigramas en la filosofía china',
            content:
                'El Pa kua o Bagua (‘ocho estados de cambio’) es el nombre que recibe un símbolo de origen chino compuesto por ocho trigramas (agrupaciones de tres líneas, unas sobre otras, algunas enteras y otras cortadas) ordenados de una manera determinada alrededor de un centro, el yin-yang. Cada trigrama representa un concepto fundamental de la filosofía china, como el cielo, la tierra, el trueno, el viento, el agua, el fuego, la montaña y el lago. El Pa kua es un símbolo central en el taoísmo y se utiliza en diversas prácticas filosóficas y espirituales chinas, incluyendo el feng shui y las artes marciales.',
            image: ying,
            category: 'Filosofía Oriental',
        },
        {
            id: 2,
            title: 'El Idealismo Platónico',
            subtitle: 'La teoría de las Ideas y el mundo sensible',
            content:
                'Platón propuso que existe un mundo de Ideas o Formas perfectas e inmutables, del cual el mundo sensible es solo una copia imperfecta. Esta teoría ha influenciado profundamente el pensamiento occidental, desde la metafísica hasta la epistemología, planteando preguntas fundamentales sobre la naturaleza de la realidad.',
            image: '📐',
            category: 'Filosofía Antigua',
        },
        {
            id: 3,
            title: 'La Lógica Aristotélica',
            subtitle: 'El fundamento del razonamiento científico',
            content:
                'Aristóteles desarrolló el primer sistema formal de lógica, estableciendo las bases del razonamiento deductivo. Su silogismo y las categorías del ser siguen siendo herramientas fundamentales en el análisis filosófico y científico. Su influencia se extiende desde la Edad Media hasta la filosofía contemporánea.',
            image: '📚',
            category: 'Filosofía Antigua',
        },
        {
            id: 4,
            title: 'El Cogito Cartesiano',
            subtitle: 'La duda metódica y la certeza del pensamiento',
            content:
                'René Descartes inauguró la filosofía moderna con su método de la duda radical. Al dudar de todo lo que pudiera ser puesto en cuestión, llegó a la única certeza indudable: "Pienso, luego existo". Este fundamento racionalista marcó un nuevo comienzo para la filosofía y el conocimiento científico.',
            image: '🤔',
            category: 'Filosofía Moderna',
        },
        {
            id: 5,
            title: 'El Imperativo Categórico',
            subtitle: 'La ética kantiana y el deber moral',
            content:
                'Immanuel Kant propuso que la moralidad se basa en el imperativo categórico: actuar solo según aquella máxima que puedas querer que se convierta en ley universal. Esta ética del deber trasciende las consecuencias y se centra en la intención y la universalidad de nuestras acciones.',
            image: '⚖️',
            category: 'Filosofía Moderna',
        },
        {
            id: 6,
            title: 'El Superhombre Nietzscheano',
            subtitle: 'La transvaloración de todos los valores',
            content:
                'Friedrich Nietzsche proclamó la muerte de Dios y propuso la figura del Übermensch o superhombre como ideal. Este ser trasciende la moral tradicional y crea sus propios valores. Su filosofía del nihilismo y la voluntad de poder han tenido un impacto profundo en el pensamiento contemporáneo.',
            image: '⚡',
            category: 'Filosofía Contemporánea',
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
                        style={{ filter: getImageFilter() }}
                        className={styles.heroImage}
                    />
                    <div className={styles.heroText}>
                        <h1 className={styles.mainTitle}>Cosmovision</h1>
                        <p className={styles.mainSubtitle}>
                            Un viaje a través de las ideas que han moldeado nuestro entendimiento del mundo
                        </p>
                    </div>
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
                <h2>El Legado Filosófico</h2>
                <p>
                    La filosofía nos invita a cuestionar, reflexionar y buscar la verdad. Desde los antiguos
                    griegos hasta los pensadores contemporáneos, cada época ha aportado nuevas perspectivas
                    que enriquecen nuestra comprensión de la existencia, el conocimiento y la moralidad.
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
