const fs = require('fs').promises

const contacts = require('../db/contacts.json')

const listContacts = async () => contacts

module.exports = listContacts
