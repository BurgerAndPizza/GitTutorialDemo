var obj = {

    val: 100
    
    }
    
    function fun(a, b , c){
    
    console.log(this.val + a + b + c)
    
    }
    
    const fun2 = fun.bind(obj)
    
    
    
    fun2(1, 2,3)
    
    