import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import ProfileHeader from "./ProfileHeader";

export default function Dashboard() {
    const navigate = useNavigate();

   

    return (
        <div className="dashboard-page">
            <ProfileHeader />

            <div className="dashboard-container">
                <aside className="sidebar">
                    <h2>Dashboard</h2>
                    <ul>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Expenses</a></li>
                        <li><a href="#">Reports</a></li>
                        <li>
                            {/* <button onClick={handleLogout} className="logout-btn">
                                Logout
                            </button> */}
                        </li>
                    </ul>
                </aside>

                <main className="dashboard-content">
                    <h1>Welcome to Expense Tracker</h1>
                    <p>Here you can manage your expenses, view reports, and update your profile.</p>
                </main>
            </div>
        </div>
    );
}
