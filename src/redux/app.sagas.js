import { takeLatest, put, all, call } from "redux-saga/effects";
import { deleteTodosaga, addTodosaga, updateTodosaga } from "./app.actions";

export function* onAddTodosaga({ payload }) {
    yield put(addTodosaga(payload));
}

export function* onDeleteTodosaga({ payload: { id } }) {
    yield put(deleteTodosaga(id));
}

export function* onUpdateTodosaga({ payload }) {
    yield put(updateTodosaga(payload));
}

export function* onDelete() {
    yield takeLatest("DELETE_TODO", onDeleteTodosaga);
}

export function* onAdd() {
    yield takeLatest("ADD_TODO", onAddTodosaga);
}
export function* onUpdate() {
    yield takeLatest("UPDATE_TODO", onUpdateTodosaga);
}

export function* todos() {
    yield all([call(onDelete), call(onAdd), call(onUpdate)]);
}