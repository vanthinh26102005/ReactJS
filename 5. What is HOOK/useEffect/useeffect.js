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
import { useEffect, useState } from "react"

const tabs = ['posts', 'comments',  'albums']
function Content() {
    const [title, setTitle] = useState('')

    const [posts, setPosts] = useState([])

    const [type, setType] = useState('posts')
   
    useEffect(() => {
        console.log('type change')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key ={tab}
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
                    <li key ={post.id}> {post.title || post.name}</li>
                ))}
            </ul>

        </div>

    )
}

export default Content