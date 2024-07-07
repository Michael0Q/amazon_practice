import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{textAlign: "center"}}>
        <div style={{display : "flex", justifyContent: "space-between"}}>
          <Link href='/home'>
            ホーム
          </Link>
          <Link href='/store'>
            ストア
          </Link>
          <Link href='/live_tv'>
            ライブTV
          </Link>
          <Link href='/category'>
            カテゴリー
          </Link>
          <Link href='/myitem'>
            マイアイテム
          </Link>
        </div>
        <h1 style={{color : 'white', marginTop: '30%', fontSize: '50px' }}>ペオスアイティープレーン</h1>
    </main>
  );
}
