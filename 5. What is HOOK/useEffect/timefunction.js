// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
//===
// Call API
/**
1. Update DOM
- F8 blog title
2. Call API
3. Listen DOM events
- Scroll
- Resize
4. Cleanup
- Remove listener / Unsubscribe
- Clear timer
*/
// 1. useEffect (callback)
// 2. useEffect (callback, [])
// -> chỉ gọi callBack 1 lần sau khi component mount
// 3. useEffect(callback, [deps])
// -> Callback sẽ được gọi lại mỗi khi dependencies thay thôi
// ---------
// 1. callback will be always called after component  mounted
// 2. Clean up function will be always called before component unmounted
import { Fragment, useEffect, useState } from "react"

function Content() {

    const [countdown, setCountdown] = useState(180)

    
    useEffect(() => {
        const timerid = setInterval(() => {
            setCountdown(prev => prev -1)
           // console.log('Countdown: ', countdown)
        }, 1000)

        return () => clearInterval(timerid)
    }, [])
    return (
        <div>
            <h1>
                {countdown}
            </h1>
        </div>
    )

}

export default Content


  