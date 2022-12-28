migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oay3f8z54y1oq4q")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oay3f8z54y1oq4q")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
