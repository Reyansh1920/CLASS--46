class Form {
    constructor(){
        this.greeting = createElement('h2');
        this.nameInput  = createInput("");
        this.emailInput  = createInput("");
        this.title = createElement('h1');
        this.submit = createButton('submit');
        this.reset = createButton('reset');
        this.nameInput.style("width","160px");
        this.emailInput.style("width","160px");
        this.name = createElement('h3');
        this.email = createElement('h3');
        
        this.submit.style("width","100px");
        this.submit.style("height","40px");
        this.submit.style("background","yellow");

        this.reset.style("width","100px");
        this.reset.style("height","40px");
        this.reset.style("background","yellow");

        //Question:1
        this.q1 = createElement('h4',"1. Are you aware of COVID-19 ?")
        this.radio1 = createRadio('h4')
        this.radio1.option('YES')
        this.radio1.option('NO')
        this.radio1.style("width","60px")

        //Question:2
        this.q2 = createElement('h4',"2. Did you take COVID-19 test  ?")
        this.radio2 = createRadio('h4')
        this.radio2.option('YES')
        this.radio2.option('NO')
        this.radio2.style("width","60px")

        //Question:3
        this.q3 = createElement('h4',"3. Are you affected by CORONOVIRUS ?")
        this.radio3 = createRadio('h4')
        this.radio3.option('YES')
        this.radio3.option('NO')
        this.radio3.style("width","60px")

        //Question:4
        this.q4 = createElement('h4',"4. Did you take COVID-19 vaccine ?")
        this.radio4 = createRadio('h4')
        this.radio4.option('YES')
        this.radio4.option('NO')
        this.radio4.style("width","60px")

        //Question:5
        this.q5 = createElement('h4',"5. Are you recovered from CORONOVIRUS ?")
        this.radio5 = createRadio('h4')
        this.radio5.option('YES')
        this.radio5.option('NO')
        this.radio5.style("width","60px")

        this.d =  createElement('h4')
        this.di = createInput("write down few precations for COVID-19");
        this.di.style("width","420px");
        this.di.style("heigth","100px");
        
        
        
    }
        display(){
            this.title.html("COVID-19 SURVEY FORM")
            this.title.position(displayWidth/2-50,20)

            this.name.html("Your Name")
            this.name.position(displayWidth/2-40,125)
            this.nameInput.position(displayWidth/2+100,145)

            this.email.html("Your email")
            this.email.position(displayWidth/2-40,160)
            this.emailInput.position(displayWidth/2+100,175)

            this.q1.position(displayWidth/2-100,230)
            this.radio1.position(displayWidth/2+250,250)

            this.q2.position(displayWidth/2-100,300)
            this.radio2.position(displayWidth/2+250,320)

            this.q3.position(displayWidth/2-100,380)
            this.radio3.position(displayWidth/2+250,400)

            this.q4.position(displayWidth/2-100,480)
            this.radio4.position(displayWidth/2+250,500)

            this.q5.position(displayWidth/2-100,580)
            this.radio5.position(displayWidth/2+250,600)

            this.submit.position(displayWidth/2-50,682)
            this.reset.position(displayWidth/2+200,682)

            this.di.position(displayWidth/2-85,650)





        }       
}