let img =document.getElementById("img")
let upload =document.getElementById("uploadfile")
let inp =document.getElementById("upload")
let rangegrayscale =document.getElementById("grayscale")
let rangecontrast =document.getElementById("contrast")
let rangebrightness =document.getElementById("brightness")
let rangesaturate =document.getElementById("saturate")
let rangeblur =document.getElementById("blur")
let rangesepia =document.getElementById("sepia")
let hueRotate =document.getElementById("hue_rotate")
let reset = document.getElementById("reset")
let download = document.getElementById("download")
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
// console.log(photo,upload,rangegrayscale,rangecontrast,rangebrightness,rangeshadow,rangeopacity,rangesaturate,rangeblur)
// console.log(rangeblur,rangesepia,reset,download)
window.onload =function(){
    download.style.display ="none"
    reset.style.display ="none"
}

function resetValues(){
    ctx.filter = "none"
    rangeblur.value ="0"
    rangebrightness.value ="100"
    rangesepia.value ="0"
    grayscale.value ="0"
    hueRotate.value="0"
    rangecontrast.value="100"
    rangesaturate.value="100"
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
}
inp.onchange = function(){
    resetValues()
    download.style.display ="block"
    reset.style.display ="block"
    let file = new FileReader()
    file.onload = function(){
        img.src =file.result
      }
    file.readAsDataURL(inp.files[0])

   img.onload =function(){
    canvas.width =img.width
    canvas.height =img.height
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    img.style.display ="none"
   }
  
   

}

let filters =document.querySelectorAll("ul li input")

filters.forEach((filter)=>{
    filter.addEventListener("input" , function(){
    ctx.filter = `
        saturate(${rangesaturate.value}%)
        contrast(${rangecontrast.value}%)
        brightness(${rangebrightness.value}%)
        sepia(${rangesepia.value}%)
        grayscale(${rangegrayscale.value})
        blur(${rangeblur.value}px)
        hue-rotate(${hueRotate.value}deg)
        
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    })
})

reset.onclick =function(){
    resetValues()
}

download.onclick =function(){
    download.href = canvas.toDataURL()
}