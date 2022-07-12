import { useState } from "react";
import { mandatory } from "./mandatory";
import { additional } from "./additional";
import './App.css';
import shelf from "./shelf.jpg";

function App() {

  const [mandBook, setMandBook] = useState(0);
  const {id, author, title, cover} = mandatory[mandBook];

  const [addBook, setAddBook] = useState(additional);

  const [blueShelf, setBlueShelf] = useState(false);
  
  const [showMore, setShowMore] = useState(false);

  const previousBook = () => {
    setMandBook((book => {
      book --;
      if (book < 0) {
        book = mandatory.length - 1;
      }
      return book;
    }))
  }

  const nextBook = () => {
    setMandBook((book => {
      book++;
      if (book > mandatory.length - 1) {
        book = 0;
      }
      return book;
    }))
  }

  const removeBookTwo=(idTwo) => {
    let newAddBook = addBook.filter((item) => item.idTwo !== idTwo);
    setAddBook(newAddBook);
    if (newAddBook.length === 0) {
      setBlueShelf(true);
      document.querySelector(".delAllBtn").style.display = "none";
    } else {
      setBlueShelf(false)
    }
  }

  const deleteAll = () => {
    setAddBook([]);
    setBlueShelf(true);
    document.querySelector(".delAllBtn").style.display = "none";
  }

  const showText = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
      
    setShowMore(!showMore)

    if (dots.style.display === "none") {     
      dots.style.display = "inline";     
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.style.display = "block";
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Книги для летнего чтения после третьего класса</h1>
      </div>

      <div className="contOne">
        <div>
          <h2 className="header">Обязательные к прочтению книги</h2>
        </div>
        <div className="blockOne">
          <div>
            <img src={cover} height="251px" alt="cover" />
          </div>
    
          <div key={id}>
            <h3>{author}</h3>
          </div>
           
          <div>
            <h3>"{title}"</h3>
          </div>  
        
          <div>
            <button onClick={previousBook} className="btn btnOne">Предыдущая</button>
            <button onClick={nextBook} className="btn btnOne">Следующая</button>
          </div>
  
        </div>
      </div>

      <div>
        <div className="header">
          <h2>Дополнительные книги</h2>
        </div>
        <div className="contTwo">
          {addBook.map((bookTwo => {
            const {idTwo, authorTwo, titleTwo, coverTwo} = bookTwo;
            return (
              
                <div className="blockTwo" key={idTwo}>
                  <div>
                      <img src={coverTwo} height="255px" alt="cover" />
                  </div>
      
                  <div >
                    <h3>{authorTwo}</h3>
                  </div>
             
                  <div>
                    <h3>"{titleTwo}"</h3>
                  </div> 
  
                  <div>
                    <button  className="btn btnTwo" onClick={() => removeBookTwo(idTwo)}>Удалить книгу</button>
                  </div> 
                </div>
              
            )
          }))}
          
        </div>

          <div>
            {blueShelf ? <img className="blueShelf" src={shelf} alt="shelf" width="200px" /> : ""}
          </div>

        <div><button  className="btn delAllBtn" onClick = {() => deleteAll()}>Удалить все {addBook.length}</button></div>
      </div>

      <div>
        <h2 className="header">Советы родителям</h2>
        <h3 className="smallHeader">Как превратить летнее чтение в удовольствие</h3>
        <div>
        <div className='contThree'>
<div className="advice"> <p>Не заставляйте ребёнка читать все по порядку — вместе обсудите список, выберите то, что ребёнку наиболее интересно, и с этого начинайте.</p>
<hr/>
<p>Сколько нужно читать в день, существует ли норма? Если книга стандартного формата и без большого количества иллюстраций, то высчитать рекомендуемую норму легко: к классу, в который переходит ребенок, добавьте нолик. Первокласснику нужно читать по 10 страниц в день, а старшекласснику по 100. <span id="dots"></span></p> 

<div id="more"> <hr/><p>Для мотивации можно предложить ребёнку завести дневник, где он будет записывать автора, название книги, впечатление, которое получил от прочтения, мысли и выводы по поводу книги. </p>
<hr/>
<p>Мотивируйте ребёнка своим примером! Читайте сами — пусть он чаще видит вас с книгой. Дети подражают родителям — глядя на вас, ребёнок поймет, что чтение — это увлекательно и интересно. </p>
<hr/>
<p>Летние каникулы — это время отдыха и удовольствия! И чтение должно стать таким же удовольствием, а не скучной обязанностью. Не «наказывайте» чтением, разрешите ребёнку самому выбирать книги из списка, обсуждайте сюжет, персонажей, показывайте положительный пример — и вы увидите, как ребёнок сам потянется за книгой! </p></div> 

 <button onClick={() => showText()} id="moreBtn">{showMore ? "Свернуть" : "Показать ещё"}</button></div> 
            </div>
        </div>
      </div>
  
      <div className="by">
     <p>Photo by <a target="_blank" rel="noreferrer" href="https://unsplash.com/@mattartz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matt Artz</a> on <a target="_blank" rel="noreferrer" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
     
        <p ><a className="natalia" rel="noreferrer" href="https://natalia-bb.glitch.me" target="_blank">by Belova Natalia</a></p> 
      </div>

    </div>
  );
}

export default App;