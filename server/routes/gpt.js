const express = require('express');
const router =express.Router();
const axios = require('axios');
const config = require('../config/keys');

router.post('/textQuery', async (req, res) => {
    try{
        const userText =req.body.text;
        const gptResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
            model : 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: '고객을 위한 챗봇으로 설정하고 응답바람.'},
                { role: 'user', content: userText },
            ],
        },
    {
        headers: {
            'Authorization': `Bearer ${config.gptAPIKey}`,
            'Content-Type': 'application/json'
        }
    });

        const reply = gptResponse.data.choices[0].message.content;

        res.send({
            queryText: userText,
            fulfillmentMessages: [{text:{text:reply}}]
        });
    } catch (error){
        console.error('gpt errer:',error);
        res.status(500).send({ error: 'gpt error'});
    };
});

module.exports = router;