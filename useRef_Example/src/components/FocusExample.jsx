import { createRef } from "react"

export const FocusExample = () => {

    // Opret en reference til input feltet
    const inputRef = createRef()

    // Lav en funktion der håndterer vores klik ved at sætte input feltet som "focus" element
    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <div style={{width: "20%", margin:"3rem auto", display: "grid", gridTemplateColumns: "1fr", gap: "8px"}}>
            <input ref={inputRef} placeholder="Click on the button to focus"></input>
            <button onClick={handleClick}>FOCUS NOW</button>
        </div>
    )
}