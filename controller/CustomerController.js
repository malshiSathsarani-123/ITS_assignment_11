import {CustomerModel} from "../model/CustomerModel.js";
import {customer_db} from "../db/db.js";

var row_index = null;

const loadCustomerData = () => {
    $('#customer-table-body').empty();
    customer_db.map((item, index) => {
        let record = `<tr><td class="customer_id">${item.customer_id}</td><td class="name">${item.name}</td><td class="address">${item.address}</td><td class="email">${item.email}
        </td><td class="phone">${item.phone}</td></tr>`;
        $("#customer-table-body").append(record);
    });
};

// submit
$("#customer-batons>button[type='button']").eq(0).on("click", () => {

    console.log("hello")
    let customer_id = $("#customer_id").val();
    let name = $("#name").val();
    let address = $("#address").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    let customer_obj = new CustomerModel(customer_id, name, address, email, phone);

    customer_db.push(customer_obj);

    $("#customer-batons>button[type='reset']").click();

    loadCustomerData();
});

// update
$("#customer-batons>button[type='button']").eq(1).on("click", () => {

    let customer_id = $("#customer_id").val();
    let name = $("#name").val();
    let address = $("#address").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    let customer_obj = new CustomerModel(customer_id, name, address, email, phone);

    let index = customer_db.findIndex(item => item.customer_id === customer_id);

    customer_db[index] = customer_obj;

    $("#customer-batons>button[type='reset']").click();

    loadCustomerData();
})

// delete
$("#customer-batons>button[type='button']").eq(2).on("click", () => {
    let customer_id = $("#customer_id").val();

    let index = customer_db.findIndex(item => item.customer_id === customer_id);

    customer_db.splice(index, 1);

    $("#customer-batons>button[type='reset']").click();

    loadCustomerData();
})

$("#customer-table-body").on("click", "tr", function() {
    row_index = $(this).index();

    console.log(row_index);

    let customer_id = $(this).find(".customer_id").text();
    let name = $(this).find(".name").text();
    let address = $(this).find(".address").text();
    let email = $(this).find(".email").text();
    let phone = $(this).find(".phone").text();

    $("#customer_id").val(customer_id);
    $("#name").val(name);
    $("#address").val(address);
    $("#email").val(email);
    $("#phone").val(phone);
});