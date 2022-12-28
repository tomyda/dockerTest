migrate((db) => {
  const collection = new Collection({
    "id": "oay3f8z54y1oq4q",
    "created": "2022-12-27 04:53:23.224Z",
    "updated": "2022-12-27 04:53:23.224Z",
    "name": "deck",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v44sfbru",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oay3f8z54y1oq4q");

  return dao.deleteCollection(collection);
})
