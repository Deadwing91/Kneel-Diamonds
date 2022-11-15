import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"

let newMetal = getMetals()
let newSize = getSizes()
let newStyle = getStyles()


const buildOrderListItem = (order) => {

    
    const foundMetal = newMetal.find((metal) => {
        return metal.id === order.metalId
    })

    const foundStyle = newStyle.find((style) => {
        return style.id === order.styleId
    })



    const foundSizes = newSize.find((size) => {
        return size.id === order.sizeId
    })

    const totalCost = foundMetal.price + foundSizes.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

     return   `<li>
            Order #${order.id} cost ${costString}
        </li>`

}












export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

