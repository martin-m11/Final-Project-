//attempt at creating a server that will interact with the stripe checkout api attempts have failed.

require('dotenv').config()

const express= require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

const stripe = require('stripe')(process.env.STRIPE_PRIVAT_KEY)

const storeItems = new Map([
    [1,  {priceInCents: 10000, name: 'React tut'}],
    [2,  {priceInCents: 20000, name: 'React tut'}],
])
app.post('create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_methot_types: ['card']
            mode: 'subscription'
            line_items: req.body.items.map( item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                }
            }),
            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/success.html`,
        })
    } catch (e) {
        res.status(500).json({ error: e. message })
    }
    res.json({ url: session.url })

})

app.listen(3000)