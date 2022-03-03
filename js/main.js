document.querySelector('button').addEventListener('click', getFetch)

// localStorage.clear()

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(response => response.json()) // parse response as JSON
      .then(data => {

        if (!localStorage.getItem("books")) {
          localStorage.setItem("books", data.title)
        }else {
          let books = localStorage.getItem("books") + "," + data.title
          localStorage.setItem("books", books)
        }
        console.log(data.title)

        document.querySelector('h2').innerText = localStorage.getItem("books");
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// 9781565113305
