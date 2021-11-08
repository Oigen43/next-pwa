import styles from '../styles/Home.module.css';

import Video from "../components/Video";

const videos = [
  { title: 'Best video 1', description: `It's the best video that I ever seen`, url: 'https://v77.tiktokcdn.com/d96fc9dec3b55929cfc8a796fb476408/6189d639/video/tos/useast2a/tos-useast2a-ve-0068c002/851ae94520ff4b5e91ec329776811763/?a=1233&br=1586&bt=793&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~2eUg4kag3&l=2021110819593001019105701739381CC2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M251ZDk6ZnZlODMzNzczM0ApNTo4Njw8ODw0NzM3aTc5ZGc1bjZpcjQwZy5gLS1kMTZzcy4wXzVjYS8xM14vX2AwLmE6Yw%3D%3D&vl=&vr=' },
  { title: 'Best video 2 ', description: 'It\'s the best video that I ever seen', url: 'https://v77.tiktokcdn.com/2c60acadf0320f6f41080a421c77507a/6189d6ad/video/tos/useast2a/tos-useast2a-pve-0068/40ea3d48bb9249c1915ee597e2556bd7/?a=1233&br=1034&bt=517&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~2eUg4kag3&l=20211108200211010190209095493A6592&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl3bTo6Zmk4ODMzNzczM0ApODU2ODpkOGQ3N2VoODloNWdkaDZfcjQwajFgLS1kMTZzc14zMV5jYzYvLmEtNjAvNTE6Yw%3D%3D&vl=&vr=' },
  { title: 'Best video 3', description: 'It\'s the best video that I ever seen', url: 'https://v77.tiktokcdn.com/1019237a00db2a21a3b832693e3f8cc8/6189d6b6/video/tos/useast2a/tos-useast2a-pve-0068/cfa55b59ce884114ba41a321a24971cc/?a=1233&br=930&bt=465&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~2eUg4kag3&l=2021110820021701018803222319387749&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M295dTY6ZjxxODMzNzczM0ApOmZmaWk1MzxpNzNmOjU6ZWdnZDRmcjRfZGxgLS1kMTZzc2E0X2NgLTYvXmMxNl8zNC86Yw%3D%3D&vl=&vr=' },
];

export default function Home() {
  return (
    <article className={styles.scroller}>
      {videos.map((v) => (
        <Video
          key={v.url}
          title={v.title}
          description={v.description}
          url={v.url}
        />
      ))}
    </article>
  )
}
