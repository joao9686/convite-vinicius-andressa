const cover = document.getElementById("cover");
const inside = document.getElementById("inside");
const openInvitation = document.getElementById("openInvitation");
const backToCover = document.getElementById("backToCover");

let animando = false;

function abrirConvite() {
  if (animando) return;
  animando = true;

  cover.classList.add("is-opening");

  setTimeout(() => {
    cover.classList.add("is-hidden");
    inside.classList.add("is-visible");
  }, 520);

  setTimeout(() => {
    cover.classList.remove("is-opening");
    animando = false;
  }, 1100);
}

function voltarParaCapa() {
  if (animando) return;
  animando = true;

  inside.classList.add("is-closing");

  setTimeout(() => {
    inside.classList.remove("is-visible");
    inside.classList.remove("is-closing");
    cover.classList.remove("is-hidden");
    cover.classList.add("is-returning");
  }, 520);

  setTimeout(() => {
    cover.classList.remove("is-returning");
    animando = false;
  }, 1100);
}

cover.addEventListener("click", abrirConvite);

openInvitation.addEventListener("click", (event) => {
  event.stopPropagation();
  abrirConvite();
});

if (backToCover) {
  backToCover.addEventListener("click", voltarParaCapa);
}