import {ItemModel} from "model/ItemModel.js";
import {item_db} from "db/db.js";

var row_index = null;

const loadItemData = () => {
    $('#item_table-body').empty(); // make tbody empty
    item_db.map((item, index) => {
        let recode = `<td class = "item_code">${item.item_code}</td><td class="description">${item.description}</td><td class="price">${item.price}</td><td class="item_qty">${item.item_qty}</td>`
        $("#table-body").append(recode);
    });
};

// submit
    $('#submit').on('click',()=>{

        console.log("hello")
        let item_code = $('#item_code').val();
        let description = $('#description').val();
        let price  = $('#price').val();
        let item_qty = $('#item_qty').val();

        let item_obj = new ItemModel(item_code, description, price, item_qty);

        item_db.push(item_obj);

        $("#reset").click();

        loadItemData();
    });

// // update
$('#update').on('click',()=>{

    let item_code = $('#item_code').val();
    let description = $('#description').val();
    let price  = $('#price').val();
    let item_qty = $('#item_qty').val();

    let item_obj = new ItemModel(item_code, description, price, item_qty);

    let index = item_db.findIndex(item => item.item_code === item_code);
    item_db.push(item_obj);

    $("#reset").click();

    loadItemData();
})

// delete
$('#delete').on('click',()=>{
    let item_code = $('#item_code').val();

    let index = item_db.findIndex(item => item.item_code === item_code);
    item_db.splice(index, 1);
    $("#reset").click();

    loadItemData();
})

$("#item_table-body").on("click", "tr", function() {
    row_index = $(this).index();

    let item_code = $(this).find("td:eq(0)").text();
    let description = $(this).find("td:eq(1)").text();
    let price = $(this).find("td:eq(2)").text();
    let item_qty = $(this).find("td:eq(3)").text();

    $('#item_code').val(item_code);
    $('#description').val(description);
    $('#price').val(price);
    $('#item_qty').val(item_qty);
});
