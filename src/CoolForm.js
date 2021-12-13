import React, { useState, useCallback } from 'react';

import CoolInput from './CoolInput';

const profileApi = 'https://api.github.com/users/';

export default function CoolForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState(null);
    
    const onSubmit = useCallback(
        async (event) => {
            event.preventDefault();

            const response = await fetch(`${profileApi}${username}`);

            if (response.ok) {
                const json = await response.json();
                setProfile(json);
            } else {
                alert('response not ok.');
                console.log(response);
            }
        }
    , [username, password, setProfile]);

    if (profile) {
        return (
            <div>
                <div>You're logged in as {profile.login}</div>
                <img src={profile.avatar_url} alt="User profile picture"/>
            </div>
        )
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>Login</legend>
                <CoolInput
                    labelText="Username"
                    id="username"
                    name="username"
                    type="text"
                    onChange={event => setUsername(event.target.value)}/>
                <CoolInput
                    labelText="Password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={event => setPassword(event.target.value)}/>
                <button type="submit">Submit form</button>
            </fieldset>
        </form>
    );
}