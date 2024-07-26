

    
        const questions = [
            {
                question: "Which among the following have a ‘mixed heart’ ,that is the heart in which the oxygenated and the deoxygenated blood is mixed?",
                answers: [
                    { text: "Birds", correct: "false" },
                    { text: "Fishes", correct: "false" },
                    { text: "Reptiles", correct: "true" },
                    { text: "Nematodes", correct: "false" }
                ]
            },
            {
                question: "When air is blown from mouth into a test-tube containing lime water, the lime water turns milky due to the presence of ?",
                answers: [
                    { text: "water vapour", correct: "false" },
                    { text: "nitrogen ", correct: "false" },
                    { text: "oxygen  ", correct: "false" },
                    { text: "carbon dioxide  ", correct: "true" }
                ]
            },
            {
                question: "Generally, metals are solid in nature. Which one of the following metals is found in liquid state at room temperature ?",
                answers: [
                    { text: "Hg ", correct: "true" },
                    { text: "Cr", correct: "false" },
                    { text: "Fe", correct: "false" },
                    { text: "Na ", correct: "false" }
                ]
            },
            {
                question: "Tomato is a natural source of which acid ",
                answers: [
                    { text: "Tartaric acid ", correct: "false" },
                    { text: "Oxalic acid", correct: "true" },
                    { text: "Citric acid", correct: "false" },
                    { text: "Acetic acid ", correct: "false" }
                ]
            },
            {
                question: "Due to which process dry raisins when kept in water swell up?",
                answers: [
                    { text: "Sedimentation ", correct: "false" },
                    { text: "Distillation", correct: "false" },
                    { text: "Decantation", correct: "false" },
                    { text: "Osmosis ", correct: "true" }
                ]
            },
            {
                question: "A transition from the solid to gas phase with no intermediate liquid stage is called?",
                answers: [
                    { text: " Evaporation ", correct: "false" },
                    { text: "Sublimation", correct: "true" },
                    { text: "Adsorption", correct: "false" },
                    { text: "Solid Phase extraction ", correct: "false" }
                ]
            },
            {
                question: "In which of the following the sound cannot travel?",
                answers: [
                    { text: " solid ", correct: "false" },
                    { text: "liquid", correct: "false" },
                    { text: "gases", correct: "false" },
                    { text: "Vacuum ", correct: "true" }
                ]
            },{
                question: "What is the main role of transpiration in plants?",
                answers: [
                    { text: " releasing water ", correct: "true" },
                    { text: "loosing food", correct: "false" },
                    { text: "making food", correct: "false" },
                    { text: "making water ", correct: "false" }
                ]
            },
            {
                question: "What are plants also called?",
                answers: [
                    { text: " Consumers ", correct: "false" },
                    { text: "Producers", correct: "false" },
                    { text: "Herbivores", correct: "true" },
                    { text: "Decomposers ", correct: "false" }
                ]
            },
            {
                question: "The heavy particles that settle down are called?",
                answers: [
                    { text: " solvents ", correct: "false" },
                    { text: "sediments", correct: "true" },
                    { text: "solute", correct: "false" },
                    { text: "all of these ", correct: "false" }
                ]
            }
        ];
        let score=0
        let questionIndex=0

        const displayQuestionNo=document.querySelector(".displayQuestionNo")
        displayQuestionNo.textContent=`Question :${(questionIndex+1)}/10`
        const scoreDisplay=document.querySelector(".score")
        scoreDisplay.textContent=`Score:${score}`


        function displayNextQuestion(){
            let currentQuestion= questions[questionIndex]
            let questionHeader=document.querySelector(".Questions")
            

            questionHeader.textContent=currentQuestion.question
            let options=document.querySelector(".options")
            options.innerHTML = "";

            currentQuestion.answers.forEach((answer)=>{
           
         

                
            let optionList=document.createElement("div")
            optionList.classList.add("option-list")
                optionList.textContent=answer.text
                options.appendChild(optionList);
               
                optionList.addEventListener("click",()=>{
                    if(answer.correct==="true"){
                        optionList.style.backgroundColor="green"
                        score++
                        scoreDisplay.textContent=`Score:${score}`
                      

                    }  
                    else{
                         optionList.style.backgroundColor="red"
                         
                    }
                })
                

            })
           


        }
         displayNextQuestion()
         

        let nextBtn=document.querySelector(".nextBtn")
        nextBtn.addEventListener("click",()=>{
            if(questionIndex >= questions.length - 1){
                alert(`Thank you for the attempt !! QUIZ IS OVER ,your SCORE IS ${score} `)
            }
            else{
                questionIndex++
            
                displayQuestionNo.textContent=`Question :${questionIndex+1}/10`
               
               
                displayNextQuestion()

            }
           
            

        })
        
