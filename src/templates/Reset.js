import React, { useState, useCallback } from "react";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { resetPassword } from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  // useCallback関数でメモ化することによってパフォーマンスが上がる
  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">パスワードのリセット</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton
          label={"パスワードリセット"}
          onClick={() => dispatch(resetPassword(email))}
        />
        <div className="module-spacer--small" />
        <p className="u-text-small" onClick={() => dispatch(push("/signin"))}>
          ログイン画面に戻る
        </p>
      </div>
    </div>
  );
};

export default Reset;
