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

//------------------------------------ROWS----------------------------------------------------
const allRows = document.querySelectorAll(".row");

//------------------------------FILTERS---------------------------------------------------------
const filterById = function (inputValue) {
  //   (inputValue);
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
      value, "<", input, expression;
    } else if (inputValue.startsWith(">")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value > +input;
      value, ">", input, expression;
    } else if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value === +input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = +value !== +input;
      value, "!=", input, expression;
    } else if (
      inputValue.startsWith("<") &&
      inputValue.includes(",") &&
      inputValue.includes(">")
    ) {
      const input1 = inputValue.split(",")[0].slice(1).toLowerCase();
      const input2 = inputValue.split(",")[1].slice(1).toLowerCase();
      expression = +value < +input1 && +value > +input2;
      value, "|<| ", input1, "|&&|", value, "|>|", input2, expression;
    } else {
      input = inputValue;
      expression = value.includes(input.toLowerCase());
      value, input, expression;
    }

    if (expression) {
      rowElement.classList.remove("id-hide");
    } else {
      rowElement.classList.add("id-hide");
    }
  });
};

const filterByFirstName = function (inputValue) {
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-2").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
      value, "!=", input, expression;
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
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-3").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
      value, "!=", input, expression;
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
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-4").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
      value, "!=", input, expression;
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
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-6").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
      value, "!=", input, expression;
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
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-7").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
      value, "!=", input, expression;
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
  allRows.forEach((rowElement) => {
    const value = rowElement.querySelector("#col-8").innerHTML.toLowerCase();
    let input;
    let expression;
    if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = value === input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = value !== input;
      value, "!=", input, expression;
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
      value, "<", input, expression;
    } else if (inputValue.startsWith(">")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value > +input;
      value, ">", input, expression;
    } else if (inputValue.startsWith("=")) {
      input = inputValue.slice(1).toLowerCase();
      expression = +value === +input;
      value, "===", input, expression;
    } else if (inputValue.startsWith("!=")) {
      input = inputValue.slice(2).toLowerCase();
      expression = +value !== +input;
      value, "!=", input, expression;
    } else if (
      inputValue.startsWith("<") &&
      inputValue.includes(",") &&
      inputValue.includes(">")
    ) {
      const input1 = inputValue.split(",")[0].slice(1).toLowerCase();
      const input2 = inputValue.split(",")[1].slice(1).toLowerCase();
      expression = +value < +input1 && +value > +input2;
      value, "|<| ", input1, "|&&|", value, "|>|", input2, expression;
    } else {
      input = inputValue;
      expression = value.includes(input.toLowerCase());
      value, input, expression;
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

const setSort = function (exceptHeader) {
  headers.forEach((header) => {
    console.log(header.className);
    if (!header.className.includes(exceptHeader)) {
      header.classList.remove("sort-ascending");
      header.classList.remove("sort-descending");
      header.classList.add("no-sort");
    }

    if (header.className.includes("sort-descending"))
      header.querySelector(".sort-arrow").innerHTML = "&darr;";
    else if (header.className.includes("sort-ascending"))
      header.querySelector(".sort-arrow").innerHTML = "&uarr;";
    else header.querySelector(".sort-arrow").innerHTML = "";
  });
};

const sortById = function (order) {
  allRows.sort((row1, row2) => {
    if (order === "ascending")
      return (
        +row1.querySelector("#col-1").innerHTML.toLowerCase() -
        +row2.querySelector("#col-1").innerHTML.toLowerCase()
      );
    else {
      return (
        +row2.querySelector("#col-1").innerHTML.toLowerCase() -
        +row1.querySelector("#col-1").innerHTML.toLowerCase()
      );
    }
  });
};

const sortByFirstName = function (order) {};

const sortByLastName = function (order) {};

const sortByEmail = function (order) {};

const sortByCity = function (order) {};

const sortByPhone = function (order) {};

const sortByTitle = function (order) {};

const sortBySalary = function (order) {};

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
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
    sortById("ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
    sortById("descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("id");
  //   console.log(headerId.className);
});

headerFirstName.addEventListener("click", function (e) {
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("first-name");
});

headerLastName.addEventListener("click", function (e) {
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("last-name");
});

headerEmail.addEventListener("click", function (e) {
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("email");
});

headerCity.addEventListener("click", function (e) {
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("city");
});

headerPhone.addEventListener("click", function (e) {
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("phone");
});

headerTitle.addEventListener("click", function (e) {
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("title");
});

headerSalary.addEventListener("click", function (e) {
  if (this.classList.contains("no-sort")) {
    this.classList.remove("no-sort");
    this.classList.add("sort-ascending");
  } else if (this.classList.contains("sort-ascending")) {
    this.classList.remove("sort-ascending");
    this.classList.add("sort-descending");
  } else if (this.classList.contains("sort-descending")) {
    this.classList.remove("sort-descending");
    this.classList.add("no-sort");
  }
  setSort("salary");
});
