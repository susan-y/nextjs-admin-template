'use client'

import * as React from 'react'
import {useSession} from 'next-auth/react'
import {redirect} from 'next/navigation'
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import {styled} from '@mui/material/styles'
import {ThemeProvider} from '@emotion/react'
import {NextUIProvider} from '@nextui-org/react'

import theme from '../styles/theme'
import NavBar from '../navbar'
import LoginButton from '../components/LoginButton'

const drawerWidth = 240

const Main = styled('main', {shouldForwardProp: prop => prop !== 'open'})<{
  open?: boolean
}>(({theme, open}) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

interface Props {
  window?: () => Window
}

function useWindowProps() {
  const [windowProps, setWindowProps] = React.useState({})

  React.useEffect(() => {
    setWindowProps({
      href: window.location.href,
      width: window.innerWidth,
      window: window.window,
      document: window.document
    })
  }, [])

  return windowProps
}

const CustomDrawer = styled(Drawer)`
  background: #f0f000;
`

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export default function AdminLayout({
  children,
  props
}: {
  children: React.ReactNode
  props: Props
}) {
  /// Check window status -> Drawer
  const windowProps = useWindowProps()

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [open, setOpen] = React.useState(true)
  const [isMobile, setIsMobile] = React.useState(false)

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen)
    } else {
      setOpen(!open)
    }
  }

  const container =
    windowProps.window !== undefined ? () => windowProps.document.body : undefined

  React.useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 599px)').matches) {
        setIsMobile(true)
        setOpen(false)
        setMobileOpen(true)
      } else {
        setIsMobile(false)
        setOpen(true)
        setMobileOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  /// Check session status
  const {data: session, status} = useSession()

  React.useEffect(() => {
    if (status === 'loading') {
      return
    } else {
      if (!session || !session.user) {
        redirect('/')
      }
    }
  }, [status])

  if (status === 'loading') {
    return (
      <>
        <div className="flex h-screen items-center justify-center bg-slate-200">
          <div className="text-2xl font-semibold">Loading</div>
        </div>
      </>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{display: 'flex'}}>
          <CssBaseline />
          <AppBar open={open} position="fixed" color="primary">
            <div className="flex justify-between items-center pr-2">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{mr: 2}}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
              <LoginButton />
            </div>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box'
              }
            }}
            variant="persistent"
            anchor="left"
            open={open}>
            <div className="bg-slate-700 h-screen">
              <div className="flex justify-center m-4 mb-1">
                <div className="text-2xl font-semibold text-white">Admin Console</div>
              </div>
              <Divider />
              <div className="mb-2"></div>
              <NavBar />
            </div>
          </Drawer>
          <Box component="nav" aria-label="mailbox folders">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: {xs: 'block', sm: 'none'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
              }}>
              <div className="bg-slate-700 h-screen">
                <NavBar />
              </div>
            </Drawer>
          </Box>
          <Main open={open}>
            <NextUIProvider>
              <DrawerHeader />
              {children}
            </NextUIProvider>
          </Main>
        </Box>
      </ThemeProvider>
    )
  }
}
