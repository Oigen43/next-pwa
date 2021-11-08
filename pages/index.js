import styles from '../styles/Home.module.css';

import Video from "../components/Video";

const videos = [
  { title: 'Best video 1', description: `It's the best video that I ever seen`, url: 'https://v77.tiktokcdn.com/ec345ec1addaf9112b203ad808437317/6189702f/video/tos/useast2a/tos-useast2a-pve-0068/9fc9db163876471eaf7cd14a13110de0/?a=1233&br=2446&bt=1223&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~2eUg4kag3&l=202111081244550101890741640912D246&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2x1OWc6ZnJpNzMzNzczM0ApNjtnNjtlN2VmNzY5OWZkO2cxMmsvcjRfNWpgLS1kMTZzc18xMy0tLy81MS1jNWE0MzM6Yw%3D%3D&vl=&vr=' },
  { title: 'Best video 2 ', description: 'It\'s the best video that I ever seen', url: 'https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c002/b843c476a917465382a7602b5863745b/?VExpiration=1636397174&VSignature=5bH-bseJIc7eMXPGUaggAw&a=1233&br=2880&bt=1440&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~2eUg4kag3&l=2021110812460401018903702230120843&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajd2NTU6Zm1rODMzNzczM0ApM2VkOWU7ZDw4N2RmPDQ8NGdjXmIucjQwMWNgLS1kMTZzc2M1MTEzXi4xNmAyLWNjMzM6Yw%3D%3D&vl=&vr=' },
  { title: 'Best video 3', description: 'It\'s the best video that I ever seen', url: 'https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c003/28b21c2d5a104f4ebe479600d87c4241/?VExpiration=1636398711&VSignature=2GamtECVObVyP6azUq2yzQ&a=1233&br=1586&bt=793&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98Z~2eUg4kag3&l=202111081311360101902180853B147837&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anZ5cWg6ZnI2OTMzNzczM0ApNjUzPGRpOjw7Nzw1NGhoM2cycmUtcjRvMDBgLS1kMTZzc2E1LTNiLS9eLTEvXzJhYmI6Yw%3D%3D&vl=&vr=' },
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
