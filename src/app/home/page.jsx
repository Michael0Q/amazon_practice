import Header from '../components/header/Header'
import styles from './home.module.css'
import Image from 'next/image'
import wistoria from './images/wistoria.jpg'
import sikkaku from './images/isekaisikkaku.png'
import hiroaka from './images/hiroaka.jpg'
import suicide from './images/suicide.png'
import onepiece from './images/onepiece.webp'
import tensura from './images/tensura.webp'
import nigewaka from './images/nigewaka.jpg'

const page = () => {
    //bodyは上位のコンポーネント内（app/layout.js）で宣言されてるので必要なし
    //背景色はdivをうまく使って変えてみて
    return(
        <body>
            <Header></Header>
            <div className={styles.haikei}>
                <div>//ホームTOP_オススメ10選
                    <ul className={styles.ul_list}>
                        <li>
                            <article>
                                <button>
                                    <div>再生</div>
                                </button>
                                <a href={sikkaku}><Image src={sikkaku} className={styles.imgTop} alt=''/></a>
                                <section>
                                    <h2 className={styles.subtitle}>作品タイトル</h2>
                                    <div>
                                        <div>▷</div>
                                        <label>☑</label>
                                        <label>i</label>
                                    </div>
                                </section>
                            </article>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className={styles.subtitle}>あなたが興味のありそうな番組</p>
                    <ul className={styles.ul_list}>
                        <li>
                            <article>
                               <a href={hiroaka}><Image src={hiroaka} className={styles.imgmenu} alt=''/></a>
                            </article>
                        </li>
                        <li>
                            <article>
                            <a href={suicide}><Image src={suicide} className={styles.imgmenu} alt=''/></a>
                            </article>
                        </li>
                        <li>
                            <article>
                            <a href={wistoria}><Image src={wistoria} className={styles.imgmenu} alt=''/></a>
                            </article>
                        </li>
                        <li>
                            <article>
                            <a href={wistoria}><Image src={wistoria} className={styles.imgmenu} alt=''/></a>
                            </article>
                        </li>
                        <li>
                            <article>
                            <a href={wistoria}><Image src={wistoria} className={styles.imgmenu} alt=''/></a>
                            </article>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className={styles.subtitle}>新着</p>
                    <ul className={styles.ul_list}>
                        <li>
                            <article className={styles.bigTitle}>
                               <a href=' '></a>
                            </article>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.subtitle}>高評価作品</p>
                    <ul className={styles.ul_list}>
                        <li>
                            <article className={styles.bigTitle}>
                               <a href=' '></a>
                            </article>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.subtitle}>続けて観る</p>
                    <ul className={styles.ul_list}>
                        <li>
                            <article className={styles.bigTitle}>
                               <a href=' '></a>
                            </article>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.subtitle}>人気映画</p>
                    <ul className={styles.ul_list}>
                        <li>
                            <article className={styles.bigTitle}>
                               <a href=' '></a>
                            </article>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.subtitle}>人気急上昇中のTV番組</p>
                    <ul className={styles.ul_list}>
                        <li>
                            <article className={styles.bigTitle}>
                               <a href=' '></a>
                            </article>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.subtitle}>トップ10（日本）</p>
                    <ul className={styles.ul_list}>
                        <li>
                            <article className={styles.bigTitle}>
                                <sction>
                                    //作品タイトル等
                                </sction>
                                <a href=' '></a>
                            </article>
                        </li>
                    </ul>
                </div>
                <div>トップ10（日本）_リスト
                    <ul className={styles.ul_list}>
                        <li date-index="1">
                            <article>
                                <button>
                                    <div>1</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="2">
                            <article>
                                <button>
                                    <div>2</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="3">
                            <article>
                                <button>
                                    <div>3</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="4">
                            <article>
                                <button>
                                    <div>4</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="5">
                            <article>
                                <button>
                                    <div>5</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="6">
                            <article>
                                <button>
                                    <div>6</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="7">
                            <article>
                                <button>
                                    <div>7</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="8">
                            <article>
                                <button>
                                    <div>8</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="9">
                            <article>
                                <button>
                                    <div>9</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                        <li date-index="10">
                            <article>
                                <button>
                                    <div>10</div>
                                    <span></span>
                                </button>
                            </article>
                        </li>
                    </ul>  
                </div>
            </div>
        </body>
        
    )
}

export default page