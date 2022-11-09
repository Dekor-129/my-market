// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const adress = `https://api.telegram.org/bot5376669546:AAE0deUBmzw2rs0g2-bjNzsH0-IEmB4MRMA/sendMessage?chat_id=-783628550&text=`

export default async function handler(req, res) {
  const form = JSON.parse(req.body).form
  const cartItems = JSON.parse(req.body).cartItems
  const sortedCart = JSON.parse(req.body).sortedCart

  const formText = 
  `
    Имя: ${form.name} \n         
    Email: ${form.email}   \n           
    Телефон: ${form.tel}   \n               
    Комментарий: ${form.comment || 'Нет'}\n  
  `

  const cartItemsText = sortedCart.map((el)=>(
    `
    Название: ${el.name}\n  
    Цвет: ${el.parameter.colorName}\n  
    Окрашивание: ${el.parameter.coloring ? 'Да' : 'Нет'}\n  
    Ароматизатор: ${el.parameter.scented ? 'Да' : 'Нет'}\n  
    Цена за штуку: ${el.currentPrice}\n  
    Количество: ${cartItems.filter((elem)=> el.id === elem.id).length}\n
     ` 
  ))
  const ordersList  = cartItemsText.join('\n')


  await fetch(adress + formText + ordersList)
  res.status(200).json({ message: form })
}
