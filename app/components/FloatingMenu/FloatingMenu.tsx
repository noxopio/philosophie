/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './FloatingMenu.module.scss';
import { getImageFilter } from '../utiils';
import { useTheme } from '@/app/context/ThemeContext';

type FloatingMenuProps = {
    isOpen?: boolean;
    setIsOpen?: (v: boolean) => void;
    setThemeOpen?: (v: boolean) => void;
};

const FloatingMenu: React.FC<FloatingMenuProps> = (props) => {
    const { theme } = useTheme();
    const [localOpen, setLocalOpen] = useState(false);
    const isOpen = props.isOpen ?? localOpen;
    const [showIntroText, setShowIntroText] = useState(true);
    const setIsOpen = props.setIsOpen ?? setLocalOpen;
    const setThemeOpen = props.setThemeOpen ?? (() => { });
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
    const router = useRouter();

    const menuItems = [
        { label: 'Inicio', onClick: () => router.push('/') },
        // { label: 'Oriental', onClick: () => router.push('/oriental') },
        // { label: 'Occidental', onClick: () => router.push('/occidental') },
        { label: 'Comparacion', onClick: () => router.push('/comparacion') },
        { label: 'Conclusiones', onClick: () => router.push('/conclusiones') },
        { label: 'Bibliografía', onClick: () => router.push('/bibliografia') },
    ];

    return (
        <div className={styles.floatingMenu} ref={containerRef}>

            {/* Botón de apertura/cierre */}
            <motion.button
                className={styles.toggleButton}
                onClick={() => {
                    const next = !isOpen;
                    setIsOpen(next);
                    if (next) setThemeOpen(false);
                }}
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Menú"
                onAnimationComplete={() => setShowIntroText(false)}

            >

                <span className={styles.bookSpine}>
                    {isOpen ? (
                        '✕'
                    ) : (
                        <div className={styles.iconWrapper}>
                            <div className={styles.flipper}>
                                <div className={`${styles.face} ${styles.front}`}>
                                    <img
                                        src="/philo.svg"
                                        alt="Menú"
                                        width={48}
                                        height={48}
                                        style={{ filter: getImageFilter(theme) }}
                                        className={styles.menuIcon}
                                    />
                                </div>
                                <div className={`${styles.face} ${styles.back}`} aria-hidden>
                                    <span className={styles.backIcon}>☰</span>
                                </div>
                            </div>
                        </div>
                    )}
                </span>

            </motion.button>
            <AnimatePresence>
                {showIntroText && (
                    <motion.span
                        className={styles.introText}
                        initial={{ opacity: 4, y: 0, scale: 2 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 4 }}
                        transition={{ duration: 30 }}

                    >
                        Menú
                    </motion.span>
                )}
            </AnimatePresence>
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
                                        style={{ filter: getImageFilter(theme) }}
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
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => { if (e.key === 'Enter') { item.onClick(); setIsOpen(false); } }}
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
