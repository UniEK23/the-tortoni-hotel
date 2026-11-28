import Nav from './Components/Nav/Nav'
// import Hero from './Components/Hero/Hero'
import HeroSecond from './Components/HeroSecond/HeroSecond'
import RoomsPreview from './Components/RoomsPreview/roomsPreview'
import Story from './Components/Story/Story'
import Facilities from './Components/Facilities/Facilities'
import AvailabilityBar from './Components/AvailabilityBar/AvailabilityBar'
import Reviews from './Components/Reviews/Reviews'
import Reserve from './Components/Reserve/Reserve'
import Footer from './Components/Footer//Footer'

function App() {
  return (
    <>
      <Nav />
      {/* <Hero /> */}
      <HeroSecond />
      <AvailabilityBar />
      <RoomsPreview />
      <Story />
      <Facilities />
      <Reviews />
      <Reserve />
      <Footer />
    </>
  )
}

export default App
