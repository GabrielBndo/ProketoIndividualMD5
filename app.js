
const inquirer = require('inquirer');

let array = ["align-items", "background-color", "border-radius"]



listasCSS()

function listasCSS() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'O que você deseja fazer?',
          choices: [
            'Exibir lista CSS',
            'Adicionar itens CSS',
            'Remover itens CSS',
            'Sair',
          ],
        },
      ])
      .then((answer) => {
        let action = answer['action']
  
        if (action === 'Exibir lista CSS') {
            showList()
        } else if (action === 'Adicionar itens CSS') {
            insertItens()
        }  else if (action === 'Sair') {
            console.log('Sair')
            sair()
           
        }
      })
  }