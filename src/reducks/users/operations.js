import { db, auth, FirebaseTimestamp } from "../../firebase/index";
import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";

// 認証リッスン関数
export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
              })
            );
          });
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    // バリデーション
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }

    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;

      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
              })
            );

            dispatch(push("/"));
          });
      }
    });
  };
};

export const signUp = (username, email, password, comfirmPassword) => {
  return async (dispatch) => {
    // バリデーション
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      comfirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }

    if (password !== comfirmPassword) {
      alert("パスワードが一致しません");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            uid: uid,
            username: username,
            email: email,
            role: "customer",
            created_at: timestamp,
            updated_at: timestamp,
          };

          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/"));
            });
        }
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("signin"));
    });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("必須項目が未入力です");
      return false;
    } else {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert(
            "入力されたEメールにパスワードリセット用のメールが送信されました"
          );
          dispatch(push("/signin"));
        })
        .catch(() => {
          alert("パスワードリセットに失敗しました");
        });
    }
  };
};
