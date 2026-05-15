const cover = document.getElementById("cover");
const inside = document.getElementById("inside");
const openInvitation = document.getElementById("openInvitation");
const backToCover = document.getElementById("backToCover");

let animando = false;

function abrirConvite() {
  if (animando) return;
  animando = true;
  
  iniciarMusica();

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
const weddingMusic = document.getElementById("weddingMusic");
const musicPlayer = document.getElementById("musicPlayer");
const musicToggle = document.getElementById("musicToggle");
const musicProgressBar = document.getElementById("musicProgressBar");

let musicaIniciada = false;

function iniciarMusica() {
  if (!weddingMusic || !musicPlayer) return;

  musicPlayer.classList.add("is-visible");

  if (!musicaIniciada) {
    weddingMusic.volume = 0.55;
    weddingMusic.play().catch(() => {});
    musicaIniciada = true;
  }
}

if (musicToggle) {
  musicToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (weddingMusic.paused) {
      weddingMusic.play();
      musicToggle.textContent = "⏸";
    } else {
      weddingMusic.pause();
      musicToggle.textContent = "▶";
    }
  });
}

if (weddingMusic) {
  weddingMusic.addEventListener("timeupdate", () => {
    if (!weddingMusic.duration) return;

    const progresso = (weddingMusic.currentTime / weddingMusic.duration) * 100;
    musicProgressBar.style.width = `${progresso}%`;
  });
}