import styles from './test.module.css'
import { cookies } from "next/headers";
import { getData, deleteData, insertData, getCookie } from './actions';
import SupabaseDataTable from './SupabaseDataTable';
import Image from 'next/image'
import { SUPABASE } from '../configure';


//アロー関数　() => {}
//JavascriptのES6でfunction記法からアロー構文を推奨するようになった。https://liginc.co.jp/277527
const Page = async () => {

    //コンポーネント内にもActionは書ける
    const getPicture = async () => {
        'use server'
        try{
            const {data, error} = await SUPABASE.from("Image_mst").select('link');
            console.log(data[0].link)
            return data[0].link.replace(/^'|'$/g, '');
        }catch{

        }
    }

    const src = await getPicture();

    //APIハンドラー　chcheオプションは、Nextjsは可能な限りキャッシュを再利用するため、それを無効化するためのオプション。
    const response = await (await fetch(`http://localhost:3000/test/api/rowcount`, { cache: 'no-store' })).json();


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
                <span>{`データ数: ${response.rowCount}  `}</span>
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
            <div>
                <Image height={100} width={100} loading='lazy' src={src} />
            </div>
        </>
    )
}

export default Page