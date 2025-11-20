import "../styles/styles.css";
import profileIcon from "../assets/profile.png";
import { useEffect, useState } from "react";
export default function ProfileHeader() {
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        fetch(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch profile");
                return res.json();
            })
            .then(data => setUser(data))
            .catch(err => console.error(err));
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <div className="pro-header">
            <h1 className="profile-title">ExpenseTracker</h1>
            <div className="nav-links">
                <img src={profileIcon} alt="Profile" className="profile-icon" onClick={() => setIsModalOpen(true)} />

            </div>
            {isModalOpen && user && (
                <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
                    <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={`${API_URL}/${user.profilePhoto}`}
                            alt={user.name}
                            className="modal-profile-photo"
                        />
                        <h2>{user.name}</h2>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>

            )}
        </div>
    );

}