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
    
    Calc.prototype._regExp = function(){
    
        const _numberRegExp = /^\d{1,}(\.\d{1,})*$/;
        this._testNumber1 = _numberRegExp.test(this._collectionNumbers[0].value);
        this._testNumber2 = _numberRegExp.test(this._collectionNumbers[1].value);
        
        if(this._testNumber1 == true && this._testNumber2 == true){
            this._evaluation(document.activeElement.value);
        }
        
        if(this._testNumber1 == false || this._testNumber2 == false){
            this._errTestNumberFalse();
        }
        
        if(!this._collectionNumbers[0].value || !this._collectionNumbers[1].value){
            this._errBlankValues();
        }
    }
    
    Calc.prototype._evaluation = function(operator){
   
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
            this._scoreReplaceAndFixed();
    }
    
    Calc.prototype._scoreReplaceAndFixed = function(){
            this._score = this._score.toFixed(5);
            this._score = this._score.replace(/\.*(0)*$/,'');
    }
    
    Calc.prototype._errTestNumberFalse = function(){
        this._score = 'Uzyj wyłącznie cyfr od 0 do 9';
    }
    
    Calc.prototype._errBlankValues = function(){
        this._score = 'Wykryto puste pola, uzupełnij wszystkie pola';
    }
           
    Calc.prototype._result = function(e){
        e.preventDefault();
        this._regExp();
        this._res.innerText = this._score;
    }
    
new Calc('button');

})();
