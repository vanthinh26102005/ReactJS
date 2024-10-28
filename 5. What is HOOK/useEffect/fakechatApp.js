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

const lessons = [
    {
        id: 1,
        name: "What is ReactJS?"
    },
    {
        id: 2,
        name: "SPA/MPA?"
    },
    {
        id: 3,
        name: "Arrow function?"
    },
]

function Content() {

    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment )

        return() => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment )

        }

    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' :
                                '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Content


