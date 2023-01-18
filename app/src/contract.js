const User_ADDRESS = "0x516ceCf0b470555e8f1E657C72c9cBabd42ea771";
const User_ABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "users",
        outputs: [
            {
                internalType: "string",
                name: "Name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "Age",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "no",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_age",
                type: "uint256",
            },
        ],
        name: "storeUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

module.exports = {
    User_ADDRESS,
    User_ABI,
};