/* eslint-disable @next/next/no-img-element */
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../shared/PageLayout.module.scss';
import { getImageFilter } from '../utiils';
import { useTheme } from '@/app/context/ThemeContext';

interface Article {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    category: string;
}

const Bibliografia = () => {
    const { theme } = useTheme();
    const articles: Article[] = [];

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
                        style={{ filter: getImageFilter(theme) }}
                        className={styles.heroImage}
                    />

                    <div className={styles.heroText}>
                        <h1 className={styles.mainTitle}>Bibliografia</h1>
                        <p className={styles.mainSubtitle}>
                            Recursos y referencias.
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
                <h2>Bibliografía</h2>

                <ol className="bibliographyList">
                    <li>
                        Panikkar, R. (2015). <em>Obras completas. Tomo I: Mística y espiritualidad. Vol. 1: Mística, plenitud de vida</em>. Herder.
                        <br />
                        <a className="link" href="https://doi-org.bibliotecavirtual.unad.edu.co/10.2307/j.ctvt9jzpr" target="_blank" rel="noopener noreferrer">
                            <svg className="linkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                                <path d="M5 5h5V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2v5H5V5z" />
                            </svg>
                            https://doi-org.bibliotecavirtual.unad.edu.co/10.2307/j.ctvt9jzpr
                        </a>
                    </li>
                    <li>
                        Aristóteles. (1978). <em>Acerca del alma</em> Editorial Gredos.
                        <br />
                        <a className="link" href="https://eltalondeaquiles.pucp.edu.pe/wp-content/uploads/2015/09/Aristoteles-Acerca-del-alma.-Gredos.-Trad-Tomas-Calvo.pdf" target="_blank" rel="noopener noreferrer">
                            <svg className="linkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                                <path d="M5 5h5V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2v5H5V5z" />
                            </svg>
                            https://eltalondeaquiles.pucp.edu.pe/wp-content/uploads/2015/09/Aristoteles-Acerca-del-alma.-Gredos.-Trad-Tomas-Calvo.pdf
                        </a>
                    </li>
                    <li>
                        Fernández Mateo, J. (2021). La técnica es el nuevo sujeto de la historia: posthumanismo tecnológico y el crepúsculo de lo humano. <em>Revista Iberoamericana de Bioética.</em>
                        <br />
                        <a className="link" href="https://doi.org/10.14422/rib.i16.y2021.004" target="_blank" rel="noopener noreferrer">
                            <svg className="linkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                                <path d="M5 5h5V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2v5H5V5z" />
                            </svg>
                            https://doi.org/10.14422/rib.i16.y2021.004
                        </a>
                    </li>
                    <li>
                        González R. Arnaiz, G. (2021). <em>Ética y responsabilidad: La condición responsiva del ser humano</em> (1.ª ed.). Madrid, Difusora Larousse  - Editorial Tecnos.
                    </li>
                    <li>
                        Eduardo M. Ortega Martín, (2022). La <em>lectio Divina </em> en el occidente medieval (ss. X-XIII): Análisis comparativo con otras religiones de oriente.
                    </li>

                </ol>


            </motion.section>
        </main>
    );
}; interface ArticleCardProps {
    article: Article;
    index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const renderImage = (src: string | undefined) => {
        if (!src) return null;

        if (src.startsWith('http') || src.startsWith('/')) {
            return (
                <img
                    src={src}
                    alt={article.title}
                    width={120}
                    height={120}
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