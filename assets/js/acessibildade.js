
$("#acessibilidadeContraste").click(function (event) {
  event.preventDefault();

  $("body").toggleClass("com_contraste");
  const originalTitle = $(this).attr("data-original-title");

  if (originalTitle === "Aplicar auto contraste") {
    $(this).attr("data-original-title", "Remover auto contraste");
  } else {
    $(this).attr("data-original-title", "Aplicar auto contraste");
  }
});
