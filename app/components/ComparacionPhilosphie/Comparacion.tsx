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

const Comparacion = () => {
    const { theme } = useTheme();
    const articles: Article[] = [
        {
            id: 1,
            title: 'Comparación crítica',
            subtitle: ' El hombre sabio; encuentra placer en su pasión, la pasión del sabio es el conocimiento',
            content:
                `Sin duda la filosofía occidental y la filosofía oriental convergen en la búsqueda de la plenitud del espíritu, por ejemplo, en los monasterios medievales de occidente y en oriente, los monjes y sacerdotes se entregaron a la meditación buscando la realización del espíritu. Sin embargo, en occidente el sistema relaciona a Dios con las creaturas, donde Dios es rey celestial, en un gobierno definido por la sagrada escritura, así pues, también lo es también el estado, regido por la sociedad política y civil en orden al cumplimiento de la legalidad y legitimidad impuesta por el gobernante y los representantes políticos. De alguna manera podríamos percibir al ser más libre en el pensamiento oriental, pues en esta cosmovisión el hombre busca una transformación interna del ser, no tiene pretensiones de eternidad, oriente se encuentra en el aquí y el ahora, en el encuentro de la felicidad y la plenitud.
Por otra parte, Aristóteles hizo una distinción sobre la felicidad en el hombre, el humano y el sabio; El hombre, así como un esclavo, no goza de felicidad verdadera, porque no se le deja actuar con virtud, no posee vida humana, es decir, no es libre. Encuentra una aparente y falsa felicidad en pasatiempos que le otorgan diversión y placer banal e intrascendente. El hombre humano, está entre el trascender y la necesidad, es el hombre que mediante su actividad encuentra placer en el intelecto, es semejante al hombre sabio porque saborea la actividad divina, de suerte este hombre contempla y es feliz; elije ser feliz de acuerdo con la actividad contemplativa. El hombre sabio; encuentra placer en su pasión, la pasión del sabio es el conocimiento, la trascendencia que causa placer y apasiona, en analogía, el intelecto puro es el motor inmóvil, simple e infatigable. Podemos observar una similitud en el encuentro de la felicidad entre las dos cosmovisiones porque el sabio se encuentra alineado con el orden natural, en la contemplación. 
El ser humano como creador a partir de la búsqueda incansable del conocimiento y su afán de progreso ha encontrado respuestas y avances para el beneficio y la plenitud de la humanidad, sin embargo, ¿hasta que punto es realmente beneficioso vivir bajo un nuevo orden universal dentro de este sistema tecnológico? Se vislumbra a un ser humano desdibujado y muy alejado de la naturaleza y lo esencial. La tecnología es pues el nuevo dogma de la civilización, en la practicidad productiva constante, y una carrera de consumo donde el ser encuentra su realización y felicidad cuando llega a la meta, en la adquisición de la materia misma.  
Una mirada positiva que nos dejan los avances tecnológicos y las herramientas en su buen uso, es la universalidad, que ha permitido el encuentro y la cercanía con otras cosmovisiones logrando interculturalidad. Se cierra un poco la brecha de desigualdad y discriminación, donde vemos una humanidad más consciente que descubre en su entendimiento otras posibilidades y encuentros para vivir en plenitud y armonía.
`,
            image: '/brain.svg',
            category: 'Convergencias y divergencias',
        }

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
                        src="/vientos.svg"
                        alt="vientos"
                        width={250}
                        height={250}
                        style={{ filter: getImageFilter(theme) }}
                        className={styles.heroImage}
                    />

                    <div className={styles.heroText}>
                        <h1 className={styles.mainTitle}>Comparación crítica </h1>
                        <p className={styles.mainSubtitle}>
                            La tecnología es pues el nuevo dogma de la civilización, en la practicidad productiva constante, y una carrera de consumo donde el ser encuentra su realización y felicidad cuando llega a la meta, en la adquisición de la materia misma.

                        </p>


                    </div>
                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'row' }}>

                        <img
                            src="/technology.svg"
                            alt="technology"
                            width={250}
                            height={250}
                            style={{ filter: getImageFilter(theme) }}
                            className={styles.heroImage}
                        />
                        <img
                            src="/buda.svg"
                            alt="buda"
                            width={250}
                            height={250}
                            style={{ filter: getImageFilter(theme) }}
                            className={styles.heroImage}
                        />
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
                <h2>Conclusión</h2>
                <p>
                    Bibliografia.
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

export default Comparacion;
