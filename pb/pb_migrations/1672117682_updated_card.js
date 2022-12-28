migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzz2qq2u3cnh9aw")

  collection.name = "cards"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzz2qq2u3cnh9aw")

  collection.name = "card"

  return dao.saveCollection(collection)
})
