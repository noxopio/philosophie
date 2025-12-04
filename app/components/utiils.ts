import { useTheme } from '@/app/context/ThemeContext';


export const getImageFilter = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme } = useTheme();
    switch (theme) {
        case 'classic':
        // case 'midnight':
        case 'neumorphic-light':
            return 'invert(1) brightness(1.2)'; // Blanco para temas oscuros
        case 'sepia':
            return 'invert(0.6) sepia(1) saturate(2) hue-rotate(15deg)'; // Tono sepia
        case 'ocean':
            return 'invert(0.4) sepia(1) saturate(3) hue-rotate(170deg)'; // Tono azul océano
        case 'cyberpunk':

            return 'invert(0.5) sepia(1) saturate(4) hue-rotate(270deg) brightness(1.2)'; // Tono neón
        default:
            return 'none';
    }
};
