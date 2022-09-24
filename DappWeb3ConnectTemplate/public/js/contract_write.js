import metamaskConfig from './connection.js'
import { ethers } from './ethers-5.1.esm.min.js'
const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
const signer = provider.getSigner()
var abi;
var contractAddress;


abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "nombreE",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "codigoE",
                "type": "uint256"
            }
        ],
        "name": "guardarCertificado",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "nombreC",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "alumnos",
        "outputs": [
            {
                "internalType": "string",
                "name": "nombreEst",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "fechaParticipacion",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "asistio",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "codigoE",
                "type": "uint256"
            }
        ],
        "name": "cosultarCertificado",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fechaCurso",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nombreCls",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

contractAddress = '0x45d65848DE92b69EDb08dBcFB0e70B0EA4CF0b60';
const contract = new ethers.Contract(contractAddress, abi, signer);

let account = await metamaskConfig.getAccount();

// check if metamask is installed in browser
if (metamaskConfig.isMetamaskInstalled) {
    console.log('Metamask is installed!')
} else {
    alert('Install Metamask extension to connect with DApp!')
}

// event triggered when account is changed in metamask
ethereum.on('accountsChanged', async(accounts) => {

    console.log("Cambio de cuenta:");

})

// event triggered when metamask is connected to chain and can make rpc request
ethereum.on('connect', (chainId) => {
    console.log(chainId)
    console.log('Metamask Connected:', ethereum.isConnected())
})

// event triggered when metamask is disconnected from chain and can not make rpc request
ethereum.on('disconnect', (chainId) => {
    console.log(chainId)
    console.log('Metamask Connected:', ethereum.isConnected());
    alert('Metamask is not connected to Rinkeby network. Retry!')
})

// add click event listener on the connect button

//Boton firmar

registerButton.addEventListener('click', async(e) => {

    e.preventDefault()

    let getAccountAddress = await metamaskConfig.getAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
    console.log("Solo hace falta firmar........");

    console.log(getAccountAddress);


    console.log(contract);
    console.log(signer);


    // let ethereum = window.ethereum;

    try {
        Swal.fire({
            imageUrl: '../img/loader.gif',
            title: 'Guardando Certificado...',
            text: 'Espere la transacción en metamask.',
            showConfirmButton: false
          })

        var a = document.getElementById("exampleInput").value;
        var b = document.getElementById("exampleInput2").value;
        const tx = await contract.guardarCertificado(a,b);
        const receipt = await tx.wait();
        

        if (receipt) {
            Swal.fire(
                'Certificado Guardado!',

                'success'
            );

            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        }
    } catch (error) {

        Swal.fire({
            icon: 'error',
            title: 'Eror',
            text: error,
            // text: error.data.message,
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }

    // Request account access if needed
    // await ethereum.enable();

    // Acccounts now exposed
    // const params = [{
    //     data: tx
    // }];

    // try {

    //     const transactionHash = await provider.buy('eth_buyTransaction', params);
    //     // const receipt = await tx.wait();
    //     console.log('receipt is' + receipt);
    //     console.log('transactionHash is ' + transactionHash);

    // } catch (error) {

    // }

    // const isTransactionMined = async(transactionHash) => {
    //     const txReceipt = await provider.getTransactionReceipt(transactionHash);
    //     if (txReceipt && txReceipt.blockNumber) {
    //         return txReceipt;
    //     }
    // }

    // isTransactionMined();



});


registerButton2.addEventListener('click', async(e) => {

    e.preventDefault()
    var message = await contract.cosultarCertificado(document.getElementById("idInput").value);
    document.getElementById('message').innerHTML=message;
});