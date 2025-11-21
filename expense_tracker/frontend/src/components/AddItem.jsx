import "../styles/styles.css";
export default function AddItem() {
    return(
    <div className="form-container">
        <h2>Add Item</h2>
        <form className="form-box">
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Price:</label>
            <input type="number" name="price" />
            <label>Description:</label>
            <textarea name="description" />
            <label>Image</label>
            <input type="file" name="itemImage"  accept="image/*" />
            <button type="submit" className="submit-btn">Register</button>
        </form>

    </div>
    )
}