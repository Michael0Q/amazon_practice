import styles from './test.module.css'
import { cookies } from "next/headers";
import { getData, deleteData, insertData, getCookie } from './actions';
import SupabaseDataTable from './SupabaseDataTable';


//アロー関数　() => {}
//JavascriptのES6でfunction記法からアロー構文を推奨するようになった。https://liginc.co.jp/277527
const Page = async () => {

    return(
        <>
        {/* actionは従来パスを渡していたが、Reactのformは関数を渡すことができる。 */}
            <form action={getData}>
                <select name='select'>
                    <option>User</option>
                    <option>Content</option>
                    <option>Image</option>
                    <option>Movie</option>
                </select>
                <button>取得する</button>
            </form>
            {/* 
                &&　は 論理積。左辺がtrueの時、右辺を評価する。
                Reactではしばしば下記のような形で、とある変数がtrueの時コンポーネントを表示したいときに使われる。
            */}
            {cookies().get('tableName')?.value && 
                <div className={styles.table1}>
                    <SupabaseDataTable 
                        tableName={cookies().get('tableName')?.value}
                        tableData={cookies().get('tableData')?.value}
                    />
                </div>
            }
        </>
    )
}

export default Page