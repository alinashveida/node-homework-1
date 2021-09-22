const listContacts = require('./listContacts')
const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, '../db/contacts.json')
const { v4 } = require('uuid')

const add = async (data) => {
  const contacts = await listContacts()

  const newContact = { ...data, id: v4() }
  contacts.push(newContact)

  const newContacts = [...contacts, newContact]

  await fs.writeFile(contactsPath, JSON.stringify(newContacts))
  return newContact
}

module.exports = add
