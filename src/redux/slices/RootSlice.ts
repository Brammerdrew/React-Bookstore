import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "title",
        author: "author",
        genre: "genre",
        price: "price",
        isbn: "isbn",
        hardcover: "hardcover",
        length: "length",
        
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseISBN: (state, action) => { state.isbn = action.payload },
        chooseHardcover: (state, action) => { state.hardcover = action.payload },
        chooseLength: (state, action) => { state.length = action.payload },
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAuthor, chooseGenre, chooseHardcover, chooseISBN, chooseLength, choosePrice, chooseTitle} = rootSlice.actions