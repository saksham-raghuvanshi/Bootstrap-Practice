
            document.getElementById('click1').onclick=function(){ 
                document.getElementById("click1").className += " active";


                document.getElementById("click2").className= "nav-link";
        
        document.getElementById('head').innerHTML="Today's Deals"
        document.getElementById('para').innerHTML="Get the Latest Deals on India Laptops Deals"
       
        
            }




    document.getElementById('click2').onclick=function(){ 
        document.getElementById("click2").className += " active";
        document.getElementById("click1").className = "nav-link";
        
        document.getElementById('head').innerHTML="Best Deals"
        document.getElementById('para').innerHTML="Get the Best Deals on India Laptops Deals"


       
        }
