let totalCount = 0;

document.getElementById("alert").style.display = "none";

document.getElementById("button").addEventListener("click", () => {
  var input = document.getElementById("input").value;

  if (input === "") {
    document.getElementById("alert").style.display = "inline-block";
  } else {
    document.getElementById("alert").style.display = "none";

    var unorderedList = document.getElementById("list");
    var listItem = document.createElement("li");

    listItem.appendChild(document.createTextNode(input));

    totalCount++

    if (totalCount % 3 === 0) {
      listItem.style.color = "rgba(255, 0, 0, 1)";
    }

    unorderedList.appendChild(listItem);

    document.getElementById("input").value = "";
  }
});