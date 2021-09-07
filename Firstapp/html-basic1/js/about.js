/*
                        <tr class="table-info">
                            <td>1</td>
                            <td>Kiss</td>
                            <td>János</td>
                            <td>55</td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn-info btn">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-danger btn">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
    */

let users = [
    {surname: "Vertók", firstname: "Bertuka", age: 22},
    {surname: "Nagy", firstname: "Árpád", age: 44},
    {surname: "Kiss", firstname: "Bence", age: 98},
    {surname: "Doe", firstname: "Jani", age: 67},
    {surname: "Jack", firstname: "Vadölő", age: 12},
    {surname: "Fehér", firstname: "Márió", age: 34},
    {surname: "Kövér", firstname: "Berta", age: 32},
    {surname: "Sovány", firstname: "Bence", age: 32},
];
let tableBody = document.querySelector("#userTable tbody");

let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
let createButtonGroup = parent => { 
    /*
                                    <div class="btn-group">
                                    <button class="btn-info btn">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-danger btn">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </div>
    */
    let group = document. createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-edit"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="far fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);

}
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])){
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
    }
