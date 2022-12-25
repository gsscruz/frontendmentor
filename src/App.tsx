import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';
function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Home />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
