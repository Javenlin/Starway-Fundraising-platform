 //******** 文字控制 ********
            $(document).ready(function(){

                $('.Y_Ltitle p:nth-of-type(1)').textillate({
                    // selector: '.texts',
                    loop: false,
                    minDisplayTime: 500,
                    initialDelay: 0,
                    in: {
                      effect: 'bounceIn',
                      delayScale: 1.5,
                      delay: 50,
                      sync: false,
                      reverse: false,
                      shuffle: false,
                      callback: function () {
                         $('.Y_Ltitle p:nth-of-type(1)').css('font-style', 'italic');
                      }
                    }
                });

                 $('.Y_Ltitle p:nth-of-type(2)').textillate({
                    // selector: '.texts',
                    loop: false,
                    minDisplayTime: 0,
                    initialDelay: 1000,
                    in: {
                      effect: 'rotateInUpRight',
                      delayScale: 1.5,
                      delay: 50,
                      sync: false,
                      reverse: false,
                      shuffle: false,
                      callback: function () {
                         $('.Y_Ltitle p:nth-of-type(2)').css('font-style', 'italic');
                      }
                    }
                });
                    $('.Y_Ltitle p:nth-of-type(3)').textillate({
                    // selector: '.texts',
                    loop: false,
                    minDisplayTime: 50,
                    initialDelay: 2000,
                    in: {
                      effect: 'fadeInLeftBig',
                      delayScale: 1.5,
                      delay: 50,
                      sync: false,
                      reverse: false,
                      shuffle: false,
                      callback: function () {
                         $('.Y_Ltitle p:nth-of-type(3)').css('font-style', 'italic');
                      }
                    }
                });
            });

        //******** 泡泡控制 ********
        bubbly({
        //背景顏色
        colorStart: '#4c004c',
        colorStop: '#1a001a',
        bubbleFunc:() => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`,
        animate: true, // default is true
        blur: 50, // default is 4
        //泡泡的數量
        bubbles: 100, // default is Math.floor((canvas.width + canvas.height) * 0.02);
         // canvas: document.querySelector("#background"), // default is created and attached
        compose: "darker", // default i/s "lighter"
         shadowColor: "#fff", // default is #fff
         angleFunc: () => Math.random() * Math.PI * 2, // default is this
         //泡泡的速度
         velocityFunc: () =>1.3 + Math.random() * 0.5, // default is this
         //泡泡的大小
         radiusFunc: () => 4 + Math.random() * 25 // default is 4 + Math.random() * width / 25

        });

        function configToText(config){
            var configText = "bubbly({\n";
            Object.keys( config ).map(function(k,idx,arr){

                if ( typeof config[k] === 'string' ){
                    configText += "  " + k + ": '"  + config[k].toString() + "'";
                } else {
                    configText += "  " + k + ":"  + config[k].toString();
                }

                if( idx < arr.length-1){
                    configText += ",";
                }
                configText += "\n";
            });
            configText += "});";
            return configText;
        }

        var clipboard = new ClipboardJS('.config', {
            text: function(trigger) {
                var bubblyConfig = configs[trigger.nextElementSibling.getAttribute("data-config-nr")];
                var bubblyConfigText = configToText( bubblyConfig );
                var $notification = document.querySelector(".notification");
                    $notification.textContent = "Code copied to Clipboard";
                    $notification.style.opacity = 1;
                setTimeout(function(){ $notification.style.opacity = /* $code.style.opacity = */ 0; }, 2000)
                return bubblyConfigText;
            }
        });

        clipboard.on('success', function(e) {
            console.info('Text:', e.text);
            e.clearSelection();
        });

        document.addEventListener("click", function (e) {

            if (e.target.hasAttribute("data-config-nr")) {

                document.body.removeChild(document.querySelector("canvas"));
                var bubblyConfig = configs[e.target.getAttribute("data-config-nr")];
                bubbly(bubblyConfig);

            }
        });