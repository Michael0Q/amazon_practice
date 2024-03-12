import { NextResponse } from "next/server";
import { SUPABASE } from "../../../configure";

//route.jsはNextjsにおいて特別なファイル名。そのパスにリクエストを飛ばすと、メソッドタイプに応じてGET、POSTが実行される
//試しに　「http://localhost:3000/test/api/rowcount」　にアクセスすると、User_mstのカラム数がJSON形式で取得できていることを確認できる。
export const GET = async (request) => {
    const {data, error} = await SUPABASE.from('User_mst').select('*');
    //NextResoponse = NextJsのAPI　Json形式で結果を返す。
    return NextResponse.json({rowCount : data.length});
};

export const POST = async (request) => {
    //...何らかの処理
    return NextResponse.json({somedata : 'some'});
};

