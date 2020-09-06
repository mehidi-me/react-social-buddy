import React, { useEffect, useState } from 'react';
import PostComment from '../PostComment/PostComment';

const UserImage = () => {

    // random user api
    const [user, setUser] = useState([]);

    useEffect(() => {
        const url = 'https://randomuser.me/api/'
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data.results))

    }, [])
    return (
        <div>
            {
                user.map(u => <PostComment
                    fname={u.name.first}
                    lname={u.name.last}
                    email={u.email}
                    phone={u.phone}
                    image={u.picture.large}
                >
                </PostComment>)
            }
        </div>
    );
};

export default UserImage;