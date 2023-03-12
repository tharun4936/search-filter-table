const employeeTable = document.querySelector(".employee__table--body");
const data = await fetch("./SampleData.json");
const employees = await data.json();

const inputId = document.querySelector(".input--id");
const inputFirstName = document.querySelector(".input--first-name");
const inputLastName = document.querySelector(".input--last-name");
const inputEmail = document.querySelector(".input--email");
const inputGender = document.querySelector(".input--gender");
const inputCity = document.querySelector(".input--city");
const inputPhone = document.querySelector(".input--phone");
const inputTitle = document.querySelector(".input--title");
const inputSalary = document.querySelector(".input--salary");

const headerId = document.querySelector(".header--id");
const headerFirstName = document.querySelector(".header--first-name");
const headerLastName = document.querySelector(".header--last-name");
const headerEmail = document.querySelector(".header--email");
const headerCity = document.querySelector(".header--city");
const headerPhone = document.querySelector(".header--phone");
const headerTitle = document.querySelector(".header--title");
const headerSalary = document.querySelector(".header--salary");

const renderAllEmployees = function (employees) {
  let htmlMarkup = "";
  employees.forEach((employee, i) => {
    const htmlRowMarkup = `<tr class="row" id="row-${i + 1}">
            <td class="col" id="col-1">${employee["id"]}</td>
            <td class="col" id="col-2" contenteditable='true'>${
              employee["first_name"]
            }</td>
            <td class="col" id="col-3" contenteditable='true'>${
              employee["last_name"]
            }</td>
            <td class="col" id="col-4" contenteditable='true'>${
              employee["email"]
            }</td>
            <td class="col" id="col-5">${employee["gender"]}</td>
            <td class="col" id="col-6" contenteditable='true'>${
              employee["city"]
            }</td>
            <td class="col" id="col-7" contenteditable='true'>${
              employee["phone"]
            }</td>
            <td class="col" id="col-8" contenteditable='true'>${
              employee["job_title"]
            }</td>    
            <td class="col" id="col-9" contenteditable='true'>${
              employee["salary"]
            }</td>
        </tr>`;
    htmlMarkup += htmlRowMarkup;
  });
  employeeTable.innerHTML = htmlMarkup;
};

const renderRows = function (rowElementsArray) {
  let htmlMarkup = ``;
  rowElementsArray.forEach((rowElement) => {
    htmlMarkup += rowElement.outerHTML;
  });
  employeeTable.innerHTML = htmlMarkup;
};

renderAllEmployees(employees);

const genderColumn = document.querySelectorAll("#col-5");
genderColumn;
genderColumn.forEach((genderCell) => {
  genderCell.addEventListener("click", function (e) {
    ("clicked");
    this.innerHTML = `<select class="edit--gender">
    <option value="$">-Select-</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    </select>`;
    const editGender = document.querySelector(".edit--gender");
    editGender.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    editGender.addEventListener("change", function (e) {
      e.target.value;
      if (e.target.value === "female") genderCell.innerHTML = "Female";
      else genderCell.innerHTML = "Male";
    });
  });
});

//------------------------------FILTERS---------------------------------------------------------
const filterById = function (inputValue) {
  //   (inputValue);
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    // (inputValue);
    const value = rowElement.querySelector("#col-1").innerHTML.toLowerCase();
    let expression;
    let input;
    if (
      inputValue.startsWith("<") &&
      !inputValue.includes(",") &&
      !inputValue.includes(">")
    ) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value < +input;
    } else if (inputValue.startsWith(">")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value > +input;
    } else if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value === +input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = +value !== +input;
    } else if (
      inputValue.startsWith("<") &&
      inputValue.includes(",") &&
      inputValue.includes(">")
    ) {
      const input1 = inputValue.split(",")[0].slice(1).toLowerCase();
      const input2 = inputValue.split(",")[1].slice(1).toLowerCase();
      expression = +value < +input1 && +value > +input2;
    } else {
      input = inputValue;
      expression = value.includes(input.toLowerCase());
    }

    if (expression) {
      rowElement.classList.remove("id-hide");
    } else {
      rowElement.classList.add("id-hide");
    }
  });
};

const filterByFirstName = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-2").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
    } else {
      input = inputValue;
      expression = value.includes(inputValue.toLowerCase());
    }
    if (expression) {
      rowElement.classList.remove("first-name-hide");
    } else {
      rowElement.classList.add("first-name-hide");
    }
  });
};

