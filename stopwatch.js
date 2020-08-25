function Stopwatch(){
    let duration=0, startTime, stopTime, running;

    this.start= function(){
        if(running){
            throw new Error("the stopwatch is already started.");
        }
        else{
          startTime= new Date();
          running=true;
          console.log("stopwatch started");
        }
    };

    this.stop= function(){
        if(!running){
            throw new Error("the stopwatch is already stopped.");
        }
        else{
            stopTime= new Date();
            running=false;
        }
        const seconds= (stopTime.getTime()- startTime.getTime())/1000;
        duration +=seconds;
    };
    this.reset= function(){
       duration=0;
       startTime=null;
       endTime=null;
       running=false;
    };
    Object.defineProperty(this, 'duration', {
      get:function(){return duration;}
    });
    
}