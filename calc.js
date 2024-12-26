// ADDITION FUNCTION


function add(e,f) {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    c =  Number (a) + Number (b);
    document.getElementById("answer1").value = c;
   
}
// OR ADDITION FUNCTION
    // function addNumber1(x,y)
    // {return  (Number (x) + Number (y))
    // }

    // function add(e,f)
    // {
    //     let a = (document.getElementById("number1").value);
    //     let b = (document.getElementById("number2").value);
        
    //     document.getElementById("answer1").value = addNumber1(a,b);
    // }



// SUBTRACTION FUNCTION
function subNums(x,y){
    return Number(x) - Number (y)
}
function sub(e,f){
    a = document.getElementById("number1").value;
    b = document.getElementById("number2").value;
    // let c = subNums(a,b)
    c = a - b;
    document.getElementById("answer2").value = c
}

// MULTIPLICATION FUNCTION
function multiply(a,b){
    return Number(a) * Number(b)
}
function mul(e,f){
    e = document.getElementById("number1").value;
    f = document.getElementById("number2").value;
//    let g = e * f;
    g = multiply(e,f);
    document.getElementById("answer3").value = g
}

// DIVISION FUNCTION
 
        // function divNumber(j,k)
        // {
        //     return (Number(j)/Number(k));
        // }
        // function div()
        // {
        //     let g = document.getElementById("number1").value;
        // let h = document.getElementById("number2").value;
        
        // document.getElementById("answer4").value = divNumber(g,h);
        // }



function divNums (a,b){
    return  Number(a)/Number(b)
}

function div(){
    let e = document.getElementById("number1").value;
    let f = document.getElementById("number2").value;
    u = divNums (e,f);
    
    document.getElementById("answer4").value = u;

}

// AREA OF A CUBOID
function areaofcub(a,b,c){
    return Number (a) * Number(b) * Number (c)
}

function area(){
    e = document.getElementById("number1").value;
    f = document.getElementById("number2").value;
    g = document.getElementById("number3").value;
    h = areaofcub(e,f,g)
    document.getElementById("answer5").value = h

}

//   AREA OF TRIANGLE   
    function areaOfTriangle(a,b)
        {
            return (1/2 * Number(a) * Number(b) )
        }
        function area1()
        {
        let e = document.getElementById("number1").value;
        let f = document.getElementById("number2").value;
        

       document.getElementById("answer6").value = areaOfTriangle(e,f);

        
    }
    
 // AREA OF TRIANGLE USING HERO'S FORMULAE
    {
        function heroFormulae(df,dg,dh)
        {
            let dp = (Number(df) + Number(dg) + Number(dh)) / 2
        return ( dp * (dp - Number(df)) * (dp - Number(dg)) * (dp - Number(dh)) )
        }
    }
    
    function hero()
    {
        let dj = document.getElementById("number1").value;
       let dk = document.getElementById("number2").value;
       let dl =  document.getElementById("number3").value;

       document.getElementById("answer7").value = Math.sqrt (heroFormulae(dj,dk,dl))
    }





























//     // SUBTRACTION Function
//     function subNumber2(p,q)
//     {
//         return (Number(p) - Number(q))
//     }
//     function sub(c,d)
//     {
//         let e = document.getElementById("number1").value;
//         let f = document.getElementById("number2").value;

//         document.getElementById("answer2").value = subNumber2(e,f);
//     }
//     // MULTIPLICATION FUNCTION
//     {
//         function mulnumber(m,n)
//     {
//         return (Number(m) * Number(n))
//     }
//     function mul(s,t)
//     {
//         let u = document.getElementById("number1").value;
//         let v = document.getElementById("number2").value;

//         document.getElementById("answer3").value = mulnumber(u,v);

//     }
    
//     }
//     // DIVISION FUNCTION
//     {
//         function divNumber(j,k)
//         {
//             return (Number(j)/Number(k));
//         }
//         function div()
//         {
//             let g = document.getElementById("number1").value;
//         let h = document.getElementById("number2").value;
        
//         document.getElementById("answer4").value = divNumber(g,h);
//         }

//     }
//     // AREA OF CUBOID 
//     function areaofcuboid(d,s,t)
//     {
//         return (Number(d) * Number(s) * Number(t))
//     }
// 22
//     function area()
//     {
//        let ab = document.getElementById("number1").value;
//        let bd = document.getElementById("number2").value;
//        let cv =  document.getElementById("number3").value;

//         document.getElementById("answer5").value = areaofcuboid(ab,bd,cv);
//     }
    
//     // AREA OF TRIANGLE   
//     function areaOfTriangle(vb,vn)
//         {
//             return (1/2 * Number(vb) * Number(vn) )
//         }
//         function area1()
//         {
//         let er = document.getElementById("number1").value;
//         let et = document.getElementById("number2").value;
        

//        document.getElementById("answer6").value = areaOfTriangle(er,et);

        
//     }
//     // AREA OF TRIANGLE USING HERO'S FORMULAE
//     {
//         function heroFormulae(df,dg,dh)
//         {
//             let dp = (Number(df) + Number(dg) + Number(dh)) / 2
//         return ( dp * (dp - Number(df)) * (dp - Number(dg)) * (dp - Number(dh)) )
//         }
//     }
    
//     function hero()
//     {
//         let dj = document.getElementById("number1").value;
//        let dk = document.getElementById("number2").value;
//        let dl =  document.getElementById("number3").value;

//        document.getElementById("answer7").value = Math.sqrt (heroFormulae(dj,dk,dl))
//     }


