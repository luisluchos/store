import { lightTheme } from '@/themes'

import { ThemeProvider, Typography } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Typography variant='h1' component='h1'>
        Store
      </Typography>
      <Typography variant='h2'>All products</Typography>
    </main>
  )
}
