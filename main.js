/*var ruta=window.location;
    console.log(ruta);
    document.write("Estas en : " + ruta);*/
var  texto=document.getElementById("texto_lineas");
var boton=document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

var d=document.getElementById("dibujito");
var ancho=d.width;
//alert(ancho);
var lienzo= d.getContext("2d");
//console.log(lienzo);



function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //empieza un dibujo
    lienzo.strokeStyle=color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke(); //trazar raya
    lienzo.closePath();//termina el dibujo
 
}
function dibujoPorClick()
{
  
    console.log(texto);
    var lineas =parseInt(texto.value);
    var l=0;
    var yi,xf,yf,xi;
    var colorcito= "red";
    var nuevocolor="green";
    var colorn="yellow";
    var espacio=ancho/lineas;

    for (l=0;l<lineas;l++)
    //while(l<lineas)
    {
        yi= espacio*l;
        xf= espacio*(l+1);
        dibujarLinea(colorcito,0,yi,xf,300);
       // console.log("lineas" + l);
        //l = l + 1;
    }

    dibujarLinea(colorcito,1,1,1,299);
    dibujarLinea(colorcito,1,299,299,299);

    for (l=0;l<lineas;l++)
    //while(l<lineas)
    {
        yi= espacio*l;
        xf= espacio*(l+1);
        dibujarLinea(nuevocolor,300,yi,xf,0);
       // console.log("lineas" + l);
        //l = l + 1;
    }

    dibujarLinea(nuevocolor,1,1,1,299);
    dibujarLinea(nuevocolor,1,299,299,299);

    for (l=0;l<lineas;l++)
    //while(l<lineas)
    {
        yi= espacio*l;
        xf= espacio*(l+1);
        dibujarLinea(colorn,yi,0,300,xf);
        //console.log("lineas" + l);
        //l = l + 1;
    }

    dibujarLinea(colorn,1,1,1,299);
    dibujarLinea(colorn,1,299,299,299);


    
   // alert("giuli " + x);
}