const filterByLastName = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-3").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
    } else {
      input = inputValue;
      expression = value.includes(inputValue.toLowerCase());
    }
    if (expression) {
      rowElement.classList.remove("last-name-hide");
    } else {
      rowElement.classList.add("last-name-hide");
    }
  });
};

const filterByEmail = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-4").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
    } else {
      input = inputValue;
      expression = value.includes(inputValue.toLowerCase());
    }
    if (expression) {
      rowElement.classList.remove("email-hide");
    } else {
      rowElement.classList.add("email-hide");
    }
  });
};

const filterByGender = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-5").innerHTML.toLowerCase();
    if (inputValue.toLowerCase() === "all") {
      rowElement.classList.remove("gender-hide");
    } else {
      if (value !== inputValue.toLowerCase()) {
        rowElement.classList.add("gender-hide");
      } else {
        rowElement.classList.remove("gender-hide");
      }
    }
  });
};

const filterByCity = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-6").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
    } else {
      input = inputValue;
      expression = value.includes(inputValue.toLowerCase());
    }
    if (expression) {
      rowElement.classList.remove("city-hide");
    } else {
      rowElement.classList.add("city-hide");
    }
  });
};

const filterByPhone = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-7").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
    } else {
      input = inputValue;
      expression = value.includes(inputValue.toLowerCase());
    }
    if (expression) {
      rowElement.classList.remove("phone-hide");
    } else {
      rowElement.classList.add("phone-hide");
    }
  });
};

const filterByTitle = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-8").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
    } else {
      input = inputValue;
      expression = value.includes(inputValue.toLowerCase());
    }
    if (expression) {
      rowElement.classList.remove("title-hide");
    } else {
      rowElement.classList.add("title-hide");
    }
  });
};

const filterBySalary = function (inputValue) {
  const allRows = document.querySelectorAll(".row");
  allRows.forEach((rowElement) => {
    // (inputValue);
    const value = rowElement.querySelector("#col-9").innerHTML.toLowerCase();
    let expression;
    let input;
    if (
      inputValue.startsWith("<") &&
      !inputValue.includes(",") &&
      !inputValue.includes(">")
    ) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value < +input;
    } else if (inputValue.startsWith(">")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value > +input;
    } else if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value === +input;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = +value !== +input;
    } else if (
      inputValue.startsWith("<") &&
      inputValue.includes(",") &&
      inputValue.includes(">")
    ) {
      const input1 = inputValue.split(",")[0].slice(1).toLowerCase();
      const input2 = inputValue.split(",")[1].slice(1).toLowerCase();
      expression = +value < +input1 && +value > +input2;
    } else {
      input = inputValue;
      expression = value.includes(input.toLowerCase());
    }

    if (expression) {
      rowElement.classList.remove("salary-hide");
    } else {
      rowElement.classList.add("salary-hide");
    }
  });
};

//-------------------------------------------SORTERS------------------------------------------------------
const headers = document.querySelectorAll(".header");

const sortByNumber = function (columnName, sortOrder) {
  const allRows = document.querySelectorAll(".row");
  let col;
  if (columnName === "id") col = 1;
  if (columnName === "salary") col = 9;

  const allRowsArray = Array.from(allRows);

  allRowsArray.sort((rowElement1, rowElement2) => {
    const a = +rowElement1.querySelector(`#col-${col}`).innerHTML;
    const b = +rowElement2.querySelector(`#col-${col}`).innerHTML;
    if (sortOrder === "ascending") return a - b;
    else if (sortOrder === "descending") return b - a;
  });
  // allRowsArray.forEach((rowElement) => {
  //   console.log(rowElement.querySelector(`#col-${col}`).innerHTML);
  // });
  return allRowsArray;
};

const sortByString = function (columnName, sortOrder) {
  const allRows = document.querySelectorAll(".row");

  let col;
  if (columnName === "first-name") col = 2;
  if (columnName === "last-name") col = 3;
  if (columnName === "email") col = 4;
  if (columnName === "city") col = 6;
  if (columnName === "phone") col = 7;
  if (columnName === "title") col = 8;

  const allRowsArray = Array.from(allRows);

  allRowsArray.sort((rowElement1, rowElement2) => {
    const string1 = rowElement1.querySelector(`#col-${col}`).innerHTML;
    const string2 = rowElement2.querySelector(`#col-${col}`).innerHTML;
    if (string1 < string2) {
      if (sortOrder === "ascending") return -1;
      else if (sortOrder === "descending") return 1;
    }
    if (string1 > string2) {
      if (sortOrder === "ascending") return 1;
      else if (sortOrder === "descending") return -1;
    }
    return 0;
  });
  // allRowsArray.forEach((rowElement) => {
  //   console.log(rowElement.querySelector(`#col-${col}`).innerHTML);
  // });
  return allRowsArray;
};

