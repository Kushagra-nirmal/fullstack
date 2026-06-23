var h = document.getElementById("main");
  console.log(h);//Print Elements
    console.log(h.innerHTML);//Print Content of Element
    h.innerHTML="Good Job Manjesh";//Update the Content of Element
      console.log(h.innerHTML);//Print Content of Element

      var p1 = document.getElementsByTagName("p");//accessing all Para Tags
       console.log(p1.length);//Total Number of para elements
        console.log(p1[0].innerHTML);//Printing Content of First Para element
       
       for(let i = 0;i<p1.length;i++)
       {
         console.log(p1[i].innerHTML)
         p1[i].innerHTML ="My Custom Paragraph "+1
       }

       var list = document.getElementsByClassName("second");//Access element by class name
        console.log(list[0].innerHTML);//Printing value of first element for tha class
        x[0].value="Good Bye";
        console.log(x[])
        document.getElementById
        document.getElementsByTagName
        document.getElementsByClassName
        document.getElementsByName