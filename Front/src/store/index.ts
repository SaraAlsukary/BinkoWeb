import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/authSlice";
import books from "./booksSlice/booksSlice";
import language from "./languageSlice/languageSlice";
import theme from "./themeSlice/themeSlice";
import chapters from "./chaptersSlice/chaptersSlice";
import comments from "./commentsSlice/commentsSlice";

// const rootPersistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["cart", "auth"],
// };
const rootPersistConfig = {
    key: "root",
    storage,
    whitelist: ["language", "theme"],
};

// const authPersistConfig = {
//     key: "language",
//     storage,
//     language: ["user", "accessToken"],
// };

// const cartPersistConfig = {
//     key: "cart",
//     storage,
//     whitelist: ["items"],
// };

// const rootReducer = combineReducers({
//     auth: persistReducer(authPersistConfig, auth),
//     categories,
//     products,
//     cart: persistReducer(cartPersistConfig, cart),
//     wishlist: wishlist,
//     orders,
// });

const rootReducer = combineReducers({
    language: language,
    theme: theme,
    auth,
    books,
    chapters,
    comments
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
