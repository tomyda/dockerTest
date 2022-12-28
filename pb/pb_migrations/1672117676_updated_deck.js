migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oay3f8z54y1oq4q")

  collection.name = "decks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oay3f8z54y1oq4q")

  collection.name = "deck"

  return dao.saveCollection(collection)
})
