//Upcoming events

for(let i=0; i< filter_town.length; i++){
      
    if (filter_town[i].name== page){

        
        let body = document.createElement('section');
        body.classList.add("town");
        let class_html=`<div class="event">
        <h2>Upcoming Events:</h2>` 
        for(const event of filter_town[i].events){
            class_html+=`<p>${event}</p>`
        }

       class_html+= "</div>";
        body.innerHTML= class_html;
        
        
    body.setAttribute("class","events_section");

    document.querySelector('div#events_').appendChild(body);
    
    }
    
   
    

}

});