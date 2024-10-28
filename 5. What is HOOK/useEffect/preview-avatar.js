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
    
    const [avatar, setAvatar] = useState()
    
    useEffect(() => {
        return() => {
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])


    const handlePreviewAvatar =(e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file);

        setAvatar(file)
    }
    useEffect(() => {
     
    })

    return(
        <div>
            <input
                type="file"
                //multiple
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )

}

export default Content


