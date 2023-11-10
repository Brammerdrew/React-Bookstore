import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAuthor, chooseGenre, chooseHardcover, chooseISBN, chooseLength, choosePrice, chooseTitle} from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      data.hardcover = !!data.hardcover
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
    } else {
        let test=data.hardcover
        dispatch(chooseAuthor(data.author))
        dispatch(chooseGenre(data.genre))
        dispatch(chooseHardcover(!!test))
        dispatch(chooseISBN(data.isbn))
        dispatch(chooseLength(data.length))
        dispatch(choosePrice(data.price))
        dispatch(chooseTitle(data.title))


      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <Input {...register('title')} name='title' placeholder="title" />
          </div>
          <div>
              <label htmlFor="author">Author</label>
              <Input {...register('author')} name='author' placeholder="author" />
          </div>
          <div>
              <label htmlFor="genre">Genre</label>
              <Input {...register('genre')} name='genre' placeholder="genre" />
          </div>
          <div>
              <label htmlFor="isbn">ISBN</label>
              <Input {...register('isbn')} name='isbn' placeholder="isbn" />
          </div>
          <div>
              <label htmlFor="length">Length</label>
              <Input {...register('length')} name='length' placeholder="length" />
          </div>
          <div>
              <label htmlFor="price">Price</label>
              <Input {...register('price')} name='price' placeholder="price" />
          </div>
          <div>
              <label htmlFor="hardcover">Hardcover</label>
              <Input {...register('hardcover')} name='hardcover' placeholder="hardcover" />
          </div>

            <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
            </Button>
      </form>
    </div>
  )
}

export default BookForm