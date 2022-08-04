//import { db } from "../src/models/invoice.model";

//import {router} from '../src/controllers/invoice.controller'

async function apiCall(url) {

    //add api call logic here
    try
    {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(err)
    {
        console.log("err: ",err);
    }
}

function appendInvoices(data, main)
{   
    data.map((el,index) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener('click', ()=> {
            deleteCall(`http://localhost:5511/invoice/${el._id}`, main);
        })
        let td4 = document.createElement('td');
        td4.append(deleteBtn);
        let updateBtn = document.createElement('button');
        updateBtn.innerText= "Update";
        updateBtn.addEventListener('click', ()=>{
            location.href= "invoice.html";
            localStorage.setItem("element", JSON.stringify(el))
        })
        // updateBtn.addEventListener('click', ()=> {
        //     putCall(`http://localhost:5511/invoice/${el._id}`, main,n,a,d);
        // })
        let td5 = document.createElement('td');
        td5.append(updateBtn);
        td1.innerHTML = el.number;
        td2.innerHTML = el.amount;
        td3.innerHTML = el.date;
        tr.append(td1,td2,td3,td4,td5);
        main.append(tr);
    })
}
//appendInvoices()

async function deleteCall(url, main) {

    //add api call logic here
    try
    {
        let res = await fetch(url, { method: "DELETE" });
        let data = await res.json();
        alert("Deleted Successfully");
        main.innerHTML = "";
        let res1 = await apiCall(`http://localhost:5511/invoice`);
        appendInvoices(res1, main);
        
    }
    catch(err)
    {
        console.log("err: ",err);
    }
}

async function postCall(n,a,d,url,tbody) {

    //add api call logic here
    try
    {
        let res = await fetch(url, { 
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ number : n, amount: a, date: d }) 
        });
        let data = await res.json();
        alert("Posted Successfully");
        tbody.innerHTML='';
        let res1 = await apiCall(url);
        appendInvoices(res1, main);
    }
    catch(err)
    {
        console.log("err: ",err);
    }
}

async function putCall(url,obj) {

    try
    {
        let res = await fetch(url, { 
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( obj ) 
        });
        let data = await res.json();
        alert("Updated Successfully");
        console.log(data);
    }
    catch(err)
    {
        console.log("err: ",err);
    }
}

export {apiCall, appendInvoices, deleteCall, postCall, putCall}