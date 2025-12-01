'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, Theme } from '../context/ThemeContext';
import styles from './FloatingMenu.module.scss';

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const themes: { value: Theme; label: string; icon: string }[] = [
        { value: 'classic', label: 'Clásico', icon: '📖' },
        { value: 'dark', label: 'Oscuro', icon: '🌙' },
        { value: 'sepia', label: 'Sepia', icon: '📜' },
        { value: 'ocean', label: 'Océano', icon: '🌊' },
    ];

    const menuItems = [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Filósofos', href: '#filosofos' },
        { label: 'Corrientes', href: '#corrientes' },
        { label: 'Artículos', href: '#articulos' },
    ];

    return (
        <div className={styles.floatingMenu}>
            <motion.button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className={styles.bookSpine}>
                    {isOpen ? '✕' : '☰'}
                </span>
            </motion.button>

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
                                <h3>Navegación</h3>
                                <ul className={styles.menuLinks}>
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <a href={item.href} onClick={() => setIsOpen(false)}>
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.rightPage}>
                                <h3>Temas</h3>
                                <div className={styles.themeGrid}>
                                    {themes.map((t, index) => (
                                        <motion.button
                                            key={t.value}
                                            className={`${styles.themeButton} ${theme === t.value ? styles.active : ''}`}
                                            onClick={() => setTheme(t.value)}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <span className={styles.themeIcon}>{t.icon}</span>
                                            <span className={styles.themeLabel}>{t.label}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingMenu;
