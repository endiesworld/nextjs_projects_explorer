import React from 'react';
import style from './Spinner.module.css';

function UserCard({ name, email }) {
    return (
        <div className={style.wrapper}> 
            <article className={style.user_card}>
            <p className="name">{name}</p>
            <p className="email">{email}</p>
            </article>
        </div>
        
    );
}

export default UserCard;