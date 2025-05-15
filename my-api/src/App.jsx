import { useState } from 'react';
import axios from 'axios';
import './App.css'

export const App = () => {
  const [userList, setUserList] = useState([]);
  const [isLoagding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時にローディングフラグon、エラーフラグoff
    setIsLoading(true);
    setIsError(false);

    // APIの実行
    axios
      .get('http://localhost/php/api/users.php')
      .then(result => {
        // 苗字と名前を結合するように変換
        const users = result.data.map(user => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age
        }));
        // ユーザー一覧Stateを更新
        setUserList(users);
      })
      // エラーの場合はエラーフラグon
      .catch(() => {
        setIsError(true);
      })
      // 処理完了後はローディングフラグoff
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <div>
        <button onClick={onClickFetchUser}>ユーザー取得</button>
        {/* エラーの場合はエラーメッセージを表示 */}
        {isError && <p style={{ color: "red"}}>エラーが発生しました</p>}
        {/* ローディング中は表示を切り替える */}
        {isLoagding ? (
          <p>データ取得中です</p>
        ) : (
          userList.map(user => (
            <p key={user.id}>{`${user.id} : ${user.name} (${user.age}歳)`}</p>
          ))
        )}
      </div>
    </>
  );
};

export default App
