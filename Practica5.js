var r = "<tr><th>Cliente</th><th>Correo</th><th>Película</th><th>Acción</th><th>Fecha</th><th>Color</th><th>Días</th></tr>";
var estilo=0;
function registrar() {
  if (document.getElementById("name").value == false) {
    alert("Nombre vacío. Debes llenar todos los campos");
  }else if (document.getElementById("mail").value == false) {
    alert("Mail vacío. Debes llenar todos los campos");
  } else if (document.getElementById("fecha").value == false) {
    alert("Fecha no seleccionada. Debes llenar todos los campos");
  }else if (document.getElementById("comprar").checked == false && document.getElementById("rentar").checked == false) {
    alert("Acción no seleccionada. Debes llenar todos los campos");
  }else if (document.getElementById("color").value == false) {
    alert("Color no seleccionado. Debes llenar todos los campos");
  }else if (document.getElementById("dia").value == false) {
    alert("Días no seleccionado. Debes llenar todos los campos");
  }else {
    if (estilo%2 == 0) {
      r = r + "<tr class=\"renglon1\">";
    } else {
      r = r + "<tr class=\"renglon2\">";
    }

    x = document.getElementById("name").value;
    r = r + "<td>" + x + "</td>";
    x = document.getElementById("mail").value;
    r = r + "<td>" + x + "</td>";
    if (document.getElementById("shrek").checked)
      x = "Shrek";
    else if (document.getElementById("panda").checked)
      x = "Kung Fu Panda";
    else if (document.getElementById("toy").checked)
      x = "Toy Story";
    r = r + "<td>" + x + "</td>";
    if (document.getElementById("comprar").checked)
      x = "Comprar";
    else if (document.getElementById("rentar").checked)
      x = "Rentar";
    r = r + "<td>" + x + "</td>";
    x = document.getElementById("fecha").value;
    r = r + "<td>" + x + "</td>";
    x = document.getElementById("color").value;
    r = r + "<td>" + x + "</td>";
    x = document.getElementById("dia").value;
    r = r + "<td>" + x + "</td>";

    r = r + "</tr>";
    document.getElementById("info").innerHTML = r;

    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("shrek").checked = true;
    document.getElementById("panda").checked = false;
    document.getElementById("toy").checked = false;
    document.getElementById("comprar").checked = false;
    document.getElementById("rentar").checked = false;
    document.getElementById("fecha").value = null;
    document.getElementById("color").value = null;
    document.getElementById("dia").value = null;
    estilo = estilo + 1;
  }

}
