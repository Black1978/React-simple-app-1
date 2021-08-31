import { useMemo } from "react"

export const usePagesNumbers = (totalpages) => {
   const pagesNumbers = useMemo(() => {
        let pagesArray = []
        for (let i = 0; i < totalpages; i++) {
            pagesArray.push(i + 1)
        }
        return pagesArray
    }, [totalpages])
    return pagesNumbers
}