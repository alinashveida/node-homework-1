const { Command } = require('commander')
const program = new Command()
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)

const argv = program.opts()

const contactsOperation = require('./contacts')

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      //return contactsOperation.listContacts()
      const contacts = await contactsOperation.listContacts()
      console.table(contacts)
      break

    case 'get':
      //   return await contactsOperation.getById(id)
      const contactById = await contactsOperation.getById(id)
      console.log(contactById)
      break

    case 'add':
      const addContacts = await contactsOperation.add({ name, email, phone })
      console.log(addContacts)
      break

    case 'remove':
      await contactsOperation.remove(id)
      console.log('Success remove')
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)
