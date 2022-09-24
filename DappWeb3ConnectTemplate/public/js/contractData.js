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