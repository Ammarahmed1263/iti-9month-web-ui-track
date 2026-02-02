const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      const table = document.createElement("table");

      table.style.borderCollapse = "collapse";
      table.style.width = "100%";
      table.style.textAlign = "center";

      const headerRow = document.createElement("tr");

      [
        "ID",
        "Name",
        "Username",
        "Email",
        "Address",
        "Phone",
        "Website",
        "Company",
      ].forEach((key) => {
        const th = document.createElement("th");
        th.textContent = key.toUpperCase();
        th.style.border = "1px solid black";
        th.style.padding = "16px";
        th.style.backgroundColor = "#f2f2f2";
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      users.forEach(
        ({ id, name, username, email, address, phone, website, company }) => {
          const dataRow = document.createElement("tr");

          const formattedAddress = `${address.street}, ${address.suite}, ${address.city} ${address.zipcode} <br /> ${address.geo.lat}, ${address.geo.lng}`;

          const formattedCompany = `${company.name} - ${company.catchPhrase} <br /> ${company.bs}`;

          [
            id,
            name,
            username,
            email,
            formattedAddress,
            phone,
            website,
            formattedCompany,
          ].forEach((value) => {
            const td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.padding = "8px";
            td.innerHTML = value;
            dataRow.appendChild(td);
          });

          table.appendChild(dataRow);
        },
      );

      document.body.appendChild(table);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      document.body.textContent = `Error loading users: ${error.message}`;
    });
};

getUsers();
