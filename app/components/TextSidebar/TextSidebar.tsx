'use client';

import styles from './TextSidebar.module.scss';

const TextSidebar = () => {


    return (
        <>
            <aside className={`${styles.sidebar}`}>
                <h1 className={styles.title}

                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >

                    PHILOSOPHIE

                </h1>
            </aside>
        </>
    );
};

export { TextSidebar };
