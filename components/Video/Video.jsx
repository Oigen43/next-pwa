import {memo, useEffect, useRef, useState} from "react";
import { useInView } from 'react-intersection-observer';

import styles from './Video.module.css';

function Video({ url, title, description }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    if (videoRef) {
      if (inView) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [inView])

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div ref={ref} className={styles.container}>
      <video
        className={styles.player}
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      />
      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default memo(Video);
