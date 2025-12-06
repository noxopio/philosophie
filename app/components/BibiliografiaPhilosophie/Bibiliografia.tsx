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

const Bibiliografia = () => {
    const articles: Article[] = [
        {
            id: 1,
            title: 'Filosofía Medieval',
            subtitle: 'La filosofía durante la Edad Media',
            content:
                'La filosofía medieval se extiende, a grandes rasgos, desde la cristianización del Imperio romano hasta el Renacimiento.[37]​ Se define, en parte, por el redescubrimiento y posterior desarrollo de la griega clásica y de la filosofía helenística, y, en parte, por la necesidad de abordar los problemas teológicos y de integrar las doctrinas sagradas, entonces muy extendidas, de la religión abrahámica. (Judaísmo, Cristianismo y Islam) con el aprendizaje del secular. Algunos problemas discutidos a lo largo de este periodo son la relación de la fe con la razón, la existencia y unidad de Dios, el objeto de la teología y la metafísica, los problemas del conocimiento, de los universales y de la individuación.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saint_Augustine_by_Philippe_de_Champaigne.jpg/250px-Saint_Augustine_by_Philippe_de_Champaigne.jpg',
            category: 'Filosofía Bibiliografia',
        },
        {
            id: 2,
            title: 'Renacimiento y Humanismo',
            subtitle: 'El resurgimiento del pensamiento clásico',
            content:
                'El Renacimiento fue un periodo de renovación cultural e intelectual en Europa que abarcó aproximadamente desde el siglo XIV hasta el siglo XVII. Durante este tiempo, hubo un resurgimiento del interés por la filosofía, el arte y la ciencia de la antigüedad clásica. El Humanismo, una corriente filosófica central del Renacimiento, enfatizaba el valor y la dignidad del individuo, así como la importancia de la educación y el estudio de las humanidades (literatura, historia, filosofía). Filósofos como Pico della Mirandola y Erasmus promovieron ideas que desafiaban las doctrinas medievales y sentaron las bases para el pensamiento moderno.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Giordano_Bruno_Campo_dei_Fiori.jpg/250px-Giordano_Bruno_Campo_dei_Fiori.jpg',
            category: 'Filosofía Bibiliografia',
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
                        <h1 className={styles.mainTitle}> Bibiliografia</h1>
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

            <motion.section
                className={styles.conclusionSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
            >
                <h2>Conclusión</h2>
                <p>
                    Bibliografia.
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

export default Bibiliografia;
