// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const adress = `https://api.telegram.org/bot5376669546:AAE0deUBmzw2rs0g2-bjNzsH0-IEmB4MRMA/sendMessage?chat_id=-783628550&text=`

export default async function handler(req, res) {
  const form = JSON.parse(req.body).form
  const cartItems = JSON.parse(req.body).cartItems
  const sortedCart = JSON.parse(req.body).sortedCart

  const formText = 
  `
    Имя: ${form.name};         
    Email: ${form.email};         
    Телефон: ${form.tel};             
    Комментарий: ${form.comment || 'Нет'};
  `
  const cartItemsText = cartItems.map((el, index)=>(
    `
    ${index + 1} Заказ;
    Название: ${el.name}; 
    Цвет: ${el.parameter.colorName}; 
    Окрашивание: ${el.parameter.coloring ? 'Да' : 'Нет'};  
    Ароматизатор: ${el.parameter.scented ? 'Да' : 'Нет'}; 
    Цена за штуку: ${el.currentPrice}; 
     ` 
  ))/*
  const arr =[]

  cartItems.forEach(element => {
    if(arr.filter((elem)=> (
      elem.name !== element.name
      /*&& elem.parameter.colorName === element.parameter.colorName
      && elem.parameter.coloring === element.parameter.coloring
      && elem.parameter.scented === element.parameter.scented*/
    /*)).length === 0) arr.push(element)*/
    
  /*})*/
  /*const sortArr = cartItems.reduce((sum, el)=> 
    sum.filter((elem)=> (
      elem.name === el.name
      && elem.parameter.colorName === el.parameter.colorName
      && elem.parameter.coloring === el.parameter.coloring
      && elem.parameter.scented === el.parameter.scented
    )) 
    ? sum.push(el)
    : sum
    , arr)*/


    console.log(arr);

  //const ordersList  = cartItemsText.join('                                                                                                                                                    ')

/*
  await fetch(
    adress 
    + formText 
    + '                                                                                                                                                            ' 
    + ordersList
  )*/
  res.status(200).json({  })
}
