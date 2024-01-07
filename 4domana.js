<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $("#nameInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function () {
            $(this).toggle(
              $(this).children("#name").text().toLowerCase().indexOf(value) > -1
            );
          });
        });
      });
      $(document).ready(function () {
        $("#LastnameInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function () {
            $(this).toggle(
              $(this)
                .children("#lastname")
                .text()
                .toLowerCase()
                .indexOf(value) > -1
            );
          });
        });
      });
      $(document).ready(function () {
        $("#mailInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function () {
            $(this).toggle(
              $(this).children("#mail").text().toLowerCase().indexOf(value) > -1
            );
          });
        });
      });
    </script>
    <style>
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }
    </style>
  </head>
  <body>
    <h2>Filterable Table</h2>
    <p>
      Type something in the input field to search the table for first names,
      last names or emails:
    </p>
    <input id="nameInput" type="text" placeholder="Search name.." />
    <input id="LastnameInput" type="text" placeholder="Search Last Name.." />
    <input id="mailInput" type="text" placeholder="Search mail.." />
    <br /><br />

    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody id="myTable">
        <tr>
          <td id="name">John</td>
          <td id="lastname">Doe</td>
          <td id="mail">john@example.com</td>
        </tr>
        <tr>
          <td id="name">Mary</td>
          <td id="lastname">Moe</td>
          <td id="mail">mary@mail.com</td>
        </tr>
        <tr>
          <td id="name">July</td>
          <td id="lastname">Dooley</td>
          <td id="mail">july@greatstuff.com</td>
        </tr>
        <tr>
          <td id="name">Anja</td>
          <td id="lastname">Ravendale</td>
          <td id="mail">a_r@test.com</td>
        </tr>
      </tbody>
    </table>

    <p>
      Note that we start the search in tbody, to prevent filtering the table
      headers.
    </p>
  </body>
</html>