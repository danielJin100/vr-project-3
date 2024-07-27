AFRAME.registerComponent("movement", {
    schema:
        {   
            lookYaw: {type: "number", default: 0},
            lookPitch: {type: "number", default: 0},
            lookRoll: {type: "number", default: 0},
            yaw: {type: "number", default: 0},
            pitch: {type: "number", default: 0},
            roll: {type: "number", default: 0},
        },
    init: function(){
        console.log(this.data.lookPitch)
        window.addEventListener("keydown",(e)=>{
            if(e.key=="w"){
                this.data.lookPitch-=0.02
                if(this.data.lookPitch <-3){this.data.lookPitch=-3}
            }

            if(e.key=="a"){
                this.data.lookYaw-=0.02
                if(this.data.lookYaw <-3){this.data.lookYaw=-3}
            }

            if(e.key=="s"){
                this.data.lookPitch+=0.02
                if(this.data.lookPitch > 3){this.data.lookPitch=3}
                
            }  
            
            if(e.key=="d"){
                this.data.lookYaw+=0.02
                if(this.data.lookYaw >3){this.data.lookYaw=3}
            }
            if(e.key=="q"){
                this.data.lookRoll-=0.02
                if(this.data.lookRoll <-3){this.data.lookRoll=-3}
            }
            if(e.key=="e"){
                this.data.lookRoll+=0.02
                if(this.data.lookRoll >3){this.data.lookRoll=3}
            }       
        })
        window.addEventListener("keyup", (e)=>{
            if(e.key=="w" || e.key=="s"){
                this.data.lookPitch=0
            }
            if(e.key=="a" || e.key=="d"){
                this.data.lookYaw=0
            }
            if(e.key=="q" || e.key=="e"){
                this.data.lookRoll=0
            }
        })

    },
    tick: function(){
        console.log(this.data.lookPitch)
        this.data.pitch += this.data.lookPitch
        this.data.yaw -= this.data.lookYaw
        this.data.roll -= this.data.lookRoll
        this.data.pitch %= 360
        this.data.yaw %= 360
        this.data.roll %= 360
        var airplane = document.querySelector("#airplane")
        var rotation = airplane.getAttribute("rotation")
        rotation.x = this.data.pitch
        rotation.y = this.data.yaw
        rotation.z = this.data.roll
        airplane.setAttribute("rotation", rotation)
    }
})