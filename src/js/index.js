// Write your code here...
import { getMessages, getComments } from "../api";
import { renderContent } from "../utils";
const messagesContainer = document.querySelector("#messages");
const getMessageBtn = document.querySelector("#getMessages");
const spinner = document.querySelector("#spinner");
const errorEl = document.querySelector("#error");

getMessageBtn.addEventListener("click", () => {
  spinner.style.display = "block";
  messagesContainer.innerHTML = "";
  error.innerText = "";

  Promise.allSettled([getMessages(), getComments()])
    // .then((res) =>
    //   res[1].status === "rejected" ? Promise.reject(res[1].reason) : res
    // )
    .then(([{ value: messages }, { value: comments }]) =>
      renderContent(messages, comments, messagesContainer)
    )
    //.catch((error) => (errorEl.innerText = `${error}`))
    .finally(() => (spinner.style.display = "none"));
});
