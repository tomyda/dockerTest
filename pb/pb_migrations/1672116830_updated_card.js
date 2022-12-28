migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzz2qq2u3cnh9aw")

  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzz2qq2u3cnh9aw")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
