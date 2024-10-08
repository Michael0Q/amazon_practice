import styles from './header.module.css'
import Link from "next/link";
import Image from 'next/image'
import { SiAmazonprime } from "react-icons/si";
import { AiFillEnvironment } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiPrimevideo } from 'react-icons/si';
import { CgProfile } from "react-icons/cg";
import amazon_logo from '../../../../public/images/header/amazon_prime.png'

const Header = () => {
    return(
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={`${styles.icon} ${styles.link}`}>
                        <Link href='/home'>
                            <Image src={amazon_logo} width={145} height={48}></Image>
                        </Link>
                    </div>
                    <div className={`${styles.address} ${styles.link}`}>
                        <span className={styles.address_span}>
                            <Link href='/' className={styles.address_a}>
                                <AiFillEnvironment className={styles.address_svg} color={'#d6d6d6'}/>
                                <div className={styles.address_p_to_num}>
                                    <span className={styles.address_to}>お届け先 佐藤太郎さん</span>
                                    <span className={styles.address_num}>100-0000</span>&zwnj;
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.search}>
                        <form className={styles.search_form}>
                            <div className={styles.search_left}>
                                <div className={styles.dropdown_card}>
                                    <div className={styles.dropdown_card_label}>
                                        <div className={styles.facade}>
                                            <span className={styles.facade_label}>PrimeVideo</span>
                                            <span className={styles.facade_icon}>▼</span>
                                        </div>
                                    </div>
                                    <select  className={styles.search_dropdown}>

                                    </select>   
                                </div>
                            </div>
                            <div className={styles.search_middle}>
                                <div className={styles.srarch_field}>
                                    <input type='text' placeholder='検索 Amazon.co.jp' className={styles.search_input}></input>
                                </div>
                            </div>
                            <div className={styles.search_right}>
                                <div className={styles.serach_submit}>
                                    <span className={styles.search_span}>
                                        <IoMdSearch size={'5em'} className={styles.search_icon} />
                                        <input type='submit' value='検索' className={styles.submit_input} >  
                                    </input>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.nav_tools}>
                        <Link href={'/home'} className={`${styles.right_country} ${styles.link}`}>
                            <span className={styles.country_span}>
                                <span className={styles.country_infos}>
                                    <span className='flag-icon flag-icon-jp'></span>
                                    <div>JP</div>
                                    <span className={styles.re_triangle}>▼</span>
                                </span>
                            </span>
                        </Link>
                        <Link href={'/'} className={`${styles.acount_list} ${styles.link}`}>
                            <div className={styles.acount_infos}>
                                <span className={styles.acount_name}>佐藤さん</span>
                            </div>
                            <span className={styles.account_label}>
                                アカウント&リスト
                                <span className={styles.re_triangle}>▼</span>
                            </span>
                        </Link>
                        <Link href={'/'} className={`${styles.returnItems} ${styles.link}`}>
                            <div className={styles.acount_infos}>
                                <span className={styles.acount_name}>返品もこちら</span>
                            </div>
                            <span className={styles.account_label}>
                                注文履歴
                            </span>
                        </Link>
                        <Link href={'/'} className={`${styles.cart_area} ${styles.link}`}>
                            <div className={styles.cart_count_container}>
                                {/* <span className={styles.cart_count}>
                                    5
                                </span> */}
                                <LiaCartArrowDownSolid size={'5em'} className={styles.cart_icon}/>
                            </div>
                            <div className={styles.cart_text_container}>
                                <span className={styles.cart_label}>
                                    カート
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.subheader}>
                <div className={styles.subheader_left}>
                    <Link href={'/'} className={`${styles.subheader_left_a} ${styles.link}`}>
                        <GiHamburgerMenu  size={'1.5em'} color='white'/>
                        <span className={styles.subheader_left_label}>すべて</span>
                    </Link>
                </div>
                <div className={styles.subheader_middle}>
                    <div className={styles.middle_shop_container}>
                        <div className={styles.shop_labels}>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                Amazonポイント
                                <span>:</span>
                                &nbsp;<span color={'#f90'}>0</span>
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                ヘルプ
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a}  ${styles.link}`} style={{paddingBottom: '11px'}}>
                                Prime&nbsp;Video
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a}  ${styles.link}`}>
                                ランキング
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                食品＆飲料
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                再び購入
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                新着商品
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                ネットスーパー
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                ギフトカード
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                DIY・工具
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                Amazonビジネス
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                Amazonファッション
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                本
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                Kindle本
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                Amazonで売る
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                閲覧履歴
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                おもちゃ・ホビー            
                            </Link>
                            <Link href={'/'} className={`${styles.shop_a} ${styles.link}`}>
                                マイストア
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <header className={styles.primevideo_haeder}>
                <div className={styles.primevideo_menus}>
                    <Link href='/home' className={styles.primevideo_logo_a}>
                        <Image src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" width={96} height={18}></Image>
                    </Link>
                    <div>
                        <ol className={styles.primevideo_orderedList}>
                            <li className={styles.primevideo_li}>
                                <label className={styles.primevideo_label}>
                                    <Link href={'/home'} className={styles.primevideo_a}>ホーム</Link>
                                    <span className={`${styles.re_triangle} ${styles.re_triangle_hover}`}>▼</span>
                                </label>
                            </li>
                            <li className={styles.primevideo_li}>
                                <label className={styles.primevideo_label}>
                                    <Link href={'/store'} className={styles.primevideo_a}>ストア</Link>
                                    <span className={styles.re_triangle}>▼</span>
                                </label>
                            </li>
                            <li className={styles.primevideo_li}>
                                <label className={styles.primevideo_label}>
                                    <Link href={'/live'} className={styles.primevideo_a}>ライブTV</Link>
                                </label>
                            </li>
                            <li className={styles.primevideo_li}>
                                <label className={styles.primevideo_label}>
                                    <Link href={'/category'} className={styles.primevideo_a}>カテゴリー</Link>
                                    <span className={styles.re_triangle}>▼</span>
                                </label>
                            </li>
                            <li className={styles.primevideo_li}>
                                <label className={styles.primevideo_label}>
                                    <Link href={'/myitem'} className={styles.primevideo_a}>マイアイテム</Link>
                                    <span className={styles.re_triangle}>▼</span>
                                </label>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <CgProfile size={'2em'} color={'#aaa'} className={styles.primevideo_profile}/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;