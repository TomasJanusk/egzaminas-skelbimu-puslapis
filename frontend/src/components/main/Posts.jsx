import { useEffect, useState } from "react"
import axios from "axios";
import { url } from "../../utilities/backend";
import Post from "./Post";
const Posts = (props) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const res = await axios.get(`${url}/posts?${props.search}${props.category}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                      }
                });
                setPosts(res.data.data.posts)
            } catch (err) {
                console.error(err);
            }
        }
        if (props.loading){
            loadPosts()
            props.setLoading(false)
        }
    }, [props])

    return (
      <div className="p-4 p-md-5 border rounded-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="container">
          <section className="d-flex flex-row flex-wrap">
            {posts.map((post) => (
              <Post
                title={post.title}
                description={post.description}
                price={post.price}
                image={post.image}
                _id={post._id}
              />
            ))}
          </section>
        </div>
      </div>
    );
}
export default Posts