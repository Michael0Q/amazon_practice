'use client' //クライアントコンポーネントにつける。next.jsのデフォルトはサーバーコンポーネントなので、これは明示的につける必要がある。

/*
reactのライブラリ（クライアントコンポーネントでしか使えない）
*/
import React, { useRef, useState } from "react"
/*
Reactは元々クライアントサイドでしか使えないライブラリ。それをNextjsがサーバーサイドまで拡張したイメージ。
クライアントサイドでできること
・動的なUIの変化
・イベントハンドラーの使用
サーバーサイドでできること
・データベースとのやり取り
・ルーティング
*/

import styles from './test.module.css';
import {insertData, deleteData} from './actions';

const SupabaseDataTable = ({tableData, tableName}) => {
    //クッキーを全て削除する　俺も何やってるかわからん。
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    const [checkedRowID, setCheckedRowID] = useState([]); //State(状態)の管理。Reactの醍醐味　
    //useStateのドキュメントを読んだだけでは意味がわからないと思うので、公式のチュートリアルをやってみてください。
    //https://ja.legacy.reactjs.org/tutorial/tutorial.html
    const [canInsert, setCanInsert] = useState(false);
    const insertRowRef = useRef(null);
    const headerRef = useRef(null);

    const handleDeleteCB = (e) => { // e = this と思っていい
        if (e.target.checked) {
            setCheckedRowID([...checkedRowID, e.target.id]) //...はスプレッド構文　https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        }else{
            setCheckedRowID(checkedRowID.filter((element) => element != e.target.id)); // filterはtureの値だけで構成されたコレクションを返す
        }
    };

    const handleInsertInput = () => {
        //Reactライブラリ、useRefの代表的な使い方。document.getElementById('something').querySelectorAll('input')とほぼ同義
        const inputs = insertRowRef.current.querySelectorAll('input');
        //mapはコレクション要素に変更を加えた新たなコレクションを返す。
        const values = Array.from(inputs).map(input => input.value);
        if(values.includes('')){
            setCanInsert(false);
        }else{
            setCanInsert(true);
        }
    }

    const commit = () => {
        deleteData(tableName, checkedRowID);
        const tdInputs = insertRowRef.current.querySelectorAll('input');
        const values = Array.from(tdInputs).map(input => input.value);
        const thInputs = headerRef.current.getElementsByClassName("header");
        const keys = Array.from(thInputs).map(input => input.innerText);
        let data = {};

        for(let i = 0; i < keys.length; i++){
            data[keys[i]] = values[i];
        }

        insertData(tableName, data);
    }
    let dataColumns = 0;
    return(
        <>
            <button className={styles.commitButton} onClick={commit} disabled={!canInsert && checkedRowID.length == 0}>コミットする</button>
                <table>
                    <thead>
                        {/* useRefを要素のref属性に渡すと、headerRef.currentでその要素を参照できる。 */}
                        <tr ref={headerRef}>
                            {/* JSX記法の中では　{}で覆うことで式を挿入できる。
                                下記のmap構文は、コレクション要素分のタグを生成したいときによく使われる記法。
                            */}
                            {   
                                Object.getOwnPropertyNames(tableData[0]).map((e) => {
                                return <th className={`header ${styles.th}`} key={e}>{e}</th>
                            })}
                            {/* javascriptではBoolean以外にfalseとみなされる値がある
                                これをfalseyな値という。下記はtableData != null とほぼ同義
                                https://developer.mozilla.org/ja/docs/Glossary/Falsy
                            */}
                            {tableData && <th className={styles.th}>削除</th>}
                        </tr>
                    </thead>
                    <tbody>
                            {tableData.map((e) => {
                                const dataArr = Object.values(e);
                                dataColumns = dataArr.length;
                                return(
                                    <tr key={e}>
                                        {dataArr.map((data) => {
                                            let isChecked = checkedRowID.includes(e.id.toString());
                                            return(
                                                <td className={`${styles.td} ${isChecked && styles.checkedTd}`} key={`${e}${data}`}>{data}</td>
                                            )
                                        })}
                                        {tableData && 
                                            <td>
                                                <input id={e.id} className={styles.delete} onChange={handleDeleteCB} type='checkbox'></input>
                                            </td>
                                        }
                                    </tr>
                                )
                            })}
                            <tr ref={insertRowRef}>
                                {Array.from({ length: dataColumns }).map((_, i) => (
                                    <td key={i} className={styles.td}>
                                        <input className={styles.insertInputArea} onChange={handleInsertInput} type="text"></input>
                                    </td>
                                ))} 
                            </tr>
                    </tbody>
                </table>
            </>
        )
}

export default SupabaseDataTable