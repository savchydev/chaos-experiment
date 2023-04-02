const express = require('express');
const app = express();
const PORT = 3000

// Middlewares
app.use(express.json())

// Basic routes
app.get('/health', (req, res) => {
    res.json({ alive: true })
})

app.post('/crash', (req, res) => {
    res.status(500).json({ error: 'Internal server error' })
    return process.exit()
})

app.listen(PORT, () => console.log(`Serer lifted at port ${PORT}`))