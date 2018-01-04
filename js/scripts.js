'use strict';

(function(){


function Calc(button) {
    this._button = document.getElementById(button);
    this._collectionNumbers = document.querySelectorAll('input');
    this._res = document.getElementById('result');
    this._assignEvents();
}
    
    Calc.prototype._assignEvents = function(){    
        this._button.addEventListener('click', this._result.bind(this), true);      
    };
    
    Calc.prototype._evaluation = function(operator){
        
        const _numberRegExp = /^\d+$/;
        var testNumber1 = _numberRegExp.test(this._collectionNumbers[0].value);
        var testNumber2 = _numberRegExp.test(this._collectionNumbers[1].value);
        
        if(testNumber1 == false || testNumber2 == false){
            this._score = 'Uzyj wyłącznie cyfr od 0 do 9';
        }

        if(testNumber1 == true && testNumber2 == true){      
            this.num1 = parseFloat(this._collectionNumbers[0].value);
            this.num2 = parseFloat(this._collectionNumbers[1].value);
            
            switch(operator) {
                       
                case '+' :
                this._score = this.num1 + this.num2;
                break;
        
                case '-' :
                this._score = this.num1 - this.num2;
                break;
        
                case '*' :
                this._score = this.num1 * this.num2;
                break;
        
                case '/' :
                this._score = this.num1 / this.num2;
                break;
            }
        }
        
         if(!this._collectionNumbers[0].value || !this._collectionNumbers[1].value){
            this._score = 'Wykryto puste pola, uzupełnij wszystkie pola';
        }
    }
    
    Calc.prototype._result = function(e){
        e.preventDefault();
        this._evaluation(document.activeElement.value);
        this._res.innerText = this._score;
    }
    
new Calc('button');

})();
