'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    const philosophers = [
        { name: 'Platón', image: '🏛️', period: 'Antigua' },
        { name: 'Aristóteles', image: '📚', period: 'Antigua' },
        { name: 'Sócrates', image: '💭', period: 'Antigua' },
        { name: 'Descartes', image: '🤔', period: 'Moderna' },
        { name: 'Kant', image: '⚖️', period: 'Moderna' },
        { name: 'Nietzsche', image: '⚡', period: 'Contemporánea' },
    ];

    const schools = [
        { name: 'Estoicismo', icon: '🏔️' },
        { name: 'Existencialismo', icon: '🎭' },
        { name: 'Racionalismo', icon: '🧠' },
        { name: 'Empirismo', icon: '👁️' },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <motion.section
                    className={styles.section}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Filósofos Destacados</h2>
                    <div className={styles.philosopherList}>
                        {philosophers.map((philosopher, index) => (
                            <motion.div
                                key={philosopher.name}
                                className={styles.philosopherCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, x: 10 }}
                            >
                                <div className={styles.philosopherIcon}>{philosopher.image}</div>
                                <div className={styles.philosopherInfo}>
                                    <h3>{philosopher.name}</h3>
                                    <span className={styles.period}>{philosopher.period}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    className={styles.section}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className={styles.sectionTitle}>Corrientes Filosóficas</h2>
                    <div className={styles.schoolList}>
                        {schools.map((school, index) => (
                            <motion.a
                                key={school.name}
                                href={`#${school.name.toLowerCase()}`}
                                className={styles.schoolLink}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.08, x: 5 }}
                            >
                                <span className={styles.schoolIcon}>{school.icon}</span>
                                <span className={styles.schoolName}>{school.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    className={styles.section}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Enlaces Rápidos</h2>
                    <nav className={styles.quickLinks}>
                        <a href="#historia">📜 Historia de la Filosofía</a>
                        <a href="#metodos">🔍 Métodos Filosóficos</a>
                        <a href="#ramas">🌳 Ramas de la Filosofía</a>
                        <a href="#lecturas">📖 Lecturas Recomendadas</a>
                    </nav>
                </motion.section>

                <motion.div
                    className={styles.decorativeQuote}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p>"Sólo sé que no sé nada"</p>
                    <span>- Sócrates</span>
                </motion.div>
            </div>
        </aside>
    );
};

export default Sidebar;
