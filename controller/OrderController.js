import {OrderModel} from "model/OrderModel.js";
import {order_db} from "db/db.js";

var row_index = null;

const loadOrderData = () => {
    $('#orderTable').empty(); // make tbody empty
    order_db.map((item, index) => {
        let recode = `<tr><td class = "itemCode">${item.itemCode}</td><td class="description">${item.description}</td><td class="price">${item.price}</td><td class="orderQty">${item.orderQty}</td><td class="total">${item.total}</td></tr>`
        $("#orderTable").append(recode);
    });
};

$('#add_item').on('click',()=>{

        let itemCode = $('#itemCode').val();
        let description = $('#description').val();
        let price  = $('#price').val();
        let orderQty = $('#orderQty').val();
        let total = price*orderQty;

    let order_obj = new OrderModel(itemCode, description, price, orderQty, total);

    order_db.push(order_obj);

        loadOrderData();
});
