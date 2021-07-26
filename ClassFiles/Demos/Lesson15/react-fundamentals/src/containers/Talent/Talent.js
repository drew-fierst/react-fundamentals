import React, { useState, useEffect } from 'react';
import styles from './Talent.module.css';
import { toast } from 'react-toastify';

const Talent = (props) => {

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch('https://www.kazoopromotions.com/api/talent').then(resp => {
            return resp.json();
        }).then(data => {
            setArtists(data);
        }).catch(err => {
            toast.error(err.message);
        });
    }, []);
    
    useEffect(() => {
        console.log('second effect is executing')
    })


    const content = artists.map(artist => {
        return <div className={styles.tile} key={artist.id}>
            <img src={'https://www.kazoopromotions.com' + artist.imageUrl} alt={artist.name + ' picture'} />
            <div>
                <span><i className={"fas fa-user"} />{artist.name}</span>
                <span><i className={"fas fa-globe"} />{artist.location}</span>
            </div>
        </div>
    })


    return (
        <div className={styles.container}>
            <h1>Kazoo Promotions. <span>Talent</span></h1>
            <section className={styles.wrapper}>
                {content}
            </section>
        </div>
    );


}

export default Talent;
