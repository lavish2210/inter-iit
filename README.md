# inter-iit
Prerequisites - Ganache and Truffle must be installed

Open ganache and then look for port number on which it is running and the network id used by it. If network id is '5777' and port number is '7545', then skip this step - 
"Replace those values in the truffle-config.js under truffle folder.Also write this port number value in web3.js file `const web3Port = {port_number};` inside app/src folder."

Run commands-

`cd truffle`

`truffle compile`

`truffle migrate`

After running these commands you will see contract address, store its value and replace it in contract.js file `const User_ADDRESS = {contract_address};` inside app/src folder 
