const calc = () => {
  let calcBlock = document.querySelector('.calc-block')
 let calcType = document.getElementById('calc-type');
 let calcTypeMaterial = document.getElementById('calc-type-material');
 let square = document.getElementById('calc-input');
 let total = document.getElementById('calc-total');
 let typeValueMaterial;
 let  calcTypeBalkon;
  if(calcBlock){
    square.addEventListener('input',(e)=>{
  e.target.value = e.target.value.replace(/\D/, "");
  });
 const countSum = () => {
   calcTypeBalkon = calcType.options[calcType.selectedIndex].value;
   typeValueMaterial = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
   total.value = Math.floor(calcTypeBalkon*typeValueMaterial * square.value);
  
 };

calcBlock.addEventListener("change", (event) => {
  let target = event.target;
   if (target.matches("select") || target.matches("input")) {
      countSum();
    }
});
    
  }
  
}

export default calc;
