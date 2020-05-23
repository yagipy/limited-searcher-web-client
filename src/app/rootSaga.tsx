import { all } from "redux-saga/effects"

export function* rootSaga() {
  yield all([
    fetchUsers(),
    fetchUrls()
  ]);
}

export function* fetchUsers() {
  yield console.log("fetchUsers");
}

export function* fetchUrls() {
  yield console.log("fetchUrls");
}
