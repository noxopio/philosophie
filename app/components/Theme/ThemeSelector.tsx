'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, Theme } from '../../context/ThemeContext';
import styles from './ThemeSelector.module.scss';

type ThemeSelectorProps = {
    isOpen?: boolean;
    setIsOpen?: (v: boolean) => void;
    setMenuOpen?: (v: boolean) => void;
};

const ThemeSelector: React.FC<ThemeSelectorProps> = (props) => {
    const [localOpen, setLocalOpen] = useState(false);
    const isOpen = props.isOpen ?? localOpen;
    const setIsOpen = props.setIsOpen ?? setLocalOpen;
    const setMenuOpen = props.setMenuOpen ?? (() => { });
    const { theme, setTheme } = useTheme();
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        function handleEsc(e: KeyboardEvent) {
            if (e.key === 'Escape') setIsOpen(false);
        }
        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [setIsOpen]);

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
        <div className={styles.themeSelector} ref={containerRef}>
            <motion.button
                className={styles.toggleButton}
                onClick={() => {
                    const next = !isOpen;
                    setIsOpen(next);
                    if (next) setMenuOpen(false);
                }}
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