const setSort = function (exceptHeader, sortOrder) {
  headers.forEach((header) => {
    // console.log(header.className);
    if (!header.className.includes(exceptHeader)) {
      header.classList.remove("sort-ascending");
      header.classList.remove("sort-descending");
      header.classList.add("no-sort");
    }
    if (header.className.includes("sort-descending")) {
      header.querySelector(".sort-arrow").innerHTML = "&darr;";
    } else if (header.className.includes("sort-ascending")) {
      header.querySelector(".sort-arrow").innerHTML = "&uarr;";
    } else if (header.className.includes("no-sort")) {
      header.querySelector(".sort-arrow").innerHTML = "";
    }
  });

  if (sortOrder === "no-sort") {
    renderRows(sortByNumber("id", "ascending"));
  }

  if (
    (exceptHeader === "id" || exceptHeader === "salary") &&
    (sortOrder === "ascending" || sortOrder === "descending")
  ) {
    renderRows(sortByNumber(exceptHeader, sortOrder));
  } else if (
    (exceptHeader === "first-name" ||
      exceptHeader === "last-name" ||
      exceptHeader === "email" ||
      exceptHeader === "city" ||
      exceptHeader === "phone" ||
      exceptHeader === "title") &&
    (sortOrder === "ascending" || sortOrder === "descending")
  ) {
    renderRows(sortByString(exceptHeader, sortOrder));
  }
  // console.log(exceptHeader, sortOrder);
};

//-----------------------------------------EVENT-LISTENERS------------------------------------------------
inputId.addEventListener("keyup", function (e) {
  //   (e.target.value);
  if (
    !e.target.value.endsWith("<") &&
    !e.target.value.endsWith(">") &&
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=") &&
    !e.target.value.endsWith(",")
  ) {
    filterById(e.target.value);
  }
  // console.log(e.target.value);
});

inputFirstName.addEventListener("keyup", function (e) {
  if (
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=")
  ) {
    filterByFirstName(e.target.value);
  }
});

inputLastName.addEventListener("keyup", function (e) {
  if (
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=")
  ) {
    filterByLastName(e.target.value);
  }
});

inputEmail.addEventListener("keyup", function (e) {
  if (
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=")
  ) {
    filterByEmail(e.target.value);
  }
});

inputGender.addEventListener("change", function (e) {
  filterByGender(e.target.value);
});

inputCity.addEventListener("keyup", function (e) {
  if (
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=")
  ) {
    filterByCity(e.target.value);
  }
});

inputPhone.addEventListener("keyup", function (e) {
  if (
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=")
  ) {
    filterByPhone(e.target.value);
  }
});

inputTitle.addEventListener("keyup", function (e) {
  if (
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=")
  ) {
    filterByTitle(e.target.value);
  }
});

inputSalary.addEventListener("keyup", function (e) {
  if (
    !e.target.value.endsWith("<") &&
    !e.target.value.endsWith(">") &&
    !e.target.value.endsWith("=") &&
    !e.target.value.endsWith("!") &&
    !e.target.value.endsWith("!=") &&
    !e.target.value.endsWith(",")
  ) {
    filterBySalary(e.target.value);
  }
});

headerId.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("id", sortOrder);

  //   console.log(headerId.className);
});

headerFirstName.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("first-name", sortOrder);
});

headerLastName.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("last-name", sortOrder);
});

headerEmail.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("email", sortOrder);
});

headerCity.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("city", sortOrder);
});

headerPhone.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("phone", sortOrder);
});

headerTitle.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("title", sortOrder);
});

headerSalary.addEventListener("click", function (e) {
  let sortOrder;
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortOrder = "ascending";
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortOrder = "descending";
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
    sortOrder = "no-sort";
  }
  setSort("salary", sortOrder);
});

inputId.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputFirstName.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputLastName.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputEmail.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputGender.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputCity.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputPhone.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputTitle.addEventListener("click", function (e) {
  e.stopPropagation();
});
inputSalary.addEventListener("click", function (e) {
  e.stopPropagation();
});
