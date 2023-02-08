class GeradorCpfCnpj {
    gerarCpf() {
        let array = []
        let multiplier = 10
        let result = 0
    
        for(let n = 1; n < 10; n++){
            array.push(Math.floor(Math.random() * 10))
        }
    
        for(let n = 0; n < 2; n++) {
            array.forEach($value => {
                result += $value * multiplier
                multiplier--
            })
    
            result = result % 11
            result = 11 - result
            result > 9 ? result = 0 : result = result
    
            array.push(result)
            if(n == 0){
                multiplier = 11
                result = 0
            }
        };
    
        return array.join('')
    };

    gerarCnpj() {
        let array = []
        let multiplier = 2
        let result = 0
    
        for(let n = 1; n < 9; n++){
            array.push(Math.floor(Math.random() * 10))
        }
    
        array.push(0, 0, 0, 1)
        
        for(let n = 0; n < 2; n++) {
            array.reverse()
    
            array.forEach($value => {
                result += $value * multiplier
                multiplier++
    
                multiplier > 9 ? multiplier = 2 : multiplier = multiplier
            })
    
            array.reverse()
    
            result = result % 11
            result = 11 - result
            result > 9 ? result = 0 : result = result
    
            array.push(result)
            if(n == 0){
                multiplier = 2
                result = 0
            }
        };
    
        return array.join('')
    };
}

export default GeradorCpfCnpj