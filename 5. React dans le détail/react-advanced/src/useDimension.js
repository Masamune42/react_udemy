import { useEffect, useState } from "react"


export default function useDimension() {

    const [dimension, setDimension] = useState();

    useEffect(() => {
        window.addEventListener('resize', resizeFunc)

        function resizeFunc() {
            setDimension(window.innerWidth)
        }
        resizeFunc();

        return () => {
            window.removeEventListener('resize', resizeFunc)
        }
    })

    return dimension;
}
