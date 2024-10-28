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
import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [title, setTitle] = useState('')

    const [posts, setPosts] = useState([])

    const [type, setType] = useState('posts')

    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        console.log('type change')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)

            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
                /// use === to compare so => it'll not re-render just set state
            }
            else {
                setShowGoToTop(false)
            }

            //setShowGoToTop(window.scrollY >= 200) -- compare return boolean

        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)

        }

    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title || post.name}</li>
                ))}

                {showGoToTop && (
                    <button
                        style={
                            {
                                position: 'fixed',
                                right: 20,
                                bottom: 20,
                            }
                        }
                    >
                        Go to top
                    </button>
                )}
            </ul>

        </div>

    )
}

export default Content