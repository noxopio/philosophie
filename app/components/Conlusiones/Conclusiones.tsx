/* eslint-disable @next/next/no-img-element */
'use client';

import { motion, useInView } from 'framer-motion';
import styles from '../shared/PageLayout.module.scss';
import { getImageFilter } from '../utiils';
import { useRef } from 'react';
import { useTheme } from '@/app/context/ThemeContext';

interface Article {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    category: string;
}

const Conclusiones = () => {
    const articles: Article[] = [

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
                        <h1 className={styles.mainTitle}>Conclusión personal </h1>
                        <p className={styles.mainSubtitle}>
                            La filosofía y las doctrinas cobran un papel esencial en nuestra sociedad, necesitamos seres más reflexivos ante el devenir, generadores y creadores de cambios e ideas que dignifiquen al ser humano, logrando una humanidad más virtuosa, libre y consciente con mejores condiciones que corten con la brecha de la desigualdad.
                        </p>
                    </div>
                    <img
                        src="/fish.svg"
                        alt="fish"
                        width={400}
                        height={400}
                        // style={{ filter: getImageFilter() }}
                        className={styles.heroImage}
                    />
                </div>
                <h1 style={{ fontSize: '27px' }}>
                    Diana Rocio Delgadillo Pinzon
                </h1>
            </motion.header>

            <div className={styles.articlesContainer}>
                {articles.map((article, index) => (
                    <ArticleCard key={article.id} article={article} index={index} />
                ))}
                {/* <p>
                    Diana Rocio Delgadillo Pinzon
                </p> */}
            </div>

            {/* <motion.section
                className={styles.conclusionSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
            >
                <p>
                    Diana Rocio Delgadillo Pinzon
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
                <p>{article.content}</p>
            </div>
        </motion.article>
    );
};

export default Conclusiones;
