import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/itemSlice";
import "../styles/styles.css";

export default function AddItem() {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const success = useSelector((state) => state.items.success);
    const error = useSelector((state) => state.items.error);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("itemImage", image);

        dispatch(addItem(formData));
    };

    return (
        <div className="form-container">
            <h2>Add Item</h2>
            <form className="form-box" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />

                <label>Price:</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} />

                <label>Description:</label>
                <textarea onChange={(e) => setDescription(e.target.value)} />

                <label>Image</label>
                <input
                    type="file"
                    name="itemImage"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button type="submit" className="submit-btn">Register</button>

                {success && <p className="success-msg">{success}</p>}
                {error && <p className="error-msg">{error}</p>}
            </form>
        </div>
    );
}
