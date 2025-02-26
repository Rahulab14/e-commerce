import React,{useState} from "react";

function CreateProduct(){
    const [images,setImages] = useState([]);
    const [preImage,setPreImage] = useState([]);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [tags,setTags] = useState("");
    const [price,setPrice] = useState("");
    const [stock,setStock] = useState("");
    const [email,setEmail] = useState("");

    const categoriesData=[
        {
            title:"Electronics"
        },
        {
            title:"Fashion"
        },
        {
            title:"Books"
        },
        {
            title:"Home Appliances"
        },
        
    ]
    const handleImage=(e)=>{

    }
    return (
        <div>
            <h5>Create Product</h5>
            <form action="">
                <div>
                    <label htmlFor="">
                        Email <span className='text-red-500'>*</span>
                    </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required />

                </div>
                <div>
                    <label htmlFor="">
                        Name <span className='text-red-500'>*</span>
                    </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" />

                </div>
                <div>
                    <label htmlFor="">
                        Description <span></span>
                    </label>
                    <input type="description" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder="Enter product description" rows="5" required />

                </div>
                <div>
                    <label htmlFor="">Category <span>*</span></label>
                    <select value={category} onChange={(e)=>setCategory(e.target.value)}required>
                        <option value="">Select an option</option>
                        {categoriesData.map((item,ind)=>(
                            <option value={item.title} key={ind}>{item.title}</option>

                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Tags</label>
                </div>
            </form>
        </div>
    )
}