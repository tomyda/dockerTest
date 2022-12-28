migrate((db) => {
  const collection = new Collection({
    "id": "xzz2qq2u3cnh9aw",
    "created": "2022-12-27 04:53:30.966Z",
    "updated": "2022-12-27 04:53:30.966Z",
    "name": "card",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gds1xcdo",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ruqdrjg4",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 1,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4dlsy8st",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "h41agvcn",
        "name": "deck",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "oay3f8z54y1oq4q",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("xzz2qq2u3cnh9aw");

  return dao.deleteCollection(collection);
})
