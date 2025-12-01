'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, Theme } from '../../context/ThemeContext';
import styles from './ThemeSelector.module.scss';

const ThemeSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const themes: { value: Theme; label: string; icon: string }[] = [
        { value: 'classic', label: 'Clásico', icon: '📖' },
        { value: 'dark', label: 'Oscuro', icon: '🌙' },
        { value: 'sepia', label: 'Sepia', icon: '📜' },
        { value: 'ocean', label: 'Océano', icon: '🌊' },
        { value: 'cyberpunk', label: 'Cyber', icon: '👾' },
        { value: 'neumorphic-light', label: 'Neo Light', icon: '☀️' },
        { value: 'neumorphic-dark', label: 'Neo Dark', icon: '🌑' },
        { value: 'midnight', label: 'Midnight', icon: '✨' },
    ];

    return (
        <div className={styles.themeSelector}>
            <motion.button
                className={styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Cambiar tema"
            >
                🎨
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.menuContainer}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ transformOrigin: 'top' }}
                    >
                        <div className={styles.themePanel}>
                            <h3>Temas</h3>
                            <div className={styles.themeGrid}>
                                {themes.map((t, index) => (
                                    <motion.button
                                        key={t.value}
                                        className={`${styles.themeButton} ${theme === t.value ? styles.active : ''}`}
                                        onClick={() => {
                                            setTheme(t.value);
                                            setIsOpen(false);
                                        }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className={styles.themeIcon}>{t.icon}</span>
                                        <span className={styles.themeLabel}>{t.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSelector;
