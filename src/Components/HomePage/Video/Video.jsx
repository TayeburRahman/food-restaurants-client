import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import styles from './Video.module.css';

const Video = () => {
    const [toggler, setToggler] = useState(false);

    return (
        <div className={`d-flex ${styles.videoWrapper}`}>
            <button className={styles.videoBtn} onClick={() => setToggler(!toggler)}>
                <FontAwesomeIcon className={styles.faPlay} icon={faPlay} />
            </button>
            <h5 className={`my-auto ms-3 ${styles.videoTitle}`}>Watch Our Story</h5>
            <FsLightbox
                toggler={toggler}
                sources={[
                    'https://www.youtube.com/watch?v=mguspoRXcRM',
                ]}
            />
        </div>
    );
}

export default Video;