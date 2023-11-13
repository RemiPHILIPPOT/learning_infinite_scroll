import {useState, useEffect, useRef} from 'react'
import spinner from "../assets/spinner.svg"
import usePhotos from "../hooks/usePhotos"

export default function List() {

    const [query, setQuery] = useState("random")
    const [pageNumber, setPageNumber] = useState(1)

    const photosApiData = usePhotos(query, pageNumber)
    
    return (
        <>
            <h1 className='text-4xl'>Unsplash Clone</h1>
            <form>
                <label className='block mb-4' htmlFor="search">Look for images...</label>
                <input type="text" placeholder='look for something...' className='block w-full mb-14 text-slate-800 py-3 px-2 text-md outline-gray-500 rounded border border-slate-400'/>
            </form>
        </>
    )
}
