

    const inputValue = document.getElementById('weightInput')
    
    const resultant = document.getElementById('result')
    
    const form = document.getElementById('weight-form')

    


    form.addEventListener('submit',(e)=>{

        e.preventDefault();
        console.log('qwerty');

        (document.getElementById('submit-heading')).innerText('Click on a planet to see your weight')

    }
    )


    const Mercury=()=>{
        
        let weightValue =Number(inputValue.value)
        resultant.innerText=   `Weight on Mercury : ${Math.floor(weightValue * 0.38).toFixed(2)} kg`
    }

    const Venus=()=>{
        
        let weightValue =Number(inputValue.value)
        resultant.innerText=   `Weight on Venus : ${(weightValue * 0.91).toFixed(2)} kg`
    }
    
    const Earth=()=>{
        let weightValue =Number(inputValue.value)
        
        resultant.innerText=  `Weight on Earth : ${(weightValue).toFixed(2)} kg`
    }
    
    const Mars=()=>{
        let weightValue =Number(inputValue.value)
        
        resultant.innerText=  `Weight on Mars : ${(weightValue * 	0.166).toFixed(2)} kg`
    }

    const Jupiter=()=>{
        let weightValue =Number(inputValue.value)
        
        resultant.innerText=  `Weight on Jupiter : ${(weightValue * 	2.34).toFixed(2)} kg`
    }
    
    const Saturn=()=>{
        let weightValue =Number(inputValue.value)
        
        resultant.innerText=  `Weight on Saturn : ${(weightValue * 	1.06).toFixed(2)} kg`
    }

    const Uranus=()=>{
        let weightValue =Number(inputValue.value)
        
        resultant.innerText=  `Weight on Uranus : ${(weightValue * 	0.92).toFixed(2)} kg`
    }
    

    const Neptune=()=>{
        let weightValue =Number(inputValue.value)
        
        resultant.innerText=  `Weight on Neptune : ${(weightValue * 	1.19).toFixed(2)} kg`
    }