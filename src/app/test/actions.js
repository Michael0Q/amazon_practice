'use server' //サーバーコンポーネントに付与する。サーバーコンポーネントとは？https://blog.to-ko-s.com/react-server-components/#i-2

import { cookies } from 'next/headers'
import { SUPABASE } from "../configure"
import { redirect } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server';


/**
 * 
 * @param {*} formData  //actionにこの関数が渡された場合、自動で引数に渡されるパラメータ。formの値を含む
 * @returns 
 */
export async function getData(formData) {
    try {
        // ``を使うと文字列の中で関数を実行できる
        const tableName = `${formData.get('select')}_mst`  
        //分割代入。よく使う。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        let { data, error } = await SUPABASE //awaitは、続く関数の処理が完了するまで処理を待機する。
        .from(tableName)
        .select();
        //三項演算子　data.length == 0前の式がtrueならnull、falseならdataを代入する
        data = data.length == 0 ? null : data;
        //next.jsAPI　cookieにデータをセットする cookies().set(key, value);
        cookies().set('tableData', data);
        cookies().set('tableName', formData.get('select'));
    } catch (error) {
    }
}

export async function deleteData(tableName, ids){
    //forEach => for()と同じ。配列に対して使用できる。配列の1番目から順に関数の引数に渡されて処理が実行される。
    //ES6では関数に関数を渡す記述が頻出。コールバック関数という。
    //https://qiita.com/nakajima417/items/4d0c2d46ff82351549e6#:~:text=2023%2D09%2D26-,%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E9%96%A2%E6%95%B0%E3%81%A8%E3%81%AF,%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82
    ids.forEach(element => {
        SUPABASE
        .from(`${tableName}_mst`)
        .delete()
        .eq('id', parseInt(element)).then(console.log); 
        // thenは非同期関数に対して使用できる。awaitとほぼ同じ。処理完了後にthenの中に入った関数が実行される。
        //上記は省略記法他にも下記のように記述できる。
        //.eq('id', parseInt(element)).then(e => console.log(e)); 
        //.eq('id', parseInt(element)).then((e) => {console.log(e)}); 
    });
}

export async function getHeader(formData){
    try{
        const tableName = `${formData.get('select')}_mst`
        const {data = [{}], error} = SUPABASE
        .from(tableName)
        .select('*')
        .range(0, 1);
        return Object.getOwnPropertyNames(data[0]);
    }catch(error){

    }
};

export async function insertData(tableName, insertData) {
    try {
        const {data, error} = await SUPABASE
        .from(`${tableName}_mst`)
        .insert(insertData);
    } catch (error) {
    }
}

export async function getCookie(key) {
    try{
        //?はnull制御。cookies().get(key)がnull/undifinedの時、にvalueを実行してエラーが出るのを防ぐ。
            return cookies().get(key)?.value
    }catch(error){

    }    
}

export async function getPicture(){
    try{
        const {data, error}= await SUPABASE.from("Image_mst").select('link');
        return data[0];
    }catch{

    }
}