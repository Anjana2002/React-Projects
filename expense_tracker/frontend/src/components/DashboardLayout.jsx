import "../styles/styles.css";
import ProfileHeader from "./ProfileHeader";
import { Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-page">
            <ProfileHeader />

            <div className="dashboard-container">
                <aside className="sidebar">
                    {/* <h2>Dashboard</h2> */}
                    <ul>
                        <li>
                            <button
                                className="sidebar-btn"
                                onClick={() => navigate("/dashboard/profile")}
                            >
                                Profile
                            </button>
                        </li>
                        <li>
                            <button
                                className="sidebar-btn"
                                onClick={() => navigate("/dashboard")}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button className="sidebar-btn">Expenses</button>
                        </li>
                        <li>
                            <button className="sidebar-btn">Reports</button>
                        </li>
                    </ul>
                </aside>



                <main className="dashboard-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
