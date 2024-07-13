import styles from './header.module.css'

const Header = () => {
    return(
        <div className={styles.flame}>
            <div className={styles.children}>ロゴ</div>
            <div className={styles.children}>住所</div>
            <div className={styles.children}>検索欄</div>
            <div className={styles.children}>国</div>
            <div className={styles.children}>メニュー</div>
            <div className={styles.children}>注文履歴</div>
            <div className={styles.children}>カート</div>
        </div>
    )
}

export default Header;