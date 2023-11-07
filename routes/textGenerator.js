import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/', (req, res) => {
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
            {
                headers: {
                    "Authorization": 'Bearer ' + process.env.HF_ACCESS_TOKEN,
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    query({ "inputs": "Can you please let us know more details about  " }).then((response) => {
        console.log(JSON.stringify(response));
        res.json(response);
    })
});

export default router;
