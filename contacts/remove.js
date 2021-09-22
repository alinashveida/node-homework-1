const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

const remove = async (contactId) => {
  const contacts = await listContacts()

  const idx = contacts.findIndex((item) => item.id === contactId)

  if (idx === -1) {
    return null
  }

  contacts.splice(idx, 1)

  await updateContacts(contacts)

  return 'Succes remove'
}

module.exports = remove
