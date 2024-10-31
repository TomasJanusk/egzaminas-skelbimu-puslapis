import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { url } from "../../utilities/backend";
import Posts from "./Posts";
const Main = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("login")
        }
    }, [navigate])

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const res = await axios.get(`${url}/categories`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                      }
                });
                setCategories(res.data.data.categories)
            } catch (err) {
                console.error(err);
            }
        }
        if (loading){
            loadCategories()
            setLoading(false)
        }
    }, [loading])

    const handleSearch = (e) => {
        setLoading(true)
        setSearch(`title=${e.target.value}`)
        if(e.target.value === ""){
            setSearch("")
        }
    }
    const handleCat = (e) => {
        setLoading(true)
        setCategory(`category=${e.target.value}`)
        if(e.target.value === "None"){
            setCategory("")
        }
    }
    return (
      <main className="container">
        <div className="p-4 p-md-5 border rounded-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <hr className="my-4" />
          <select name="category" id="category" onChange={handleCat}>
            <option value="None">None</option>
            {categories.map((category) => (
              <option value={category._id}>{category.category}</option>
            ))}
          </select>
        </div>
        <Posts
          search={search}
          category={category}
          loading={loading}
          setLoading={setLoading}
        />
      </main>
    );
}

export default Main