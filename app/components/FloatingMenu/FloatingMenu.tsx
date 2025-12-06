/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './FloatingMenu.module.scss';
import { getImageFilter } from '../utiils';

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const menuItems = [
        { label: 'Inicio', onClick: () => router.push('/') },
        { label: 'Oriental', onClick: () => router.push('/oriental') },
        { label: 'Occidental', onClick: () => router.push('/occidental') },
        { label: 'Conclusiones', onClick: () => router.push('/conclusiones') },
        { label: 'Bibliografía', onClick: () => router.push('/bibliografia') },
    ];

    return (
        <div className={styles.floatingMenu}>
            {/* Botón de apertura/cierre */}
            <motion.button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className={styles.bookSpine}>
                    {isOpen ? (
                        '✕'
                    ) : (
                        <img
                            src="/philo.svg"
                            alt="Philosophie"
                            width={48}
                            height={48}
                            style={{ filter: getImageFilter() }}
                        />
                    )}
                </span>
            </motion.button>

            {/* Menú desplegable */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.menuContainer}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <div className={styles.bookPages}>
                            <div className={styles.leftPage}>
                                {/* Logo */}
                                <div className={styles.logoContainer}>
                                    <img
                                        src="/philo.svg"
                                        alt="Philosophie"
                                        width={150}
                                        height={150}
                                        style={{ filter: getImageFilter() }}
                                    />
                                </div>

                                <h3>Menú</h3>

                                {/* Links */}
                                <ul className={styles.menuLinks}>
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={item.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <a
                                                onClick={() => {
                                                    item.onClick();
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingMenu;
