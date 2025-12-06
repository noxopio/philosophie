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
    const articles: Article[] = [{
        id: 1,
        title: 'El Pensamiento Socrático',
        subtitle: 'La mayéutica y el conocimiento de uno mismo',
        content: 'Sócrates revolucionó la filosofía griega con su método dialéctico, conocido como mayéutica. A través del diálogo y las preguntas, buscaba que sus interlocutores descubrieran por sí mismos la verdad. Su famosa frase "Conócete a ti mismo" sigue siendo un pilar fundamental del pensamiento filosófico occidental.',
        image: '',
        category: 'Filosofía Antigua',
    }];
    return (
        <main className={styles.mainContent}>

            <motion.header className={styles.heroSection} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className={styles.heroContent}            >
                    <img
                        src="/philo.svg" alt="Philosophie" width={150} height={150}
                        style={{ filter: getImageFilter() }}
                        className={styles.heroImage}
                    />

                    <div className={styles.heroText} >
                        <h1 className={styles.mainTitle}>Filosofia Oriental </h1>
                        <p className={styles.mainSubtitle}>
                            El concepto de filosofia oriental surgio de la academia occidental para agrupar las diversas tradiciones filosoficas originadas en Asia, incluyendo las filosofias de China, India, Japon y otras regiones del continente. A diferencia de la filosofia occidental, que a menudo se centra en el analisis logico y la argumentacion sistematica, la filosofia oriental tiende a enfatizar la armonia con la naturaleza, la introspeccion y la busqueda de la sabiduria a traves de la experiencia directa y la meditacion.
                        </p>
                    </div>
                </div>
            </motion.header>
            <div className={styles.articlesContainer} >
                {articles.map((article, index) => (<ArticleCard key={article.id}
                    article={article}
                    index={index}
                />
                ))
                }

            </div> <motion.section className={
                styles.conclusionSection
            }

                initial={
                    {
                        opacity: 0
                    }
                }

                whileInView={
                    {
                        opacity: 1
                    }
                }

                viewport={
                    {
                        once: true, margin: '-100px'
                    }
                }

                transition={
                    {
                        duration: 0.8
                    }
                }

            >
                <h2>Conclusión</h2>
                <p> La filosofía oriental nos invita a reflexionar sobre nuestra existencia, la naturaleza del conocimiento y la búsqueda de la sabiduría. A través de las enseñanzas de grandes pensadores como Sócrates, Platón y Aristóteles, podemos comprender mejor el mundo que nos rodea y nuestro lugar en él. Este viaje filosófico no solo enriquece nuestra mente, sino que también nos guía hacia una vida más plena y consciente.
                </p>

            </motion.section>

        </main>);
}

    ;

interface ArticleCardProps {
    article: Article;
    index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    article, index
}

) => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true, margin: '-100px'
    }

    );

    return (<motion.article ref={
        ref
    }

        className={
            styles.articleCard
        }

        initial={
            {
                opacity: 0, y: 50
            }
        }

        animate={
            isInView ? {
                opacity: 1, y: 0
            }

                : {
                    opacity: 0, y: 50
                }
        }

        transition={
            {
                duration: 0.6, delay: index * 0.1
            }
        }

    > <div className={
        styles.articleHeader
    }

    > <div className={
        styles.articleImage
    }

    > {
                    article.image
                }

            </div> <div className={
                styles.articleMeta
            }

            > <span className={
                styles.category
            }

            > {
                        article.category
                    }

                </span> <h2 className={
                    styles.articleTitle
                }

                > {
                        article.title
                    }

                </h2> <h3 className={
                    styles.articleSubtitle
                }

                > {
                        article.subtitle
                    }

                </h3> </div> </div> <div className={
                    styles.articleContent
                }

                > <p> {
                    article.content
                }

            </p>
        </div>
    </motion.article>);
}

    ;

export default Oriental;