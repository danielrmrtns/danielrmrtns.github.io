const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
        if (idx == 1){
            window.location = "about"
        } else if (idx == 9){
			window.open("https://scholar.google.com/citations?user=bpLyzrAAAAAJ&hl=pt-PT");			
        }	
    });
});