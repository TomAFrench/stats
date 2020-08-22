import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { scTheme, muiTheme } from 'styles/theme';

import '../i18n';

import Layout from 'sections/shared/Layout';

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Synthetix protocol statistics and network data" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@synthetix_io" />
				<meta name="twitter:creator" content="@synthetix_io" />
				{/* open graph */}
				<meta property="og:url" content="https://stats.synthetix.io/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Synthetix Stats" />
				<meta property="og:description" content="Synthetix protocol statistics and network data" />
				<meta property="og:image" content="/images/synthetix.png" />
				<meta property="og:image:alt" content="Synthetix Stats" />
				<meta property="og:site_name" content="Synthetix Stats" />
				{/* twitter */}
				<meta name="twitter:image" content="/images/synthetix.png" />
				<meta name="twitter:url" content="https://stats.synthetix.io" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<SCThemeProvider theme={scTheme}>
				<MuiThemeProvider theme={muiTheme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MuiThemeProvider>
			</SCThemeProvider>
		</>
	);
};

export default App;
