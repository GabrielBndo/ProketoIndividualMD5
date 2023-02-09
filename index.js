import readlineSync from 'readline-Sync';
import chalk from 'chalk';

const array = []; 
let input = '';

console.log('Digite os comandos CSS ou digite "SAIR" para finalizar.');

while (input.toLowerCase() !== 'sair') {
  input = readlineSync.question('Digite o comando CSS: ');
  if (input.toLowerCase() !== 'sair') {
    array.push(input);
  }
}


console.log('Lista dos comandos que foram digitadas CSS:');

console.log(chalk.yellow(array.sort().join('\n')));
