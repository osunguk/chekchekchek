import key from '../conf/key'

const searchBase = "http://book.interpark.com/api/search.api"+"key="+key
const bestsellerBase = "http://book.interpark.com/api/bestSeller.api"+"key="+key
const recommandBase = "http://book.interpark.com/api/recommend.api"+"key="+key
const newBookBase = "http://book.interpark.com/api/newBook.api"+"key="+key

export {
    searchBase,
    bestsellerBase,
    recommandBase,
    newBookBase
}