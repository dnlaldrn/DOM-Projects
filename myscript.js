function subscribe(){
    const subscribeButton = document.querySelector('.subscribe')
    if(subscribeButton.innerHTML == 'Subscribe'){
      subscribeButton.innerHTML = 'Subscribed'
      subscribeButton.classList.add('is-subscribed')
      
      
    }else{
      subscribeButton.innerHTML = 'Subscribe'
      subscribeButton.classList.remove('is-subscribed')
    }
    

  }
  function calculate(){
    const costofOrder = document.querySelector('.cost')
    let cost = parseFloat(costofOrder.value)
    const finalCost = document.querySelector('.finalCost')
    if(cost < 40){
      cost += 10;
     finalCost.innerHTML = `$${cost}`
    }else{
      finalCost.innerHTML = `$${cost}`

    }
  }
  function enter(event){
    if(event.key === "Enter"){
      calculate();
    }

  }