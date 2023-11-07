import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Navbar } from './components/ui'
import { lightTheme } from '../themes'
import { ThemeProvider } from '@mui/material/styles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <head>
          <title>Store</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <meta name='og:description' content='Store' />
          <meta name='og:keywords' content='Store' />
          <meta name='og:title' content='Store' />
        </head>

        <ThemeProvider theme={lightTheme}>
          <body className={inter.className}>
            <Navbar />
            <div className='mt-16'>

              {children}
            </div>

          </body>
        </ThemeProvider>
      </html >
    </>
  )
}
