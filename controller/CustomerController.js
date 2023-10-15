import {CustomerModel} from "model/CustomerModel.js";
import {customer_db} from "db/db.js";

var row_index = null;

const loadCustomerData = () => {
    $('#table-body').empty(); // make tbody empty
    customer_db.map((item, index) => {
        let recode = `<tr><td class = "id">${item.customer_id}</td><td class="name">${item.name}</td><td class="address">${item.address}</td><td class="email">${item.email}</td><td class="phone">${item.phone}</td></tr>`

        $("#table-body").append(recode);
    });
};

// submit
    $('#submit').on('click',()=>{

        console.log("hello")
        let customer_id = $('#customer_id').val();
        let name = $('#name').val();
        let address  = $('#address').val();
        let email = $('#email').val();
        let contact = $('#phone').val();

    let customer_obj = new CustomerModel(customer_id, name, address, email, contact);

    customer_db.push(customer_obj);

        $("#reset").click();

        loadCustomerData();
});

// // update
$('#update').on('click',()=>{

    let customer_id = $('#customer_id').val();
    let name = $('#name').val();
    let address  = $('#address').val();
    let email = $('#email').val();
    let contact = $('#phone').val();

    let customer_obj = new CustomerModel(customer_id, name, address, email, contact);

    let index = customer_db.findIndex(item => item.customer_id === customer_id);
    customer_db.push(customer_obj);

    $("#reset").click();

    loadCustomerData();
})

// delete
$("#student-btns>button[type='button']").eq(2).on("click", () => {
    let customer_id = $('#customer_id').val();

    let index = customer_db.findIndex(item => item.customer_id === customer_id);
    customer_db.splice(index, 1);
    $("#reset").click();

    loadCustomerData()
})

$("#table-body").on("click", "tr", function() {
    row_index = $(this).index();

    let customer_id = $(this).find("td:eq(0)").text();
    let name = $(this).find("td:eq(1)").text();
    let address = $(this).find("td:eq(2)").text();
    let email = $(this).find("td:eq(3)").text();
    let contact = $(this).find("td:eq(4)").text();

    $('#customer_id').val(customer_id);
    $('#name').val(name);
    $('#address').val(address);
    $('#email').val(email);
    $('#phone').val(contact);
});
