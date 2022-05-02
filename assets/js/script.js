let adviceId = document.querySelector("#advice-id");
let adviceDescription = document.querySelector("#advice-text");
let adviceDescription_outer = document.querySelector("#advice-text_p");
let genertateBtn = document.querySelector("#generate");

const generateFunc = () => {
  adviceId.textContent = "";
  adviceDescription.textContent = "";
  return Math.floor(Math.random() * 224) + 1;
};

async function generateAdvice() {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${generateFunc()}`);
    if (!response.ok) {
      throw new Error(`Could not get quote.`);
    }
    const json = await response.json();
    adviceId.textContent += json.slip.id;
    adviceDescription.textContent += `"${json.slip.advice}"`;
  }
  catch(error) {
    // console.error(`Could not get products: ${error}`);
    adviceDescription.textContent = "Unable to retrieve quote.";
  }  
}

generateAdvice();

genertateBtn.addEventListener("click", generateAdvice);
