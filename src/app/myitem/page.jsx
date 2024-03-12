import Image from 'next/image'
import Header from '../components/header/Header'
import styles from './myItem.module.css'
const page = () => {
    return(  
        <div>
            <header>
            <Header></Header>
            </header>
            <main className={styles.main}>
            <span><p>ウォッチリスト – 映画</p></span>
            <span className="section">すべて見る</span>
            <span><p>マイサブスクリプション</p></span>
            <span className="section">登録チャンネルの管理</span>
            </main>
        </div>
    )
}

export default page