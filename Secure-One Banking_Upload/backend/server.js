
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("SecureOne Bank Backend is running!");
});

app.get("/api/transactions", (req, res) => {
    const transactions = [
        {
            id: 1,
            description: "Online Transfer",
            amount: -2000
        },
        {
            id: 2,
            description: "Deposit",
            amount: 5000
        },
        {
            id: 3,
            description: "Payment",
            amount: -1200
        }
    ];

    res.json({
        success: true,
        transactions: transactions
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
