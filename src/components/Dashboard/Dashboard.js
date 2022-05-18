import { useEffect, useState } from "react";
import * as dashboardAPI from '../../utilities/dashboard-api';
import './Dashboard.css';

export default function Dashboard() {
    const [names, setNames] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const getNames = async () => {
            const newNames = await dashboardAPI.getAll('cow');
            setNames(newNames);
        };
        getNames();
    });

    function handleChange(evt) {
        setName(evt.target.value);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const newName = await dashboardAPI.createDashboard(name);
        setName('');
    }

    return (
        <div id='dashboard'>
            <img
                src="https://i.imgur.com/4fpQ798.png"
                alt="Farm Animal"
                className="game-details-animal"
			></img>
            <div id='name-container'>
                <form className="dashboard-form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={handleChange} required />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}