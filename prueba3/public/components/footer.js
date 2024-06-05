// variable
let footer = document.querySelector("footer")

// insertion

footer.innerHTML = `
<footer class="d-flex flex-column align-items-center gap-2 bg-black ">
<section class="d-flex justify-content-evenly align-items-start  pb-3 mb-5 link">
    <article class="footer-content">
        <h2 class="mb-4">Atlantica</h2>
        <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rem quam accusamus cumque neque, 
        error in odit corrupti debitis natus eligendi 
        officia adipisci quos, saepe fugiat asperiores unde, 
        assumenda a velit.</p>
    </article>
    <article>
        <h2>LINKS</h2>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
    </article>
    <article>
        <h2>LINKS</h2>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
    </article>
    <article>
        <h2>LINKS</h2>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
    </article>
</section>
<section>
    <article class="d-flex align-items-center justify-content-center gap-4 register mb-5">
        <p class="m-0">Register for FREE</p>
        <button>SIGN UP!</button>
    </article>
</section>
<section class= "pb-2">
    <article class="d-flex gap-2 social-media justify-content-center">
        <div class="facebook-div icon"><i class="bi bi-facebook"></i></div>
        <div class="twitter icon"><i class="bi bi-twitter"></i></div>
        <div class="google-div icon"><i class="bi bi-youtube"></i></div>
        <div class="linked-in-div icon"><i class="bi bi-linkedin"></i></div>
        <div class="instagram icon"><i class="bi bi-instagram"></i></div>
    </article>
</section>
<hr>
<section class="copyright">
    <article class="d-flex gap-2 justify-content-center">
        <i class="bi bi-c-circle"></i>
        <p>2024 Copyright: <span>MD Bootstrap</span></p>
    </article>
</section>
</footer>
`