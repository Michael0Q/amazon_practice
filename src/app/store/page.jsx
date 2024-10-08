import Image from 'next/image'
import Header from '../components/header/Header'
import styles from './storePage.module.css'
import mahoyo from './images/mahoyo_anime.png'

const page = () => {
    console.log(mahoyo)
    return(  
        <div>
            <header>
            <Header></Header>
            </header>
            <main className={styles.main}>
            <h1>ストア</h1>
            <div className={styles.rundomSelect}>
            {/*ランダムに商品とキャンペーン・セールを表示、クリックで各ページへ遷移*/}
                <section>
                    <div className={styles.sumnail1}>
                        <article>
                            <a href={mahoyo}><Image src={mahoyo} className={styles.img} alt=''/></a>
                        </article>
                    </div>
                    <div className={styles.footButton}>
                        こんな感じのやつ→○ ○ ○ ○ ○ ○ ○
                    </div>
                </section>
            </div>
            {/*1話無料のテレビ番組*/}
            <p style={{fontSize: '25px',marginLeft: '5%'}}>
                第1話無料のTV番組&emsp;<a href={mahoyo}>すべて見る {'>'}</a>
            </p>
            <div className={styles.episode1Free}>
                <section>
                    <ul style={{display: 'flex'}}>
                        <div className={styles.freeVideo}>
                            <article>
                                <a href={mahoyo}><Image src={mahoyo} className={styles.list} alt=''/></a>
                            </article>
                        </div>
                        <div className={styles.freeVideo}>
                            <article>
                                <a href={mahoyo}><Image src={mahoyo} className={styles.list} alt=''/></a>
                            </article>    
                        </div> 
                    </ul>     
                </section>
            </div>
            </main>
        </div>
    )
}

export default page