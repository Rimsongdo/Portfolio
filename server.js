const element1=document.querySelector('.book1');
        const element2=document.querySelector('.book2');
        const element3=document.querySelector('.book3');
       
      
            
            element1.addEventListener('mouseenter', function() {
                document.getElementById('mes1').classList.remove('invis');
                 
             });
             element1.addEventListener('mouseleave', function() {
                 document.getElementById('mes1').classList.add('invis');
                
             });
             element2.addEventListener('mouseenter', function() {
                document.getElementById('mes2').classList.remove('invis');
                 
             });
             element2.addEventListener('mouseleave', function() {
                 document.getElementById('mes2').classList.add('invis');
                
             });
             element3.addEventListener('mouseenter', function() {
                document.getElementById('mes3').classList.remove('invis');
                 
             });
             element3.addEventListener('mouseleave', function() {
                 document.getElementById('mes3').classList.add('invis');
                
             });
       
        
        // Fonction pour gérer le clic sur le livre
        const handleBookClick = (book) => {
            let currentPage = 0;
            const pages = [
                book.querySelector('.front'),
                book.querySelector('.page1'),
                book.querySelector('.page2'),
                book.querySelector('.page3'),
                book.querySelector('.page4'),
                book.querySelector('.page5'),
                book.querySelector('.page6'),
                book.querySelector('.back')
            ];
    
            book.addEventListener('click', () => {
                if (currentPage < pages.length - 2) {
                    if (currentPage === 0) {
                        pages[currentPage].style.transform = 'rotateY(-180deg)';
                        pages[currentPage].style.width = '103%';
                        currentPage++;
                    } else {
                        pages[currentPage].style.transform = `rotateY(-179deg)`;
                        currentPage++;
                    }
                } else {
                    pages[0].style.width = '100%';
                    pages.forEach(page => page.style.transform = `rotateY(0deg)`);
                    currentPage = 0;
                }
            });
        };
    
        // Appliquer la gestion du clic sur chaque livre
        const book1 = document.querySelector('.book1');
        const book2 = document.querySelector('.book2');
        const book3 = document.querySelector('.book3');
    
        handleBookClick(book1);
        handleBookClick(book2);
        handleBookClick(book3);
    
   
    