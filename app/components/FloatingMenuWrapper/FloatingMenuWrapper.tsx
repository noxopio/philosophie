'use client';

import React, { useState } from 'react';
import FloatingMenu from '../FloatingMenu/FloatingMenu';
import ThemeSelector from '../Theme/ThemeSelector';

const FloatingMenuWrapper: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);

    return (
        <>
            <FloatingMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} setThemeOpen={setIsThemeOpen} />
            <ThemeSelector isOpen={isThemeOpen} setIsOpen={setIsThemeOpen} setMenuOpen={setIsMenuOpen} />
        </>
    );
};

export default FloatingMenuWrapper;
