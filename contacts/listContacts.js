const fs = require('fs').promises

// const listContacts = async () => {
//   const data = await fs.readFile('contacts.json', 'utf-8')
//   const contacts = JSON.parse(data)
//   return contacts
// }

const contacts = require('../db/contacts.json')

const listContacts = async () => contacts

module.exports = listContacts
