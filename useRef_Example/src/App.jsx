
import { createRef, useEffect, useState, useId } from 'react'
import './App.css'
import { DivContainer } from './components/DivContainer'
import { ScrollBar } from './components/ScrollBar'

function App() {

  // Opret en ref (reference) til vores yderste div (containeren der pakker det hele ind)
  const divRef = createRef()

  // Opret state til at gemme scroll procenten
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    // Tilføj en event listener der lytter efter scroll events
    const scrollListener = addEventListener('scroll', () => {
      
      // Gem Scroll værdien fra vinduets scrollY
      const scroll = window.scrollY.toFixed(0);
      
      // Hvis ikke divRef.current kan findes så returner (refs kan ikke findes ved første render)
      if (!divRef.current) return

      // ScrollMax bliver sat til den ydre containers totale højde minus vinduets "innerHeight", for at få den maksimale scroll værdi.
      else{
        const scrollMax = (divRef.current.getBoundingClientRect().height - window.innerHeight).toFixed(0)
        
        // Procenten der er scrollet på siden bliver udregnet
        const percent = Math.round((scroll / scrollMax) * 100)
        
        // Console logs til debugging
        console.log("Scroll: ", scroll)
        console.log("divRef: ", scrollMax)
        console.log("Percentage Scrolled ", percent)
        
        // Staten bliver opdateret og siden re-renderer
        setScrollPercent(percent) 
      }
    })

    // Cleanup der sletter event listeneren når vi forlader siden
    return () => removeEventListener('scroll', scrollListener)
  },[scrollPercent])

  return (
    <div ref={divRef}>
        <ScrollBar scrollPercentage={scrollPercent}/>
        <DivContainer id={id} scrollPercentage={scrollPercent} number={1}/>
        <DivContainer scrollPercentage={scrollPercent} number={2}/>
        <DivContainer scrollPercentage={scrollPercent} number={3}/>
        <DivContainer scrollPercentage={scrollPercent} number={4}/>
    </div>
  )
}

export default App
