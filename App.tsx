import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import AppNavigator from './src/navigation';
import ThemeManager from './src/Themes';
import { Fonts } from './src/Constants';
 
const App = ({ params }) => {
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    /* Loading custom fonts in async */
    const _loadAssetsAsync = async () => {
        await Fonts.customFonts;
        setAssetsLoaded(true);
    };

    useEffect(() => {
        _loadAssetsAsync();
    });

    return assetsLoaded ? (
        <ThemeManager>
            <AppNavigator />
        </ThemeManager>
    ) : (
        <ActivityIndicator size="small"></ActivityIndicator>
    );
};

export default App;
