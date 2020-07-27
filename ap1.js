(function()
{
    'use strict'
    angular.module('week1assign',[])
    .controller('ctrl',function($scope){
        $scope.lunchitems=""
    
        $scope.txt=""
        $scope.items=[]
        
        $scope.check=function()
        {
            if ($scope.lunchitems=="")
            {
                $scope.txt="Please Enter Data First"
                return;
            }
            $scope.items=$scope.lunchitems.split(',')
            var total=$scope.items.length;
            var count=0
            for (var i=0; i<total; i++) { 
                if ($scope.items[i]=="")
                {
                    ;
                }
                else{
                    count++;
                }
               
    
              } 
            
            
           
            if (count<=3)
            {
                $scope.txt="Enjoy!"
            }
            else
            {
                $scope.txt="Too much!"
            }
        
    }
});
               
            

    
})();