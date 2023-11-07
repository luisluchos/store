import { SearchOffOutlined, SearchOutlined, ShoppingCart, ShoppingCartOutlined, TypeSpecimenOutlined } from '@mui/icons-material'
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link href="/">
                    <div className='flex items-center'>

                        <Typography variant="h6">
                            Teslo |
                        </Typography>
                        <Typography variant="h6" sx={{ ml: 0.5 }}>
                            Shop
                        </Typography>
                    </div>
                </Link>
                {/*todo flex*/}
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Link href="/category/men">

                        <Button>
                            Hombres
                        </Button>

                    </Link>
                    <Link href="/category/women">


                        <Button>
                            Mujeres
                        </Button>

                    </Link>
                    <Link href="/category/kid">


                        <Button>
                            Niños
                        </Button>

                    </Link>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <Link href="/cart">


                    <Button>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Button>

                </Link>
                <Button>
                    Menú
                </Button>

            </Toolbar >

        </AppBar >
    )
}
