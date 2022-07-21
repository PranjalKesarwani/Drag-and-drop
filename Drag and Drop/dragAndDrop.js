console.log('This is drag and drop learning tutorial');

let whiteBoxes = document.getElementsByClassName('whiteBox');
let imgBox = document.querySelector('.imgBox');

imgBox.addEventListener('dragstart', (e)=>{
    // console.log('Drag start has been triggered');
    e.target.className += ' hold';   //matlab jispe aaapne event lgaya hua hai uski class me aap hold add kr rhe ho(hai na..like yaha imgBox pr event hai and hm usi ke class me hold add krna chaah rhe hai)
    // console.log('The e is ',e);
    setTimeout(() => {
        
        e.target.className = 'hide';   //Yani ki imgBox jo className hai uska className 'hide' kr do taki wo css ki property ko apna sake
    }, 0);
    
    
});
imgBox.addEventListener('dragend', (e)=>{
    // console.log('Drag end has been triggered');
     //class me add ya remove krna hai toh classList use hoga and agar className set krna ho toh className use hoga
    e.target.className = 'imgBox'; //ye nahi hoga toh dragend hone pr img gayab ho jaega
});

for (let whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        // console.log('Drag over has been triggered');
        e.preventDefault(); //by default hme drop krne ki permission nahi hoti isliye usko rokne ke liye ye use kiye hai

    });

    whiteBox.addEventListener('dragenter', (e)=>{
        // console.log('Drag enter has been triggered');
        e.target.className += ' dashed';
    });

    whiteBox.addEventListener('dragleave', (e)=>{
        // console.log('Drag leave has been triggered');
        // e.target.classList.remove('dashed'); ye tareeka bhi sahi hai aur seedha className whiteBox set kr do ye bhi sahi hai
        e.target.className = 'whiteBox';

    });

    whiteBox.addEventListener('drop', (e)=>{
        // console.log('Drop has been triggered');
        e.target.append(imgBox);  //agr yaha append ki jagah className use kiye hote toh whiteBox ki hagah imgBox aa gya hota and whiteBox gayab ho jata jabki hmko whiteBox ke andar drop krna tha isliye append ka use kiya

    });
}