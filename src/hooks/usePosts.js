import {useMemo} from "react"


export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [posts, sort])
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter((item) => item.title.toLowerCase().includes(query))
    }, [sortedPosts, query])
    return searchedAndSortedPosts;
}