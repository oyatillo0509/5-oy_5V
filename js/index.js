document.addEventListener("DOMContentLoaded", () => {
  const bosil = document.querySelector(".menu button");
  const l_text = document.querySelector(".menu a:first-of-type");
  const r_text = document.querySelector(".menu a:last-of-type");
  const l_block = document.querySelector(".m_left");
  const r_block = document.querySelector(".m_right");
  const mal2_b = document.querySelector(".mal2");
  const mal2 = document.querySelector(".mal2 a");
  const mal2_p = document.querySelector(".mal2 p");
  const mal = document.querySelector(".mal");
  const body = document.body;

  function ozgar() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      l_text.style.display = "none";
      r_text.style.display = "block";
      mal2.style.color = "#18181B";
      mal2_p.style.color = "#3F3F46";
      mal2_b.style.display = "block";
      mal.style.display = "none";
    } else {
      l_text.style.display = "block";
      r_text.style.display = "none";
      l_block.style.backgroundColor = "#18181b";
      r_block.style.backgroundColor = "#f4f4f5";
      mal2_b.style.display = "none";
      mal.style.display = "block";
    }
  }

  bosil.addEventListener("click", ozgar);
});

