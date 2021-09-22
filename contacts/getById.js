//const contacts = require('../db/contacts.json')
const listContacts = require('./listContacts')

const getById = async (contactId) => {
  const contacts = await listContacts()
  const contact = contacts.find(
    (item) => item.id.toString() === contactId.toString(),
  )
  if (!contact) {
    return null
  }

  return contact
}

module.exports = getById
