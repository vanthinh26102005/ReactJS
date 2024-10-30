import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"
function Paragraph() {
    const context = useContext(ThemeContext) 
    return (
        <p className={context.theme}>
            Content abc xyz ecs!!!
        </p>
    )
}

export default Paragraph