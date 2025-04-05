import { Outlet } from 'react-router-dom'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import CallToAction from '../components/sections/callToAction'
import Preloader from '../components/ui/preloader'
import ScrollToTop from '../components/ScrollToTop'

const RootLayout = () => {
    return (
        <>
            <Preloader />
            <ScrollToTop/>
            <Header />
            <Outlet />
            <CallToAction />
            <Footer />
        </>
    )
}

export default RootLayout