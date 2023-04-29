(async function getMenu(){
    const url = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';
    let response = await fetch(url);
    let data = await response.json();
    
    data.forEach(val=> {
        console.log(val.name," - ", val.price);
    });
    
    let order = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order1: "Curry", order2: "cupcake", order3: "Chocolate Cake"})
        },2500)
    });
    order.then(Order);
  }())
  
  function Order(value){
    console.log(value);
    let cook = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order_status:true, paid:false})
        },1500)
    });
    cook.then(orderPrep);
  }
  
  
  function orderPrep(value){
    console.log(value);
    let pay = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order_status:true, paid:true})
        },1000)
    });
    pay.then(payOrder);
  }
  
  function payOrder(val){
    console.log(val);
    if(val.paid==true){
        thankyouFnc();
    }
  }
  
  function thankyouFnc(){
    alert("lets eat and enjoy!");
  }