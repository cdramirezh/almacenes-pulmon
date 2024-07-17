import { useEffect, useState, useRef  } from "react"

const Firm = ({finishLoadingCallback}) => {

    finishLoadingCallback = finishLoadingCallback || (() => {});

    const [hasPageLoaded, setHasPageLoaded] = useState(false);

    const canvasRef = useRef(null);

    useEffect(() => {
        if (!hasPageLoaded && canvasRef.current) {
            setHasPageLoaded(true);

            //Aqui va el resto del codigo
            const canvas = canvasRef.current;
            const parent = canvas.parentNode;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            let ctx = canvas.getContext("2d"),
            flag = false,
            prevX = 0,
            currX = 0,
            prevY = 0,
            currY = 0,
            dot_flag = false,
            x = "black",
            y = 2;
            // get the bounds of the canvas element
            const getBounds = () => {
                return canvas.getBoundingClientRect();
            }
           
            // get the offset of the canvas relative to the document
            const getOffset = () => {
                var bounds = getBounds();
                return {
                x: bounds.left + window.scrollX,
                y: bounds.top + window.scrollY,
                };
            }
            const draw = () => {
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(currX, currY);
                ctx.strokeStyle = x;
                ctx.lineWidth = y;
                ctx.stroke();
                ctx.closePath();
            }
            const findxy = (res, e, isTouch) => {
                e.preventDefault();
                if (res === 'down') {
                    prevX = currX;
                    prevY = currY;
                    let offset = getOffset();
                    currX = (isTouch ? e.touches[0].clientX : e.clientX) - offset.x;
                    currY = (isTouch ? e.touches[0].clientY : e.clientY) - offset.y;
           
                    flag = true;
                    dot_flag = true;
                    if (dot_flag) {
                        ctx.beginPath();
                        ctx.fillStyle = x;
                        ctx.fillRect(currX, currY, 2, 2);
                        ctx.closePath();
                        dot_flag = false;
                    }
                }
                if (res === 'up' || res === "out") {
                    flag = false;
                }
                if (res === 'move') {
                    if (flag) {
                        prevX = currX;
                        prevY = currY;
                        let offset = getOffset();
                        currX = (isTouch ? e.touches[0].clientX : e.clientX) - offset.x;
                        currY = (isTouch ? e.touches[0].clientY : e.clientY) - offset.y;
                        draw();
                    }
                }
            }
         
            const events = [
                {event: 'mousemove',action: (e) => findxy('move', e, false)},
                {event: 'mousedown',action: (e) => findxy('down', e, false)},
                {event: 'mouseup',action: (e) => findxy('up', e, false)},
                {event: 'mouseout',action: (e) => findxy('out', e, false)},
                //Touch events
                {event: 'touchmove',action: (e) => findxy('move', e, true)},
                {event: 'touchstart',action: (e) => findxy('down', e, true)},
                {event: 'touchend',action: (e) => findxy('up', e, true)},
            ]
         
            events.forEach(event => {
                canvas.addEventListener(event.event, event.action, false);
            });

            const clear = () => ctx.clearRect(0, 0, this.w, this.h);
            const exportImage = () => canvas.toDataURL('image/png');

            finishLoadingCallback({clear, exportImage})

        }

    }, [hasPageLoaded,finishLoadingCallback]);

    return (
        <canvas ref={canvasRef}/>
    )

}

export default Firm