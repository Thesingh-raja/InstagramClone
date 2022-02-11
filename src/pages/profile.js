import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/header.js';
import UserProfile from '../components/profile';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
    const { username } = useParams();
    console.log(username);
    const [userExists, setUserExists] = useState(undefined);
    const navigateTo= useNavigate();
    
    useEffect(() => {
        async function checkUserExistsToLoadProfile() {
            const doesUserExist = await getUserByUsername(username);
            if (!doesUserExist) {
                navigateTo(ROUTES.NOT_FOUND);
            } else {
                setUserExists(true);
            }
        }
        checkUserExistsToLoadProfile();
    }, [username, navigateTo])
    
    return userExists ? (
        <div className="bg-gray">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                <UserProfile username={username} />
            </div>
        </div>
    ) : null;
}