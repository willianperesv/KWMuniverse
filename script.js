
        
         function calcular() {
            var seupeso = document.getElementById('peso')
            var planet = document.querySelector('input[name="planet"]:checked').value;
            var speso = Number(seupeso.value)
        
            var res = document.getElementById('calc')
            var img = document.createElement('img')
            
            function clear() {
               document.getElementById('peso').value = ""
               var radio = document.querySelector('input[type=radio][name=planet]:checked')
               radio.checked = false
            }
            
            
            
            switch(planet) {
       
                case "mercurio":
                  
                    var mercurio = speso/10 * 0.37
                    
                    img.setAttribute('src', 'mercurio.png')
                    res.innerHTML = `Seu peso em Mercúrio é ${mercurio.toFixed(2)}`
                    clear()
                    break
                  case "venus":
                 
                    var venus = speso/10 * 0.88
                    img.setAttribute('src', 'venus.png')
                  
                    res.innerHTML = `Seu peso em Vênus é ${venus.toFixed(2)}`
                    clear()
                    break
                case "marte":
                  
                    var marte = speso/10 * 0.38
                    img.setAttribute('src', 'marte.png')
                   
                    res.innerHTML = `Seu peso Marte é ${marte.toFixed(2)}`
                    clear()
                    break
                case "jupiter":
                 
                    var jupiter = speso/10 * 2.64
                    img.setAttribute('src', 'jupiter.png')
                  
                    res.innerHTML = `Seu peso em Júpiter é ${jupiter.toFixed(2)}`
                    clear()
                    break
                case "saturno":
               
                    var saturno = speso/10 * 1.15
                    img.setAttribute('src', 'saturno.png')
                    
                    res.innerHTML = `Seu peso em Saturno é ${saturno.toFixed(2)}`
                    clear()
                    break 
                case "urano":
                
                    var urano = speso/10 * 1.17
                    img.setAttribute('src', 'urano.png')
                    res.innerHTML = `Seu peso em Urano é ${urano.toFixed(2)}`  
                    clear()  
                    break           
                default:    

            }
            res.appendChild(img)
        }
