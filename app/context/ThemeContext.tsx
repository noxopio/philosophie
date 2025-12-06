'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'classic' | 'dark' | 'sepia' | 'ocean' | 'cyberpunk' | 'neumorphic-light' | 'neumorphic-dark' | 'midnight';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>('midnight');

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const savedTheme = localStorage.getItem('philosophie-theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('philosophie-theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme, mounted]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
